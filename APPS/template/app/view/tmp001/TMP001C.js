Ext.define('template.view.tmp001.TMP001C', {
    extend: 'eui.mvvm.ViewController',
    alias: 'controller.TMP001C',

    dataSearch: function (button) {
        var cmpKey = this.lookupReference('cmpKey').getValue();
//        this.getView().down('TMP001V02').fireEvent('dataReload', cmpKey);
//        this.getView().down('TMP001V03').fireEvent('dataReload', cmpKey);
        var n = Ext.Number.randomInt(1,10);
        this.view.down('euitabpanel').fireEvent('euitabload', [cmpKey]);
    }
});