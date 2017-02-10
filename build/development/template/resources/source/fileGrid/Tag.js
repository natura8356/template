Ext.define('template.view.filegrid.Tag', {
    extend: 'Ext.form.field.Tag',
    xtype: 'filegrid-tag',
    queryMode: 'local',
    store: {
        fields: [],
        data: []
    },
    // 이벤트 propagation을 위한 override
    // 참조 url: http://docs.sencha.com/extjs/6.2.0/classic/src/Tag.js.html#Ext.form.field.Tag-method-onItemListClick
    onItemListClick: function (e) {
        var me = this,
            selectionModel = me.selectionModel,
            itemEl = e.getTarget(me.tagItemSelector),
            closeEl = itemEl ? e.getTarget(me.tagItemCloseSelector) : false;
        // if (me.readOnly || me.disabled) {
        //     return;
        // }
        e.stopPropagation();
        if (itemEl) {
            if (closeEl) {
                me.removeByListItemNode(itemEl);
                if (me.valueStore.getCount() > 0) {
                    me.fireEvent('select', me, me.valueStore.getRange());
                }
            } else {
                me.toggleSelectionByListItemNode(itemEl, e.shiftKey);
            }
            // If not using touch interactions, focus the input
            if (!Ext.supports.TouchEvents) {
                me.inputEl.focus();
            }
        } else {
            if (selectionModel.getCount() > 0) {
                selectionModel.deselectAll();
            }
            me.inputEl.focus();
            if (me.triggerOnClick) {
                me.onTriggerClick();
            }
        }
    },
    // 이벤트 추가를 위하여 override
    // 참조 url: http://docs.sencha.com/extjs/6.2.0/classic/src/Tag.js.html#Ext.form.field.Tag-method-toggleSelectionByListItemNode
    toggleSelectionByListItemNode: function (itemEl, keepExisting) {
        var me = this,
            rec = me.getRecordByListItemNode(itemEl),
            selModel = me.selectionModel;

        if (rec) {
            // 강제로 이벤트 추가
            me.fireEvent('clickitem', rec, me);
            if (selModel.isSelected(rec)) {
                selModel.deselect(rec);
            } else {
                selModel.select(rec, keepExisting);
            }
        }
    },
    // 이벤트 추가를 위하여 override
    // 참조 url: http://docs.sencha.com/extjs/6.2.0/classic/src/Tag.js.html#Ext.form.field.Tag-method-removeByListItemNode
    removeByListItemNode: function (itemEl) {
        var me = this,
            rec = me.getRecordByListItemNode(itemEl);

        if (rec) {
            if (me.fireEvent('removeitem', rec) !== false) {
                me.pickerSelectionModel.deselect(rec);
            }
        }
    }
});