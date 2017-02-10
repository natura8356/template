Ext.define('template.view.filegrid.Source', {
    extend: 'Ext.panel.Panel',
    xtype: 'filegrid-source',
    requires: [
        'template.view.filegrid.Tag'
    ],
    viewModel: {
        type: 'default'
    },
    controller: {
        type: 'controller',
        saveAction: function () {
            var me = this,
                xhr = new XMLHttpRequest(),
                formData = new FormData(),
                grid = me.view.down('grid'),
                store = grid.getStore(),
                saveList = [], param = {},
                removeList = [];
            store.each(function (itm) {
                var data,
                    isAdd = itm.addFileList && itm.addFileList.length,  // 첨부 추가 유무
                    isRemoved = itm.removedFiles && itm.removedFiles.length;    // 첨부 삭제 유무
                if (itm.dirty || isAdd || isRemoved) {
                    data = itm.getData();
                    data.addFileList = [];
                    data.removedFileList = [];
                    if (isAdd) {
                        Ext.each(itm.addFileList, function (itm) {
                            formData.append(itm.id, itm);
                            data.addFileList.push(itm.id);
                        });
                    }
                    if (isRemoved) {
                        data.removedFileList = itm.removedFiles;
                    }
                    saveList.push(data);
                }
            });
            Ext.each(store.getRemovedRecords(), function (itm) {
                removeList.push(itm.getData());
            });
            Ext.apply(param, {
                updateRow: saveList,
                removeRow: removeList
            });
            param = Ext.encode(param);
            formData.append('json', param);
            xhr.open('POST', '/APPS/protocol/save.do');
            me.view.mask('저장중입니다.');
            xhr.addEventListener('loadend', function (e) {
                me.view.unmask();
                var target = e.target;
                if (target.status == 200) {
                    Ext.Msg.show({
                        title: 'Info',
                        icon: Ext.Msg.INFO,
                        buttons: Ext.Msg.OK,
                        message: '저장되었습니다',
                        fn: function () {
                            store.reload();
                        }
                    });
                } else {
                    Ext.Msg.show({
                        title: 'Error',
                        icon: Ext.Msg.ERROR,
                        buttons: Ext.Msg.OK,
                        message: '저장에 실패하였습니다.'
                    });
                }

            });
            xhr.send(formData);
        }
    },
    layout: 'fit',
    items: [
        {
            xtype: 'euigrid',
            columns: [
                {
                    text: '아이디',
                    dataIndex: 'id'
                },
                {
                    text: '파일종류',
                    dataIndex: 'type'
                },
                {
                    xtype: 'widgetcolumn',
                    flex: 1,
                    text: '파일들',
                    widget: {
                        xtype: 'fieldcontainer',
                        layout: 'hbox',
                        bind: {
                            value: '{record.files}'
                        },
                        items: [
                            {
                                xtype: 'filegrid-tag',
                                readOnly: true,
                                multiSelect: true,
                                flex: 1,
                                valueField: 'PTH_FILE_LOGI',
                                displayField: 'NM_FILE',

                                listeners: {
                                    clickitem: function (rec) {
                                        var formData = new FormData();
                                        if (rec.isModel && rec.get('ID_ATCH_FILE')) {
                                            formData.append('ID_FILE_DTIL', rec.get('ID_FILE_DTIL'));
                                            formData.append('ID_ATCH_FILE', rec.get('ID_ATCH_FILE'));
                                        }
                                        Util.fileClickApi(formData, rec.get('NM_FILE') /* fileName */, eui.Config.fileDownloadUrl);
                                    },
                                    removeitem: function (rec) {
                                        var me = this,
                                            widget = me.up(),
                                            rowRec = widget.getWidgetRecord();
                                        // 로컬파일의 경우 삭제 tag에서 삭제 및 upload목록에서 삭제
                                        if (!rec.get('ID_ATCH_FILE')) {
                                            Ext.each(rowRec.addFileList, function (itm, idx, list) {
                                                if (itm.id == rec.get('PTH_FILE_LOGI')) {
                                                    Ext.Array.remove(list, itm);
                                                }
                                            });
                                            return;
                                        }
                                        rowRec.removedFiles = rowRec.removedFiles || [];
                                        rowRec.removedFiles.push(rec.getData());
                                    }
                                }
                            },
                            {
                                xtype: 'filebutton',
                                text: '파일 찾기',
                                margin: '0 0 0 10',
                                listeners: {
                                    change: function (btn, e) {
                                        var widget = this.up('fieldcontainer'),
                                            rec = widget.getWidgetRecord(),
                                            tag = widget.down('tagfield'),
                                            fileList = [], f, vList = [], id,
                                            files = e.target.files, idx = 0;
                                        tag.store.each(function (itm) {
                                            // local 파일의 경우 스토어에서 삭제
                                            if (!itm.get('ID_FILE_DTIL')) {
                                                itm.store.remove(itm);
                                                tag.setValue(Ext.Array.remove(tag.getValue(), itm.get(tag.valueField)));
                                            }
                                        });
                                        for (; idx < files.length; idx++) {
                                            // 첨부하는 파일에 임의의 아이디 부여
                                            id = Ext.id();
                                            f = files[idx];
                                            f.id = id;
                                            fileList.push(f);

                                            tag.store.add({
                                                // tagfield displayField
                                                NM_FILE: f.name,
                                                // tagfield valueField (unique)
                                                PTH_FILE_LOGI: id
                                            });
                                            vList.push(id);
                                        }
                                        tag.doSetValue(vList, true);
                                        rec.addFileList = fileList;
                                    },
                                    afterrender: function () {
                                        var me = this,
                                            dom = me.fileInputEl.dom;
                                        if (dom) {
                                            dom.multiple = true;
                                        }
                                    }
                                }
                            }
                        ],
                        setValue: function (v) {
                            var tag = this.down('tagfield'),
                                list = [],
                                v = Ext.isArray(v) ? v : [v];
                            tag.store.removeAll();
                            Ext.each(v, function (itm) {
                                if (!tag.findRecordByValue(itm[tag.valueField])) {
                                    tag.store.add(itm);
                                }
                                list.push(itm[tag.valueField]);
                            });
                            tag.setValue(list);
                        }
                    }
                }
            ],
            store: {
                autoLoad: true,
                fields: [],
                proxy: {
                    type: 'ajax',
                    url: "/APPS/protocol/get.do",
                    reader: {
                        type: 'json',
                        rootProperty: 'data'
                    }
                }
            },
            buttons: [
                {
                    text: '저장',
                    handler: 'saveAction'
                }
            ]
        }
    ]
});
