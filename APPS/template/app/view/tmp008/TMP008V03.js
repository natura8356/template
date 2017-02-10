Ext.define('template.view.tmp008.TMP008V03', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP008V03',
    title: '보증정보',

    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            width: 60,
            align: 'center',
            text: '현장코드',
            dataIndex: 'field1',
            renderer: function (val, meta, rec, rowIdx) {
                var id = this.ownerGrid.id,
                    tempStr = "<a href=\"#\" onclick=\"javascript:Ext.getCmp('" + id + "').fireEvent('linkclick'," + rec.get('field1') + ");\"><span style='color:#0000FF'><u>Delete</u></span></a>";
                return tempStr;
            }
        },
        {
            flex: 1,
            text: '현장명',
            dataIndex: 'field2'
        },
        {
            text: '증권조회',
            align: 'center',
            width: 60,
            dataIndex: 'field2',
            renderer: function (v, m, r) {
                var id = Ext.id(),
                    me = this,
                    text = '등록';
                if (r.get('fileuse') == 'Y') {
                    text = '보기';
                    Ext.defer(function () {
                        Ext.widget('button', {
                            renderTo: id,
                            text: text,
                            width: 50,
                            handler: function () {
                                me.fireEvent('filebuttonclick', r)
                            }
                        });
                    }, 50);
                    return Ext.String.format('<div id="{0}"></div>', id);
                }else{
                    return text;
                }


            }
        }
    ],

    listeners: {
        filebuttonclick: 'onButtonClick',
        linkclick: 'onLinkClick'
    }

});