Ext.define('template.model.Base', {
    extend: 'Ext.data.Model',
    
    fields: [
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
            name: "field5",
            type: "date",
            dateFormat: "Ymd"
        }
    ]
})