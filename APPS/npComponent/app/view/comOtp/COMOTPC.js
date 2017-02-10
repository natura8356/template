Ext.define('npComponent.view.comOtp.COMOTPC', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.COMOTPC',
    
    initViewModel: function (viewmodel) {
    },
    
    dataSearch: function (button) {      //토큰 생성
    	 var me = this;
         Util.CommonAjax({
             method: 'POST',
             url: '/APPS/npComponent/comOtp.do',
             params:  {
             },
             pCallback: function (v, params, result) {
                 if (result.success) {
                     me.getViewModel().set('RECORD', new Ext.data.Model(
                         result.data[0]
                     ));
                     Ext.Msg.alert('성공', result.message);
                 } else {
                     Ext.Msg.alert('실패', result.message);
                 }
             }
         });
    },
    
    sendOtp : function(button){  //토큰확인
    	 var reOtpStr = this.lookupReference('reOtpStr').getValue();
    	 
    	 if(reOtpStr == '' || reOtpStr == null){
    		 Ext.Msg.alert('보안토큰', '인증번호를 입력하세요.');
    		 return;
    	 }
    	 
         Util.CommonAjax({
              method: 'POST',
              url: '/APPS/npComponent/reotp.do',
              params:  {
            	  data : reOtpStr
              },
              pCallback: function (v, params, result) {
                  if (result.success) {
                      Ext.Msg.alert('성공', result.message);
                  } else {
                      Ext.Msg.alert('실패', result.message);
                  }
              }
         });
    }
});
