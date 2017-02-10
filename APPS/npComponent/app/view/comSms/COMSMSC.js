Ext.define('npComponent.view.comSms.COMSMSC', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.COMSMSC',

    initViewModel: function (vm) {
    	 vm.set('RECORD', new Ext.data.Model());
    	 
//    	 this.lookupReference('searchCD').setValue ("ADMIN");
    },
    

    // 저장 로직.
    onSave: function (button) {
//    	debugger;
//        var data = this.vm.get('RECORD').getData()
        var data = this.vm.get('RECORD')

        Ext.Msg.show({
            title: '확인',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            message: 'sms를 전송 하시겠습니까?',
            fn: function (btn) {
                if (btn === 'yes') {
                    Util.CommonAjax({
                        method: 'POST',
                        url: '/APPS/npComponent/comSmsSV.do',
                        params:  data,
                        pCallback: function (v, params, result) {
                            if (result.success) {
                                Ext.Msg.alert('저장성공', result.message);
                            } else {
                                Ext.Msg.alert('저장실패', result.message);
                            }
                        }
                    });
                }
            }
        });
    }/*,
    
    //////
    onRowSave: function (grid) {
        // validation check
        if (!form.store.recordsValidationCheck()) {
            return;
        }

        Ext.Msg.show({
            title: '확인',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            message: '저장하시겠습니까?',
            fn: function (btn) {
                if (btn === 'yes') {
                    Util.CommonAjax({
                        method: 'POST',
                        url: '/APPS/npComponent/comSmsSV.do',
                        params: Util.getDatasetParam(form.store),
                        pCallback: function (v, params, result) {
                            if (result.success) {
                                Ext.Msg.alert('저장성공', result.message);
                                form.store.reload();
                            } else {
                                Ext.Msg.alert('저장실패', result.message);
                            }
                        }
                    });
                }
            }
        });
    }*/
   
  
});