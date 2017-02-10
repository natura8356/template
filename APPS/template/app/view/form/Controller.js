Ext.define('template.view.form.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sample-form',

    listen: {
        component: {
            'sample-form': {
                render: 'setRecord'
            }
        }
    },

    setRecord: function () {
       var me = this;
        Util.CommonAjax({
            url:'/APPS/template/tmpForm.do',
//            url : 'resources/data/formdata.json',
        	pCallback: function (v, params, result) {
                if (result.success) {
                   var obj = result.data[0];
                    Ext.apply(obj, {
                    	CHECKBOX1: 'Y',
                    	FILEPARAM: {
                    		ID_FILE_DTIL: obj.ID_FILE_DTIL
                    	}
                    });
                    me.getViewModel().set('RECORD', Ext.create('Ext.data.Model', obj));
                } else {
                    Ext.Msg.alert('저장실패', '저장에 실패했습니다...');
                }
            }
        });
    },

    onSaveMember: function () {
        var data = this.getViewModel().get('RECORD').getData();
        data['__rowStatus'] = 'U';
        Util.CommonAjax({
            method: 'POST',
            url: '/APPS/template/tmpFormSV.do',
            params: {
               data : data
            },
            pCallback: function (v, params, result) {
                if (result.success) {
                    Ext.Msg.alert('저장성공', '정상적으로 저장되었습니다.');
                } else {
                    Ext.Msg.alert('저장실패', '저장에 실패했습니다...');
                }
            }
        });
    },

    onExcelUpLoadDB : function(fld){
        var file = fld.fileInputEl && fld.fileInputEl.dom.files,
	        formData = new FormData(),
	        xhr = new XMLHttpRequest(),
	        msg;
        
	    file = file[0];
	    formData.append('file', file);
	    xhr.open('POST', '/APPS/npComponent/xssWorkImport.do');
	    xhr.addEventListener('load', function () {
	        msg.close();
	    });
	    Ext.apply(xhr, {
	        onloadstart: function () {
	            msg = Ext.Msg.show({
	                msg: '업로드 중입니다',
	                wait: true
	            });
	        },
	        onabort: function () {
	            msg.close();
	        }
	    });
    	xhr.send(formData);
    },
    
	onExcelDownLoadDB : function() {
    	Ext.Msg.show({
            title: '확인',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            message: '엑셀 다운로드 하시겠습니까?',
            fn: function (btn) {
                if (btn === 'yes') {
                	 var formData = new FormData();
                	 formData.append("S_FUNC_CODE", "CH");
                	 Util.fileClickApi(formData, null, '/npframework/ExcelfileDownload.do');
                }
            }
        });        
    	 
    },
    
    checkBoxgroupAllCheck: function () {
        var ckg = this.lookupReference('euicheckboxgroup01');
        ckg.setValue(['A1','A2','A3','A4','A5'])
    },

    checkBoxgroupAllUnCheck: function () {
        var ckg = this.lookupReference('euicheckboxgroup01');
        ckg.setValue()
    },

    /***
     * 라디오 그룹을 변경한다.
     * @param combo
     * @param record
     */
    setRadioGroup: function (combo, record) {
        var rg = this.lookupReference('euiradiogroup');
        rg.setValue(record.get(combo.valueField))
    },
    
    setPopupValues: function (trigger, record, valueField, displayField) {
        var formrecord = this.getViewModel().get('RECORD');
        formrecord.set(record.getData());
        formrecord.set('DESC', record.get('NAME') + '('+ record.get('ENG_NAME') +')'+ record.get('AGE') + record.get('ADDRR'));
    }
});
