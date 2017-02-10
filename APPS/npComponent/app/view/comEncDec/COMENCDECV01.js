Ext.define('npComponent.view.comEncDec.COMENCDECV01',{
	extend: 'Ext.form.Panel',
	xtype: 'COMENCDECV01',
    extend: 'eui.panel.Panel',
    margin : 10,

    header: {
        xtype: 'header',
        titlePosition: 0,
        items: [
            {
                xtype: 'component',
                html : '암복호화'
            }
        ]
    },
    title: '암복호화'
});