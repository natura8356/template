Ext.define('npComponent.view.comPost.COMPOSTM', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.COMPOSTM',

    stores: {
        STORE01: {
            autoLoad: true,
            fields: [
                /*{
                    name: 'USEPRSN_NM',
                    validators: [
                        {
                            type: "presence",
                            message :"성명은 필수 입력 필드입니다."
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
                }*/
            ],
            proxy: {
                type: 'rest',
                url: 'content/co/comPostGR_BUNJI.do',
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
        },
        STORE02: {
            autoLoad: true,
            fields: [
            ],
            proxy: {
                type: 'rest',
                url: 'content/co/comPostGR_DORO.do',
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