Ext.define('template.view.tmpfrmae.TmpFrameV', {
    extend: 'eui.container.BaseContainer',
    xtype: 'TmpFrameV',
    title: 'PROCESS',
    requires: [
        'template.view.process.step01.STEP01V',
        'template.view.process.step04.STEP04V',
        'template.view.process.step05.STEP05V'
    ],
    controller: 'TmpFrameC',
    viewModel: 'TmpFrameM',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'euitabpanel',
            flex: 1,
            buttons: [
                {
                    xtype: 'button',    // #3
                    text: '이전',
                    handler: function (btn) {   // #4
                        var layout = btn.up('euitabpanel').getLayout();   // #5

                        if (layout.getPrev()) {     // #6
                            layout.prev();          // #7
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: '다음',
                    handler: function (btn) {
                        var layout = btn.up('panel').getLayout();

                        if (layout.getNext()) { // #9
                            layout.next();      // #10
                        }
                    }
                }
            ],
            margin: 10,
            items: [
                {
                    xtype: 'STEP01V',
                    title: '기본정보'
                },
                {
                    xtype: 'STEP04V',
                    title: '평형관리'
                },
                {
                    xtype: 'STEP05V',
                    title: '관련업체등록'
                }
            ]
        }
    ]

});