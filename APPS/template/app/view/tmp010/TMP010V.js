Ext.define('template.view.tmp010.TMP010V', {
    // 하나의 프로그램 최상단 일경우 확장.
    extend: 'eui.container.BaseContainer',
    xtype: 'TMP010V',
    title: 'TMP010V',
    requires: [
        'template.view.tmp010.TMP010V01',
        'template.view.tmp010.TMP010V02',
        'template.view.tmp010.TMP010C',
        'template.view.tmp010.TMP010M'
    ],
    controller: 'TMP010C',
    viewModel: 'TMP010M',

    items: [
        {

            xtype: 'TMP010V01'
        },
        {
            reference: 'tree',
            xtype: 'TMP010V02'
        }
    ]

});