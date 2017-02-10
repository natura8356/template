Ext.define('template.view.tmp006.TMP006C', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.TMP006C',

    initViewModel: function (viewmodel) {
    	
    },
    
    onSearch : function(){
    	this.getViewModel().get('STORE01').reload();
    },
    
    onRightGridLoad: function(grid, record, item){
  	  var grid = this.lookupReference('rightGrid'),
  	  cmpKey = record.get('USE_YN')
    grid.store.load({
        params: {
            cmpKey: cmpKey
        }
    });
  }
});