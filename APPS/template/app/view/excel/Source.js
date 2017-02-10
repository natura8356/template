Ext.define('template.view.excel.Source', {
    extend: 'Ext.panel.Panel',
    xtype: 'excel-source',
    requires: [
        'eui.ExcelReader'
    ],
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    controller: {
        type: 'controller',

        selectFile: function () {
            var me = this,
                panel = this.view.down('panel'),
                field = this.view.down('filefield'),
                code = panel.body.el.dom.querySelector('code'),
                file = field && field.fileInputEl.dom.files[0];//선택된 파일
            
            XlReader.excelToJson({
                // excel File(XLSX) (required)
                file: file,
                // parsing 시작 cell
                //start: 'A1',
                // parsing 끝 cell
                //end: 'H4',
                // 파일을 파싱한 후 CALLBACK
                success: function (ret, sheet, workbook) {
                    code.innerHTML = JSON.stringify(ret, undefined, 2);
                    field.reset();// 파일읽기 종료 후에는 filefield 초기화
                }
            });
        }
    },
    items: [
        {
            xtype: 'filefield',
            fieldLabel: '파일',
            listeners: {
                change: 'selectFile'
            }
        },
        {
            xtype: 'panel',
            flex: 1,
            scrollable: 'y',
            html: '<pre class="prettyprint" style="border: 0px;">' +
            '<code style="color: #080"></code>' +
            '</pre>'
        }
    ]
});
