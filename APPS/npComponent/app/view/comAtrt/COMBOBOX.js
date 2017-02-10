Ext.define('npComponent.view.comAtrt.COMBOBOX', {
	extend : 'Ext.form.field.ComboBox',     //fieldLabel이  Ext.panel.Panel에 없음
	xtype : 'type3combo',					//xtype 사용시  api에 없는것으로 명명
	width : 150,
    editable: false,
    autoLoadOnValue: true,
	//화면에 보여주는 store data속성의 key값
    displayField: 'GR_NM',
	//실제 선택되었을때의 store data속성의 key값
    valueField: 'GR_ID',
	//default true값이여서 화면에 보여지는 displayField값 수정이 됩니다.
	//false로 지정해줘야 제대로된 콤보박스기능이 동작됩니다.
	editable : false,
	store : {
		fields : [ ],
		proxy: {
	            type: 'ajax',
	            url: '/APPS/npComponent/comAtrtCB.do',
	            reader: {
	                type: 'json',
	                rootProperty: 'data'
	            }
	   }
	}

});