Ext.define('npComponent.view.comCode.COMCODEV04', {
        extend: 'eui.form.Panel',
        xtype: 'COMCODEV04',
        tableColumns: 1,
        defaultListenerScope: true,
        
        viewModel: {
            formulas: {
                formStatus: {
                    bind: {
                        bindTo: '{RECORD}',
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
                            phantom: user.phantom,
                            disabled: false
                        };
                        status.validAndDirty = status.dirty && status.valid;
                        return status;
                    }
                }
            }
        },

        onSave: function () {
            // 저장 로직.
            var data = this.getViewModel().get('RECORD').getData();
    		
            Ext.Msg.show({
                title: '확인',
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                message: '저장하시겠습니까?',
                fn: function (btn) {
                    if (btn === 'yes') {
                        Util.CommonAjax({
                            method: 'POST',
                            url: '/APPS/npComponent/comCodePopSV.do',
                            params: data,
                            pCallback: function (v, params, result) {
                                if (result.success) {
                                    Ext.Msg.alert('저장성공', result.message);
                                    self.close();
                                } else {
                                    Ext.Msg.alert('저장실패', result.message);
                                }
                            }
                        });
                    }
                }
            });
        },

        items: [
            {
                xtype: 'euitext',
                bind: '{RECORD.ADMN_SBJT_1}',
                fieldLabel: '관리항목1'
            },
            {
                xtype: 'euitext',
                bind: '{RECORD.ADMN_SBJT_2}',
                fieldLabel: '관리항목2'
            },
            {
                xtype: 'euitext',
                bind: '{RECORD.ADMN_SBJT_3}',
                fieldLabel: '관리항목3'
            },
            {
                xtype: 'euitext',
                bind: '{RECORD.ADMN_SBJT_4}',
                fieldLabel: '관리항목4'
            },
            {
                xtype: 'euitext',
                bind: '{RECORD.ADMN_SBJT_5}',
                fieldLabel: '관리항목5'
            }],
        buttons: [
            {
                xtype: 'euibutton',
                text: '저장',
                iconCls: 'x-fa fa-sign-out',
                handler: 'onSave'
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
    }
)
