Ext.define('template.view.tmp003.process02.PROCESS02V', {
    extend: 'Ext.container.Container',
    xtype: 'PROCESS02V',
    title: '사업유형',
    requires: [
        'template.view.tmp003.process02.PROCESS02C',
        'template.view.tmp003.process02.PROCESS02M'
    ],
    controller: 'PROCESS02C',
    viewModel: 'PROCESS02M'

});