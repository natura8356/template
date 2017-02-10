//====================================================================================================================
//상수 정의
//====================================================================================================================
var COLOR_GRID_SUBTOTAL = "#DAD9FF"; //소계
var COLOR_GRID_TOTAL    = "#FFD8D8"; //합계

//리스트성격의자료(공지사항 등)
var COLOR_ON_MOUSEOVER	= "#FF9000";	 //MouseOver시 글자색
var COLOR_LOCK			= "#FFFFFF";	 //lock색
var COLOR_LINK			= "#007DCF";	 //Link시 글자색

//글자색
var COLOR_NORMALTEXT	= "#000000";	//일반색상
var COLOR_REDTEXT		= "#FF3030";
var COLOR_BLUETEXT		= "#0000FF";
var COLOR_GREENTEXT		= "#50FF70";
var COLOR_GRAYTEXT		= "#303030";
var COLOR_PROGTEXT		= "#00FF00";	//진행 텍스트
var COLOR_FINISHTEXT	= "#3366FF";	//완료 텍스트
var COLOR_STRESSTEXT	= "#FF00FF";	//강조 텍스트
var COLOR_RMKTEXT		= "#FF6600";	//설명 텍스트
var COLOR_WARNINGTEXT	= "#FF0000";	//경고 텍스트

//달력
var COLOR_SUNDAY		= "#FF5A30";	//일요일
var COLOR_SATDAY		= "#0066FF";	//토요일 

//첨부파일수
var MAX_ATCH_FILES      = "20";

//면적->평
var CONVERTPYEONG		= 0.3025;		//면적->평 환산시 쓰일 상수.

//용량
var KILO_BYTE 			= 1024;
var MEGA_BYTE 			= 1048576;

//팝업표준사이즈
var WINDOW_STD_WIDTH    = 1240;
var WINDOW_STD_HEIGHT   = 700;

var windowpopname;
//====================================================================================================================
//페이지변수
//====================================================================================================================
var PageVar = {
	savecl : ""	   //기본저장구분 (STD : 표준버튼, APVL : 결재상신, 나머지 더 필요한경우는 해당업무에서 정의해서 사용)
}
//====================================================================================================================
//Message 클래스 정의(Abstract 클래스, 모든 메소드는 static)
//====================================================================================================================
var Message = {}
//====================================================================================================================
//함수명       : showMsgBox
//작성자       : 정용희
//작성일       : 2012.10.12
//내용         : 경고창을 띄운다.
//Parameter    : String 메시지코드, String/Array 추가메시지
//Return       : 
//====================================================================================================================
Message.showMsgBox = function (msgCode, extraMsg) {
  	if (! eval(msgCode)) {
		alert("정의된 메세지가 없습니다. -" + msgCode + "-");
    } 
    else {
		alert(Message.appendMessage(msgCode, extraMsg));
    }
}

//====================================================================================================================
//함수명       : showConfirm
//작성자       : 정용희
//작성일       : 2012.10.12
//내용         : 선택창을 띄운다.
//Parameter    : String 메시지코드, String/Array 추가메시지
//Return       : boolean 선택결과
//====================================================================================================================
Message.showConfirm = function (msgCode, extraMsg) {
	if(!eval(msgCode))
	    alert("정의된 메세지가 없습니다. -" + msgCode + "-");
	else
	    return confirm(Message.appendMessage(msgCode, extraMsg));
}

//====================================================================================================================
//함수명       : appendMessage
//작성자       : 정용희
//작성일       : 2012.10.12
//내용         : 등록된 코드의 메시지와 추가 메시지를 더한다.
//Parameter    : String 메시지코드, String/Array 추가메시지
//Return       : String 더해진 메시지
//====================================================================================================================
Message.appendMessage = function (msgCode, extraMsg) {
	var msg	= eval(msgCode);
	
	if ((extraMsg[0] != undefined) && (eval(msgCode).indexOf("{") >= 0)) {
		for (var i=0 ; i<extraMsg.length ; i++) {
			msg	= msg.replace(("{"+i+"}"), extraMsg[i]);
		}
	}
	return msg;
}

//====================================================================================================================
//Common 클래스 정의(Abstract 클래스, 모든 메소드는 static)
//====================================================================================================================
var Common = {}
//====================================================================================================================
//함수명       : Common.httpStatus
//작성자       : 정용희
//작성일       : 2012.10.24
//내용         : URL의 http 상태를 체크한다.
//Parameter    : String url
//Return       : {Boolean} true(정상)/false(비정상)
//====================================================================================================================
Common.httpStatus = function (url, Params) {
	var http = null;
	
	if (window.ActiveXObject) {
		try {
			http = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				http = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e1) { return false; }
		}
	} 
	else if (window.XMLHttpRequest) {
		http = new XMLHttpRequest();
	} 
	else {
		http = null;
	}
	
	//xforms url 체크로직 추가
	if(url.indexOf("w2xPath") > 0) {
		url = url.substring(url.indexOf("w2xPath")+8);
		url = url.replace("&","?");
	}
	
	http.open("GET",url,false);
	http.setRequestHeader('Content-Type', 'application/xml');
	http.send(Params);

	if(http.status >= 400) {
		http = null;
		return false;
	} 
	else {
		http = null;
		return true;
	}
}

