Ext.define('dmframe.view.header.DmMenuNav', {
    extend: 'Ext.Component',
    xtype: 'dmmenunav',
    tpl: [
        '<nav>',
        '<div class="inWrap">',
        '<tpl for=".">',
        '<div class="menu">',
        '<a href="#">{MENU_NAME}</a>',
        '<div class="submenu" >',
        '<em>▲</em>',
        '<div class="row">',
        '{[this.setUrlLink(values, xindex)]}',

        '</div>',
        '</div>',
        '</div>',
        '</tpl>',
//        '<div class="icon"><a href="#"><img width="35px" height="35px" src="resources/html/images/icon.png"></a></div>',
        '</div>',
        '</nav>',
        {
            setLstUrl: function (value) {
                var me = this,
                    total = value.length,
                    retValue = '';

                for (var i = 0; i < total; i++) {
                    var data = value[i];
                    retValue = retValue + '<a href="#' + data.MENU_WIDGET + '">' + data.MENU_NAME + '</a>';

                }
                return retValue;
            },

            setUrlLink: function (value, idx) {

                var me = this,
                    total = value.children.length;
                var first = Ext.util.Format.round(total / 2);
                var second = total - first;
                var firstArray = [],
                    secondArray = [];
                var str = '';
                Ext.each(value.children, function (child, idx) {

                    if (idx < first) {
                        console.log(child, idx);
                        firstArray.push(child)
                    } else {
                        secondArray.push(child)
                    }
                });


                retArray = function (value) {
                    var retValue = '';
                    for (var i = 0; i < value.length; i++) {
                        if (i == 0) {
                            retValue = retValue + '<div class="col">';
                        }

                        retValue = retValue + '<div><p><a href="#">' + value[i].MENU_NAME + '</a></p>';
                        retValue = retValue + '<div class="bdr"> ';
                        retValue = retValue + me.setLstUrl(value[i].children);

                        retValue = retValue + '</div></div>';

                        if (i == (value.length - 1)) {
                            retValue = retValue + '</div>';
                        }

                    }
                    return retValue;
                }

                str = str + retArray(firstArray);
                str = str + retArray(secondArray);

                return str;

            }
        }
    ],

    initComponent: function () {
        console.log('sessionRecord', Util.sessionRecord)
        Ext.apply(this, {
            data: Util.sessionRecord.get('MENU_DATA')
        })
        this.callParent(arguments);
    }
});
//var total = 13;
//var divi =
//Ext.util.Format.round(13 / 2);
//13 - 7 = 6
//
//7 , 6
//
