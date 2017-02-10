Ext.define('npComponent.view.comEncDec.COMENCDECC', {
    extend: 'eui.mvvm.ViewController',
    
    alias: 'controller.COMENCDECC',
    
    initViewModel: function (viewmodel) {
    },
    
    dataEnc : function (button) {
    	var me = this;
    	var keyvalue = this.lookupReference('keyvalue').getValue();
    	var encmthd = this.lookupReference('encmthd').getValue();
    	var encform = this.lookupReference('encform').getValue();
		
    	Util.CommonAjax({
			method: 'POST',
		    url: '/APPS/npComponent/comEnc.do',
		    params: {
		        data: [{
		        	KEY : keyvalue,
					ENCMTHD : encmthd,
					ENCTEXT : encform
		        }]
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
    
    dataDec : function (button) {
    	var me = this;
    	var keyvalue = this.lookupReference('keyvalue').getValue();
    	var encmthd = this.lookupReference('encmthd').getValue();
    	var decform = this.lookupReference('decform').getValue();
		
    	Util.CommonAjax({
			method: 'POST',
		    url: '/APPS/npComponent/comDec.do',
		    params: {
		        data: [{
		        	KEY : keyvalue,
					ENCMTHD : encmthd,
					DECTEXT : decform
		        }]
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
    }
});

