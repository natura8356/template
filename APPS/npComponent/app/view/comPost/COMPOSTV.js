Ext.define('npComponent.view.comPost.COMPOSTV', {
    extend: 'eui.container.BaseContainer',
    xtype: 'COMPOSTV',
    title: '주소등록관리',
    requires: [
        'npComponent.view.comPost.COMPOSTC',
        'npComponent.view.comPost.COMPOSTM',
        'npComponent.view.comPost.COMPOSTV01',
        'npComponent.view.comPost.COMPOSTV02',
        'npComponent.view.comPost.COMPOSTV03',
        'npComponent.view.comPost.COMPOSTV04'
    ],
    controller: 'COMPOSTC',
    viewModel: 'COMPOSTM',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
      /*  {
            xtype: 'COMPOSTV01'
        },*/
        {
            reference: 'cusGrid',
            xtype: 'COMPOSTV02',
            bind: '{STORE01}'
        }/*,
        {
            reference: 'cusGrid',
            xtype: 'COMPOSTV04',
            bind: '{STORE02}'
        }*/
    ]

});