/*
 신규 사이트에서 칼렌더 도입시 유의점
 1. app.json 확인
 "css": [
 ...
 {
 "path":"${app.dir}/resources/css/calendar-all.css" // 없으면 추가
 }
 ],
 "classpath": [
 ...
 "${workspace.dir}/APPS/calendar/app"    // 없으면 추가
 ],
 "requires": [
 ...
 "google",                              // 없으면 추가
 ],
 2. 1번에서 수정사항이 있으면 APPS/${관련 폴더}에서 sencha app refresh 명령 실행(sencha cmd 필수)
 */
Ext.define('template.view.calendar.Source', {
    extend: 'Ext.calendar.panel.Panel',
    xtype: 'calendar-source',
    requires: [
        'Ext.calendar.panel.Panel'
    ],

    defaultView: 'week',// month, week, day (default month),
    // 참조: http://docs.sencha.com/extjs/6.2.0/classic/Ext.calendar.panel.Panel.html#cfg-views
    views: {
        month: null,
        week: {
            // 주간 캘린더 타이틀 템플릿
            titleTpl: '{start:date("Y-m-d")} - {end:date("Y-m-d")}',
            // 수정 추가 화면 관련 속성
            editForm: {
                // 참고
                // http://docs.sencha.com/extjs/6.2.0/classic/src/AbstractForm.js.html#Ext.calendar.form.AbstractForm-cfg-startDateField
                startDateField: {
                    xtype: 'datefield',
                    itemId: 'startDate',
                    name: 'startDate',
                    format: 'Y-m-d',    //display format
                    allowBlank: false
                },
                // 참고
                // http://docs.sencha.com/extjs/6.2.0/classic/src/AbstractForm.js.html#Ext.calendar.form.AbstractForm-cfg-endDateField
                endDateField: {
                    xtype: 'datefield',
                    itemId: 'endDate',
                    name: 'endDate',
                    format: 'Y-m-d',    //display format
                    allowBlank: false
                },
                listeners: {
                    // 참조 http://docs.sencha.com/extjs/6.2.0/classic/Ext.calendar.form.Form.html#event-save
                    save: function () {
                        var me = this,
                            store = me.view.getStore();
                        console.log(me.event, arguments);
                        if (confirm('저장하시겠습니까?')) {
                            Util.CommonAjax({
                                url: 'resources/data/success.json',
                                pCallback: function () {
                                    store.reload();
                                }
                            });
                        } else {
                            return false;
                        }
                    },
                    // 참조 http://docs.sencha.com/extjs/6.2.0/classic/Ext.calendar.form.Form.html#event-drop
                    drop: function () {
                        var me = this,
                            store = me.view.getStore();
                        console.log(me.event, arguments);
                        if (confirm('삭제하시겠습니까?')) {
                            Util.CommonAjax({
                                url: 'resources/data/success.json',
                                pCallback: function () {
                                    store.reload();
                                }
                            });
                        } else {
                            return false;
                        }
                    },
                    // 참조 http://docs.sencha.com/extjs/6.2.0/classic/Ext.calendar.form.Form.html#event-cancel
                    cancel: function () {
                        var me = this;
                        console.log(me.event, 'cancel');
                    }
                }
            }
        },
        day: {
            // 일간 캘린더 타이틀 템플릿
            titleTpl: '{start:date("Y-m-d")}'
        }
    },
    store: {
        autoLoad: true,
        // 칼렌더 목록 API
        // URL: "resources/data/calendar.json"
        // RESULTSET
        // {
        //     "data": [
        //         {
        //             "id": 1,
        //             "color": "#00FF00",
        //             "title": "Personal"
        //         },
        //         {
        //             "id": 2,
        //             "color": "#FF0000",
        //             "title": "Company"
        //         }
        //     ]
        // }
        proxy: {
            type: 'ajax',
            url: 'resources/data/calendar.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        eventStoreDefaults: {
            // 이벤트 목록 API
            // URL: "resources/data/calendar.json"
            // PARAM: {
            //      calendar: 1 (로드하는 칼렌더의 이벤트 목록 )
            //      startDate: 2016-11-14T00:00:00.000Z (조회구간 시작일 )
            //      endData: 2017-03-22T00:00:00.000Z (조회구간 종료일 )
            // }
            // RESULTSET
            // {
            //     "data": [
            //         {
            //             "id": 1001,
            //             "calendarId": 1,
            //             "startDate": "2017-01-01T21:30:00.000Z",
            //             "endDate": "2017-02-28T22:30:00.000Z",
            //             "title": "Watch cartoons",
            //             "description": "Catch up with adventurers Finn and Jake"
            //         },
            //         {
            //             "id": 1002,
            //             "calendarId": 1,
            //             "startDate": "2017-01-01T21:30:00.000Z",
            //             "endDate": "2017-02-28T22:30:00.000Z",
            //             "title": "Watch cartoons",
            //             "description": "Catch up with adventurers Finn and Jake"
            //         }
            //     ]
            // }
            proxy: {
                url: 'resources/data/event.json',
                type: 'ajax',
                reader: {
                    type: 'json',
                    rootProperty: 'data'
                }
            }
        }
    }
});