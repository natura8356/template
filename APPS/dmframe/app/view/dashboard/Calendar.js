Ext.define('dmframe.view.dashboard.Calendar', {
//    extend: 'Ext.view.View',
    extend: 'Ext.Component',
//    extend: 'Ext.calendar.panel.Panel',
    xtype: 'tomokcalendar',

    initComponent: function () {
        Ext.apply(this, {
            data: [
                {
                    SUN: '10/23',
                    SUN_TASK: [
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        }
                    ],
                    MON: '10/24',
                    MON_TASK: [
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_b',
                            TEXT: '기타'
                        }
                    ],
                    TUE: '10/25',
                    TUE_TASK: [
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_b',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_c',
                            TEXT: '프로젝트 킥오프'
                        }
                    ],
                    WED: '10/26',
                    WED_TASK: [
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_b',
                            TEXT: '기타'
                        }
                    ],
                    THU: '10/27',
                    THU_TASK: [
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_b',
                            TEXT: '기타'
                        }
                    ],
                    FRI: '10/28',
                    FRI_TASK: [
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_b',
                            TEXT: '기타'
                        }
                    ],
                    SAT: '10/29',
                    SAT_TASK: [
                        {
                            TYPE: 'col_a',
                            TEXT: '기타'
                        },
                        {
                            TYPE: 'col_b',
                            TEXT: '기타'
                        }
                    ]
                },
                {
                    SUN: '10/30',
                    MON: '10/31',
                    TUE: '11/01',
                    WED: '11/02',
                    THU: '11/03',
                    FRI: '11/04',
                    SAT: '11/05'
                }
            ]
        });
        this.callParent(arguments);
    },

//    itemSelector: 'div',
    tpl: [
//        '<div class="colRight schedule">',
//            '<div class="conTitle">',
//                '<div class="fl">',
//                '<h2>일정관리</h2>',
//                '<a href="#" class="ico prev"><em class="blind">◀</em></a><a href="#" class="ico next"><em class="blind">▶</em></a>',
//            '</div>',
//            '<div class="fr">',
//                '<span style="margin-left:5px;" class="ico badge_a">출장</span>',
//                '<span style="margin-left:5px;" class="ico badge_b">업무</span>',
//                '<span style="margin-left:5px;" class="ico badge_c">회의</span>',
//                '<span style="margin-left:5px;" class="ico badge_d">보고</span>',
//                '<span style="margin-left:5px;" class="ico badge_e">기타</span>',
//            '</div>',
//        '</div>',


        '<div class="colRight schedule">',
        '<div class="conTitle">',
        '<div class="fl">',
        '<h2>일정관리</h2>',
        '<a href="#" class="ico prev"><em class="blind">◀</em></a><a href="#" class="ico next"><em class="blind">▶</em></a>',
        '</div>',
        '<div class="fr">',
        '<span style="margin-left:5px;" class="ico badge_a">출장</span>',
        '<span style="margin-left:5px;" class="ico badge_b">업무</span>',
        '<span style="margin-left:5px;" class="ico badge_c">회의</span>',
        '<span style="margin-left:5px;" class="ico badge_d">보고</span>',
        '<span style="margin-left:5px;" class="ico badge_e">기타</span>',
        '</div>',
        '</div>',
        '<table summary="일정관리 캘린더입니다.">',
        '<caption>일정관리</caption>',
        '<colgroup><col span="7"></colgroup>',
        '<thead><tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr></thead>',
        '<tbody>',
        '<tpl for=".">',
        '<tr>',
        '<td id=TD{[values.SUN.replace("/","")]}>',
            '<div>',
            '<p>{SUN}</p>',
            '{[this.setTask(values, "SUN_TASK")]}',
            '</div>' +
        '</td>',
        '<td id=TD{[values.MON.replace("/","")]}>',
        '<div>',
        '<p>{MON}</p>',
        '{[this.setTask(values, "MON_TASK")]}',
        '</div>',
        '</td>',
        '<td id=TD{[values.TUE.replace("/","")]}>',
        '<div>',
        '<p>{TUE}</p>',
        '{[this.setTask(values, "TUE_TASK")]}',
        '</div>',
        '</td>',
        '<td id=TD{[values.WED.replace("/","")]}>',
        '<div>',
        '<p>{WED}</p>',
        '{[this.setTask(values, "WED_TASK")]}',
        '</div>',
        '</td>',
        '<td id=TD{[values.THU.replace("/","")]}>',
        '<div>',
        '<p>{THU}</p>',
        '{[this.setTask(values, "THU_TASK")]}',
        '</div>',
        '</td>',
        '<td id=TD{[values.FRI.replace("/","")]}>',
        '<div>',
        '<p>{FRI}</p>',
        '{[this.setTask(values, "FRI_TASK")]}',
        '</div>',
        '</td>',
        '<td id=TD{[values.SAT.replace("/","")]}>',
        '<div>',
        '<p>{SAT}</p>',
        '{[this.setTask(values, "SAT_TASK")]}',
            '</div>' +
        '</td>',
        '</tr>',
        '</tpl>',
        '</tbody>',
        '</table>',
        '</div>',
        {
            setTask: function (value, TASK) {
                var me = this,
                    tasks = value[TASK];
                if(!tasks){
                    return '';
                }
                    total = tasks.length,
                    retValue = '<ul>';

                for (var i = 0; i < total; i++) {
                    var data = tasks[i];
                    retValue = retValue + '<li class="'+data.TYPE+'"><a href="#">'+data.TEXT+'</a></li>';

                }
                return retValue+'</ul>';
            }
        }
    ],
    data: {},

    afterRender: function () {
        Ext.get('TD1028').toggleCls('on')
        this.callParent(arguments);
    }
});
