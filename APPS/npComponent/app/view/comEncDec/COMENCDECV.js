Ext.define('npComponent.view.comEncDec.COMENCDECV', {
    extend: 'eui.container.BaseContainer',
    xtype: 'COMENCDECV',
    title: '암복호화',
    requires: [
        'npComponent.view.comEncDec.COMENCDECC',
        'npComponent.view.comEncDec.COMENCDECM',
        'npComponent.view.comEncDec.COMENCDECV01',
        'npComponent.view.comEncDec.COMENCDECV02'
    ],
    controller: 'COMENCDECC',
    viewModel: 'COMENCDECM',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
        	xtype: 'COMENCDECV01'
        },
        {
        	xtype: 'COMENCDECV02'
        }

    ]

});