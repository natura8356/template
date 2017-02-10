Ext.define('npComponent.view.comCode.COMCODEC', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.COMCODEC',
    
    initViewModel: function (viewmodel) {
    },
    onSearch : function(){
    	this.getViewModel().get('STORE01').reload();
    },
    onRightGridLoad: function(grid, record, item){
    	
  	  var grid = this.lookupReference('rightGrid'),
  	  	  cd_id = record.get('CD');
  	  
  	 Util.CommonAjax({
		method: 'POST',
	    url: '/APPS/npComponent/comCodeGR.do',
	    params: {
        	CD_ID : cd_id
	    },
	    pCallback: function (v, params, result) {
	        if (result.success) {
	        	var records = result.data;
	        	console.log(grid.columns);
	        	var columns = [];
	        	Ext.each(grid.columns, function(rec){
	        		console.log(rec.editor);
	        		
	        		
	        		if(rec.editor == undefined){
	        			if(rec.xtype != undefined){
	        				columns.push({
			        			text: rec.text,
			        			dataIndex:  rec.dataIndex,
			        			xtype : rec.xtype
			        		});
		        		}else{
		        			columns.push({
			        			text: rec.text,
			        			dataIndex:  rec.dataIndex
			        		});
		        		}
		        		
	        			
	        		}else{
	        			if(rec.xtype != undefined){
	        				columns.push({
			        			text: rec.text,
			        			dataIndex:  rec.dataIndex,
			        			editor: {
			        				xtype: rec.editor.xtype
			        			},
			        			xtype : rec.xtype
			        		})
	        			}else{
	        				columns.push({
			        			text: rec.text,
			        			dataIndex:  rec.dataIndex,
			        			editor: {
			        				xtype: rec.editor.xtype
			        			}
			        		});
	        			}
	        			
	        		}
	        		
	        	});
	        	
	        	Ext.each(result.columns, function(rec){
	        		var keys = Object.keys(rec);
		        	for ( var i in keys) {
		        		console.log("length:"+ keys[i].length + "::key="+keys[i]+ ",  data="+ rec[keys[i]]);
		        		if(keys[i] != "CD_ID" && rec[keys[i]].length > 0 && rec[keys[i]] != null){
		        			columns.push({
			        			text: rec[keys[i]],
			        			dataIndex: keys[i],
			        			editor: {
			        				xtype: 'euitext'
			        			}
			        		});
		        		}
		        		
		        	}
	        	});
	        	grid.reconfigure(grid.store, columns)
	        	grid.store.loadData(records);
	        	grid.store.commitChanges();
	        } else {
	            Ext.Msg.alert('실패', result.message);
	        }
	    }
     });
  }
 

});