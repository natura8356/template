Ext.define('template.view.common.BizField', {
    extend: 'eui.form.PopUpFieldContainer',
    alias: 'widget.bizfield',

    defaultListenerScope: true,
    allowBlank: false,

    fieldLabel: '사업자',
    // 사용자 정의 Configs
    // 팝업 내부 호출 주소
    proxyUrl : '/APPS/template/TMP002S_GRID.do',
    // 기본값 SEARCHKEY
    searchKeyField : 'SEARCHKEY',

    popupWidth: 500,

    popupHeight: 250,

    // 호출할 팝업
//    requires: ['template.view.common.PopUp03'],
//    popupConfig: {
//        popupWidget: 'popup03',
//        title: '사업자 검색',
//        width: 500,
//        height: 250
//    },

    secondReadOnly: true,

    // 우측에서 팝업 호출.
    simpleColumns: [
        {
            text: 'USEPRSN_NM',
            dataIndex: 'USEPRSN_NM'
        }
    ],
    // 좌측에서 팝업 호출.
    normalColumns: [
        {
            text: '사업자코드/명',
            dataIndex: 'USEPRSN_NM'
        }
    ],
    // 팝업 내부 폼 정보.
    formConfig: {
        xtype: 'euiform',
        title: '사업자 검색1',
        tableColumns: 1,
        items: [
            {
                xtype: 'euitext',
                name: 'SEARCHKEY',
                fieldLabel: '사업자코드/명'
            }
        ]
    },

    // 최종 선택시 값 설정.
    setPopupValues: function (trigger, record) {
        var me = this,
            firstField = this.down('#firstField'),
            secondField = this.down('#secondField');
        if(Ext.isArray(record)) {
            // 복수 선택 처리.
        }else{
            firstField.setValue(record.get('CNDT'));
            firstField.resetOriginalValue();
            secondField.setValue(record.get('USEPRSN_NM'));
            secondField.resetOriginalValue();
        }
    }
});