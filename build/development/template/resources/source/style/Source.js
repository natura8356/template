
Ext.define('template.view.style.Source',{
    extend: 'Ext.panel.Panel',
    xtype: 'style-source',
    items: [
        {
            xtype: 'toolbar',
            ui: 'plain',
            items: [
                {
                    xtype: 'euiheader',
                    iconCls: '',
                    width: 200,
                    title: 'PAGE TITLE 페이지 타이틀'
                },
                '->',
                {
                    scale: 'medium',
                    showPrintBtn: true,
                    showRowAddBtn: true,
                    showRowDelBtn: true,
                    showRegBtn: true,
                    showReloadBtn: true,
                    showModBtn: true,
                    showSaveBtn: true,
                    showCloseBtn: true,
                    showExcelDownBtn: true,

                    xtype: 'euicommand',
                    params: {
                        PGMID: 'A000',
                        POSIT: '1'
                    },
                    listeners: {
                        rowaddbtnclick: function () {

                        },
                        regbtnclick: 'onRowReg',
                        rowdeletebtnclick: function () {

                        },
                        savebtnclick: 'onRowSave'
                    }
                }
            ]

        },
        {
            xtype : 'euiform',
            margin: 10,
            iconCls: null,
            title: 'PAGE TITLE 페이지 타이틀',
            header: {
                xtype: 'header',
                titlePosition: 0,
                iconCls: '',
                items: [
                    {
                        hideTextPrintBtn: true,
                        hideTextReloadBtn: true,
                        hideAddBtnICon: true,
                        hideDelBtnICon: true,
                        hideRegBtnICon: true,
                        hideModBtnICon: true,
                        hideSaveBtnICon: true,
                        showReloadBtn: true,
                        showPrintBtn: true,
                        showRowAddBtn: true,
                        showRowDelBtn: true,
                        showSaveBtn: true,
                        xtype: 'euicommand',
                        params: {
                            PGMID: 'A000',
                            POSIT: '1'
                        },
                        listeners: {
                            rowaddbtnclick: function () {

                            },
                            regbtnclick: 'onRowReg',
                            rowdeletebtnclick: function () {

                            },
                            savebtnclick: 'onRowSave'
                        }
                    }
                ]
            },
            items: [
                {
                    xtype: 'euitext',
                    fieldLabel: 'FORM FIELD'
                },
                {
                    xtype: 'euitext',
                    fieldLabel: 'FORM FIELD'
                }
            ]
        },
        {
            xtype : 'euigrid',
            margin: 10,
            height: 200,
            iconCls: null,
            title: 'PAGE TITLE 페이지 타이틀',
            header: {
                xtype: 'header',
                iconCls: '',
                titlePosition: 0,
                items: [
                    {
                        hideTextPrintBtn: true,
                        hideTextReloadBtn: true,
                        hideAddBtnICon: true,
                        hideDelBtnICon: true,
                        hideRegBtnICon: true,
                        hideModBtnICon: true,
                        hideSaveBtnICon: true,
                        showReloadBtn: true,
                        showPrintBtn: true,
                        showRowAddBtn: true,
                        showRowDelBtn: true,
                        showSaveBtn: true,
                        xtype: 'euicommand',
                        params: {
                            PGMID: 'A000',
                            POSIT: '1'
                        },
                        listeners: {
                            rowaddbtnclick: function () {

                            },
                            regbtnclick: 'onRowReg',
                            rowdeletebtnclick: function () {

                            },
                            savebtnclick: 'onRowSave'
                        }
                    }
                ]
            },
            columns: [
                {
                    text: 'euitext',
                    fieldLabel: 'FORM FIELD'
                },
                {
                    text: 'euitext',
                    fieldLabel: 'FORM FIELD'
                }
            ]
        },
        {
            xtype: 'panel',
            items: [
                {
                    xtype: 'panel',
                    title: 'small',
                    defaults: {
                        xtype: 'euibutton',
                        // class x-btn-default-toolbar-small
                        scale: 'small',
                        ui: 'default-toolbar'
                    },
                    items: [
                        {
                            cls: 'bgtype1',
                            iconCls: 'x-fa fa-refresh'
                        },
                        {
                            cls: 'bgtype1',
                            iconCls: 'x-fa fa-print'
                        },
                        {
                            iconCls: 'x-fa fa-plus'
                        },
                        {
                            iconCls: 'x-fa fa-trash'
                        },
                        {
                            iconCls: 'x-fa fa-table'
                        },
                        {
                            iconCls: 'x-fa fa-pencil-square-o'
                        },
                        {
                            iconCls: 'x-fa fa-save'
                        },
                        {
                            iconCls: 'x-fa fa-sign-out'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'medium',
                    defaults: {
                        xtype: 'euibutton',
                        // class x-btn-default-toolbar-medium
                        scale: 'medium',
                        ui: 'default-toolbar'
                    },
                    items: [
                        {
                            iconCls: 'x-fa fa-refresh',
                            cls: 'bgtype1'
                        },
                        {
                            iconCls: 'x-fa fa-print',
                            cls: 'bgtype1'
                        },
                        {
                            iconCls: 'x-fa fa-plus'
                        },
                        {
                            iconCls: 'x-fa fa-trash'
                        },
                        {
                            iconCls: 'x-fa fa-table'
                        },
                        {
                            iconCls: 'x-fa fa-pencil-square-o'
                        },
                        {
                            iconCls: 'x-fa fa-save'
                        },
                        {
                            iconCls: 'x-fa fa-sign-out'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    title: 'large',
                    defaults: {
                        xtype: 'euibutton',
                        // class x-btn-default-toolbar-large
                        scale: 'large',
                        ui: 'default-toolbar'
                    },
                    items: [
                        {
                            iconCls: 'x-fa fa-refresh',
                            cls: 'bgtype1'
                        },
                        {
                            iconCls: 'x-fa fa-print',
                            cls: 'bgtype1'
                        },
                        {
                            iconCls: 'x-fa fa-plus'
                        },
                        {
                            iconCls: 'x-fa fa-trash'
                        },
                        {
                            iconCls: 'x-fa fa-table'
                        },
                        {
                            iconCls: 'x-fa fa-pencil-square-o'
                        },
                        {
                            iconCls: 'x-fa fa-save'
                        },
                        {
                            iconCls: 'x-fa fa-sign-out'
                        }
                    ]
                }
            ]
        }
    ]
});