//====================================================================================================================
//함수명       : Common.callPopup
//작성자       : 정용희
//작성일       : 2012.10.24
//내용         : 팝업호출 함수 
//Parameter    : Object Params
//Return       : 
//====================================================================================================================
Common.callPopup = function (Params) {
	if (Params.session != "N") {
		//세션체크
		getGlobalSession();
	}
	
	//웹스퀘어 제공(팝업생성하기전에 반드시 호출해줘야 함.)
	requires("uiplugin.popup");
	
	var url  		   = Params.src;			//경로
	var popid 		   = (Params.id         == "undefined" || Params.id 	    == null)? ""     	   : Params.id;         //팝업창 id
	var name  		   = (Params.name       == "undefined" || Params.name	    == null)? "popup"	   : Params.name;       //팝업창 이름
	var modal 		   = (Params.modal      == "undefined" || Params.modal      == null)? false 	   : Params.modal;      //modal여부
	var resize 		   = (Params.resize     == "undefined" || Params.resize     == null)? false  	   : Params.resize;     //resize여부
	var parentInstance = (Params.srcData    == "undefined" || Params.srcData    == null)? ""     	   : Params.srcData;    //팝업으로 보낼 인스턴스명
	var popupInstance  = (Params.destData   == "undefined" || Params.destData   == null)? ""     	   : Params.destData;   //팝업에서 셋팅할 인스턴스명
	var scrollbars     = (Params.scrollbars == "undefined" || Params.scrollbars == null)? false 	   : Params.scrollbars; //팝업에서 셋팅할 인스턴스명
	var popupUrl	   = (Params.popupUrl   == "undefined" || Params.popupUrl   == null)? "popup.jsp"  : Params.popupUrl;   //팝업url
	
	//위치계산
	var popwidth  = Params.width;
	var popheight = Params.height;
	
	var yt = ((screen.height - popheight - 100) / 2);
	var xl = (screen.width - popwidth - 100) / 2;
	
	var style = "top:"+yt+"px; left:"+xl+"px; width:"+popwidth+"; height:"+popheight+"; ";	// 팝업창의 디자인 셋팅
	
	var windowname = new String(Math.round(Math.random() * 100000)); //팝업창 이름 랜덤 생성 - 좀비 프로세스 방지
	windowpopname = popid + windowname;

	var options = { 
        id 		   : windowpopname
      , type 	   : "window"
	  , popupUrl   : popupUrl
      , popupName  : name     //popupName popup 객체의 이름으로 popup 프레임의 표시줄에 나타납니다.
      , modal      : modal    //modal을 이용해서 뒤 쪽 배경을 동작하지 않도록 만들기 위한 인자 입니다.
      , useIFrame  : false    //window type의 경우 true : IFrame 을 사용하는 WebSquare popup false: window.open 을 사용하는 popup
      , style      : style    
      , menubar    : false 
      , resizable  : resize   //리사이즈유무
      , scrollbars : scrollbars
      , title      : false
      , srcData	   : parentInstance // popup option window.open을 사용하는 경우(useIfrmae false인 경우) popup에 넘어가는 parameter
      , destData   : popupInstance
	}; 
	
	WebSquare.uiplugin.popup.openPopup(url, options);
}

