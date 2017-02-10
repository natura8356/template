Ext.define('npComponent.view.comMenu.COMBOBOX2', {
	extend : 'eui.form.field.ComboBox',     // fieldLabel이 Ext.panel.Panel에 없음
	xtype : 'mncombo',					
	width : 150,
    editable: false,
    autoLoadOnValue: true,
	// 화면에 보여주는 store data속성의 key값
    displayField: 'CD_NM',
	// 실제 선택되었을때의 store data속성의 key값
    valueField: 'MNU_TY',
	// default true값이여서 화면에 보여지는 displayField값 수정이 됩니다.
	// false로 지정해줘야 제대로된 콤보박스기능이 동작됩니다.
	editable : false,
	proxyUrl: '/APPS/npComponent/comMenuCBG.do'
//	store : {
//		fields : [ ],
//		 proxy: {
//	            type: 'rest',
//	            url: '/APPS/npComponent/comMenuCBG.do',
//	            reader: {
//	                type: 'json',
//	                rootProperty: 'comboData'
//	            }
//	     }
//   }
});