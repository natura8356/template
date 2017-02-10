Ext.define('npComponent.view.comUser.COMUSERV01',{
	extend: 'Ext.container.Container',
    requires: ['npComponent.view.comUser.COMBOBOX'],
    xtype: 'COMUSERV01',
    layout: 'hbox',
    height: 50,
    margin: 10,
    defaults: {
        margin: '27 5 0 0'
    },
    items: [
        {
            xtype: 'container',
            margin: 0,
            layout: 'vbox',
            flex: 1,
            items: [
                {
                    width: 150,
                    hideHeaderICon: false,
                    xtype: 'euipanel',
                    title: '사용자등록관리'
                },
                {
                    margin: '5 0 5 5',
                    xtype: 'component',
                    html : '사용자/권한관리 > 사용자등록관리'
                }
            ]
        },

        {
            bind: '{STORE01}',
            xtype: 'euicommand',
            showRegBtn: false,   
            showModBtn: false,
            params: {
            	mnu_id: 'comUser'
            },
            listeners: {
            	rowaddbtnclick: 'onRowAdd',
                regbtnclick: 'onRowReg',
                rowdeletebtnclick: 'onRowDelete',
                modbtnclick: 'onRowMod',
                savebtnclick: 'onRowSave'
            }
        }

    ]
});



