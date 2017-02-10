Ext.define('npComponent.view.comMenu.COMMENUC', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.COMMENUC',

    initViewModel: function (viewmodel) {
    	viewmodel.set('RECORD', new Ext.data.Model());
    },
    
    /*onGridLoad: function(grid, record, item){
    	  var grid = this.lookupReference('tree'),
    	  cmpKey = record.get('USE_YN')
      grid.store.load({
          params: {
              cmpKey: cmpKey
          }
      });
    },
    */
    /***
     * 상단 검색 처리.
     * @param button
     */
    dataSearch: function (button) {
        	 var MNU_NM = this.lookupReference('MNU_NM').getValue(),
        	 detail = this.lookupReference('detail').getValue(),
             grid = this.lookupReference('tree');
        	 
        if(MNU_NM != '' && MNU_NM != null && MNU_NM != '0' && MNU_NM != '1' ){
       	 if(detail.length < 1){
       		 Ext.Msg.alert('알림', '상세 검색어를 입력하세요.');
       		 return;
       	 }
         }
        
        
             grid.store.load({
    	         params: {
    	         	searchCD: MNU_NM,
    	         	searchNM : detail
    	         }

    	     });
    },
    /***
     * 로우를 추가한다.
     * @param grid
     */
    onRowAdd: function (tree) {
    	tree.onRowAdd(tree, {
        	LEVEL :'1',
        	MNU_ID :'메뉴00'
        }, 1, function () {    // callback이 필요할 경우 구현한다.
            console.log(' 콜백처리...', arguments)
        });
    },
    
    /***
     * 그리드 로우 삭제.
     * @param grid
     */
    onRowDelete: function (tree) {
    	tree.onRowDelete(grid, function (store, records) {
            store.remove(records);
        }, tree);
    },
    
    
     /**
     * 등록 , 수정 팝업 호출.
     * @param record
     */
    openWindow: function (record) {
        var popup = Util.commonPopup(
            this.getView(),     // parent
            '주소등록',      // 팝업 타이틀
            'npComponent.view.comPost.COMMENUV03',       // 호출 클래스
            530,    // 너비
            320,    // 높이
            {       // 이하 params
                customerRecord: record
            },
            {       // 이하 윈도우 option
                modal: true
            },
            false   // 현재 뷰컨트롤 뷰모델 사용할 것인지?
        );

        // 팝업 내부 저장 이벤트
        popup.down('COMMENUV03').on('onsaveform', function (rec) {
            this.onSaveForm(rec, popup, function () {
                popup.close();
            });
        }, this);

        // 팝업 내부 삭제 이벤트
        popup.down('COMMENUV03').on('ondeleteform', function (rec) {
            this.onDelFormRecord(rec, popup, function () {
                popup.close();
            });
        }, this);

        // 팝업 호출 이후 내부 폼에 전달한 모델레코드 바인딩
        popup.down('COMMENUV03').on('render', function (rec) {
            var rec = this.__PARAMS.customerRecord;
            this.getViewModel().set('customerRecord', rec);
        });
        popup.show();
    },
    onUseChange : function(check, rowIndex, checked, record){
        var tree = this.lookupReference('tree'),
            store = tree.getRootNode();
//        debugger;
//        if(record.get('USE_YN') == 'Y'){
            record.fireEvent('recusivechildcheck', record, 'USE_YN');
//        }

//        var c = rn.findChild("text","Also ASP.net",true);
//        c.expand();
    },

    onLoadData: function () {
        var me = this;
        Util.CommonAjax({
            method: 'GET',
            url: '/APPS/npComponent/comMenu.do',
            params:  {

            },
            pCallback: function (v, params, result) {
                if (result.success) {
                    me.getViewModel().set('RECORD', new Ext.data.Model(
                        result.data[0]
                    ));
                } else {
                    Ext.Msg.alert('실패', result.message);
                }
            }
        });
    },
    
    /***
     * 그리드 툴바에서 저장 버튼 클릭.
     * @param grid
     */
    onRowSave: function (grid) {
        // validation check
        if (!grid.store.recordsValidationCheck()) {
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
                        url: '/APPS/npComponent/comMenuSV.do',
                        params: Util.getDatasetParam(grid.store),
                        pCallback: function (v, params, result) {
                            if (result.success) {
                                Ext.Msg.alert('저장성공', result.message);
                                grid.store.reload();
                            } else {
                                Ext.Msg.alert('저장실패', result.message);
                            }
                        }
                    });
                }
            }
        });
    }
});