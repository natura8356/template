
Ext.define('template.view.protocol.Source',{
    extend: 'Ext.panel.Panel',
    xtype: 'protocol-source',
    requires: [
        'eui.form.Panel'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    viewModel: {
        type: 'default'
    },
    controller: {
        type: 'controller',
        initViewModel: function (vm) {
            vm.set('RECORD', Ext.create('Ext.data.Model', {
                "BIGTEXT": "<p>111</p>",
                "FILEPARAM": {
                    ID_FILE_DTIL: '00000001'
                }
            }));
        },
        onSaveMember: function () {
            var me = this,
                vm = this.getViewModel(),
                rec = vm.get('RECORD'),
                xhr = new XMLHttpRequest(),
                formData = new FormData(),
                param = rec.getData(),
                fileQueue = this.view.down('filefieldcontainer1 uploadpanel').queue,
                fileGrid = this.view.down('filefieldcontainer1 filegrid'),
                removedRecs = fileGrid.getStore().getRemovedRecords();
            param.removed = [];
            Ext.each(removedRecs, function (itm) {
               param.removed.push(itm.getData());
            });
            // obj -> json str
            param = Ext.encode(param);
            // param sample
            // {
            //     "BIGTEXT": "<p>111</p>",
            //     "FILEPARAM": {
            //     "ID_FILE_DTIL": "00000001"
            // },
            //     "id": 49,
            //     "removed": [
            //     {
            //         "CNTS_FILE_DTIL": "",
            //         "PTH_FILE_PHYS": "C:\\workspace3\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\np\\/upload//chrome_100_percent.pak",
            //         "DT_REV": "2017-01-21",
            //         "DT_RGST": "2017-01-21",
            //         "ID_RGST_PRSN": "admin",
            //         "SIZE_FILE": 497019,
            //         "TY_FILE": "pak",
            //         "ID_FILE_DTIL": 1,
            //         "ID_REV_PRSN": "admin",
            //         "ID_ATCH_FILE": 1,
            //         "PTH_FILE_LOGI": "C:\\workspace3\\.metadata\\.plugins\\org.eclipse.wst.server.core\\tmp0\\wtpwebapps\\np\\/upload//chrome_100_percent.pak",
            //         "NM_FILE": "chrome_100_percent.pak",
            //         "id": "extModel71-1",
            //         "__rowStatus": "I"
            //     }
            // ]
            // }

            Ext.each(fileQueue.items, function (itm, idx) {
                if (itm.config && itm.config.fileApiObject) {
                    // 파일 항목을 하나하나 formData에 append
                    // ex) file0: a.txt,
                    //     file1: b.text
                    formData.append('file'+idx, itm.config.fileApiObject);
                }
            });
            formData.append('json', param);
            xhr.open('POST', '/APPS/protocol/fileForm.do');
            xhr.onload = function (e) {
                var str = e.target && e.target.responseText,
                    ret;
                try {
                    ret = Ext.decode(str);
                    if (ret.success) {
                        Ext.Msg.show({
                            title: 'Info',
                            icon: Ext.Msg.INFO,
                            msg: '변경사항이 저장되었습니다.',
                            buttons: Ext.Msg.OKCANCEL,
                            fn: function (btn) {
                                fileQueue.clearItems();
                                fileGrid.getStore().reload();
                                fileGrid.up('tabpanel').setActiveItem(0);
                            }
                        });
                    } else {
                        Ext.Msg.show({
                            title: 'Info',
                            icon: Ext.Msg.INFO,
                            msg: '저장하지 못했습니다',
                            buttons: Ext.Msg.OK
                        });
                    }
                } catch (e) {}
            };
            xhr.send(formData);
        }
    },
    bodyPadding: 5,
    scrollable: 'y',
    items: [
        {
            xtype: 'euiform',
            title: 'EUI 폼',
            tableColumns: 2,
            defaults: {
                allowBlank: true
            },

            items: [
                {
                    colspan: 2,
                    fieldLabel : '파일업로드',
                    xtype: 'euifieldcontainer',
                    items: [
                        {
                            xtype: 'button',
                            width: 150,
                            text: '파일업로드',
                            handler: function () {
                                Util.callFileManager({
                                    ID_FILE_DTIL: '00000001'
                                })
                            }
                        },
                        {
                            xtype: 'button',
                            width: 150,
                            text: '파일업로드(CSV)',
                            handler: function () {
                                var uploader = Util.callExcelUploader({
                                    url : 'resources/data/success.json',
                                    params: {
                                        gubun: '111'
                                    }
                                });
                                uploader.on('complete', function (upd, data) {
                                    upd.close();
                                    console.log(data);
                                });
                                uploader.on('fail', function (upd, data) {

                                })
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'panel',
            layout: 'fit',
            bodyStyle: {
                background: '#f1f6ff',
                'border-top': '0px',
                'border-bottom': '0px'
            },
            bodyCls: 'fo-table-row-td',
            items: [
                {
                    xtype: 'filefieldcontainer1',
                    fieldLabel: '파일업로드 폼',
                    bind: '{RECORD.FILEPARAM}'
                }
            ]
        },
        {
            xtype: 'euiform',
            tableColumns: 2,
            defaults: {
                allowBlank: true
            },
            items: [
                {
                    colspan: 2,
                    bind:  '{RECORD.BIGTEXT}',
                    fieldLabel: 'tinymcetextarea',
                    xtype: 'tinymcetextarea'
                }
            ],
            buttons: [
                {
                    text: '저장',
                    handler: 'onSaveMember'
                }
            ]
        }
    ]
});
