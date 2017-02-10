Ext.define('npComponent.view.comPost.COMPOSTV02', {
    extend: 'eui.grid.Panel',
//    controller:'COMPOSTC',
    xtype: 'COMPOSTV02',
    margin: 10,
    height: 200,

  

    tbar: [
       /* {
            showRowAddBtn: true,    // 행추가 버튼 활성화
            showRowDelBtn: true,    // 행삭제 버튼 활성화
            showRegBtn: true,       // 등록 버튼 활성화
            showModBtn: true,       // 수정 버튼 활성화
            showSaveBtn: true,      // 저장 버튼 활성화
            showReloadBtn: true,    // 조회 버튼 활성화
            showExcelDownBtn: true,    // 조회 버튼 활성화
            xtype: 'commandtoolbar' // eui.toolbar.Command 클래스
        },*/
        {
        	xtype: 'button',
        	text:'도로명주소등록',
//        	listenrs:[{
//        		onClick:'onRowReg2'
//        	}]
//        	handler:function(){
//        		Ext.Msg.alert('확인','버튼클릭테스트');
//        	}
        	handler:'onRowReg2'
        }
    ]
});