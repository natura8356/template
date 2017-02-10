/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'template',
    requires: [
       'eui.Config',
       'template.view.main.Main'
    ],
    extend: 'template.Application',
    requires: [
               'eui.Config',
        'template.*',
        'npComponent.view.common.login.LoginMain'
    ],
    init: function () {
       eui.Config.initLocaleMessage(function () {
           Ext.create('template.view.main.Main', {
               plugins: [
                   'viewport'
               ]
           });
       });
        
//        Util.appName = "template";
//        Util.globalLoginForm();
        //Util.globalCheckLogin('template');
    }
});
