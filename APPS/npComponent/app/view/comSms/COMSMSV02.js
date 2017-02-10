Ext.define('npComponent.view.comSms.COMSMSV02', {
    extend: 'eui.form.Panel',
    xtype: 'COMSMSV02',
    requires: [
    ],

    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },

    defaults: {
        border: false
    },
    bodyPadding : 20,
    layout:{
        type:'vbox',
        align:'center'
    },
    bodyStyle: 'background: #D5D5D5;',
    items:[
    {
    	bodyStyle: 'background: #D5D5D5;',
        items: [{ 
        	margin:'20 0 20 0',
            xtype:'textfield',
            fieldLabel: '',
            maxLength: 80,
            emptyText: '제목을 입력하세요',
            bind: '{RECORD.SMS_TITLE}',
//            anchor: '-5',
            width: 1000,
            height: 30
        },{
        	xtype:'label',
        	text:'최대 40자까지 입력'
        },{
        	margin:'20 0 20 0',
            xtype:'textareafield',
            maskRe: /[0-9.]/,
            maxLength: 80,
            width: 1000,
            height: 300,
            grow: true,
            emptyText: ' \r\n'+
            			' 내용을 입력하세요 \r\n'+
            			' \r\n'+
            			' 글자수(발신인 정보+본문)가 80byte 초과시 자동으로 MMS로 변환되며, \r\n'+ 
            			' MMS 발송 시 통신사에 따라 최대 1분까지 전송이 지연 될 수 있습니다. \r\n',
//            anchor: '-5',
            bind: '{RECORD.SMS_CONTENT}'
        },{
        	margin : '20 0 0 0',
        	xtype:'button',
        	text :'SEND',
        	
        	style : {
    	        'color' : 'white',
    	        'font-size' : '20px',
    	        'font-weight' : 'bold',
    	        'background' : '#18BE92'
    	    },
//    	    iconCls:'button_custom1',
//        	cls : 'button_custom1',  // 설정은 어디서???
//        	style:'background: #18BE92; font-weight:bold; font-size:20px; color:white;',
//        	iconAlign:'center',
        	width: 150,
        	height: 40,
        	handler:'onSave'
        }]
    }]
});

