/*
*  TabPanel에서 tab이 활성화될 때마다 우측하단에서 활성화된 menu에 대해서 이벤트가 발생
* */
Ext.define('template.view.tabpanel.Source',{
    extend: 'Ext.panel.Panel',
    xtype: 'tabpanel-source',
    layout: 'fit',
    controller: {
        type: 'controller',
        control: {
            // tabpanel에서 직계 자식 component
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