//====================================================================================================================
//함수명       : Common.callPopup1
//작성자       : 전연우
//작성일       : 2012.10.24
//내용         : 팝업호출 함수 테스트 
//Parameter    : Object Params
//Return       : 
//====================================================================================================================
Common.callPopup1 = function (Params) {
	if (Params.session != "N") {
		//세션체크
		getGlobalSession();
	}
	
	//웹스퀘어 제공(팝업생성하기전에 반드시 호출해줘야 함.)
	requires("uiplugin.popup");
	
	var url  		   = Params.src;			//경로
	var popid 		   = (Params.id         == "undefined" || Params.id 	    == null)? ""     	   : Params.id;         //팝업창 id
	var name  		   = (Params.name       == "undefined" || Params.name	    == null)? "popup"	   : Params.name;       //팝업창 이름
	var modal 		   = (Params.modal      == "undefined" || Params.modal      == null)? false 	   : Params.modal;      //modal여부
	var resize 		   = (Params.resize     == "undefined" || Params.resize     == null)? false  	   : Params.resize;     //resize여부
	var parentInstance = (Params.srcData    == "undefined" || Params.srcData    == null)? ""     	   : Params.srcData;    //팝업으로 보낼 인스턴스명
	var popupInstance  = (Params.destData   == "undefined" || Params.destData   == null)? ""     	   : Params.destData;   //팝업에서 셋팅할 인스턴스명
	var scrollbars     = (Params.scrollbars == "undefined" || Params.scrollbars == null)? false 	   : Params.scrollbars; //팝업에서 셋팅할 인스턴스명
	var popupUrl	   = (Params.popupUrl   == "undefined" || Params.popupUrl   == null)? "popup.jsp"  : Params.popupUrl;   //팝업url
	
	alert(parentInstance);
	
	//위치계산
	var popwidth  = Params.width;
	var popheight = Params.height;
	
	var yt = ((screen.height - popheight - 100) / 2);
	var xl = (screen.width - popwidth - 100) / 2;
	
	var style = "top:"+yt+"px; left:"+xl+"px; width:"+popwidth+"; height:"+popheight+"; ";	// 팝업창의 디자인 셋팅

	var options = { 
      id 		   : popid
    , type 	   : "window"
	  , popupUrl   : popupUrl
    , popupName  : name     //popupName popup 객체의 이름으로 popup 프레임의 표시줄에 나타납니다.
    , modal      : modal    //modal을 이용해서 뒤 쪽 배경을 동작하지 않도록 만들기 위한 인자 입니다.
    , useIFrame  : false    //window type의 경우 true : IFrame 을 사용하는 WebSquare popup false: window.open 을 사용하는 popup
    , style      : style    
    , menubar    : false 
    , resizable  : resize   //리사이즈유무
    , scrollbars : scrollbars
    , title      : false
    , srcData	   : parentInstance // popup option window.open을 사용하는 경우(useIfrmae false인 경우) popup에 넘어가는 parameter
    , destData   : popupInstance
	}; 
	
	WebSquare.uiplugin.popup.openPopup(url, options);
}

//====================================================================================================================
//함수명       : Common.setExcelSuffixName
//작성자       : 정용희
//작성일       : 2012.10.23
//내용         : 윈7에서 엑셀파일 생성시 파일이름 중복방지를 위해사용 
//Parameter    : 
//Return       : 현재시간
//====================================================================================================================
Common.setExcelSuffixName = function () {
	var d = new Date();
	// (월은 0부터 시작므로 +1을 해야 합니다.)
	// 시분초 구분자에 ":"을 사용하면 엑셀파일작성시 전체이름을 인식하지 못함
	s = "("+d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+"_"+d.getHours()+d.getMinutes()+d.getSeconds()+")";
	return s;
}

