Ext.define('template.view.process.step04.STEP04C', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.STEP04C',

    initViewModel: function (viewmodel) {
        viewmodel.set('RECORD', new Ext.data.Model());
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
                        url: 'resources/data/success.json',
                        params:  data,
                        pCallback: function (v, params, result) {
                            if (result.success) {
                                Ext.Msg.alert('저장성공', '정상적으로 저장되었습니다.');
                            } else {
                                Ext.Msg.alert('저장실패', '저장에 실패했습니다...');
                            }
                        }
                    });
                }
            }
        });
    }
});