Ext.define('template.view.common.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'Ext.form.Panel'
    ],
    defaultListenerScope: true,
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'useprsn_id',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'pwd',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Enter any non-blank password'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    },

    onLoginClick: function () {
        var form = this.down('form').getForm(),
            value = form.getValues();
        var me = this;
        Util.CommonAjax({
            url: '/APPS/template/loginCheck.do',
            params:  value,
            pCallback: function (v, params, result) {
                if (result.success) {
                } else {
                }
            }
        });
    }
});