//====================================================================================================================
//함수명       : Common.reSize
//작성자       : 정용희
//작성일       : 2012.10.12
//내용         : 메인영역에 resize가 발생 할 경우 해당 object의 width를 메인영역의 width에 맞게 변경한다.
//Parameter    : 리사이즈 대상 objid 배열, 탭여부
//Return       : 
//====================================================================================================================
Common.reSize = function (widthobjidlist, yntab, heightobjidlist) {
	var RIGHT_MAGINE  = 30;
	var LEFT_MAGINE   = 25;
	var TOP_MAGINE   = 30;
	var BOTTOM_MAGINE = 30;
	
	var widthsize  = document.body.clientWidth; //브라우저 가로사이즈
	var heightsize = document.body.clientHeight; //브라우저 세로사이즈
	
	var resizewidthpx  = widthsize  - RIGHT_MAGINE;  //리사이즈 기준 사이즈 (브라우저 가로사이즈 - 우측여백)
	var resizeheightpx = heightsize - BOTTOM_MAGINE; //리사이즈 기준 사이즈 (브라우저 세로사이즈 - 하단여백)
	
	var left;
	var width;
	var top;   
	var height;
	
	var objlist       = [];  //객체저장
	var objlistwidth  = [];  //객체 width
	var objlistleft   = [];  //객체 left
	var objlistheight = [];  //객체 height
	var objlisttop    = [];  //객체 top
	
	for (i = 0; i < widthobjidlist.length ; i++) {
		objlist[widthobjidlist[i]]      = document.getElementById(widthobjidlist[i]).style; //객체저장
		objlistwidth[widthobjidlist[i]] = parseInt(objlist[widthobjidlist[i]].width); //객체별 width 저장
		objlistleft[widthobjidlist[i]]  = parseInt(objlist[widthobjidlist[i]].left);  //객체별 left 저장
		
		left  = (widthobjidlist[i].substring(0,6) == "search")? LEFT_MAGINE : objlistleft[widthobjidlist[i]];
        width =	objlistwidth[widthobjidlist[i]];	
		
		if (widthobjidlist[i].substring(0, 3) == "btn") { //버튼일경우
			if (yntab == "Y") {
				//탭안일경우 25픽셀 추가해줘야함
				objlist[widthobjidlist[i]].left = (left + LEFT_MAGINE + (resizewidthpx - (left + width))) + "px"
			}
			else {
				objlist[widthobjidlist[i]].left = (left + (resizewidthpx - (left + width))) + "px"
			}
		}
		else { //그외
			if (yntab == "Y") {
				if (widthobjidlist[i].substring(0,6) == "search") {
		    		objlist[widthobjidlist[i]].width = (width + LEFT_MAGINE + 25 + (resizewidthpx - (left + width))) + "px"
				}
				else {
					//탭안일경우 25픽셀 추가해줘야함
		    		objlist[widthobjidlist[i]].width = (width + LEFT_MAGINE + (resizewidthpx - (left + width))) + "px"
				}
			}
			else {
	    		//리사이즈 width = (width + (브라우저 가로사이즈 - 우측여백 - left + width)) + "px"
	    		objlist[widthobjidlist[i]].width = (width + (resizewidthpx - (left + width))) + "px"
			}
		}
	}
	objlist = [];
	
	if (typeof heightobjidlist != "undefined") {
		for (j = 0; j < heightobjidlist.length ; j++) {
			objlist[heightobjidlist[j]]       = document.getElementById(heightobjidlist[j]).style;  //객체저장
			objlistheight[heightobjidlist[j]] = parseInt(objlist[heightobjidlist[j]].height);       //객체별 height 저장
			objlisttop[heightobjidlist[j]]    = parseInt(objlist[heightobjidlist[j]].top);          //객체별 top 저장
			
			top    = objlisttop[heightobjidlist[j]];
	        height = objlistheight[heightobjidlist[j]];	
	        
			//페이징이면 식이바뀜
			if (widthobjidlist[j] == "pagelist") {
				objlist[heightobjidlist[j]].top = (top + TOP_MAGINE + (resizeheightpx - (top + height))) + "px"
			}
			else {
	    		//리사이즈 height = (height + (브라우저 세로사이즈 - 하단여백 - top + height)) + "px"
				objlist[heightobjidlist[j]].height = (height + (resizeheightpx - (top + height))) + "px"
			}
		}	
	}
}
//====================================================================================================================
//함수명       : Common.isUniqueRowData
//작성자       : 정용희
//작성일       : 2012.10.17
//내용         : 그리드에서 해당컬럼의 값이 유일한 값인지 확인한다. 단 파라미터 오는 row 데이터는 제외
//Parameter    : gridId, colId, row
//Return       : true(유일함), false(중복됨)
//====================================================================================================================
Common.isUniqueRowData = function (gridId, colId, row) {
	var totrow = gridId.getRowCount();
	var value  = gridId.getCellData(row, colId).trim();
	
	for (j = 0; j < totrow; j++) {
		if (j != row && gridId.getCellData(j, colId).trim() == value) {
			return false;
		}
	}
	return true;
}

//====================================================================================================================
//프로그램명   : Common.getFxAtrt
//작성자       : 정용희
//작성일       : 2012.11.06
//내용         : 페이지권한값과 변경하려는 권한값을 비교해 최종권한값을 반환한다.
//Parameter    : String 페이지권한, String 변경권한
//Return       : String 최종권한
//====================================================================================================================
Common.getFxAtrt = function (pageatrt, bizatrt) {
	var fxatrt = "";
  
	//확정 권한 
	for (var i = 0; i < bizatrt.length; i++) {
		//페이지권한내에서만 변경가능
		if (pageatrt.indexOf(bizatrt.charAt(i)) >= 0) 
        	fxatrt = fxatrt + bizatrt.charAt(i);
	}
	return fxatrt;
}


