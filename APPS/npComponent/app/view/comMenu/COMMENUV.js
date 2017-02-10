Ext.define('npComponent.view.comMenu.COMMENUV',{
    extend: 'eui.container.BaseContainer',
    xtype: 'comMenu',
    title: '메뉴등록관리',
    requires: [
        'npComponent.view.comMenu.COMMENUC',
        'npComponent.view.comMenu.COMMENUM',
        'npComponent.view.comMenu.COMMENUV01',
        'npComponent.view.comMenu.COMMENUV02'
    ],
    controller: 'COMMENUC',
    viewModel: 'COMMENUM',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items : [
         {
             xtype: 'euiheader',
             title: '메뉴등록관리'
         },
         {
             xtype: 'COMMENUV01'
         },
         {
         	  reference: 'tree',
              xtype: 'COMMENUV02',
              bind: {
                  store: '{STORE01}'
              }
         }
     ]

});


