Ext.define('template.view.tmp004.TMP004C', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.TMP004C',

    initViewModel: function (viewmodel) {
        viewmodel.set('RECORD', new Ext.data.Model());
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

    onLoadData: function () {
        var me = this;
        Util.CommonAjax({
            url: '/APP/template/TMP004S_FORM.do',
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

    onSave: function () {
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
                        url: 'TEMP004W.do',
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
    }
});