//====================================================================================================================
//프로그램명   : Common.setYearCombo
//작성자       : 정용희
//작성일       : 2012.12.07
//내용         : 연도콤보데이터를 가져온다.
//Parameter    : Object Params
//Return       : 
//====================================================================================================================
Common.setYearCombo = function (Params) {
	var comboid     = Params.id;
	var baseyear    = (typeof(Params.baseyear)    == "undefined")? Utils.toInt(retSessionArray.sesTODAY.substring(0,4)) : Utils.toInt(Params.baseyear); 
	var minyear     = (typeof(Params.minyear)     == "undefined")? 5 : Utils.toInt(Params.minyear);
	var maxyear     = (typeof(Params.maxyear)     == "undefined")? 0 : Utils.toInt(Params.maxyear);
	var defaultyear = (typeof(Params.defaultyear) == "undefined")? 0 : Utils.toInt(Params.defaultyear);
	var value;
	
	var total = minyear + maxyear + 1;
	var startyear = baseyear + maxyear;
	
	comboid.removeAll();
	
	for (i = 0; i < total; i++) {
		comboid.addItem(startyear - i, startyear - i, i);
	}
	
	//디폴트셋팅
	if (defaultyear == 0) {
		yearcombo.setSelectedIndex(0);
	}
	else {
		yearcombo.setValue(defaultyear);
	}
}
//====================================================================================================================
//프로그램명   : Common.executeSubmission
//작성자       : 정용희
//작성일       : 2012.12.13
//내용         : 공통컨트롤 관련(콤보,라디오,체크박스) 서브미션을 실행한다.
//Parameter    : String submissiontarget, String kindnocd
//Return       : 
//====================================================================================================================
Common.executeSubmission = function (Params) {
	var submission = WebSquare.ModelUtil.getSubmission( "dch90_iqryComnCd" );    
	
	submission.target = Params.submissiontarget;
	
	WebSquare.ModelUtil.setInstanceValue("dch90_iqryComnCd/kind_no_cd/@value", Params.kindnocd);
	WebSquare.ModelUtil.setInstanceValue("dch90_iqryComnCd/attr1/@value", (typeof(Params.attr1) == "undefined")? "*" : Params.attr1);
	WebSquare.ModelUtil.setInstanceValue("dch90_iqryComnCd/attr2/@value", (typeof(Params.attr2) == "undefined")? "*" : Params.attr2);
	WebSquare.ModelUtil.setInstanceValue("dch90_iqryComnCd/attr3/@value", (typeof(Params.attr3) == "undefined")? "*" : Params.attr3);
	
	WebSquare.ModelUtil.executeSubmission("dch90_iqryComnCd");
}	
//====================================================================================================================
//프로그램명   : Common.getInstanceValue
//작성자       : 정용희
//작성일       : 2012.12.13
//내용         : 공통컨트롤 관련(콤보,라디오,체크박스) 인스턴스에서 원하는 값을 찾아 리턴한다.
//Parameter    : String instanceid, String keycol, String keyvalue, String getcol
//Return       : 
//====================================================================================================================
Common.getInstanceValue = function (instanceid, keycol, keyvalue, getcol) {
	var cnt   = WebSquare.ModelUtil.getInstanceValue(instanceid + "/vector/@result");
	var value = "";
	var returnvalue = "";
	
	for (i = 0; i < cnt; i++) {
		value = WebSquare.ModelUtil.getInstanceValue (instanceid + "/vector/data[@vectorkey=" + i + "]/iqryComnCd/" + keycol + "/@value");
		
		if (value == keyvalue) {
			returnvalue = WebSquare.ModelUtil.getInstanceValue (instanceid + "/vector/data[@vectorkey=" + i + "]/iqryComnCd/" + getcol + "/@value");
			return returnvalue;
		} 
	}
	return returnvalue
}	
//====================================================================================================================
//프로그램명   : Common.setFormStatus
//작성자       : 정용희
//작성일       : 2012.12.17
//내용         : 폼의 상태값과 바인딩된 인스턴스 데이터(폼 데이터)를 저장한다. 
//Parameter    : Object form, String status, String instanceid
//Return       : 
//====================================================================================================================
Common.setFormStatus = function (form, status, instanceid) {
	var status = status.toUpperCase();
	
	if (status == "C" || status == "U" || status == "D") {
		form.setUserData( "status"  , status);
		form.setUserData( "history" , WebSquare.ModelUtil.findSerializedNode(instanceid));
	}
}	

//====================================================================================================================
//프로그램명   : Common.getFormStatus
//작성자       : 정용희
//작성일       : 2012.12.17
//내용         : 폼의 상태값(C,U,D)을 리턴한다.
//Parameter    : Object form
//Return       : 폼 상태값
//====================================================================================================================
Common.getFormStatus = function (form) {
	return form.getUserData("status");
}	

//====================================================================================================================
//프로그램명   : Common.isUpdateForm
//작성자       : 정용희
//작성일       : 2012.12.17
//내용         : 폼의 수정여부를 확인한다.
//Parameter    : Object form, String instanceid
//Return       : 수정여부
//====================================================================================================================
Common.isUpdateForm = function (form, instanceid) {
	var result = (form.getUserData("history") == WebSquare.ModelUtil.findSerializedNode(instanceid))? false : true 
	
	return result
}	

