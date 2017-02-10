Ext.define('npComponent.view.common.login.LoginMain', {
    extend: 'Ext.window.Window',
    xtype: 'loginMain',
    defaultListenerScope: true,
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'useprsn_id',
                value: 'admin',
                fieldLabel: 'Username',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                name: 'pwd',
                value: '1',
                inputType: 'password',
                fieldLabel: 'Password',
                allowBlank: false
            },
            {
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Enter any non-blank password'
            }
        ],
        buttons: [
            {
                text: 'Login',
                formBind: true,
                listeners: {
                    click: 'onLoginClick'
                }
            }
        ]
    },
    listeners: {
       /* afterrender: {
            delay: 1000,
            fn: function () {
                var form = this.down('form').getForm(),
                    value = form.getValues();
                var me = this;
                if (form.isValid()) {
                    Util.loginRun(value);
                }
            }
        }*/
    },
    onLoginClick: function () {
        var form = this.down('form').getForm(),
            value = form.getValues();
        var me = this;
        Util.loginRun(value);
    }
});