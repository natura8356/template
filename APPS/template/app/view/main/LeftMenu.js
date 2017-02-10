Ext.define('template.view.main.LeftMenu', {
    alias: 'widget.leftmenu',
    extend: 'Ext.tree.Panel',
    rootVisible: false,
    root: {
        expanded: true,
        children: [
            {
                text: "템플릿",
                expanded: true,
                children: [
                    {text: 'TMP001', leaf: true, pgmClass: 'template.view.tmp001.TMP001V', pgmAlias: 'TMP001V'},
                    {
                        text: '페이징,틀고정 그리드&폼 CRUD(TMP002)',
                        leaf: true,
                        pgmClass: 'template.view.tmp002.TMP002V',
                        pgmAlias: 'TMP002V'
                    },
                    {text: 'TMP003', leaf: true, pgmClass: 'template.view.tmp003.TMP003V', pgmAlias: 'TMP003V'},
                    {text: 'TMP004', leaf: true, pgmClass: 'template.view.tmp004.TMP004V', pgmAlias: 'TMP004V'},
                    {text: 'TMP005', leaf: true, pgmClass: 'template.view.tmp005.TMP005V', pgmAlias: 'TMP005V'},
                    {text: 'TMP006', leaf: true, pgmClass: 'template.view.tmp006.TMP006V', pgmAlias: 'TMP006V'},
                    {text: 'TMP007', leaf: true, pgmClass: 'template.view.tmp007.TMP007V', pgmAlias: 'TMP007V'},
                    {text: 'TMP008', leaf: true, pgmClass: 'template.view.tmp008.TMP008V', pgmAlias: 'TMP008V'},
                    {text: '폼필드', leaf: true, pgmClass: 'template.view.form.Panel', pgmAlias: 'sample-form'},

                    {
                        text: 'TmpFrameV',
                        leaf: true,
                        pgmClass: 'template.view.tmpfrmae.TmpFrameV',
                        pgmAlias: 'TmpFrameV'
                    },
                    {text: '팝업(TMP010V)', leaf: true, pgmClass: 'template.view.tmp010.TMP010V', pgmAlias: 'TMP010V'},
                    {
                        text: '소계,합계 그리드(TMP011V)',
                        leaf: true,
                        pgmClass: 'template.view.template.tmp011.TMP011V',
                        pgmAlias: 'TMP011V'
                    },
                    {
                        text: '무한스크롤 그리드',
                        leaf: true,
                        pgmClass: 'template.view.template.tmp012.TMP012V',
                        pgmAlias: 'TMP012V'
                    },
                    {
                        text: '멀티 그리드 엑셀 다운로드',
                        leaf: true,
                        pgmClass: 'template.view.template.tmp013.TMP013V',
                        pgmAlias: 'TMP013V'
                    },
                    {
                        text: 'Calendar',
                        leaf: true,
                        pgmClass: 'template.view.calendar.Calendar',
                        pgmAlias: 'calendar-calendar'
                    },
                    {
                        text: 'Protocol',
                        children: [
                            {
                                text: 'fileForm',
                                leaf: true,
                                pgmClass: 'template.view.protocol.FileForm'
                            },
                            {
                                text: 'fileGrid',
                                leaf: true,
                                pgmClass: 'template.view.filegrid.FileGrid'
                            }
                        ]
                    },
                    {
                        text: 'Iframe',
                        leaf: true,
                        pgmClass: 'template.view.iframe.Iframe',
                        pgmAlias: 'iframe-iframe'
                    },
                    {
                        text: 'excelReader',
                        leaf: true,
                        pgmClass: 'template.view.excel.Excel',
                        pgmAlias: 'excel-excel'
                    },
                    {
                        text: 'tabpanel',
                        leaf: true,
                        pgmClass: 'template.view.tabpanel.TabPanel',
                        pgmAlias: 'tabpanel-tabpanel'
                    },
                    {
                        text: 'Style',
                        leaf: true,
                        pgmClass: 'template.view.style.Style'
                    }
                ]
            }
        ]
    },
    initComponent: function () {
        this.callParent();
    },
    listeners: {
        itemclick: function (self, record, item, index, event) {
            if (record.get('leaf') === true) {
                var mainTabObj = Ext.ComponentQuery.query('#maintab');


                // var centerpanel = this.AccountMain().down('maintab');
                var pgm = {
                    pgmClass: 'Ext.panel.Panel',
                    pgmAlias: 'panel'
                };
                if (record.get('pgmClass')) {
                    pgm = {
                        pgmClass: record.get('pgmClass'),
                        pgmAlias: record.get('pgmAlias')
                    }
                }
//                Ext.suspendLayouts();
                var tab = mainTabObj[0].down('[itemId=' + pgm.pgmClass + ']');
                if (!tab) {
                    Ext.require(pgm.pgmClass, function () {
                        var className = Ext.ClassManager.getNameByAlias('widget.' + pgm.pgmAlias);
                        var ViewClass = Ext.ClassManager.get(pgm.pgmClass);
                        tab = new ViewClass();
                        if (Ext.isEmpty(record.get('pgmClass'))) {
                            tab.add({
                                closeable: true,
                                xtype: 'TemplateA'
                            });
                        }

                        tab.title = record.get('text');
                        tab.itemId = pgm.pgmClass;
                        tab.closable = true;
                        mainTabObj[0].add(tab);
                        mainTabObj[0].setActiveTab(tab);
                    });
                }
                mainTabObj[0].setActiveTab(tab);

//                Ext.resumeLayouts(true);
            }
        }
    }
});
