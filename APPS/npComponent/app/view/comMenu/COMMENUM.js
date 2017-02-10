Ext.define('npComponent.view.comMenu.COMMENUM', {
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.COMMENUM',

	stores : {
		STORE01 : {
			type : 'tree',
			fields : [
			/*{
				name : 'ODER',
				validators : {
					type : "presence",
					message : "순서는 필수 입력 필드입니다."
				}
			}, {
				name : 'MNU_ID',
				validators : {
					type : "presence",
					message : "메뉴ID는 필수 입력 필드입니다."
				}
			}, {
				name : 'MNU_NM',
				validators : {
					type : "presence",
					message : "메뉴명은 필수 입력 필드입니다."
				}
			}, {
				name : 'UPER_MNU_ID',
				validators : {
					type : "presence",
					message : "상위메뉴ID는 필수 입력 필드입니다."
				}
			}, {
				name : 'CD_NM',
				validators : {
					type : "presence",
					message : "메뉴기능은 필수 입력 필드입니다."
				}
			}*/ ],
			proxy : {
				type : 'ajax',
				// the store will get the content from the .json file
				url : '/APPS/npComponent/comMenu.do',
				reader : {
					rootProperty : function(node) {
						return node.data || node.children;
					}
				}
			},
			folderSort : true
		}
	}
});