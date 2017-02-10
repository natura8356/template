/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'npComponent',

    extend: 'npComponent.Application',

    requires: [
        'npComponent.view.main.Main',
        'npComponent.view.common.SessionChecker' //세션시간
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
//    mainView: 'npComponent.view.main.Main'
    init: function () {
        eui.Config.initLocaleMessage();
        Util.globalCheckLogin('npComponent');
    },
   /* mainView: 'npComponent.view.common.login.LoginMain'*/
    //-------------------------------------------------------------------------
    // Most customizations should be made to npComponent.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------

	
	//세션시간 조절
	launch : function() { 
		//세션 종료시간 설정 
		SessionChecker.init(2); 
	
		//Ajax Request가 완료될때의 이벤트를 리스닝 
		Ext.Ajax.on('requestcomplete', function (conn, response, options) { 
		    console.log('requestcomplate 이벤트 감지 SessionChecker 시작'); 
		    //Request URL을 파라미터로 넘김 
		        SessionChecker.start(options.url); 
		}); 
	
	//	Ext.Ajax.request({ 
	//	        url : 'remain.html', 
	//	        success : Ext.emptyFn, 
	//	        failure : Ext.emptyFn 
	//	}); 
	} 

});
