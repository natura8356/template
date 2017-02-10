Ext.define('npComponent.view.comCode.COMCODEV02', {
    extend: 'eui.tree.Panel',
    xtype: 'COMCODEV02',
    rootVisible: false,
    title: '코드목록',
    useArrows: true,
    margin: 10,
    hideHeaders: true,
    initComponent: function () {
        this.menu = this.buildMenu();
        this.callParent(arguments);
        this.on({
            scope: this,
            itemcontextmenu: this.onItemContextMenu
        });
    },
    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
               xtype: 'euibutton',
               iconCls: 'x-fa fa-search',
               text: '조회',
               handler: 'onSearch'
            }
        ]
    },
    // 컬럼 정보 정의.
    columns: [
    	{
            xtype: 'treecolumn', //this is so we know which column will show the tree
            width: 200,
            sortable: true,
            dataIndex: 'CD_NM'
        }
    ],
    onSave : function () {
        alert(1);
    },
    onAddChildItem: function (button) {
    	var menu = button.up(),
	        node = menu.treeNode,
	        view = menu.treeView,
	        delay = view.expandDuration + 50;
    		cd = node.get('CD_ID');
    	
    	var record = Ext.create('Ext.data.Model',{
    		CD_ID : cd
    	}); // 빈 레코드
    	Util.CommonAjax({
            method: 'POST',
            url: '/APPS/npComponent/comCodePop.do',
            params: {
            	CD_ID : cd
            },
            pCallback: function (v, params, result) {
                if (result.success) {
                	if(result.data.length > 0 ){
                		record.set(result.data[0]);  
                		record.set('__rowStatus','U');
                	}
                } else {
                    Ext.Msg.alert('저장실패', result.message);
                }
            }
        });
    	
    	// 팝업띄우기
        var popup = Util.commonPopup(
            this.up('COMCODEV'),     // parent
            '코드 관리항목 추가',      // 팝업 타이틀
            'npComponent.view.comCode.COMCODEV04',       // 호출 클래스
            400,    // 너비
            205,    // 높이
            null,
            {       // 이하 윈도우 option
                modal: true
            },
            false   // 현재 뷰컨트롤 뷰모델 사용할 것인지?
        );
        // 팝업 내부 저장 이벤트
        popup.down('COMCODEV04').on('onsaveform', function (rec) {
            this.onSaveForm(rec, popup, function () {
                popup.close();
            });
        }, this);

        // 팝업 호출 이후 내부 폼에 전달한 모델레코드 바인딩
        popup.down('COMCODEV04').on('render', function (rec) {
//            var rec = this.__PARAMS.customerRecord;
            this.getViewModel().set('RECORD', record);
        });
        popup.show();
    },

    onNodeCreate: function (argNode) {
        argNode.set('leaf', false);

        // parentId는 보내지 않는다. 이미 내포되어 있음.

        argNode.appendChild({
            MENU_NAME: '신규노드',
            leaf: true
        });
        argNode.expand();

    },

    buildMenu: function () {
        var me = this;
        return Ext.create('Ext.menu.Menu', {
            items: [
                {
                    text: '관리항목 설정',
                    itemId: 'add',
                    scope: me,
                    handler: 'onAddChildItem'
                }
            ]
        });
    },
    
    onDestroy: function () {
        this.menu.destroy();
        this.callParent(arguments);
    },

    onItemContextMenu: function (view, rec, item, index, event) {
        event.stopEvent();
        this.menu.treeNode = rec;
        this.menu.treeView = view;
        this.menu.showAt(event.getXY());
    }
});