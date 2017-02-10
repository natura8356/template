Ext.define('npComponent.view.comAtrt.COMATRTV02', {
	extend : 'eui.tree.Panel',
	xtype : 'COMATRTV02',
	margin : 10,
	height : 400,
	plugins : {
		ptype : 'cellediting', // 셀에디터를 추가.
		clicksToEdit : 2
	// 더블클릭을 통해 에디터로 변환됨.
	},
	listeners: {
        select : function (selModel, record, index, options){
        //	 this.getViewModel().set('RECORD', record);   
        }
    },
	// 컬럼 정보 정의.
	columns : [ {
		xtype : 'euicolumn',
		text : '메뉴ID',
		dataIndex : 'MNU_ID',
		sortable : true
	// locked : true
	}, {
		xtype : 'euicolumn',
		text : '레벨',
		width : 100,
		dataIndex : 'LEVEL'
	}, {
		xtype : 'treecolumn',
		text : '메뉴명',
		width : 230,
		dataIndex : 'MNU_NM'
	}, {
		text : '사용권한',
		xtype : 'euicheckcolumn',
		listeners : {
			checkchange : 'onUseChange'
		},
		dataIndex : 'IQRY_YN'
	}, {
		text : '삭제권한',
		xtype : 'euicheckcolumn',
		listeners : {
			checkchange : 'onUseChange'
		},
		dataIndex : 'ELMN_YN'
	}, {
		text : '저장권한',
		xtype : 'euicheckcolumn',
		listeners : {
			checkchange : 'onUseChange'
		},
		dataIndex : 'SAVE_YN'
	}, {
		text : '인쇄권한',
		xtype : 'euicheckcolumn',
		listeners : {
			checkchange : 'onUseChange'
		},
		dataIndex : 'PRNT_YN'
	} ]
});