//====================================================================================================================
//프로그램명   : Common.saveSysCntnHstr
//작성자       : 정용희
//작성일       : 2012.12.27
//내용         : 시스템접속 이력을 저장한다.
//Parameter    : String cdmnu(메뉴코드), String cdaprhmthd(접근방식코드 U(수정),D(삭제),E(엑셀),P(인쇄))
//Return       : 
//====================================================================================================================
Common.saveSysCntnHstr = function (cdmnu, cdaprhmthd) {
	getGlobalSession();

	WebSquare.ModelUtil.setInstanceValue("dch90_saveSysCntnHstr/cd_mnu/@value", cdmnu);
	WebSquare.ModelUtil.setInstanceValue("dch90_saveSysCntnHstr/cd_aprh_mthd/@value", cdaprhmthd);
	
	WebSquare.ModelUtil.executeSubmission("dch90_saveSysCntnHstr");
}	

//====================================================================================================================
//함수명       : Common.isNull
//작성자       : 정용희
//작성일       : 2013.01.15
//내용         : 해당 변수가 null인지 체크한다.
//Parameter    : String str
//Return       : {Boolean} true/false
//====================================================================================================================
Common.isNull = function (str) {
	//변수 type 체크
	if (typeof str == "undefined") {
		return true;
	}
	else {  
		//변수 내용 체크
		if (str == null || str == "") {
			return true;
		}
		else {
			return false;
		} 
	}
}

//====================================================================================================================
//함수명       : Common.setData
//작성자       : 정용희
//작성일       : 2013.01.30
//내용         : 인스턴스에 데이터를 저장한다 key 값으로 구분
//Parameter    : String key, String value
//Return       : 
//====================================================================================================================
Common.setData = function (key, value) {
	WebSquare.ModelUtil.setInstanceValue("dch90_DataSet/"+key+"/@value", value);
}

//====================================================================================================================
//함수명       : Common.getData
//작성자       : 정용희
//작성일       : 2013.01.30
//내용         : 인스턴스에 저장한 데이터를 key값을 통해 가져온다
//Parameter    : String key
//Return       : 
//====================================================================================================================
Common.getData = function (key) {
	return WebSquare.ModelUtil.getInstanceValue("dch90_DataSet/"+key+"/@value")
}

//====================================================================================================================
//함수명       : Common.dbExcelDownLoad
//작성자       : 정용희
//작성일       : 2013.01.31
//내용         : DB의 데이터를 엑셀로 다운로드 한다.
//Parameter    : Object params
//Return       : 
//====================================================================================================================
Common.dbExcelDownLoad = function (params) {
	//세션체크
	getGlobalSession();
	
	imports(WebSquare.net.paramObj["JUNCTION"]+"/dins/script/WebSquare_grid.js");
	
	var fxparams  = {};
	var header    = "";
	var node      = "";
	var type      = "";
	var format    = "";
	var delimiter = [",", "|"];
	var value     = "";
	var cdgr     = "";
	
	cdgr = retSessionArray.sesCD_GR_70;
	
	//인스턴스 셋팅
	for (var i = 0; i < params.instancevalue.length; i++) {
		WebSquare.ModelUtil.setInstanceValue("dch90_DBexcelDownLoad/"+params.instancevalue[i].key+"/@value", params.instancevalue[i].value);
	}
	
	//엑셀정보 셋팅
	for (var j = 0; j < params.excelinfo.length; j++) {
		if (params.excelinfo.length - j == 1) {
			delimiter[0] = "";
		}
		header += params.excelinfo[j].header + delimiter[0];
		node   += params.excelinfo[j].node   + delimiter[0];

		if (params.excelinfo[j].type == "str") {
			value = "0";
		}
		else if (params.excelinfo[j].type == "num"){
			value = "nu";
		}
		else {
			value = "da";
		}
		
		type   += value + delimiter[0];
	    format += ((params.excelinfo[j].format == "") ? " ": params.excelinfo[j].format) + delimiter[1];
	}
	
	fxparams.instance   = "dch90_DBexcelDownLoad";
	fxparams.filename   = params.filename + ".csv";
	fxparams.xdaid      = params.xdaid;
	fxparams.datasource = _DATASOURCE_NAME;
	
	fxparams.header = header;
	fxparams.node   = node;
	fxparams.type   = type;
	fxparams.format = format;
	fxparams.cdgr = cdgr;
	
	
	
    dins.WebSquare.grid.DBExcelDownload(fxparams);
}

