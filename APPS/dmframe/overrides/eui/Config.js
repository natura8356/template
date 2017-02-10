/***
 * App전역 변수 설정.
 */
Ext.define('Override.eui.Config', {
    override: 'eui.Config',
    // rest호출을 위한 서버 주소..
//    baseUrlPrifix : 'http://localhost:8080',
//    subUrlPrifix: '/APPS/template/'
    commandButtonControllerUrl : 'resources/data/buttonControl.json',

    fileuploadListUrl : 'resources/data/fileList.json'
});