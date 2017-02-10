Ext.define('npComponent.view.main.LeftMenu', {
    alias: 'widget.leftmenu_np',
    extend: 'Ext.tree.Panel',
    rootVisible: false,
    useArrows: true,
    margin: 10,
    store: {
    	type: 'tree',
    	fields: [
           
        ],
        proxy: {
            type: 'ajax',
            //the store will get the content from the .json file
            url: '/main.do',
            reader: {
            	rootProperty : function(node) {
                    return node.data || node.children;
                }
            }
        },
        folderSort: true
    },
    plugins: {
        ptype: 'cellediting',   // 셀에디터를 추가.
        clicksToEdit: 2         // 더블클릭을 통해 에디터로 변환됨.
    },
    // 컬럼 정보 정의.
    columns: [
         { xtype: 'treecolumn', width : 230,  dataIndex: 'text' }
    ],
    initComponent: function () {
        this.callParent();
    },
    listeners: {
        itemclick: function (self, record, item, index, event) {
           // if (record.get('leaf') === true) {
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
          //  }
        }
    }
});
