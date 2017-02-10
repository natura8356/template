Ext.define('npComponent.view.comPost.COMPOSTV05', {
    extend: 'eui.form.Panel',
    xtype: 'COMPOSTV05',
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
		    fieldLabel: '시도명',

		    bind: '{customerRecord.SIDONG_NM}'
		},

		{
		    fieldLabel: '시군구명',
		    xtype: 'euitext',

		    bind: '{customerRecord.SIGUNGU_NM}'
		},
		{
		//	allowBlank: false,
		    fieldLabel: '법정읍면동명',
		    xtype: 'euitext',

		    bind: '{customerRecord.CTPV_NM}'
		},
		{
		    fieldLabel: '법정리명',
		    xtype: 'euitext',

		    bind:'{customerRecord.CRTRI_NM}'
		},
		{
		    fieldLabel: '산여부',
			xtype : 'euicheckcolumn',

		    bind: '{customerRecord.SAN_YN}'
		},
		{
		    fieldLabel: '지번본번',
		    xtype: 'euitext',

		    bind: '{customerRecord.MAIN_DUTY}'
		},
		{
		    fieldLabel: '지번부번',
		    xtype: 'euitext',

		    bind: '{customerRecord.ASTN_DUTY}'
		},
		{
		    fieldLabel: '도로명',
		    xtype: 'euitext',

		    bind: '{customerRecord.RD_NM}'
		},
		{
		    fieldLabel: '지하여부',
			xtype : 'euicheckcolumn',

		    bind: '{customerRecord.UDGD_YN}'
		},
		{
		    fieldLabel: '건물본번',
		    xtype: 'euitext',

		    bind: '{customerRecord.BLDG_MAIN_DUTY}'
		},
		{
		    fieldLabel: '건축물대장건물명',
		    xtype: 'euitext',

		    bind: '{customerRecord.CST_LDGR_BLDG_NM}'
		},
		{
		    fieldLabel: '상세건물명',
		    xtype: 'euitext',

		    bind: '{customerRecord.BLDG_DTIL_NM}'
		},
		{
		    fieldLabel: '행정동명',
		    xtype: 'euitext',

		    bind: '{customerRecord.ADMNDONG_NM}'
		},
		{
		    fieldLabel: '우편번호',
		    xtype: 'euitext',

		    bind: '{customerRecord.POS_NO}'
		},
		{
		    fieldLabel: '우편일렬번호',
		    xtype: 'euitext',

		    bind: '{customerRecord.POS_SRAL_NO}'
		},
		{
		    fieldLabel: '다량배달처명',
		    xtype: 'euitext',

		    bind: '{customerRecord.LQT_DLVR_NM}'
		},
		{
		    fieldLabel: '고시일자',
		    editor : {
				xtype : 'euidate',
				format : 'Y.m.d'
			},
		    bind: '{customerRecord.NTC_DT}'
		},
		{
		    fieldLabel: '변경전도로명주소',
		    xtype: 'euitext',

		    bind: '{customerRecord.CHGFMER_RD_ADDR}'
		},
		{
		    fieldLabel: '시군구건물명',
		    xtype: 'euitext',

		    bind: '{customerRecord.SIGUNGU_BLDG_NM}'
		},
		{
		    fieldLabel: '공동주택여부',
			xtype : 'euicheckcolumn',
			listeners : {
				checkchange : 'onUseChange'
			},
		    bind: '{customerRecord.ASCT_HOSE_YN}'
		},
		{
		    fieldLabel: '상세주소부여여부',
			xtype : 'euicheckcolumn',
			listeners : {
				checkchange : 'onUseChange'
			},
		    bind: '{customerRecord.DTILADDR_GRT_YN}'
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
            fieldLabel: '#{행삭제}',
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