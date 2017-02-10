Ext.define('npComponent.view.comEmail.COMEMAILV01', {
    extend: 'eui.form.Panel',
    xtype: 'COMEMAILV01',
    requires: [
    ],
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1
//        layout: 'anchor'
    },
    bodyPadding : 20,
    layout: 'vbox',
    items: [{
        items: [{
        	margin:'20 0 20 0',
            xtype: 'textfield',
            fieldLabel: '보내는 사람',
            labelStyle: 'font-weight:bold; font-size:20px; ',
            emptyText: '이름  예)홍길동',
            maxLength: 40,
            subscribe : '최대 20자까지 입력',
//            anchor: '-5',
            width: 1000,
            height: 30,
            bind: '{RECORD.EMAIL_SEND_PRSN}'
        },{
        	xtype:'label',
        	text:'최대 20자까지 입력'
        }, {
        	margin:'10 0 20 0',
            xtype: 'textfield',
            vtype: 'email',
            emptyText: '이메일	예)wonderfuldaelim@daelim.co.kr',
//            anchor: '-5',
            width: 1000,
            height: 30,
            bind: '{RECORD.SEND_EMAIL}'
        },/*{
        	xtype:'label',
        	text:'\'-\'하이픈 없이 입력'
        	
        },*/{
        	margin:'30 0 30 0',
        	width: 1000,
    	    tag : 'hr'
        }, {
        	margin:'20 0 20 0',
            xtype:'textfield',
            vtype : 'email',
            fieldLabel: '받는사람',
            labelStyle: 'font-weight:bold; font-size:20px;',
            emptyText: '이메일	예)wonderfuldaelim@daelim.co.kr',
//            anchor: '-5',
            width: 1000,
            height: 30,
            bind: '{RECORD.RECIEVE_EMAIL}'
            	
        }/*,{
        	xtype:'label',
        	text:'\'-\'하이픈 없이 입력'
        }*/]
	}]
});