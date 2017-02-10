/***
 * App전역 변수 설정.
 */
Ext.define('Override.eui.Config', {
    override: 'eui.Config',
    // rest호출을 위한 서버 주소..
    //  baseUrlPrifix : 'http://localhost:8080',
//    baseUrlPrifix : 'http://172.20.101.137:9100/',
//    subUrlPrifix: '/APPS/template/'
    commandButtonControllerUrl: 'resources/data/buttonControl.json',
    fileDownloadUrl: '/npframework/fileDownload.do',
    fileuploadListUrl: '/npframework/fileList.do',
    fileuploadUrl: '/npframework/fileUpload.do',
    filedeleteUrl: '/npframework/fileDelete.do'
});
