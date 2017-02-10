Ext.define('dmframe.view.dashboard.LeftGrid', {
//    extend: 'Ext.view.View',
    extend: 'Ext.Component',
    xtype: 'dbleftgrid',

    initComponent: function () {
        Ext.apply(this, {
            data: {
                total : 120,
                sum1 : 34,
                sum2: 86,
                list: [
                    {
                        field1: '2016.10.20',
                        field2: '대림산업',
                        field3: '대림-00호-',
                        field4: '현장 하자발생의..'
                    },
                    {
                        field1: '2016.10.20',
                        field2: '대림산업',
                        field3: '대림-00호-',
                        field4: '현장 하자발생의..'
                    },
                    {
                        field1: '2016.10.20',
                        field2: '대림산업',
                        field3: '대림-00호-',
                        field4: '현장 하자발생의..'
                    }
                ]
            }
        });
        this.callParent(arguments);
    },

    tpl: [
        '<div class="colLeft defect">',
        '<div class="conTitle">',
        '<h2>MY 하자처리 현황<span class="count">(Total <em>{total}</em>건)</span></h2>',
        '</div>',
        '<div class="statusBoard flow">',
        '<div class="fl"><em class="ico workDone"></em><span>처리완료</span><strong>{sum1}</strong></div>',
        '<div class="fr"><em class="ico workUndo"></em><span>미완료</span><strong>{sum2}</strong></div>',
        '</div>',
        '<div class="conTitle second">',
        '<h2 class="fl">최근 하자접수 공문</h2>',
        '<a href="#LASTHAJA" class="more">더보기<em class="ico arr"></em></a>',
        '</div>',
        '<table class="basic" summary="최근 하자접수 공문입니다." style="position:relative !important">',
        '<caption>최근 하자접수 공문</caption>',
        '<colgroup><col colspan="5"></colgroup>',
        '<thead><tr><th>번호</th><th>접수일</th><th>발송처</th><th>공문번호</th><th>공문내용</th></tr></thead>',
        '<tbody>',
        '<tpl for="list">',
        '<tr><td>{#}</td><td>{field1}</td><td>{field2}</td><td>{field3}</td><td>{field4}</td></tr>',
        '</tpl>',
//        '<tr><td>2</td><td>2016.10.20</td><td>대림산업</td><td>대림-00호-</td><td>현장 하자발생의..</td></tr>',
//        '<tr><td>3</td><td>2016.10.20</td><td>대림산업</td><td>대림-00호-</td><td>현장 하자발생의..</td></tr>',
//        '<tr><td>4</td><td>2016.10.20</td><td>대림산업</td><td>대림-00호-</td><td>현장 하자발생의..</td></tr>',
//        '<tr><td>5</td><td>2016.10.20</td><td>대림산업</td><td>대림-00호-</td><td>현장 하자발생의..</td></tr>',
//        '<tr><td>6</td><td>2016.10.20</td><td>대림산업</td><td>대림-00호-</td><td>현장 하자발생의..</td></tr>',
        '</tbody>',
        '</table>',
        '</div>'
    ],
    data: {}
});
