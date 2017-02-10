Ext.define('template.view.tmp004.TMP004V03', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP004V03',
    height: 300,
    title: '이자율',
    requires: ['template.view.common.Combo01'],
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
                xtype: 'euibutton',
                text: '공통이자율가져오기'
            },
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
        	text : 'file',
        	dataIndex: 'PFPM_KIND', 
        	renderer: function (v, m, r) {
                var id = Ext.id(),
                me = this,
                text = '보기';
                Ext.defer(function () {
                    Ext.widget('button', {
                        renderTo: id,
                        text: text,
                        width: 50,
                        handler: function () {
                             Util.callFileManager({
                             	CONT_ID : '1',
                                 REF_NO: '11',
                                 S_FUNC_CODE: "CO",
                                 REF_TYPE : 'CU'
                             })
                        }
                    });
                }, 50);
                return Ext.String.format('<div id="{0}"></div>', id);
        }
        },
        {
            xtype: 'euicolumn',
            align: 'center',
            text: '대금종류',
            dataIndex: 'PFPM_KIND',
            editor: {
                xtype: 'combo01',
                valueColumnDataIndex: 'PFPM_KIND_CD'
            }
        },
        {
            text: '적용기간',
            columns: [
                {
                    text: '적용기간',
                    columns: [
                        {
                            xtype: 'euidatecolumn',
                            text: '시작일자1',
                            dataIndex: 'BEGN_DT',
                            editor: {
                                xtype: 'euidate',
                                format: 'Y.m.d'
                            }
                        },
                        {
                            xtype: 'euidatecolumn',
                            text: '종료일자',
                            dataIndex: 'END_DT',
                            editor: {
                                xtype: 'euidate',
                                format: 'Y.m.d'
                            }
                        }
                    ]
                },
                {
                    text: '적용기간',
                    columns: [
                        {
                            xtype: 'euidatecolumn',
                            text: '시작일자',
                            dataIndex: 'BEGN_DT2',
//                            dateFormat: 'm-d-Y g:i A',
                            editor: {
                                xtype: 'euidate'
                            }
                        },
                        {
                            xtype: 'euidatecolumn',
                            text: '종료일자',
                            dataIndex: 'END_DT2',
//                            dateFormat: 'm-d-Y g:i A',
                            editor: {
                                xtype: 'euidate'
                            }
                        }
                    ]
                }
            ]
        },
        {
            xtype: 'euinumbercolumn',
            text: '이율<br>(%)',
            align: 'center',
            width: 60,
            // 통화가 아니다
            isCurrency: false,
            // 소숫점 2자리로 정리.
            format:'0,000.00/i',
            dataIndex: 'RTIT',
            editor: {
                decimalPrecision:2,
                xtype: 'euinumber'
            }
        },
        {
            text: '절사기준',
            columns: [
                {
                    xtype: 'euicolumn',
                    text: '자리수',
                    dataIndex: 'CUT_SEATNO',
                    editor: {
                        xtype: 'euitext'
                    }
                },
                {
                    xtype: 'euicolumn',
                    text: '자리수',
                    dataIndex: 'CUT_MTHD',
                    editor: {
                        xtype: 'euitext'
                    }
                }
            ]
        },
        {
        	text: '사용여부',
        	xtype: 'euicheckcolumn',
        	dataIndex: 'USE_YN'
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
                        url: 'TMP0041W.do',
                        params: Util.getDatasetParam(grid.store),
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