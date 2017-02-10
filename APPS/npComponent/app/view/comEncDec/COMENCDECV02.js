Ext.define('npComponent.view.comEncDec.COMENCDECV02', {
    extend: 'eui.container.BaseContainer',
    requires:['npComponent.view.comEncDec.COMBOBOX'],
    xtype: 'COMENCDECV02',
    title: '암복호화',
    width: 1000,
    height: 600,
    bodyPadding: 10,
    layout: 'form',
    	
    items:[{
    	  xtype: 'container',
          layout: {
              type: 'table',
              columns: 3,
              tdAttrs: { style: 'padding: 5px 10px;' }
          },
          items: [
          	    { 
          	    	xtype: 'textfield',
          	    	fieldLabel: '키값',
          	    	width: 400,
          	    	reference:'keyvalue',
          	    	colspan: 3
          	    },
          	    {
        			reference: 'encmthd',
        			fieldLabel: '암호화방식',   
        			hideLabel: false,
        			width: 200,
        		    xtype: 'encdeccombo',
        		    colspan: 3
          	    },
          	    { 
          	    	width: 300,
          	    	height: 300,
          	        title: '암호화text',
          	        xtype: 'textarea',
          	        reference: 'encform',
          	        dataIndex: 'enctext',
          	        fieldLabel: '암호화text',
          	        bind: '{RECORD.ENCTEXT}',
                    labelAlign:'top',
                    rowspan:2
                    
          	    },
          	    { 
          	    	width: 90,
          	    	layout: 'fit',
          	        items:[{
          	        	xtype:'button',
          	        	text: '암호화->',
          	        	scale: 'large',
          	        	handler: 'dataEnc'
          	        }]
          	    },
          	    { 
          	    	width: 300,
          	    	height: 300,
          	        title: '복호화text',
          	     	xtype: 'textarea',
          	        fieldLabel: '복호화text',
          	        dataIndex: 'dectext',
          	        reference: 'decform',
          	        bind: '{RECORD.DECTEXT}',
                    labelAlign:'top',
                    rowspan:2
          	    },
          	    {
          	    	layout: 'fit',
          	    	items:[
          	        {
          	        	xtype:'button',
          	        	text: '<-복호화',
          	        	scale: 'large',
          	        	handler: 'dataDec'
          	        }]
          	    }
          ]
    }]


    

});