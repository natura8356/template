Ext.define('npComponent.view.comMenu.COMMENUV03', {
    extend: 'eui.form.Panel',
    xtype: 'COMMENUV03',
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
        var rec = this.getViewModel().get('customerRecord');// .getData();
        this.fireEvent('onsaveform', rec);
    },

    onDelFormRecord: function () {
        var rec = this.getViewModel().get('customerRecord');// .getData();
        this.fireEvent('ondeleteform', rec);
    },

    items: [
	    {
	        columns : [ {
				xtype : 'euicolumn',
				text : '레벨 ',
				width : 60,
				bind: '{customerRecord.LEVEL}',
				editor : {
					xtype : 'euitext'
				}
			}, {
				xtype : 'euicolumn',
				text : '순서 ',
				width : 80,
				bind: '{customerRecord.ODER}',
				editor : {
					xtype : 'euitext'
				}
			}, {
				xtype : 'treecolumn',
				text : '메뉴ID ',
				bind: '{customerRecord.MNU_ID}',
				width : 300,
				editor : {
					xtype : 'euitext'
				}
			}, {
				xtype : 'euicolumn',
				text : '메뉴명 ',
				width : 100,
				bind: '{customerRecord.MNU_NM}',
				editor : {
					xtype : 'euitext'
				}
			}, {
				xtype : 'euicolumn',
				text : '상위메뉴ID ',
				width : 200,
				bind: '{customerRecord.UPER_MNU_ID}',
				editor : {
					xtype : 'euitext'
				}
			}, {
				xtype : 'euicolumn',
				text : '메뉴기능 ',
				width : 80,
				bind: '{customerRecord.MNU_TY}',
				editor : {
					xtype : 'euitext'
				}
			}, {
				xtype : 'euicolumn',
				text : '메뉴클래스명 ',
				width : 250,
				bind: '{customerRecord.MDTN_VAR}',
				editor : {
					xtype : 'euitext'
				}
			}
        ]
	}],
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