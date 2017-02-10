Ext.define('template.view.tmp001.TMP001V',{
    extend: 'eui.container.BaseContainer',
    xtype: 'TMP001V',
    title: '운영기초관리',
    requires: [
        'template.view.tmp001.TMP001C',
        'template.view.tmp001.TMP001M',
        'template.view.tmp001.TMP001V01'
    ],
    controller: 'TMP001C',
    viewModel: 'TMP001M',

    items : [
        {
            xtype: 'euiheader',
            title: '운영관리'
        },

        {
            xtype: 'TMP001V01'
        },
        {
            margin: 10,
            xtype: 'euitabpanel',
            items: [
                {
                    xtype: 'TMP001V02',
                    listeners: {
                        render: function () {
                            console.log('TMP001V02')
                        }
                    }
                },
                {
                    xtype: 'TMP001V03',
                    listeners: {
                        render: function () {
                            console.log('TMP001V03')
                        }
                    }
                },
                {
                    xtype: 'TMP001V04',
                    listeners: {
                        render: function () {
                            console.log('TMP001V04')
                        }
                    }
                },
                {
                    xtype: 'TMP001V05',
                    listeners: {
                        render: function () {
                            console.log('TMP001V05')
                        }
                    }
                }
            ]
        }
    ],

    listeners: {
        render: function () {
            console.log('render');
        },
        boxready: function () {
            console.log('boxready');

        }
    }
});