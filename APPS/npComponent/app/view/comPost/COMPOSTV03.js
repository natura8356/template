Ext.define('npComponent.view.comPost.COMPOSTV03', {
    extend: 'eui.form.Panel',
    xtype: 'COMPOSTV03',
    margin: 5,
    height: 1000,
    tableColumns: 1,

    // 내부 메소드 호출 가능.
    defaultListenerScope: true,

    viewModel: {
        formulas : {
            formStatus: {
                bind: {
                    bindTo: '{customerRecord}',
                    deep: true
                },
                get: function (user) {
                    if (!user) {
                        return {
                            dirty: true,
                            valid: false,
                            phantom: true,
                            validAndDirty: false,
                            disabled: true
                        }
                    }
                    var status = {
                        dirty: user ? user.dirty : true,
                        valid: user ? user.isValid() : false,
                        phantom: user.phantom,
                        disabled: false
                    };
                    status.validAndDirty = status.dirty && status.valid;
                    return status;
                }
            }
        }
    },

    onSaveForm: function () {
        var rec = this.getViewModel().get('customerRecord');//.getData();
        this.fireEvent('onsaveform', rec);
    },

    onDelFormRecord: function () {
        var rec = this.getViewModel().get('customerRecord');//.getData();
        this.fireEvent('ondeleteform', rec);
    },

    items: [
         {
            xtype: 'euitext',
//            fieldLabel:'시도명'
            fieldLabel: '시도명',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.SIDONG_NM}'
        },
        {
            fieldLabel: '시군구명',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
           bind: '{customerRecord.SIGUNGU_NM}'
        },
        {
        	allowBlank: false,
            fieldLabel: '법정읍면동명',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.CTPV_NM}'
        },
        {
            fieldLabel: '법정리명',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind:'{customerRecord.CRTRI_NM}'
        },
        {
            fieldLabel: '산여부',
    		xtype : 'checkcolumn',
    		listeners : {
    			checkchange : 'onUseChange'
    		},
            bind: '{customerRecord.SAN_YN}'
        },
        {
            fieldLabel: '지번본번',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.MAIN_DUTY}'
        },
        {
            fieldLabel: '대표여부',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.RPST_YN}'
        },
        {
            fieldLabel: '행정동명',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.ADMNDONG_NM}'
        },
        {
            fieldLabel: '우편번호',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.POS_NO}'
        },
        {
            fieldLabel: '우편일렬번호',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
           bind: '{customerRecord.POS_SRAL_NO}'
        },
        {
            fieldLabel: '다량배달처명',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.LQT_DLVR_NM}'
        },
        {
            fieldLabel: '건축물대장건물명',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.CST_LDGR_BLDG_NM}'
        },
        {
            fieldLabel: '시군구건물명',
            xtype: 'euitext',
    		editor : {
    			xtype : 'euifieldLabel'
    		},
            bind: '{customerRecord.SIGUNGU_BLDG_NM}'
        },
        {
            fieldLabel: '공동주택여부',
    		xtype : 'checkcolumn',
    		
    		listeners : {
    			checkchange : 'onUseChange'
    		},
            bind: '{customerRecord.ASCT_HOSE_YN}'
        }
        
    ],
    bbar: [
        '->',
        {
            xtype: 'euibutton',
            text: '저장',
            formBind: true,
            iconCls: '#{저장아이콘}',
            handler: 'onSaveForm'
        },
        {
            xtype: 'euibutton',
            iconCls: '#{행삭제아이콘}',
            bind: {
                disabled: '{formStatus.phantom}'
            },
            text: '#{행삭제}',
            handler: 'onDelFormRecord'
        },
        {
            xtype: 'euibutton',
            text: '닫기',
            iconCls: 'x-fa fa-sign-out',
            listeners: {
                click: function () {
                    var window = Util.getOwnerCt(this);
                    if (Util.getOwnerCt(this).xtype === 'window') {
                        window.close();
                    }
                }
            }
        }
    ]
});