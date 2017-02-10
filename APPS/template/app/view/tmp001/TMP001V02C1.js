Ext.define('template.view.tmp001.TMP001V02C1', {
    extend: 'Ext.container.Container',
    xtype: 'TMP001V02C1',
    requires: [
        'template.view.tmp001.TMP001V02G1',
        'template.view.tmp001.TMP001V02F1'
    ],

    /**
     * @event itemdblclick
     * 그리드 로우 더블클릭 이벤트 릴레이.
     * @param {Ext.grid.Panel} this
     * @param {Ext.data.Store} store The store that was passed to the {@link #method-reconfigure} method
     * @param {Object[]} columns The column configs that were passed to the {@link #method-reconfigure} method
     * @param {Ext.data.Store} oldStore The store that will be replaced
     * @param {Ext.grid.column.Column[]} oldColumns The column headers that will be replaced.
     */

    defaultListenerScope: true,

    viewModel: {
        stores: {
            STORE01: {
                fields: [
                    {
                        name: "field5",
                        type: "date",
                        dateFormat: "Ymd"
                    }
                ],
                proxy: {
                    type: 'rest',
                    actionMethods: {
                        read: 'GET',
                        create: 'POST',
                        update: 'POST',
                        destroy: 'POST'
                    },

//                    api: {
//                        create: 'resources/data/success.json?create',
//                        read: 'resources/data/data1.json?read',
//                        update: 'resources/data/success.json?update',
//                        destroy: 'resources/data/success.json?destroy'
//                    },
                    url: 'resources/data/data1.json?read',
                    reader: {
                        type: 'json',
                        rootProperty: 'data'
                    },
                    writer: {
                        type: 'json',
                        allowSingle: false,
                        writeAllFields: true
                    }
                }
            }
        },
        formulas: {
            formStatus: {
                bind: {
                    bindTo: '{RECORD}',
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
    defaults: {
        margin: 5
    },

    onOrderCmpReject: function (button) {
        var me = this,
            rec = me.getViewModel().get('RECORD');
        rec.reject();
    },

    onOrderCmpSave: function (button) {
        var me = this,
            grid = me.down('grid'),
            rec = me.getViewModel().get('RECORD');
        if (rec.isModel && rec.dirty) {
            Ext.Msg.show({
                title: Util.getLocaleValue('CONFIRM'),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                message: Util.getLocaleValue('RECORD_SAVE'),
                fn: function (btn) {
                    if (btn === 'yes') {
                        if (rec.phantom) {
                            grid.store.add(rec);
                        }
                        grid.store.sync({
                            callback: function () {
                                Ext.Msg.alert(Util.getLocaleValue('CONFIRM'), Util.getLocaleValue('RECORD_SAVED'));
                            }
                        });
                    }
                }
            });
        }
    },

    onOrderCmpAdd: function () {
        var rec = this.getViewModel().get('RECORD');
        if (rec) {
            if (rec.dirty) {
                Ext.Msg.alert(Util.getLocaleValue('CONFIRM'), Util.getLocaleValue('RECORD_DIRTY'));
                return;
            }
        }
        this.getViewModel().set('RECORD', new template.model.Base());
    },

    onOrderCmpDel: function (button) {
        var me = this,
            grid = me.down('grid'),
            rec = me.getViewModel().get('RECORD');
        if (!rec.phantom) {
            Ext.Msg.show({
                title: Util.getLocaleValue('CONFIRM'),
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.QUESTION,
                message: Util.getLocaleValue('RECORD_DELETE'),
                fn: function (btn) {
                    if (btn === 'yes') {
                        grid.store.remove(rec);
                        grid.store.sync({
                            callback: function () {
                                me.getViewModel().set('RECORD', new template.model.Base());
                            }
                        });
                    }
                }
            });
        }
    },

    onOrderCmpClick: function (grid, record, item, index) {
        this.getViewModel().set('RECORD', record);
    },

    dataReload: function (parameters) {
        var grid = this.down('grid'),
            cmpKey = parameters[0],
            mainStore = grid.store;
        mainStore.load({
            params: {
                cmpKey: cmpKey
            }
        });

        this.fireEvent('itemdblclick', grid, null);

        // 폼 초기화.
        this.getViewModel().set('RECORD', new template.model.Base());
    },

    listeners: {
        euitabload: 'dataReload'
    },

    items: [
        {
            xtype: 'TMP001V02G1',
            listeners: {
                itemdblclick: 'onOrderCmpClick'
            },
            bind: {
                store: '{STORE01}'
            }
        },
        {
            xtype: 'TMP001V02F1'
        }
    ],


    onRender: function () {
        this.relayEvents(this.down('TMP001V02G1'), ['itemdblclick']);
        this.callParent(arguments)
    }
});