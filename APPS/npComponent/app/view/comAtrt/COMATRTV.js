Ext.define('npComponent.view.comAtrt.COMATRTV',{
    extend: 'eui.container.BaseContainer',
    xtype: 'COMATRT',
    title: '그룹별사용권한관리',
    requires: [
        'npComponent.view.comAtrt.COMATRTM',
        'npComponent.view.comAtrt.COMATRTC',
        'npComponent.view.comAtrt.COMATRTV01',
        'npComponent.view.comAtrt.COMATRTV02'
    ],
    controller: 'COMATRTC',
    viewModel: 'COMATRTM',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items : [
        {
            xtype: 'euiheader',
            title: '그룹별사용권한관리'
        },
        {
            xtype: 'COMATRTV01'
        },
        {
        	 reference: 'atrtGrid',
             xtype: 'COMATRTV02',
             bind: {
                 store: '{STORE01}'
             }
        }
    ]

});


