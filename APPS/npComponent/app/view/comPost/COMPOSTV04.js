Ext.define('npComponent.view.comPost.COMPOSTV04', {
    extend: 'eui.grid.Panel',
    xtype: 'COMPOSTV04',
    margin: 10,
    height: 200,

    plugins: {
        ptype: 'cellediting',   // 셀에디터를 추가.
        clicksToEdit: 2         // 더블클릭을 통해 에디터로 변환됨.
    },

    selModel: {     // 그리로우를 클릭시 체크박스를 통해 선택되며 체크와 체크해제
          selType: 'checkboxmodel'
    },

    // 페이징 툴바 활성화.
    usePagingToolbar: true,

    tbar: [
        {
            showRowAddBtn: true,    // 행추가 버튼 활성화
            showRowDelBtn: true,    // 행삭제 버튼 활성화
            showRegBtn: true,       // 등록 버튼 활성화
            showModBtn: true,       // 수정 버튼 활성화
            showSaveBtn: true,      // 저장 버튼 활성화
            showReloadBtn: true,    // 조회 버튼 활성화
            showExcelDownBtn: true,    // 조회 버튼 활성화
            xtype: 'commandtoolbar' // eui.toolbar.Command 클래스
        }
    ],

    listeners: {                // ViewController클래스에 정의됨.
        select: 'onGridSelect',
        regbtnclick: 'onRowReg',
        rowdeletebtnclick: 'onRowDelete',
        modbtnclick: 'onRowMod',
        rowaddbtnclick: 'onRowAdd',
        savebtnclick: 'onRowSave'
    },

    columns: [
//        {
//            xtype: 'rownumberer'
//        },
        {
            xtype: 'euicolumn',
            text: '시도명',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'SIDONG_NM'
        },
        {
            text: '시군구명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'SIGUNGU_NM'
        },
        {
//        	allowBlank: false,
            text: '법정읍면동명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'CTPV_NM'
        },
        {
            text: '법정리명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex:'CRTRI_NM'
        },
        {
            text: '산여부',
    		xtype : 'euicheckcolumn',
    		listeners : {
    			checkchange : 'onUseChange'
    		},
            dataIndex: 'SAN_YN'
        },
        {
            text: '지번본번',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'MAIN_DUTY'
        },
        {
            text: '지번부번',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'ASTN_DUTY'
        },
        {
            text: '도로명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'RD_NM'
        },
        {
            text: '지하여부',
    		xtype : 'euicheckcolumn',
    		listeners : {
    			checkchange : 'onUseChange'
    		},
            dataIndex: 'UDGD_YN'
        },
        {
            text: '건물본번',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'BLDG_MAIN_DUTY'
        },
        {
            text: '건축물대장건물명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'CST_LDGR_BLDG_NM'
        },
        {
            text: '상세건물명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'BLDG_DTIL_NM'
        },
        {
            text: '행정동명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'ADMNDONG_NM'
        },
        {
            text: '우편번호',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'POS_NO'
        },
        {
            text: '우편일렬번호',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'POS_SRAL_NO'
        },
        {
            text: '다량배달처명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'LQT_DLVR_NM'
        },
        {
            text: '고시일자',
            editor : {
    			xtype : 'euidate',
    			format : 'Y.m.d'
    		},
            dataIndex: 'NTC_DT'
        },
        {
            text: '변경전도로명주소',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'CHGFMER_RD_ADDR'
        },
        {
            text: '시군구건물명',
            xtype: 'euicolumn',
    		editor : {
    			xtype : 'euitext'
    		},
            dataIndex: 'SIGUNGU_BLDG_NM'
        },
        {
            text: '공동주택여부',
    		xtype : 'euicheckcolumn',
    		listeners : {
    			checkchange : 'onUseChange'
    		},
            dataIndex: 'ASCT_HOSE_YN'
        },
        {
            text: '상세주소부여여부',
    		xtype : 'euicheckcolumn',
    		listeners : {
    			checkchange : 'onUseChange'
    		},
            dataIndex: 'DTILADDR_GRT_YN'
        }

    ]
});