//====================================================================================================================
//함수명       : Common.excelDbUpLoad
//작성자       : 정용희
//작성일       : 2013.01.31
//내용         : 엑셀 데이터를 DB로 업로드 한다.
//Parameter    : Object params
//Return       : 
//====================================================================================================================
Common.excelDbUpLoad = function (params) {
	//세션체크
	getGlobalSession();
	
	imports(WebSquare.net.paramObj["JUNCTION"]+"/dins/script/WebSquare_common.js");
	var node = "";
	var type = "";
	var size = "";
	var delimiter = ":";
	var qrydelimiter = ", ";
	var qryparams = "";
	
	for (i = 0; i < params.excelinfo.length; i++) {
		if (i == params.excelinfo.length - 1) {
			delimiter = "";
		}
		node += params.excelinfo[i].col  + delimiter;
		type += params.excelinfo[i].type + delimiter;
		size += params.excelinfo[i].size + delimiter;
	}
    
	for (j = 0; j < params.qryparams.length; j++) {
		if (params.qryparams.length == 1 || j == params.qryparams.length - 1) {
			qrydelimiter = "";
		}
		qryparams += params.qryparams[j].id + "=" + params.qryparams[j].value + qrydelimiter;
	}
	
	WebSquare.ModelUtil.setInstanceValue("dch90_excelToDbXdaInfo/xda/@params", "(" + qryparams + ")" ); 
	WebSquare.ModelUtil.setInstanceValue("dch90_excelToDbXdaInfo/xda/@id"    , params.xdaid);
	WebSquare.ModelUtil.setInstanceValue("dch90_excelToDbXdaInfo/xda/@dbms"  , "default"); 
	WebSquare.ModelUtil.setInstanceValue("dch90_excelToDbXdaInfo/xda/@node"  , node); 
	WebSquare.ModelUtil.setInstanceValue("dch90_excelToDbXdaInfo/xda/@type"  , type); 
	WebSquare.ModelUtil.setInstanceValue("dch90_excelToDbXdaInfo/xda/@size"  , size); 
	
	var xda = WebSquare.ModelUtil.findInstanceNode("dch90_excelToDbXdaInfo"); 
	
	openExcelUploadPopup(params.rowstrnum, params.cellstrnum, xda, params.afterfunction);
}

//====================================================================================================================
//함수명       : Common.setSiteSession
//작성자       : 정용희
//작성일       : 2013.02.05
//내용         : 현장코드와 현장명을 세션에 저장한다.
//Parameter    : String sitecd, String sitenm
//Return       : 
//====================================================================================================================
Common.setSiteSession = function (sitecd, sitenm) {
	retSessionArray.sesCD_SITE  = sitecd;
	retSessionArray.sesNM_SITE  = sitenm;
	
	dins.WebSquare.session.setSession("sesCD_SITE", sitecd);
	dins.WebSquare.session.setSession("sesNM_SITE", sitenm);
}

//====================================================================================================================
//함수명       : Common.callRDReport
//작성자       : 정용희
//작성일       : 2013.03.07
//내용         : RD 리포트를 호출한다
//Parameter    : String filename(파일명 .mrd 빼고), String params(Rd 에서사용되는 파라미터), String ynprint(인쇄여부), String printcnt(인쇄부수)
//Return       : 
//====================================================================================================================
Common.callRDReport = function (params) { 
	//세션체크
	getGlobalSession();
	
	var paramvalues = "";
	var delimiter = "=";
	
	for (i = 0; i < params.qryparams.length; i++) {
		if (i == params.qryparams.length - 1) {
			delimiter = "";
		}
		
		paramvalues += params.qryparams[i] + delimiter;
	}
	
	var basicparams = {
			id : "rdrpt" 
		  , popupName : "리포트호출" 
		  , src : "/dch/dch90/dch9099/dch909980/DCH_RdRptTop.xml" 
		  , modal : false 
		  , resize : true
		  , srcData : "dch90_RDparams" 
		  , destData : "dch90_RDparams" 
		  , width : "800" 
		  , height : "900"
		}

	if (typeof (params.afterfunction) != "undefined") {
		WebSquare.ModelUtil.setInstanceValue("dch90_RDparams/afterfunction/@value", Utils.getFuncName(params.afterfunction));
	}
	WebSquare.ModelUtil.setInstanceValue("dch90_RDparams/filename/@value", params.filename); //리포트파일이름
	WebSquare.ModelUtil.setInstanceValue("dch90_RDparams/params/@value", paramvalues);       //rd 에서 쓰이는 파라미터
	WebSquare.ModelUtil.setInstanceValue("dch90_RDparams/cntprint/@value", params.cntprint); //인쇄부수
	WebSquare.ModelUtil.setInstanceValue("dch90_RDparams/ynprint/@value", params.ynprint);   //rd 에서 인쇄여부 파라미터
	WebSquare.ModelUtil.setInstanceValue("dch90_RDparams/yncopypvtn/@value", params.yncopypvtn);   //복사방지여부
	
	Common.callPopup(basicparams);		
}

