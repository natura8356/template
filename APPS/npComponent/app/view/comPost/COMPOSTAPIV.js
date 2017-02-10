Ext.define('npComponent.view.comPost.COMPOSTAPIV',{

//    extend: 'eui.form.Panel',
//	extend: 'eui.container.BaseContainer',
	extend: 'eui.panel.Panel',
	
    xtype: 'COMPOSTAPIV',  
    margin: 5,
//    tableColumns: 2,  //panel
//    columns:2,
    layout:'table',  //panel
    
//    layout:'hbox',  //form

    items:[{
        width: 80,
        height: 300,
        items:[
        {
      	  xtype:'euibutton',
      	  text:'주소검색',
      	  handler: 'goPopup'
        }/*,
        {
        	xtype:'COMPOSTAPIV01'
        }*/]
    },{
        width: 500,
        height: 300,
        
        //도로명주소 사이트 api
    	items:[{
	            xtype: 'euitext',
	            fieldLabel: '우편번호',
	            dataIndex : 'zipNo',
	            id: 'zipNo'
//	    		editor : {
//	    			xtype : 'euifieldLabel'
//	    		},
//	            bind: '{customerRecord.mailnum}'
	        },
            {
                xtype: 'hiddenfield',
                id: 'confmKey',
                value: 'hidden field'
            },
	        {
	        	xtype: 'euitext',
	            fieldLabel: '도로명주소',
	            dataIndex : 'roadAddrPart1',
	            id: 'roadAddrPart1'
//	    		editor : {
//	    			xtype : 'euifieldLabel'
//	    		},
//	           bind: '{customerRecord.loadaddr}'
	        },
	        {
	        	xtype: 'euitext',
	            fieldLabel: '상세주소',
	            dataIndex : 'addrDetail',
	            id: 'addrDetail'
//	    		editor : {
//	    			xtype : 'euifieldLabel'
//	    		},
//	            bind: '{customerRecord.dtiladdr}'
	        },
	        {
	        	xtype: 'euitext',
	            fieldLabel: '참고항목',
	            dataIndex : 'roadAddrPart2',
	            id: 'roadAddrPart2'
//	    		editor : {
//	    			xtype : 'euifieldLabel'
//	    		},
//	            bind:'{customerRecord.rfrc}'
	        } 	       
   	    ]
      //daum api
  /*      layout: 'vbox',
        items : [
     	    	{
     	    		xtype : 'panel',
     	    		layout: 'hbox',
     	    		items : [{
     	    		    xtype : 'textfield',
     	    		    width : 100,
     	    		    id : 'zipcode1'
     	    	    },{
     	    		    xtype : 'label',
     	    		    align : 'center',
     	    		    text : '-'
     	    	    },{
     	    		    xtype : 'textfield',
     	    		    width : 100,
     	    		    id : 'zipcode2'
     	    	    },{
     	    	    	xtype : 'button',
     	    	    	text : '우편번호찾기',
     	    	    	handler : function(){
     	    	    		var win = Ext.create("Ext.window.Window",{
     	    	    			height:600,
     	    	    			width:500,
     	    	    			modal : true,
     	    	    			autoShow : false,
     	    	    			titleAlign : 'center',
     	    	    			layout : 'fit',
     	    	    			items : [{
     	    	    	        	 xtype: 'component',
     	    	    	        	 id : 'ext_address'
     	    	    	         }]
     	    	    		});
     	    	    		
     	    	            win.show(undefined,function(){
     	    	            	new daum.Postcode({
     	    	                    oncomplete: function(data) {
     	    	                    	Ext.getCmp("zipcode1").setValue(data.postcode1);
     	    	                        Ext.getCmp("zipcode2").setValue(data.postcode2);
     	    	                        Ext.getCmp("default_addr").setValue(data.address);
                                            // data.addressEnglish; <<< 영문주소 값
     	    	                        Ext.getCmp("detail_addr").focus();
     	    	                    	win.destroy();
     	    	                    },
     	    	                    width : '100%',
     	    	                    height : '100%'
     	    	                }).embed(Ext.get('ext_address'));
     	    	            });
     	    	    	}
     	    	    }]
     	    	},
     	    	{
     	    		xtype : 'panel',
     	    		items : [{
     	    		    xtype : 'textfield',
     	    		    width : 430,
     	    		    emptyText : '기본주소',
     	    		    id : 'default_addr'
     	    	    }]
     	    	},
     	    	{
     	    		xtype : 'panel',
     	    		items : [{
     	    		    xtype : 'textfield',
     	    		    width : 430,
     	    		    emptyText : '상세주소',
     	    		    id : 'detail_addr'
     	    	    }]
     	    	} 
             ]*/
	
    }],
    
    bbar: [
        '->',
       /* {
            xtype: 'euibutton',
            text: '저장',
            formBind: true,
            iconCls: '#{저장아이콘}',
            handler: 'onSaveForm'
        },
        {
            xtype: 'euibutton',
            iconCls: '#{행삭제아이콘}',
            bind: {
                disabled: '{formStatus.phantom}'
            },
            text: '#{행삭제}',
            handler: 'onDelFormRecord'
        },*/
        {
            xtype: 'euibutton',
            text: '닫기',
            iconCls: 'x-fa fa-sign-out',
            listeners: {
                click: function () {
                    var window = Util.getOwnerCt(this);
                    if (Util.getOwnerCt(this).xtype === 'window') {
                        window.close();
                    }
                }
            }
        }
    ],

    // 내부 메소드 호출 가능.
    defaultListenerScope: true,

    viewModel: {
        formulas : {
            formStatus: {
                bind: {
                    bindTo: '{customerRecord}',
                    deep: true
                },
                get: function (user) {
                    if (!user) {
                        return {
                            dirty: true,
                            valid: false,
                            phantom: true,
                            validAndDirty: false,
                            disabled: true
                        }
                    }
                    var status = {
                        dirty: user ? user.dirty : true,
                        valid: user ? user.isValid() : false,
                        phantom: user.phantom,
                        disabled: false
                    };
                    status.validAndDirty = status.dirty && status.valid;
                    return status;
                }
            }
        }
    },

    onSaveForm: function () {
        var rec = this.getViewModel().get('customerRecord');//.getData();
        this.fireEvent('onsaveform', rec);
    },
    //daum api
    openDaumPostcode : function () {
        new daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
                // 우편번호와 주소 정보를 해당 필드에 넣고, 커서를 상세주소 필드로 이동한다.
                Ext.getCmp("zipcode1").setValue(data.postcode1);
                Ext.getCmp("zipcode2").setValue(data.postcode2);
                Ext.getCmp("default_addr").setValue(data.address);
               // data.addressEnglish; <<< 영문주소 값
                Ext.getCmp("detail_addr").focus();
            }
        }).open();
    },
    
    //도로명주소 사이트 api
    goPopup : function (){/*debugger;*/
    	// 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrLinkUrl.do)를 호출하게 됩니다.
//        var pop = window.open("jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
    	var pop = window.open("jusoPopup.jsp","pop","width=570,height=420, scrollbars=yes, resizable=yes");
    	window.jusoCallBack=  function (roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn){
        	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
//        	debugger;
        	//화면에 맞게 정의_왼쪽이 팝업창에 해당하는 위치
        	Ext.getCmp("roadAddrPart1").setValue(roadAddrPart1);
        	Ext.getCmp("roadAddrPart2").setValue(roadAddrPart2);
        	Ext.getCmp("addrDetail").setValue(addrDetail);
        	Ext.getCmp("zipNo").setValue(zipNo);
//        	document.form.roadAddrPart1.value = roadAddrPart1;
//        	document.form.roadAddrPart2.value = roadAddrPart2;
//        	document.form.addrDetail.value = addrDetail;
//        	document.form.zipNo.value = zipNo;
        }
//    	alert(pop)
    },
    jusoCallBack : function (roadFullAddr,roadAddrPart1,addrDetail,roadAddrPart2,engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn){
    	// 팝업페이지에서 주소입력한 정보를 받아서, 현 페이지에 정보를 등록합니다.
    	//화면에 맞게 정의_왼쪽이 팝업창에 해당하는 위치
    	Ext.getCmp("roadAddrPart1").setValue(roadAddrPart1);
    	Ext.getCmp("roadAddrPart2").setValue(roadAddrPart2);
    	Ext.getCmp("addrDetail").setValue(addrDetail);
    	Ext.getCmp("zipNo").setValue(zipNo);
//    	document.form.roadAddrPart1.value = roadAddrPart1;
//    	document.form.roadAddrPart2.value = roadAddrPart2;
//    	document.form.addrDetail.value = addrDetail;
//    	document.form.zipNo.value = zipNo;
    }
    
    
    

});

