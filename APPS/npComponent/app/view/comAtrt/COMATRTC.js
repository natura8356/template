Ext.define('npComponent.view.comAtrt.COMATRTC', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.COMATRTC',

    initViewModel: function (viewmodel) {
    	 viewmodel.set('RECORD', new Ext.data.Model());
    	 
    	 this.lookupReference('searchCD').setValue ("ADMIN");
    },
    
    /***
     * 상단 검색 처리.
     * @param button
     */
    dataSearch: function (button) {
    	 var searchCD = this.lookupReference('searchCD').getValue(),
         grid = this.lookupReference('atrtGrid');
    	 
    	 if(searchCD == '' || searchCD == null){
    		 Ext.Msg.alert('알림', '권한그룹을 선택하세요.');
    		 return;
    	 }
         grid.store.load({
	         params: {
	         	searchCD: searchCD
	         }

	     });
    },
    /*onSave: function () {
        // 저장 로직.
        var data = this.vm.get('RECORD').getData()

        Ext.Msg.show({
            title: '확인',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            message: '저장하시겠습니까?',
            fn: function (btn) {
                if (btn === 'yes') {
                    Util.CommonAjax({
                        method: 'POST',
                        url: '/APPS/npComponent/comAtrtSV.do',
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
    }*/
    /***
     * 그리드 툴바에서 저장 버튼 클릭.
     * @param grid
     */
    onRowSave: function (grid) {
        // validation check
        if (!grid.store.recordsValidationCheck()) {
            return;
        }

        var searchCD = this.lookupReference('searchCD').getValue();
        
        Ext.Msg.show({
            title: '확인',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            message: '저장하시겠습니까?',
            fn: function (btn) {
                if (btn === 'yes') {
                    Util.CommonAjax({
                        method: 'POST',
                        url: '/APPS/npComponent/comAtrtSV.do',
                        params: {
                             data : Util.getDatasetParam(grid.store)['data'],
	                         searchCD: searchCD 
                        },
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
    },

    /*,
    
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
    
    onRightGridLoad: function(grid, record, item){
    	  var grid = this.lookupReference('rightGrid'),
    	  cmpKey = record.get('USE_YN')
      grid.store.load({
          params: {
              cmpKey: cmpKey
          }
      });
    },
  */
    onLoadData: function () {
    	var searchCD = this.lookupReference('searchCD').getValue(),
        grid = this.lookupReference('atrtGrid');
    	 
    	if(searchCD == '' || searchCD == null){
    		 alert('권한그룹을 선택하세요.');
    		 return;
    	}
    	 
        var me = this;
        Util.CommonAjax({
            method: 'GET',
            url: 'APPS/template/comAtrt_GRID.do',
            params:  {
            	searchCD: searchCD
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
    }
});