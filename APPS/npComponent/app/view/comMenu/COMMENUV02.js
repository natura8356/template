Ext.define('npComponent.view.comMenu.COMMENUV02', {
	extend : 'eui.tree.Panel',
	xtype : 'COMMENUV02',
	margin : 10,
	height : 400,
	plugins : {
		ptype : 'cellediting', // 셀에디터를 추가.
		clicksToEdit : 2
	// 더블클릭을 통해 에디터로 변환됨.
	},
	 getCellEditor: function() {
	        var plugins = this.plugins;
	        if (plugins instanceof Array) {
	            for (var i = 0; i < plugins.length; i++) {
	                if (Ext.getClassName(plugins[i]) == 'Ext.grid.plugin.CellEditing') {
	                    editor = plugins[i];
	                    break;
	                }
	            }
	        } else {
	            if (Ext.getClassName(plugins) == 'Ext.grid.plugin.CellEditing') {
	                editor = plugins;
	            }
	        }
	        return editor;
	    },
	viewModel : {
		formulas : {
			formStatus : {
				bind : {
					// bindTo : '{formStatus}',
					bindTo : '{tree.selection}',
					deep : true
				},
				get : function(user) {
					if (!user) {
						return {
							dirty : true,
							valid : false,
							phantom : true,
							validAndDirty : false,
							disabled : true
						}
					}
					var status = {
						dirty : user ? user.dirty : true,
						valid : user ? user.isValid() : false,
						phantom : user.phantom,
						disabled : false
					};
					status.validAndDirty = status.dirty && status.valid;
					return status;
				}
			}
		}
	},
	listeners: {
        select : function (selModel, record, index, options){
        	 // this.getViewModel().set('RECORD', record);
        }
    },
	columns : [ {
		xtype : 'euicolumn',
		text : '레벨 ',
		width : 60,
		dataIndex : 'LEVEL',
		editor : {
			xtype : 'euitext'
		}
	}, {
		xtype : 'euicolumn',
		text : '순서 ',
		width : 80,
		dataIndex : 'ODER',
		editor : {
			xtype : 'euitext'
		}
	}, {
		xtype : 'euicolumn',
		text : '메뉴ID ',
		dataIndex : 'MNU_ID',
		width : 100,
		editor : {
			xtype : 'euitext',
			bind : {
				disabled :'{!formStatus.phantom}'
			}
		}
	}, {
		xtype : 'treecolumn',
		text : '메뉴명 ',
		width : 300,
		dataIndex : 'MNU_NM',
		editor : {
			xtype : 'euitext'
		}
	}, {
		xtype : 'euicolumn',
		text : '상위메뉴ID ',
		width : 100,
		dataIndex : 'UPER_MNU_ID',
		editor : {
			xtype : 'euitext'
		}
	},
	{
		 xtype: 'euicolumn',
	     align: 'center',
	     text: '메뉴기능',
	     dataIndex: 'CD_NM',
	     editor: {
	         xtype: 'mncombo',
	         valueColumnDataIndex: 'MNU_TY'
	     }
	 },{
		xtype : 'euicolumn',
		text : '메뉴클래스명 ',
		width : 250,
		dataIndex : 'MDTN_VAR',
		editor : {
			xtype : 'euitext'
		}
	}],

    initComponent: function () {
        this.menu = this.buildMenu();
        this.callParent(arguments);
        this.on({
            scope: this,
            itemcontextmenu: this.onItemContextMenu
        });
    },

    onAddChildItem: function (button) {
        var menu = button.up(),
            node = menu.treeNode,
            view = menu.treeView,
            delay = view.expandDuration + 50;

        if (!node.isExpanded()) {
            console.log('aa');
            node.expand(false, Ext.callback(this.onNodeCreate, this, [node], delay));
        }
        else {
            console.log('bb');
            this.onNodeCreate(node);
        }
        view.refresh();
    },

    onNodeCreate: function (argNode) {
        argNode.set('leaf', false);

        // parentId는 보내지 않는다. 이미 내포되어 있음.

        argNode.appendChild({
            MENU_NAME: '신규노드',
            leaf: true
        });
        argNode.expand();
        /*
		 * Ext.Ajax.request({ url:
		 * '/frame.do?createmenu&parentId='+argNode.get('id'), failure: function
		 * (conn, response, options, eOpts) { Ext.Msg.show({ title: 'Error!',
		 * msg: conn.responseText, icon: Ext.Msg.ERROR, buttons: Ext.Msg.OK }); },
		 * success: function (conn, response, options, eOpts) { var result =
		 * Ext.JSON.decode(conn.responseText, true); // #1 if (!result) { // #2
		 * result = {}; result.success = false; result.msg = conn.responseText; }
		 * if (result.success) { // #3
		 * 
		 * argNode.set('leaf', false); // parentId는 보내지 않는다. 이미 내포되어 있음. // 실어
		 * 보내면 update되지않음. argNode.appendChild({ id : result.id, text: '신규 노드',
		 * useYn: true, leaf: true }); argNode.expand(); } } });
		 */

    },

    buildMenu: function () {
        var me = this;
        return Ext.create('Ext.menu.Menu', {
            items: [
                {
                    text: '추가',
                    itemId: 'add',
                    scope: me,
                    handler: 'onAddChildItem'
                }/*
					 * , { itemId: 'edit', scope: me, text: '수정', iconCls:
					 * 'button-icon-update', handler: 'onMenuItemEdit' }
					 */,
                {
                    text: '삭제',
                    itemId: 'delete',
                    iconCls: 'button-icon-delete',
                    scope: me,
                    handler: 'onMenuItemDelete'
                }
            ]
        });
    },

    onMenuItemDelete: function () {
        var selModel = this.getSelectionModel(),
            node = selModel.getSelection()[0];

        if (!node) {
            Ext.Msg.alert('메뉴삭제', '삭제 할 메뉴를 선택하세요.');
            return false;
        }

        if(!node.get('leaf')){  // 폴더일 경우 조건을 따진다.
          /* if(!node.get("expanded") ||
                (node.childNodes.length > 0)){
                Ext.Msg.alert('메뉴삭제', '열려있지 않은 폴더와 자식메뉴가 존재하는 폴더는 삭제할 수 없습니다.');
                return false;
            }*/
        }
        Ext.Msg.confirm('메뉴삭제', '메뉴를 삭제하시겠습니까?', function (answer) {
            if (answer != 'yes') return;

            // node.remove(true); trur가 있을 경우 ajax콜을 한번 더한다. autoSync를 끌경우 true
            node.remove();
        });
    },

  /*
	 * onMenuItemEdit: function (button) { var selModel =
	 * this.getSelectionModel(), node = selModel.getSelection()[0], pos =
	 * selModel.getCurrentPosition(); debugger; if (!node) {
	 * Ext.Msg.alert('메뉴수정', '수정할 메뉴를 선택하세요.'); return false; }
	 * this.getView().editingPlugin.startEdit(pos.rowIdx, pos.colIdx); },
	 */

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
