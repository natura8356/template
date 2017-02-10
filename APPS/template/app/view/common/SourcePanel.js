Ext.define('template.view.common.SourcePanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'common-sourcepanel',
    scrollable: true,

    config: {
        url: 'app/view/calendar/Source.js',
        lang: 'javascript'
    },
    listeners: {
        afterrender: function () {
            var me = this,
                format = '<pre class="prettyprint" style="border: 0px;"><code class="lang-javascript">{0}</code></pre>',
                langFormat = {
                    js: '<pre class="prettyprint" style="border: 0px;"><code class="lang-javascript">{0}</code></pre>',
                    javascript: '<pre class="prettyprint" style="border: 0px;"><code class="lang-javascript">{0}</code></pre>',
                    html: '<pre class="prettyprint" style="border: 0px;"><code class="lang-html">{0}</pre>',
                    java: '<pre class="prettyprint" style="border: 0px;"><code class="lang-java">{0}</code></pre>'
                },
                str;
            Ext.Ajax.request({
                url: me.getUrl() || 'app/view/calendar/Source.js'
            }).then(function (res) {
                str = res.responseText;
                str = str.replace(/</gi, '&lt;');
                str = str.replace(/>/gi, '&gt;');
                str = Ext.String.format(
                    langFormat[me.getLang()] || format
                    , str);
                me.setHtml(str);
                if (window.PR) {
                    PR.prettyPrint();
                }
            });
        }
    }
});