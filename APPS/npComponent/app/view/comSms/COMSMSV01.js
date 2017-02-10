Ext.define('npComponent.view.comSms.COMSMSV01', {
    extend: 'eui.form.Panel',
    xtype: 'COMSMSV01',
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
            labelStyle: 'font-weight:bold; font-size:20px; margin:20px;',
            emptyText: '이름  예)홍길동',
            maxLength: 40,
            subscribe : '최대 20자까지 입력',
//            anchor: '-5',
            width: 1000,
            height: 30,
            bind: '{RECORD.SEND_PRSN_SMS}'
        },{
        	xtype:'label',
        	text:'최대 20자까지 입력'
        }, {
        	margin:'10 0 20 0',
            xtype: 'textfield',
            maskRe: /[0-9.]/,
            maxLength: 11,
            emptyText: '유/무선번호  예)02012345678',
//            anchor: '-5',
            width: 1000,
            height: 30,
            bind: '{RECORD.SEND_NUM}'
        },{
        	xtype:'label',
        	text:'\'-\'하이픈 없이 입력'
        	
        },{
        	margin:'30 0 30 0',
        	width: 1000,
    	    tag : 'hr'
        }, {
        	margin:'20 0 20 0',
            xtype:'textfield',
            maskRe: /[0-9.]/,
            maxLength: 11,
            fieldLabel: '받는사람',
            labelStyle: 'font-weight:bold; font-size:20px;',
            emptyText: '유/무선번호  예)02012345678',
            width: 1000,
            height: 30,
            bind: '{RECORD.RECIEVE_NUM}'
        },{
        	xtype:'label',
        	text:'\'-\'하이픈 없이 입력'
        }]
	}]
});