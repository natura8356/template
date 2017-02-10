Ext.define('npComponent.view.comMenu.COMBOBOX', {
	extend : 'Ext.form.field.ComboBox',     //fieldLabel이  Ext.panel.Panel에 없음
	xtype : 'type4combo',					//xtype 사용시  api에 없는것으로 명명
	width : 150,
	//최초에는 빈값이 출력되므로 설정
	emptyText : '선택',
	//화면에 보여주는 store data속성의 key값
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
			display : '선택',
			value : '1'
		}, {
			display : '메뉴ID',
			value : '2'
		}, {
			display : '메뉴명',
			value : '3'
		}/*, {
			display : '인사관리',
			value : '4'
		}, {
			display : '재무관리',
			value : '5'
		}, {
			display : '시스템관리',
			value : '6'
		}*/],
		//data 속성에 fix값이 정의되있으므로 type을 memory로 정해줍니다.
		proxy : {
			type : 'memory'
		}
	}

})
