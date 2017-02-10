Ext.define('template.view.process.step05.STEP0501', {
    extend: 'eui.grid.Panel',
    xtype: 'STEP0501',
    height: 300,
    // 내부 CRUD처리는 자체 클래스에서 한다.
    defaultListenerScope: true,

    // 페이징 처리가 없을 경우 하단에 데이터 총개 표시 가능.
    showRowCountStatusBar: false,

    // 타이틀 우측에 버튼 배치.
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
                text: '공가(1)',
                xtype: 'euibutton'
            },
            {
                text: '가계약(0)',
                xtype: 'euibutton'
            },
            {
                text: '계약',
                xtype: 'euibutton'
            },
            {
                text: '해약신청',
                xtype: 'euibutton'
            },
            {
                text: '계약제외',
                xtype: 'euibutton'
            },
            {
                text: '분양',
                xtype: 'euibutton'
            },
            {
                text: '전체',
                xtype: 'euibutton'
            }
        ]
    },

    // 이벤트 리스너 처리.
    listeners: {                // ViewController클래스에 정의됨.
        select: 'onGridSelect',
        rowdeletebtnclick: 'onRecDelete',
        rowaddbtnclick: 'addRecord',
        savebtnclick: 'onRowSave'
    },

    // 컬럼 정보 정의.
    columns: [
        {
            align: 'center',
            text: '동',
            dataIndex: 'field1'
        },
        {
            align: 'center',
            text: '호',
            dataIndex: 'field1'
        },
        {
            align: 'center',
            text: '평형',
            dataIndex: 'field1'
        },
        {
            align: 'center',
            text: '군',
            dataIndex: 'field1'
        },
        {
            align: 'center',
            text: '방향',
            dataIndex: 'field1'
        },
        {
            align: 'center',
            text: '층',
            dataIndex: 'field1'
        },
        {
            align: 'center',
            text: '상태',
            dataIndex: 'field1'
        }
    ],


    // 처리 메소드

    /***
     * 로우를 추가한다.
     * 후처리 전처리 하지 않을 경우 정의하지 않는다.
     * @param grid
     */
    addRecord: function (grid) {
        console.log(' 콜백처리...', arguments)
        grid.onRowAdd(grid, {
            field1: 'A0'
        }, 1, function () {    // callback이 필요할 경우 구현한다.
            console.log(' 콜백처리...', arguments)
        });
    },

    /***
     * 로우를 선택할 경우..
     * @param grid
     * @param record
     */
    onGridSelect: function (grid, record) {
//        this.getViewModel().set("customerRecord", record);
    },

    /***
     * 레코드 삭제..
     * @param grid
     */
    onRecDelete: function (grid) {
        grid.onRowDelete(grid, function (store, records) {
            store.remove(records);
        }, grid);
    },

    /***
     * 그리드 최종 저장.
     * @param grid
     */
    onRowSave: function (grid) {
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
                        params: Util.getDatasetParam(grid.store),
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