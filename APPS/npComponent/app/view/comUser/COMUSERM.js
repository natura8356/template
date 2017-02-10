Ext.define('npComponent.view.comUser.COMUSERM', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.COMUSERM',   
    formulas : {
        formStatus: {
            bind: {
                bindTo: '{customerRecord}',
                deep: true
            },
            get: function (user) {
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
    },
    stores: {
        STORE01: {
            autoLoad: true,
            fields : [
               {
                name: 'USEPRSN_ID',
                validators: [
                    {
                        type: "presence",
                        message :"아이디는 필수 입력 필드입니다."
                    }
                ]
               },
               {
                   name: 'USEPRSN_NM',
                   validators: [
                       {
                           type: "presence",
                           message :"성명은 필수 입력 필드입니다."
                       }
                   ]
              },
              {
                  name: 'PWD',
                  validators: [
                      {
                          type: "presence",
                          message :"비밀번호는 필수 입력 필드입니다."
                      }
                  ]
             },
             {
                 name: 'GR_NM',
                 validators: [
                     {
                         type: "presence",
                         message :"권한그룹은 필수 입력 필드입니다."
                     }
                 ]
             },
             {
                name: 'GR_NM',
                validators: [
                    {
                        type: "presence",
                        message :"권한그룹은 필수 입력 필드입니다."
                    }
                ]
            }
            ],
            proxy: {
                type: 'rest',
                url: '/APPS/npComponent/comUser.do',
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
    }
});