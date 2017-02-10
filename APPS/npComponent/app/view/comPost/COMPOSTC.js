Ext.define('npComponent.view.comPost.COMPOSTC', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.COMPOSTC',

    /***
     * 뷰모델 초기화.
     * @param vm
     */
    initViewModel: function (vm) {
    },

    /***
     * 상단 검색 처리.
     * @param button
     */
    dataSearch: function (button) {
        var cmpKey = this.lookupReference('cmpKey').getValue(),
            grid = this.lookupReference('cusGrid');
        grid.store.load({
            params: {
                cmpKey: cmpKey
            }
        });
    },

    /***
     * 로우를 추가한다.
     * @param grid
     */
    onRowAdd: function (grid) {
        grid.onRowAdd(grid, {
        	SIDONG_NM :'서울시',
        	SIGUNGU_NM :'서울군'
        }, 1, function () {    // callback이 필요할 경우 구현한다.
            console.log(' 콜백처리...', arguments)
        });
    },

    /**
     * 등록 , 수정 팝업 호출.
     * @param record
     */
    openWindow: function (record) {
        var popup = Util.commonPopup(
            this.getView(),     // parent
            '주소등록',      // 팝업 타이틀
            'npComponent.view.comPost.COMPOSTV03',       // 호출 클래스
            300,    // 너비
            150,    // 높이
            {       // 이하 params
                customerRecord: record
            },
            {       // 이하 윈도우 option
                modal: true
            },
            false   // 현재 뷰컨트롤 뷰모델 사용할 것인지?
        );
        
        popup.show();
    },

    //도로명주소 api
    openWindow2: function (record) {
        var popup = Util.commonPopup(
            this.getView(),     // parent
            '주소등록',      // 팝업 타이틀
            'npComponent.view.comPost.COMPOSTAPIV',       // 호출 클래스
            600,    // 너비
            300,    // 높이
            {       // 이하 params
                customerRecord: record
            },
            {       // 이하 윈도우 option
                modal: true
            },
            false   // 현재 뷰컨트롤 뷰모델 사용할 것인지?
        );

        // 팝업 내부 저장 이벤트
        popup.down('COMPOSTAPIV').on('onsaveform', function (rec) {
            this.onSaveForm(rec, popup, function () {
                popup.close();
            });
        }, this);

        // 팝업 호출 이후 내부 폼에 전달한 모델레코드 바인딩
        popup.down('COMPOSTAPIV').on('render', function (rec) {
            var rec = this.__PARAMS.customerRecord;
            this.getViewModel().set('customerRecord', rec);
        });
        popup.show();
    },

    
    
    
    /***
     * 그리드에서 수정 버튼 클릭 .
     * @param grid
     */
    onRowMod: function (grid) {
        var me = this,
            records = grid.getSelection();
        if (records.length == 0) {
            Ext.Msg.alert(Util.getLocaleValue('CONFIRM'), '한건의 로우를 선택하세요.');
            return;
        }
        if (records.length > 1) {
            Ext.Msg.alert(Util.getLocaleValue('CONFIRM'), '한건의 로우만 선택하세요.');
            return;
        }
        // 수정용 팝업 호출.
        // this.getViewModel().get('customerRecord').copy() -> 팝업 내부에서 모델레코드 수정시 그리드의 바로 반영되지 않도록
        // copy한다.
        this.openWindow(this.getViewModel().get('customerRecord').copy());
    },

    /***
     * 등록 팝업 호출.
     */
    onRowReg: function () {
        var rec = Ext.create('Ext.data.Model'); // 빈 레코드
        this.openWindow(rec);
    },
    
    /**
     * 우편API
     * */
    onRowReg2: function () {
        var rec = Ext.create('Ext.data.Model'); // 빈 레코드
        this.openWindow2(rec);
    },
    
    /***
     * 팝업에서 레코드 삭제 버튼 클릭시.
     * @param rec
     * @param popup
     * @param callback
     */
    onDelFormRecord: function (rec, popup, callback) {
        var grid = this.lookupReference('cusGrid');
        grid.onRowDelete(grid, function (store, records) {
            store.remove(rec);
            // 팝업 닫기.
            Ext.callback(callback);
        }, grid);
    },

    /***
     * 그리드 로우 삭제.
     * @param grid
     */
    onRowDelete: function (grid) {
        grid.onRowDelete(grid, function (store, records) {
            store.remove(records);
        }, grid);
    },

    /***
     * 팝업 내부에서 저장 버튼 클릭.
     */
    onSave: function () {
        var grid = this.lookupReference('cusGrid');
        this.onRowSave(grid);
    },


    /***
     * 그리드 선택시 마다 모델 레코드 설정.
     * @param grid
     * @param record
     */
    onGridSelect: function (grid, record) {
        this.getViewModel().set("customerRecord", record);
    },

    /***
     * 폼으로 부터 레코드를 넘겨 받아 저장 또는 수정한다.
     * @param rec
     */
    onSaveForm: function (rec, popup, callback) {
        var me = this;

        // 윈도우를 닫는다.
        Ext.callback(callback);

        if (rec.crudState == 'U') {      // 수정된 레코드.
            var originRec = me.getViewModel().getStore('STORE01').findRecord('id', rec.getId());
            originRec.set(rec.getData());
            return;
        }
        // 입력할 레코드.
        me.getViewModel().getStore('STORE01').add(rec);
    }
});