Ext.define('template.view.tmp002.TMP002M', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.TMP002M',

    stores: {
        STORE01: {
            autoLoad: true,
            fields: [
                {
                    name: 'USEPRSN_NM',
                    validators: [
                        {
                            type: "presence",
                            message :"성명은 필수 입력 필드입니다."
                        },
                        {
                            type: 'euiformat',
                            chkType: 'K',
                            message: "성명은 한글만 허용합니다"
                        }
                    ]
                },
                {
                    name: 'MSG',
                    validators: [
                        {
                            type: 'euiformat',
                            chkType: 'K',
                            message: "메시지는 한글만 허용합니다"
                        }
                    ]
                },
                {
                    name: 'STD_DT',
                    validators: [
                        {
                            type: 'euiformat',
                            chkType: 'N',
                            message: "기준일은 숫자만 허용합니다"
                        }
                    ]
                },
                {
                    name: "INPUT_DT",
                    type: "date"
                },
                {
                    name: "UPDATE_DT",
                    type: "date"
                },
                {
                    name: "RELEASE_DT",
                    type: "date"
                }
            ],
            proxy: {
                type: 'rest',
                url: '/APPS/template/TMP002S_GRID.do',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                },
                writer: {
                    type: 'json',
                    allowSingle: false,
                    writeAllFields: true
                }
            }
        }
    },
    formulas: {
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
                console.log('status:', status);
                return status;
            }
        }
    }
});