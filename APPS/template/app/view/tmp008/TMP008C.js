Ext.define('template.view.tmp008.TMP008C', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.TMP008C',

    initViewModel: function (viewmodel) {

    },

    onSearch: function () {
        var name = this.lookupReference('CODE_NAME').getValue();
        this.getViewModel().get('STORE01').load({
            params: {
                key: name
            }
        });
    },

    onGridDblClick: function (grid, record, index) {
        this.getViewModel().set('MASTERRECORD', record);
        this.getViewModel().get('STORE02').load({
            params: {
                ad: record.get('field1')
            }
        });
        this.getViewModel().get('STORE03').load({
            params: {
                ad: record.get('field1')
            }
        });
        this.getViewModel().get('STORE04').load({
            params: {
                ad: record.get('field1')
            }
        });
    },

    onRightGridLoad: function (grid, record, item) {
//        var grid = this.lookupReference('rightGrid'),
//            cmpKey = record.get('USE_YN')
//        grid.store.load({
//            params: {
//                cmpKey: cmpKey
//            }
//        });
    },

    onLinkClick: function (field1) {
        Util.commonPopup(this.getView(), field1, 'template.view.tmp008.TMP008V02', 600, 500, null, {
            modal: true
        }, true).show();
    },

    onButtonClick: function (record) {
        var popup = Util.commonPopup(
            this.getView(),     // parent
            '고객약속 수정',      // 팝업 타이틀
            'template.view.tmp008.TMP008V02',       // 호출 클래스
            530,    // 너비
            400,    // 높이
            null,
            {       // 이하 윈도우 option
                modal: true
            },
            false   // 현재 뷰컨트롤 뷰모델 사용할 것인지?
        );

        var masterRecord = this.getViewModel().get('MASTERRECORD').copy();
        // 팝업 호출 이후 내부 폼에 전달한 모델레코드 바인딩
        popup.down('TMP008V02').on('render', function (rec) {
            this.getViewModel().set('MASTERRECORD', masterRecord);
        });
        popup.show();
    }
});