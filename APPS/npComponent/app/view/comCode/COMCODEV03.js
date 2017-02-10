Ext.define('npComponent.view.comCode.COMCODEV03', {
    extend: 'eui.grid.Panel',
    xtype: 'COMCODEV03',
    height: 300,
    defaultListenerScope: true,
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
                    bind: '{STORE02}',
                    xtype: 'euicommand',
                    showRegBtn: false,   
                    showModBtn: false,
                    params: {
                    	mnu_id: 'comCode'
                    },
                    listeners: {
                    	rowaddbtnclick: 'onRowAdd',
                        regbtnclick: 'onRowReg',
                        rowdeletebtnclick: 'onRowDelete',
                        modbtnclick: 'onRowMod',
                        savebtnclick: 'onRowSave'
                    }
                }
        ]
    },
    // 컬럼 정보 정의.
    columns: [
       /* {
            xtype: 'euirownumberer'
        },*/
        {
    		text : '그룹코드',
    		width : 100,
    		editor : {
    			xtype : 'euitext'
    		},
    		dataIndex : 'CD_ID'
    	},
    	{
    		text : '코드',
    		width : 100,
    		editor : {
    			xtype : 'euitext'
    		},
    		dataIndex : 'CD'
    	},
    	{
    		text : '상위코드',
    		width : 200,
    		editor : {
    			xtype : 'euitext'
    		},
    		dataIndex : 'UPER_CD'
    	},
    	{
    		text : '순서',
    		width : 100,
    		editor : {
    			xtype : 'euitext'
    		},
    		dataIndex : 'ODER'
    	},
    	{
    		text : '코드명',
    		width : 100,
    		editor : {
    			xtype : 'euitext'
    		},
    		dataIndex : 'CD_NM'
    	},
        {
        	width: 30,
        	text: '사용여부',
        	xtype: 'euicheckcolumn',
        	dataIndex: 'USE_YN'
        },
        {
            xtype: 'euidatecolumn',
            text: '등록일시',
            dataIndex: 'RGST_DNT',
            dateFormat: 'm-d-Y g:i A',
            readOnly : true
        },
        {
        	width: 60,
        	text: '등록자',
        	dataIndex: 'RGSTPRSN_ID'
        },
        {
            xtype: 'euidatecolumn',
            text: '수정일시',
            dataIndex: 'REV_DNT',
            dateFormat: 'm-d-Y g:i A'
        },
        {
        	width: 60,
        	text: '수정자',
        	dataIndex: 'REVPRSN_ID'
        }
    ],
    /***
     * 로우를 추가한다.
     * @param grid
     */
    onRowAdd: function (grid) {  
    	this.callParent([grid, { 
        	
        }, 1, function () {    // callback이 필요할 경우 구현한다.
            console.log(' 콜백처리...', arguments)
        }]);
    	/*위에 거랑 아래거랑 같아요... ^^
    	
    	== 
    	
        grid.superclass.onRowAdd(grid, {         	
        }, 1, function () {    // callback이 필요할 경우 구현한다.
            console.log(' 콜백처리...', arguments)
        });*/
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

    /***
     * 팝업에서 레코드 삭제 버튼 클릭시.
     * @param rec
     * @param popup
     * @param callback
     */
    onDelFormRecord: function (rec, popup, callback) {
        var grid = this.lookupReference('cusGrid');
        grid.superclass.onRowDelete(grid, function (store, records) {
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
        grid.superclass.onRowDelete(grid, function (store, records) {
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
     * 그리드 툴바에서 저장 버튼 클릭.
     * @param grid
     */
    onRowSave: function (grid) {
        // validation check
        if (!grid.store.recordsValidationCheck()) {
            return;
        }

        var retValue = {}
        Ext.apply(retValue, Util.getDatasetParam(grid.store));
        Ext.apply(retValue, {
            data2: Util.getDatasetParam(grid.store)['data']
        });
        Ext.apply(retValue, {
            data3: Util.getDatasetParam(grid.store)['data']
        });
        Ext.apply(retValue, {
            data4: Util.getDatasetParam(grid.store)['data']
        });

        Ext.Msg.show({
            title: '확인',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            message: '저장하시겠습니까?',
            fn: function (btn) {
                if (btn === 'yes') {
                    Util.CommonAjax({
                        method: 'POST',
                        url: '/APPS/npComponent/comCodeSV.do',
                        params: Util.getDatasetParam(grid.store),
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