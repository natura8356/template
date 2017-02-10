Ext.define('dmframe.view.header.DmHeader', {
    extend: 'Ext.Component',
    xtype: 'dmheader',
    tpl: [
        '<div id="head" class="inWrap">',
        '<h1><a href="#"><img src="resources/html/images/logo.png" alt="DAELIM CDMS"></a></h1>',
        '<div class="gnb">',
        '<a href="#" class="blue"><em class="ico help"></em>Help Desk</a>',
        '<a href="#" class="blue"><em class="ico down"></em>메뉴얼 다운로드</a>',
        '<a href="#" class="gray">Admin<em class="ico admn"></em></a>',
        '<a href="#" class="gray">홍길동 님<em class="ico user"></em></a>',
        '</div>',
        '</div>'
    ],
    data :{}
})