Ext.define('dmframe.view.dashboard.ToDoList', {
    extend: 'Ext.view.View',
    xtype: 'todolist',

    initComponent: function () {
        Ext.apply(this, {
            data: [
                {
                    ICON: 'do_a',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                },
                {
                    ICON: 'do_b',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                },
                {
                    ICON: 'do_c',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                },
                {
                    ICON: 'do_d',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                },
                {
                    ICON: 'do_e',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                },
                {
                    ICON: 'do_f',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                },
                {
                    ICON: 'do_a',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                },
                {
                    ICON: 'do_b',
                    DESC: '하자요청 사항입니다. 하자요청 사항입니다'
                }
            ]
        });
        this.callParent(arguments);
    },

    itemSelector: 'div',
    tpl: ['<div class="colLeft">',
        '<div class="dateTitle">',
        '<h2>TO-DO LIST</h2>',
        '<div class="dateNav">',
        '<a href="#" class="ico prev"><em class="blind">prev</em></a>',
        '<span class="selectDay">오늘 2017.10.27</span>',
        '<a href="#" class="ico next"><em class="blind">next</em></a>',
        '</div>',
        '</div>',
        '<div class="todoList">',
        '<ul>',
        '<tpl for=".">',
        '<li><em class="ico {ICON}"></em><a href="#">{DESC}</a></li>',
        '</tpl>',
//        '<li><em class="ico do_b"></em><a href="#">하자요청 사항입니다. 하자요청 사항입니다...</a></li>',
//        '<li><em class="ico do_c"></em><a href="#"><del>하자요청 사항입니다. 하자요청 사항입니다...</del></a></li>',
//        '<li><em class="ico do_d"></em><a href="#"><del>하자요청 사항입니다. 하자요청 사항입니다...</del></a></li>',
//        '<li><em class="ico do_e"></em><a href="#"><del>하자요청 사항입니다. 하자요청 사항입니다...</del></a></li>',
//        '<li><em class="ico do_f"></em><a href="#"><del>하자요청 사항입니다. 하자요청 사항입니다...</del></a></li>',
//        '<li><em class="ico do_g"></em><a href="#"><del>하자요청 사항입니다. 하자요청 사항입니다...</del></a></li>',
        '</ul>',
        '</div>',
        '</div>'
        ],
    data:{}
});
