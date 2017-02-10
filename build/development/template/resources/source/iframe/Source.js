Ext.define('template.view.iframe.Source', {
    extend: 'Ext.panel.Panel',
    xtype: 'iframe-source',
    layout: 'fit',
    items: [
        {
            xtype: 'uxiframe',
            src: 'resources/customer/customer.html',
            listeners: {
                load: function () {
                    var me = this,
                        doc = this.getDoc(),
                        win = this.getWin(),
                        angular = win.angular,
                        ngScope = win.angular && win.angular.element(doc.querySelector('[ng-app]')).scope();

                    Ext.apply(win, {
                        parentView: me
                    });
                    Ext.apply(ngScope, {
                        // 기본정보 binding
                        formInfo: {
                            name: '김현국',
                            addr: '위례테라스',
                            addrDetail: '102동 304호',
                            contractDate: Ext.Date.format(Ext.Date.parse('20150107', 'Ymd'), 'Y-m-d'),
                            incomeDate: Ext.Date.format(Ext.Date.parse('20150107', 'Ymd'), 'Y-m-d'),
                            pn: '811207-1XXXXXX',
                            age: '36',
                            email: 'abcdeferd@naver.com'
                        },
                        // 임대조건 binding
                        rentCondition: [
                            {
                                condition: '조건',
                                payment: '수납',
                                condition1: '조건',
                                payment1: '수납',
                                fee: '임대료',
                                loans: '전세대출금'
                            }
                        ],
                        // 자동이체 binding
                        autoPay: [
                            {
                                startDate: '2016-05-15',
                                bankName: '기업은행',
                                no: 'xxx-xxxxx-xxxxxx',
                                name: '김현국'
                            },                            {
                                startDate: '2016-05-15',
                                bankName: '기업은행',
                                no: 'xxx-xxxxx-xxxxxx',
                                name: '김현국'
                            }, {
                                startDate: '2016-05-15',
                                bankName: '기업은행',
                                no: 'xxx-xxxxx-xxxxxx',
                                name: '김현국'
                            }
                        ],
                        //기본정보 및에 sms 버튼 클릭
                        sendSms: function (e) {
                            alert('sms');
                            console.log(e);
                        },
                        //기본정보 및에 email 버튼 클릭
                        sendEmail: function (e) {
                            alert('email');
                            console.log(e);
                        },
                        //기본정보 및에 memo 버튼 클릭
                        sendMemo: function (e) {
                            alert('memo');
                            console.log(e);
                        },
                        // 패널을 접는 이벤트 초기화
                        closePanel: function (e) {
                            var target = e.target,
                                el = Ext.Element.get(target),
                                panel = angular.element(target),
                                display = el.hasCls('on') ? 'block': 'none';
                            el.toggleCls('on');
                            el.toggleCls('off');
                            while(!panel.hasClass('tbSection')) {
                                panel = panel.parent();
                            }
                            Ext.each(panel.children(), function (itm) {
                                if (itm.className.indexOf("titleArea") < 0) {
                                    itm.style.display = display;
                                }
                            });
                        }
                    });
                    // 외부에서 scope 변수를 바꾼 후 적용을 위해서는 apply 함수를 호출해야 된다.
                    ngScope.$apply();
                }
            }
        }
    ]
});