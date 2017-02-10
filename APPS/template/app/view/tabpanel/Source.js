
Ext.define('template.view.tabpanel.Source',{
    extend: 'Ext.panel.Panel',
    xtype: 'tabpanel-source',
    layout: 'fit',
    controller: {
        type: 'controller',
        control: {
            'tabpanel > *': {
                activate: function (panel) {
                    Util.CommonAjax({
                        url: 'resources/data/success.json',
                        pCallback: function ()  {
                            Ext.toast({
                                title: 'Activate',
                                html: panel.xtype,
                                closable: true,
                                align: 'br'     //우측 하단 toast
                            });
                        }
                    });
                }
            }
        }
    },
    items: [
        {
            xtype: 'tabpanel',
            items: [
                {
                    xtype: "TMP002V"
                },
                {
                    xtype: 'TMP003V'
                }
            ]
        }
    ]
});
