Ext.define('npComponent.view.comEncDec.COMBOBOX', {
	extend : 'Ext.form.field.ComboBox',     
	xtype : 'encdeccombo',					
	width : 150,
	emptyText : '선택',
	displayField : 'display',
	//실제 선택되었을때의 store data속성의 key값
	valueField : 'value',
	//default true값이여서 화면에 보여지는 displayField값 수정이 됩니다.
	//false로 지정해줘야 제대로된 콤보박스기능이 동작됩니다.
	editable : false,
	store : {
		//data 속성의 json object에 정의된 key 값들과 매칭시켜줍니다.
		fields : [ 'display', 'value' ],
		//저장공간에 fix값으로 data 속성에 json array type으로 담아줍니다.
		data : [ {
			display : 'MD5', 
			value : '0'
		}, {
			display : 'Base64',
			value : '1'
		}, {
			display : 'ARIA',
			value : '2'
		}, {
			display : 'PBE',
			value : '3'
		}, {
			display : '3DES',
			value : '4'
		}, {
			display : 'SHA-256',
			value : '5'
		}, {
			display : 'AES256',
			value : '6'
		}],
		//data 속성에 fix값이 정의되있으므로 type을 memory로 정해줍니다.
		proxy : {
			type : 'memory'
		}
	}

});