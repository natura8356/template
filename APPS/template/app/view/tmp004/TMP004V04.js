Ext.define('template.view.tmp004.TMP004V04', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP004V04',
    height: 300,
    title: '대금 종류별 연체율',
    // 내부 CRUD처리는 자체 클래스에서 한다.
    defaultListenerScope: true,

    // 페이징 처리가 없을 경우 하단에 데이터 총개 표시 가능.
    showRowCountStatusBar: true,
    plugins: {
        ptype: 'cellediting',   // 셀에디터를 추가.
        clicksToEdit: 2         // 더블클릭을 통해 에디터로 변환됨.
    },
    // 타이틀 우측에 버튼 배치.
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
                showRowAddBtn: true,    // 행추가 버튼 활성화
                showRowDelBtn: true,    // 행삭제 버튼 활성화
                showSaveBtn: true,      // 저장 버튼 활성화
                showReloadBtn: true,    // 조회 버튼 활성화
                xtype: 'commandtoolbar' // eui.toolbar.Command 클래스
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
            xtype: 'euirownumberer'
        },
        {
            xtype: 'euicolumn',
            align: 'center',
            text: '대금종류',
            dataIndex: 'PFPM_KIND',
            editor: {
                xtype: 'euicombo',
                valueColumnDataIndex: 'PFPM_KIND_NO',
                store: {
                    fields:[],
                    data: [
                        {
                            CD: 'B01',
                            NM: '임대료'
                        },
                        {
                            CD: 'B02',
                            NM: '보증금'
                        }
                    ]
                }
            }
        },
        {
            text: '적용기간',
            columns: [
                {
                    xtype: 'euidatecolumn',
                    text: '시작일자',
                    dataIndex: 'BEGN_DT',
//                    dateFormat: 'm-d-Y g:i A',
                    editor: {
                        xtype: 'euidate'
                    }
                },
                {
                    xtype: 'euidatecolumn',
                    text: '종료일자',
                    dataIndex: 'END_DT',
//                    dateFormat: 'm-d-Y g:i A',
                    editor: {
                        xtype: 'euidate'
                    }
                }
            ]
        },
        {
            text: '연체기간(%)',
            columns: [
                {
                    xtype: 'euinumbercolumn',
                    text: 'F:0 ><br>T: <= 1',
                    align: 'center',
                    width: 60,
                    // 통화가 아니다
                    isCurrency: false,
                    // 소숫점 2자리로 정리.
                    format:'0,000.00/i',
                    dataIndex: 'DLAY_DR_TYPE_1',
                    editor: {
                        decimalPrecision:2,
                        xtype: 'euinumber'
                    }
                },
                {
                    xtype: 'euinumbercolumn',
                    text: 'F:0 ><br>T: <= 1',
                    align: 'center',
                    width: 60,
                    // 통화가 아니다
                    isCurrency: false,
                    // 소숫점 2자리로 정리.
                    format:'0,000.00/i',
                    dataIndex: 'DLAY_DR_TYPE_2',
                    editor: {
                        decimalPrecision:2,
                        xtype: 'euinumber'
                    }
                },
                {
                    xtype: 'euinumbercolumn',
                    text: 'F:0 ><br>T: <= 1',
                    align: 'center',
                    width: 60,
                    // 통화가 아니다
                    isCurrency: false,
                    // 소숫점 2자리로 정리.
                    format:'0,000.00/i',
                    dataIndex: 'DLAY_DR_TYPE_3',
                    editor: {
                        decimalPrecision:2,
                        xtype: 'euinumber'
                    }
                },
                {
                    xtype: 'euinumbercolumn',
                    text: 'F:0 ><br>T: <= 1',
                    align: 'center',
                    width: 60,
                    // 통화가 아니다
                    isCurrency: false,
                    // 소숫점 2자리로 정리.
                    format:'0,000.00/i',
                    dataIndex: 'DLAY_DR_TYPE_4',
                    editor: {
                        decimalPrecision:2,
                        xtype: 'euinumber'
                    }
                }
            ]
        },
        {
            text: '절사기준',
            columns: [
                {
                    text: '자리수',
                    dataIndex: 'CUT_SEATNO',
                    editor: {
                        xtype: 'euitext'
                    }
                },
                {
                    text: '방식',
                    dataIndex: 'CUT_MTHD',
                    editor: {
                        xtype: 'euitext'
                    }
                }
            ]
        },
        {
        	width: 60,
        	text: '사용여부',
        	xtype: 'euicheckcolumn',
        	dataIndex: 'USE_YN'
        },
        {
        	width: 50,
        	text: '신규',
        	xtype: 'euicheckcolumn',
        	dataIndex: 'NEW_YN'
        },
        {
        	width: 50,
        	text: '수정',
        	xtype: 'euicheckcolumn',
        	dataIndex: 'UPDATE_YN'
        },
        {
        	width: 50,
        	text: '삭제',
        	xtype: 'euicheckcolumn',
        	dataIndex: 'DELETE_YN'
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
            field1: '임대료',
            field2: 'B01'
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
                        url: 'TMP0042W.do',
                        params: Util.getDatasetParam(grid.store),
                        pCallback: function (v, params, result) {
                            if (result.success) {
                                Ext.Msg.alert('저장성공', result.success);
                            } else {
                                Ext.Msg.alert('저장실패', result.success);
                            }
                        }
                    });
                }
            }
        });
    }
});