//====================================================================================================================
//함수명       : Common.callChrsApvl
//작성자       : 정용희
//작성일       : 2013.03.20
//내용         : 결재생성팝업을 띄운다
//Parameter    : String pid(코러스결재번호), Function afterfunction (후처리함수)
//Return       : 
//====================================================================================================================
Common.callChrsApvl = function (pid, afterfunction) {
	var url;
	
	url = _ApprovalFormsURL + pid;
	
	window.open(url, "SALESApvl", "top=0, left=0, width=1050, height=700, toolbar=0, directo ries=0, status=0, menubar=0, scrollbars=0");
}


//====================================================================================================================
//함수명       : Common.callChrsApvlPrgs
//작성자       : 정용희
//작성일       : 2013.03.20
//내용         : 결재팝업을 띄운다
//Parameter    : String yntempbox(임시함여부), String pid(코러스결재번호), String formid(결재폼아이디), yncstn(품의결재 여부)
//Return       : 
//====================================================================================================================
Common.callChrsApvlPrgs = function (yntempbox, pid, formid, yncstn) {
	var url;
	
	//임시함일시
	if (yntempbox == "Y") {
		url = ((yncstn == "Y") ? _ApprovalPrgsURL_T_C : _ApprovalPrgsURL_T) + pid + "&formID=" + formid + "&approvalBoxType=P_TEMP";
	}                              
	//그외
	else {
		url = ((yncstn == "Y") ? _ApprovalPrgsURL_A_C : _ApprovalPrgsURL_A)  + pid;
	}
	
	
	window.open(url, "SALESApvl", "top=0, left=0, width=1050, height=700, toolbar=0, directo ries=0, status=0, menubar=0, scrollbars=0");
}

//====================================================================================================================
//함수명       : Common.callUpdtChrsApvl
//작성자       : 정용희
//작성일       : 2013.03.20
//내용         : 결재팝업을 수정한다.
//Parameter    : String pid(코러스결재번호), String apvlboxtype(결재함유형) 
//Return       : 
//====================================================================================================================
Common.callUpdtChrsApvl = function (pid, apvlboxtype) {
	var url;

	//결재함에서 열고 수정한경우 결재함유형 파라미터로 안넘김.
	//임시함에서 열었 수정한경우 경재함유령 파라미터 넘김 (P_TEMP)
	url = _ApprovalFormsUpdateURL + pid;
	
	if (apvlboxtype != "null") {
		url += "&approvalBoxType=" + apvlboxtype
	}
	
	location.href = url;
}
//====================================================================================================================
//함수명       : Common.chkPwd
//작성자       : 정용희
//작성일       : 2013.04.15
//내용         : 비밀번호 변경시 비밀번호 체크
//Parameter    : String 유저 id, String 비밀번호 값 Object secretbox객체 (유효성검사시 포커스이동할 객체)
//Return       : 
//====================================================================================================================
Common.chkPwd = function(uid, upw , secretbox) {
	var i = 0;
	
    if (/[0-9]/g.test(upw)) {
    	i++;
    }
    
    if (/[a-zA-Z]/g.test(upw)) {
    	i++;
    }
    
    if (/[^0-9a-zA-Zㄱ-ㅎㅏ-ㅣ가-힝]/g.test(upw)) {
    	i++;
    }
    
    if (i < 2 ) {
    	Message.showMsgBox("MDCH_0000", ["영문대소문자, 숫자, 특수문자 조합으로 2종류 이상이면 10자리 이상, 3종류 이상이면 8자리 이상으로 작성하셔야 됩니다."]);
	    secretbox.setValue("");
	    secretbox.focus();
	    
	    return false;
    }
    
    if (i == 2 && upw.length < 10) {
    	Message.showMsgBox("MDCH_0000", ["비밀번호 조합이 2가지는 10자리이상을 사용해야 합니다."]);
    	secretbox.setValue("");
    	secretbox.focus();
    	
    	return false; 
    }
    
    if (i == 3 && upw.length < 8) {
    	Message.showMsgBox("MDCH_0000", ["비밀번호 조합이 3가지는 8자리이상을 사용해야 합니다."]);
    	secretbox.setValue("");
    	secretbox.focus();
    	
    	return false;
    }
  
    if(/(\w)\1\1\1/.test(upw)) {
    	Message.showMsgBox("MDCH_0000", ["비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다."]);
        secretbox.setValue("");
        secretbox.focus();
        
        return false;
    }

    if(uid != "" && upw.search(uid)>-1) {
    	Message.showMsgBox("MDCH_0000", ["ID가 포함된 비밀번호는 사용하실 수 없습니다."]);
        secretbox.setValue("");
        secretbox.focus();
        
        return false;
    }
    
    return true;
} 

