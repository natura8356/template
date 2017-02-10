Ext.define('Override.eui.Util', {
	override : 'eui.Util',
	sessionRecord : null,
	appName : null,
	getSessionRecord : function() {
		return this.sessionRecord;
	},

	setSessionRecord : function(data) {
		this.sessionRecord = Ext.create('Ext.data.Model', data)
	},

	globalCheckLogin : function(appName) {
		this.appName = appName;
		var cfg = {
			url : "resources/data/getInit.json",
			params : {},
			pSync : false,
			pCallback : function(pScope, params, retData) {
				if (retData.sussces) {
					Ext.create('template.view.main.Main', {
						plugins : 'viewport'
					});
				} else {
					Util.globalLoginForm();
				}
			}
		};

		Util.CommonAjax(cfg);
	},

	globalLoginForm : function() {
		Ext.create('npComponent.view.common.login.LoginMain');
	},

	loginRun : function(value) {
		var appName = this.appName, mainClass = appName + '.view.main.Main';

		Util.CommonAjax({
			url : '/APPS/template/loginCheck.do',
			params : value,
			pCallback : function(v, params, result) {
				if (result.success) {
					Util.setSessionRecord(result.data);

					Ext.ComponentQuery.query('loginMain')[0].destroy();
					Ext.create(mainClass, {
						plugins : 'viewport'
					});

				} else {
					Ext.Msg.show({
						title : 'Error!',
						msg : result.message,
						icon : Ext.Msg.ERROR,
						buttons : Ext.Msg.OK
					});
				}
			}
		});
	}
});