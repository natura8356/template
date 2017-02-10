//====================================================================================================================
//UtilsConstants 클래스 정의(Abstract 클래스, 모든 필드는 static)
//====================================================================================================================
var UtilsConstants = {
//====================================================================================================================
//요일 반환 구분
//====================================================================================================================
    DAY_ORIGINAL:       0,	//실제코드 (ex.1)
    DAY_KOREAN:         1,	//한국어 (ex.월요일)
    DAY_KOREANSHORTNM:  2,  //한국어 약어 (ex. 월)
    DAY_ENGLISH:        3,  //영어 (ex.Monday)
    DAY_ENGLISHSHORTNM: 4,  //영어 약어 (ex.MON)
    DAY_CHINESE:        5   //한자 (ex.月)    
}
UtilsConstants.toString = null;
//====================================================================================================================
//Utils 클래스 정의(Abstract 클래스, 모든 메소드는 static)
//====================================================================================================================
var Utils = {}
//====================================================================================================================
//함수명       : nvl
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값이 undefined, null일 경우에 원하는 값을 반환한다.
//Parameter    : variable 원본값, variable 변경할 값
//Return       : variable 처리된 값
//====================================================================================================================
Utils.nvl = function (v, c) {
	if (v == "undefined" || v == null)
		return c;
	else
		return v;
}

//====================================================================================================================
//함수명       : toStr
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값을 String 타입으로 형변환 한다.
//Parameter    : variable 변환할 원본값
//Return       : String 형변환된 값
//====================================================================================================================
Utils.toStr = function (v) {
	return new String(v).toString();
}

//====================================================================================================================
//함수명       : toInt
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값을 int 타입으로 형변환 한다.(blank값이거나 null일 경우에는 0이 반환.)
//Parameter    : variable 변환할 원본값 
//Return       : int 형변환된 값
//====================================================================================================================
Utils.toInt = function (v) {
	if (v == null || v == "")
		return 0;
	else
		return parseInt(new Number(v));
}

//====================================================================================================================
//함수명       : toFloat
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값을 float 타입으로 형변환 한다.(blank값이거나 null일 경우에는 0이 반환.)
//Parameter    : variable 변환할 원본값 
//Return       : float 형변환된 값
//====================================================================================================================
Utils.toFloat = function (v) {
	if (v == null || v == "")
		return 0;
	else
		return parseFloat(new Number(v));
}

//====================================================================================================================
//함수명       : getByteLength
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열의 Byte길이를 반환한다.(한글은 2자리)
//Parameter    : String 문자열
//Return       : int 문자열의 Byte길이
//====================================================================================================================
Utils.getByteLength = function (v) {
	var len = 0;

    if (v) {
    	for (var i = 0; i < v.length; i++) {
    		len += ((v.charCodeAt(i) > 255) ? 2 : 1);
    	}
    }
	
	return len;
}

//====================================================================================================================
//함수명       : cutByteLength
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열을 Byte로 자른다.(한글은 2자리)
//Parameter    : String 문자열, int Byte길이
//Return       : String 처리된 문자열
//====================================================================================================================
Utils.cutByteLength = function (v, byteLen) {
	var len	= 0;
	var r	= Utils.nvl(v, "");

	for (var i = 0; i < r.length; i++) {
		len += ((r.charCodeAt(i) > 255) ? 2 : 1);
		if (len > byteLen) {
			r = r.substring(0, i);
		}
	}
	
	return r;
}

//====================================================================================================================
//함수명       : getRepeatChars
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 특정문자를 반복한 문자열을 반환한다.
//Parameter    : string 문자, int 반복횟수
//Return       : String 결과문자열
//====================================================================================================================
Utils.getRepeatChars = function (chr, cnt) {
	var r = "";
		
	for (var i = 0; i < cnt; i++) {
		r += chr;
	}
	
	return r;
}

//====================================================================================================================
//함수명       : lpad
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열의 왼쪽에 특정문자를 반복해 채운다.
//Parameter    : String 문자열, int 문자열길이, String 반복할 문자
//Return       : String 결과문자열
//====================================================================================================================
Utils.lpad = function (v, len, chr) {
	var r = "";   //반환값
    var c = "";   //추가 문자
    var l = 0;    //추가 문자 길이
    
    if (Utils.getByteLength(v) > 0) {
        l = Utils.toInt((len - Utils.getByteLength(v)) / Utils.getByteLength(chr));
        
        if (l > 0) {
            c = Utils.getRepeatChars(chr, l);
            r = c.substring(0, l) + v;
        }
        else {
            r = v;
        }
    }
    
    return r;
}

//====================================================================================================================
//함수명       : rpad
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열의 오른쪽에 특정문자를 반복해 채운다.
//Parameter    : String 문자열, int 문자열길이, String 반복할 문자
//Return       : String 결과문자열
//====================================================================================================================
Utils.rpad = function (v, len, chr) {
	var r = "";   //반환값
    var c = "";   //추가 문자
    var l = 0;    //추가 문자 길이
    
    if (Utils.getByteLength(v) > 0) {
        l = Utils.toInt((len - Utils.getByteLength(v)) / Utils.getByteLength(chr));
        
        if (l > 0) {
            c = Utils.getRepeatChars(chr, l);
            r = v + c.substring(0, l);
        }
        else {
            r = v;
        }
    }
    
    return r;
}

//====================================================================================================================
//함수명       : reverseStr
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열을 역순으로 만든다.
//Parameter    : String 문자열
//Return       : String 결과문자열
//====================================================================================================================
Utils.reverseStr = function (v) {
    return ((v.split("")).reverse()).join("");
}

//====================================================================================================================
//함수명       : setStringLenForm
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열에 사이사이 일정한 공백을 추가하여 길이 규격을 맞춘다.
//Parameter    : string 문자열, int 문자열길이
//Return       : String 결과문자열
//====================================================================================================================
Utils.setStringLenForm = function (v, len) {
	v = v.trim();
	
	var r = "";
	var b = Utils.getByteLength(v);
	var s	= 0;
	
	if (v.length == 1) {
		s = Utils.toInt((len - b) / 2);
		r = Utils.getRepeatChars(" ", s) + v + Utils.getRepeatChars(" ", s);
	}
	else {
		s = Utils.toInt((len - b) / (v.length - 1));
		
		if (s < 0) s = 0;
		
		for (var i = 0; i < v.length; i++) {
			r += v.charAt(i);
			
			if (i < (v.length - 1))
				r += Utils.getRepeatChars(" ", s);
		}
	}
	
	return r;
}

//====================================================================================================================
//함수명       : addDateSep
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 날짜형태의 문자열에 구분자를 삽입한다.
//Parameter    : String 날짜형태문자열, string 구분자(ex. "/")
//Return       : String 결과문자열
//====================================================================================================================
Utils.addDateSep = function (date, sep) {
	var reg    = /[^0-9]/gi;
	var v  = Utils.toStr(date).replace(reg, "");	//숫자만 남는다.
	var r = "";
	
	if (v.length > 4 && v.length <= 6) {
		r = v.substring(0, 4) + sep + v.substring(4, v.length);
	}
	else if (v.length > 6 && v.length <= 8) {
		r = v.substring(0, 4) + sep + v.substring(4, 6) + sep + v.substring(6, v.length);
	}
	else {
		r = v;
	}
	
	return r;
}

//====================================================================================================================
//함수명       : addTimeSep
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 시간형태의 문자열에 구분자를 삽입한다.
//Parameter    : String 시간형태문자열, string 구분자(ex. ":")
//Return       : String 결과문자열
//====================================================================================================================
Utils.addTimeSep = function (time, sep) {
	var reg    = /[^0-9]/gi;
	var v  = Utils.toStr(time).replace(reg, "");	//숫자만 남는다.
	var r = "";
	
	if (v.length > 2) {
		r = v.substring(0, 2) + sep + v.substring(2, v.length);
	}
	else {
		r = v;
	}
	
	return r;
}
Utils.addTimeSep.toString = null;

//====================================================================================================================
//함수명       : addNumSep
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 숫자값에 천자리 구분자를 삽입한다.
//Parameter    : variable 숫자값, String 구분자(ex. ",")
//Return       : String 결과문자열
//====================================================================================================================
Utils.addNumSep = function (num, sep) {
	var value    	= Utils.toStr(num);
	var reg      	= /[^0-9]/gi;
	var decPosi  	= value.indexOf(".");
	var integer	 	= "";
	var decimal  	= "";
	var result   	= "";
	var position 	= 0;
	var isnegative	= (value.indexOf("-") < 0) ? "" : "-";
	
	//정수부, 소수부 분리
	if (decPosi < 0) {
		integer = value;
	}
	else {
		integer = value.substring(0, decPosi);
        decimal = value.substring(decPosi + 1, value.length);
	}
	
	integer = integer.replace(reg, "");	//숫자만 남는다.
	decimal = decimal.replace(reg, "");	//숫자만 남는다.
	
	//정수부
	for (var i = integer.length - 1; i >= 0; i--) {
		if (position % 3 == 0 && position != 0)
			result = sep + result;
		
		result   = integer.charAt(i) + result;
		position = position + 1;
	}
	
	//소수부
	if (decPosi >= 0)
		result = result + "." + decimal;

	//양수, 음수 구분
	result	= isnegative + result;
	
	return result;
}
Utils.addNumSep.toString = null;

//====================================================================================================================
//함수명       : toApproxNumber
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 근사치를 구한다.
//Parameter    : int/float 값, int 위치(양수는 소수위치, 음수는 정수위치), String 유형(올림, 버림, 반올림)
//Return       : int/float 처리된 값
//====================================================================================================================
Utils.toApproxNumber = function (v, pos, type) {
  var m = v < 0;  //부호
  
 if (m) 
    v = -v; //절대값.
    
 if (pos == null || pos == "") //처리할 자리수
  pos = 0;
  
  var s = Number(v).toFixed(6);

  s = '00000000000000000000' + s + '00000000000000';
  s = s.substr(s.length - 41).replace('.', ''); //소수점 앞 20자리, 소수점 뒤 20자리
  s = s.substring(0, 20 + pos) + '.' + s.substr(20 + pos);  //처리할 자리수만큼 소수점 이동하여

  var n = { //연산.
      "ceil": m ? Math.floor(Number(s)) : Math.ceil(Number(s)),
      "floor": m ? Math.ceil(Number(s)) : Math.floor(Number(s)),
      "round": Math.round(Number(s)),
      "trunc": Math.floor(Number(s))
  }[type];
  
  var r = '00000000000000000000' + n.toFixed(0);
  r = r.substr(r.length - 20) + '00000000000000000000'; //소수점 앞 20자리, 소수점 뒤 20자리

  r = r.substring(0, 20 - pos) + '.' + r.substr(20 - pos); //처리한 자리수만큼 반대로 소수점 이동.

  return m ? -Number(r) : Number(r);  //숫자로 변환하여 리턴.
}

//====================================================================================================================
//함수명       : ceil
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값을 지정한 위치로 올림한다.
//Parameter    : int/float 값, int 위치(양수는 소수위치, 음수는 정수위치)
//Return       : int/float 처리된 값
//====================================================================================================================
Utils.ceil = function (v, pos) {
    return Utils.toApproxNumber(v, pos, "ceil");
}

//====================================================================================================================
//함수명       : floor
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값을 지정한 위치로 버림한다.
//Parameter    : int/float 값, int 위치(양수는 소수위치, 음수는 정수위치)
//Return       : int/float 처리된 값
//====================================================================================================================
Utils.floor = function (v, pos) {
    return Utils.toApproxNumber(v, pos, "floor");
}

//====================================================================================================================
//함수명       : round
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값을 지정한 위치로 반올림한다.
//Parameter    : int/float 값, int 위치(양수는 소수위치, 음수는 정수위치)
//Return       : int/float 처리된 값
//====================================================================================================================
Utils.round = function (v, pos) {
    return Utils.toApproxNumber(v, pos, "round");
}

//====================================================================================================================
//함수명       : toFixed
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 값을 지정한 위치로 반올림한다: 부동소수점 연산 오류 보정용
//Parameter    : int/float 값, int 위치(양수는 소수위치, 음수는 정수위치)
//Return       : int/float 처리된 값
//====================================================================================================================
Utils.toFixed = function (v, pos) {
    return Number(v.toFixed(pos));
}

//====================================================================================================================
//함수명       : getDayOfWeek
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 해당 날짜의 요일을 반환한다.
//Parameter    : String 날짜(ex. "2010/05/05", "20100505"), 
//			    , int 요일 반환 구분 : UtilsConstants.DAY_ORIGINAL		 = 실제코드 (ex.1)
// 									   UtilsConstants.DAY_KOREAN         = 한국어 (ex.월요일)  
//                                     UtilsConstants.DAY_KOREANSHORTNM  = 한국어 약어 (ex. 월)
//								       UtilsConstants.DAY_ENGLISH        = 영어 (ex.Monday)
//                                     UtilsConstants.DAY_ENGLISHSHORTNM = 영어 약어 (ex.MON)
//                                     UtilsConstants.DAY_CHINESE        = 한자 (ex.月)
//Return       : String 년도(ex. "2008")
//====================================================================================================================
Utils.getDayOfWeek = function (p_date, div) {

	if (p_date == "")
		return "";
		
    var regChar = /\D/g;                        //숫자제외 정규식
    var v_date  = p_date.replace(regChar, '');
    
    var year	= Utils.toInt(v_date.substring(0, 4));
    var month   = Utils.toInt(v_date.substring(4, 6)) -1 ;
    var day     = Utils.toInt(v_date.substring(6, 8));
    var date    = new Date(year, month, day);
    
    var day0  = [       0,        1,         2,           3,          4,        5,          6]; 
    var day1  = ["일요일", "월요일",  "화요일",    "수요일",   "목요일", "금요일",   "토요일"];  
    var day2  = [    "일",     "월",      "화",        "수",       "목",     "금",       "토"];  
    var day3  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];  
    var day4  = [   "SUN",    "MON",     "TUE",       "WED",      "THU",    "FRI",      "SAT"];  
    var day5  = [    "日",     "月",      "火",        "水",       "木",     "金",       "土"];  
    var days  = [day0, day1, day2, day3, day4, day5];
    
    var idxDay  = Utils.toInt(date.getDay());
    
    div = (div == undefined || div == "") ? 0 : div;
    
    return days[div][idxDay];
}

//====================================================================================================================
//함수명       : getSysYear
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 년도를 반환한다.
//Parameter    : 
//Return       : String 년도(ex. "2008")
//====================================================================================================================
Utils.getSysYear = function () {
	var now = new Date();
	return Utils.toStr(now.getFullYear());
}

//====================================================================================================================
//함수명       : getSysMonth
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 월을 반환한다.
//Parameter    : 
//Return       : String 월(ex. "01", "12")
//====================================================================================================================
Utils.getSysMonth = function () {
	var now      = new Date();
	var month    = Utils.toStr(now.getMonth() + 1);
	
	month        = (month.length == 1) ? "0" + month : month;
	
	return month;
}

//====================================================================================================================
//함수명       : getSysDay
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 일자를 반환한다.
//Parameter    : 
//Return       : String 일자(ex. "01", "31")
//====================================================================================================================
Utils.getSysDay = function () {
	var now      = new Date();
    var date     = now.getDate().toString();
    
    date         = (date.length == 1) ? "0" + date : date;
	
	return date;
}

//====================================================================================================================
//함수명       : getSysDate
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 날짜를 반환한다.
//Parameter    : String 구분자(ex. "/")
//Return       : String 날짜(ex. "2008/01/25")
//====================================================================================================================
Utils.getSysDate = function (separator) {
	return Utils.getSysYear() + separator + Utils.getSysMonth() + separator + Utils.getSysDay();
}

//====================================================================================================================
//함수명       : getSysHour
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 시각을 반환한다.
//Parameter    : 
//Return       : String 시각(ex. "01", "23")
//====================================================================================================================
Utils.getSysHour = function () {
	var now      = new Date();
    var hour     = now.getHours().toString();

    hour         = (hour.length == 1) ? "0" + hour : hour;

	return hour;
}

//====================================================================================================================
//함수명       : getSysMinute
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 분을 반환한다.
//Parameter    : 
//Return       : String 분(ex. "01", "55")
//====================================================================================================================
Utils.getSysMinute = function () {
	var now      = new Date();
    var minute   = now.getMinutes().toString();
    
    minute       = (minute.length == 1) ? "0" + minute : minute;
    
    return minute;
}

//====================================================================================================================
//함수명       : getSysSecond
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 초을 반환한다.
//Parameter    : 
//Return       : String 초(ex. "01", "56")
//====================================================================================================================
Utils.getSysSecond = function () {
	var now      = new Date();
    var second   = now.getSeconds().toString();
    
    second       = (second.length == 1) ? "0" + second : second;
    
    return second;
}

//====================================================================================================================
//함수명       : getSysTime
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 현재 시간을 반환한다.
//Parameter    : String 구분자(ex. ":")
//Return       : String 시간(ex. "12:21")
//====================================================================================================================
Utils.getSysTime = function (separator) {
	return Utils.getSysHour() + separator + Utils.getSysMinute();
}


//====================================================================================================================
//함수명       : getLastDay
//작성자       : 정용희
//작성일       : 2013.02.20
//내용         : 해당 년월의 마지막 일자를 반환한다
//Parameter    : String 년월
//Return       : String 시간(ex. 31)
//====================================================================================================================
Utils.getLastDay = function (param) {
	
	var date = new Date(param.substring(0,4), param.substring(4,6),0);
	
	return date.getDate();
}

//====================================================================================================================
//함수명       : dateAdd
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 지정된 날짜 간격을 추가한 날짜를 반환한다.
//Parameter    : String 간격("Y":년, "M":월, "D":일), int 추가값, String 날짜
//Return       : String 날짜
//====================================================================================================================
Utils.dateAdd = function (interval, number, date) {
	var result 		= "";
	var year   		= 0;
	var month  		= 0;
	var day    		= 0;
	var sYear  		= "";
	var sMonth 		= "";
	var sDay   		= "";
	var separator	= date.replace(/[0-9]/gi, "");	//구분자만 남긴다.
	
	date  = date.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
	
	if (date.length != 8)
		throw new AppException("Utils.dateAdd", "날짜형식이 올바르지 않습니다. -" + date + "-\n(\"YYYY/MM/DD\", \"YYYY-MM-DD\", \"YYYYMMDD\"...)");
	
	year  = Utils.toInt(date.substring(0, 4));
	month = Utils.toInt(date.substring(4, 6)) - 1;	//월은 0부터 시작
	day   = Utils.toInt(date.substring(6, 8));
	
	if (interval.toUpperCase() == "Y")
		year  = year  + number;
	else if (interval.toUpperCase() == "M")
		month = month + number;
	else if (interval.toUpperCase() == "D")
		day   = day   + number;
	
	var rDate = new Date(year, month, day);
	
	sYear  = Utils.toStr(rDate.getFullYear());
	sMonth = Utils.toStr(rDate.getMonth() + 1);
	sDay   = Utils.toStr(rDate.getDate());
	
	sYear  = (sYear.length == 2)  ? "19" + sYear  : sYear;
	sMonth = (sMonth.length == 1) ? "0"  + sMonth : sMonth;
    sDay   = (sDay.length == 1)   ? "0"  + sDay   : sDay;
    
    result = sYear + sMonth + sDay;
    if (separator.length > 0)
    	result = Utils.addDateSep(result, separator.charAt(0));

	return result;
}

//====================================================================================================================
//함수명       : dateDiff
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 두 날짜 사이의 간격 수를 반환한다.
//Parameter    : String 간격("Y":년, "M":월, "D":일), String 시작날짜, String 종료날짜, int 소수점 자릿수
//Return       : number 차이
//====================================================================================================================
Utils.dateDiff = function (interval, date1, date2, precision) {
	var result = 0;
	date1 = date1.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
	date2 = date2.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
	date1 = date1.substring(0, 8);
	date2 = date2.substring(0, 8);
	
	if (date1.length != 8)
		throw new AppException("Utils.dateDiff", "날짜형식이 올바르지 않습니다. -" + date1 + "-\n(\"YYYY/MM/DD\", \"YYYY-MM-DD\", \"YYYYMMDD\"...)");
		
	if (date2.length != 8)
		throw new AppException("Utils.dateDiff", "날짜형식이 올바르지 않습니다. -" + date2 + "-\n(\"YYYY/MM/DD\", \"YYYY-MM-DD\", \"YYYYMMDD\"...)");
	
	var sDate  = new Date(Utils.addDateSep(date1, "/"));
	var eDate  = new Date(Utils.addDateSep(date2, "/"));
	
	precision = Utils.toInt(precision || 0);
	
	if (interval.toUpperCase() == "Y") {
		result = (eDate - sDate) / (24 * 60 * 60 * 1000);
		result = result / 365;
	}
	else if (interval.toUpperCase() == "M") {
		result = ((Utils.toInt(date2.substring(0, 4)) * 12) + Utils.toInt(date2.substring(4, 6)))
			   - ((Utils.toInt(date1.substring(0, 4)) * 12) + Utils.toInt(date1.substring(4, 6)));

	    result += (eDate.getDate() - sDate.getDate()) / 31;
	}
	else {
		result = (eDate - sDate) / (24 * 60 * 60 * 1000);
	}
	
	return Math.round(result * Math.pow(10,precision)) / Math.pow(10,precision);
}

//====================================================================================================================
//함수명       : timeAdd
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 지정된 시간 간격을 추가한 시간를 반환한다.
//Parameter    : String 간격("H":시, "M":분), int 추가값, String 시간
//Return       : String 시간
//====================================================================================================================
Utils.timeAdd = function (interval, number, time) {
	var result  	= "";
	var hour    	= 0;
	var minute  	= 0;
	var sHour   	= "";
	var sMinute 	= "";
	var separator	= time.replace(/[0-9]/gi, "");	//구분자만 남긴다.
	
	time   = time.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
	
	if (time.length != 4)
		throw new AppException("Utils.timeAdd", "시간형식이 올바르지 않습니다. -" + time + "-\n(\"HH:MM\", \"HH-MM\", \"HHMM\"...)");
	
	hour   = Utils.toInt(time.substring(0, 2));
	minute = Utils.toInt(time.substring(2, 4));
	
	if (interval.toUpperCase() == "H")
		hour = hour + number;
	else
		minute = minute + number;

	var rDate = new Date(1900, 0, 1, hour, minute, 0);

	sHour   = Utils.toStr(rDate.getHours());
	sMinute = Utils.toStr(rDate.getMinutes());
	
	sHour   = (sHour.length == 1)   ? "0"  + sHour   : sHour;
	sMinute = (sMinute.length == 1) ? "0"  + sMinute : sMinute;
	
	result  = sHour + sMinute;
	if (separator.length > 0)
    	result = Utils.addTimeSep(result, separator.charAt(0));

	return result;
}

//====================================================================================================================
//함수명       : timeDiff
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 두 시간 사이의 간격 수를 반환한다.
//Parameter    : String 간격("H":시, "M":분), String 시작시간, String 종료시간
//Return       : int 차이
//====================================================================================================================
Utils.timeDiff = function (interval, time1, time2) {
	var result  = 0;
	
	time1 = time1.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
	time2 = time2.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
	
	if (time1.length != 4)
		throw new AppException("Utils.timeDiff", "시간형식이 올바르지 않습니다. -" + time1 + "-\n(\"HH:MM\", \"HH-MM\", \"HHMM\"...)");
		
	if (time2.length != 4)
		throw new AppException("Utils.timeDiff", "시간형식이 올바르지 않습니다. -" + time2 + "-\n(\"HH:MM\", \"HH-MM\", \"HHMM\"...)");
	
	if (interval.toUpperCase() == "H") {
		result = Utils.toInt(time2.substring(0, 2)) - Utils.toInt(time1.substring(0, 2));
	}
	else {
		result = ((Utils.toInt(time2.substring(0, 2)) * 60) + Utils.toInt(time2.substring(2, 4)))
			   - ((Utils.toInt(time1.substring(0, 2)) * 60) + Utils.toInt(time1.substring(2, 4)));
	}
	
	return result;
}

//====================================================================================================================
//함수명       : isApht
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 영문으로만 이루어져 있는지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isApht = function (v) {
	var regex    = /^([A-Z]|[a-z])+$/;
    v = Utils.toStr(v);
    
    return regex.test(v);
}

//====================================================================================================================
//함수명       : isAphtNumber
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 영문과 숫자로만 이루어져 있는지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isAphtNumber = function (v) {
	var regex    = /^([A-Z]|[a-z]|[0-9])+$/;
    v = Utils.toStr(v);
    
    return regex.test(v);
}

//====================================================================================================================
//함수명       : isBigApht
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 대문자로만 이루어져 있는지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isBigApht = function (v) {
	var regex    = /^([A-Z])+$/;
    v = Utils.toStr(v);
    
    return regex.test(v);
}

//====================================================================================================================
//함수명       : isBigAphtNumber
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 대문자와 숫자로만 이루어져 있는지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isBigAphtNumber = function (v) {
	var regex    = /^([A-Z]|[0-9])+$/;
    v = Utils.toStr(v);
    
    return regex.test(v);
}
Utils.isBigAphtNumber.toString = null;

//====================================================================================================================
//함수명       : isSmallApht
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 소문자로만 이루어져 있는지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isSmallApht = function (v) {
	var regex    = /^([a-z])+$/;
    v = Utils.toStr(v);
    
    return regex.test(v);
}

//====================================================================================================================
//함수명       : isSmallAphtNumber
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 소문자와 숫자로만 이루어져 있는지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isSmallAphtNumber = function (v) {
	var regex    = /^([a-z]|[0-9])+$/;
    v = Utils.toStr(v);
    
    return regex.test(v);
}

//====================================================================================================================
//함수명       : isNumber
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 숫자로만 이루어져 있는지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isNumber = function (v) {
	var regex	 = /^([0-9])+$/;
	v = Utils.toStr(v);
    
    return regex.test(v);
}

//====================================================================================================================
//함수명       : isNumeric
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 숫자로써 유효한지 판단한다.
//Parameter    : String 문자열
//Return       : boolean 결과
//====================================================================================================================
Utils.isNumeric = function (v) {
	var regex	 = /^([0-9]|\.)+$/;
	v = Utils.toStr(v);
	
	if (v.length < 1)
		return false;
	
	if (v.charAt(0) == "-")
		v = v.substring(1, v.length);
		
	if (v == ".")
		return false;
	
	if (regex.test(v)) {
		if (v.split(".").length <= 2)
			return true;
		else
			return false;
	}
	else {
		return false;
	}
}

//====================================================================================================================
//함수명       : isValidMask
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 마스크와 일치하는지 판단한다.
//Parameter    : String 문자열, String 마스크(A는 대문자, a는 소문자, 9는 숫자, 나머지는 형식)
//Return       : boolean 결과
//====================================================================================================================
Utils.isValidMask = function (v, mask) {
	v = Utils.toStr(v);
	var chkChar  = "";
	var maskChar = "";
	
	if (v.length != mask.length)	//길이
		return false;
		
	for (var i = 0; i < mask.length; i++) {
		chkChar  = v.charAt(i);
		maskChar = mask.charAt(i);
		
		if (maskChar == "A") {
			if (!Utils.isBigApht(chkChar))
				return false;
		}
		else if (maskChar == "a") {
			if (!Utils.isSmallApht(chkChar))
				return false;
		}
		else if (maskChar == "9") {
			if (!Utils.isNumber(chkChar))
				return false;
		}
		else {
			if (chkChar != maskChar)
				return false;
		}
	}
	
	return true;
}

//====================================================================================================================
//함수명       : isDate
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 날짜형태인지 판단한다.
//Parameter    : String 문자열, String 마스크(ex. "YYYY", "YYYY/MM", "YYYY/MM/DD")
//Return       : boolean 결과
//====================================================================================================================
Utils.isDate = function (v, mask) {
	v = Utils.toStr(v);
	var regex  	 = /[^0-9]/gi;
	var year     = 0;
	var month    = 0;
	var day      = 0;
	var days     = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
	mask = mask.toUpperCase();
	mask = mask.replaceAll("Y", "9").replaceAll("M", "9").replaceAll("D", "9");
	
	if (!Utils.isValidMask(v, mask))
		return false;	//형식, 길이
	
	v = v.replace(regex, "");	//숫자만 남는다.
	
	if (v.length >= 4) {	//년도
		year= Utils.toInt(v.substring(0, 4));
		if (year <= 0)
			return false;
	}
	
	if (v.length >= 6) {	//월
		month = Utils.toInt(v.substring(4, 6));
		if (month <= 0 || month > 12)
			return false;
	}
	
	if (v.length >= 8) {	//일
		day = Utils.toInt(v.substring(6, 8));
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
			days[1] = 29;	//윤달
			
		if (day <= 0 || day > days[month - 1])
			return false;
	}

	return true;
}

//====================================================================================================================
//함수명       : isBizNo
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 사업자등록번호형태인지 판단한다.
//Parameter    : String 문자열(ex. "9999999999", "999-99-99999")
//Return       : boolean 결과
//====================================================================================================================
Utils.isBizNo = function (v) {
	v 	= Utils.toStr(v);
	var chkKey   	= "137137135";
	var sum		 	= 0;
	var sidliy   	= 0;
	var sidchk   	= 0;
	var mask		= "";
	
	if (v.length != 10 && v.length != 12)
		return false;
	
	if (v.length == 10)
		mask = "9999999999";
	else
		mask = "999-99-99999";
	
	if (!Utils.isValidMask(v, mask))
		return false;	//형식, 길이
	
	v = v.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
	
	for(var i = 0; i < 9; i++)
    	sum = sum + (Utils.toInt(v.charAt(i)) * Utils.toInt(chkKey.charAt(i)));
    
    sum    = sum + Utils.toInt((Utils.toInt(v.charAt(8)) * 5) / 10);
    sidliy = sum % 10;
    sidchk = 0;
    
    if(sidliy != 0)
    	sidchk = 10 - sidliy;
    else
		sidchk = 0;

    if(sidchk != Utils.toInt(v.charAt(9)))
		return false;
    
    return true;
}

//====================================================================================================================
//함수명       : isCorpNo
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 법인등록번호형태인지 판단한다.
//Parameter    : String 문자열(ex. "9999999999999", "999999-9999999")
//Return       : boolean 결과
//====================================================================================================================
Utils.isCorpNo = function (v) {
    v = Utils.toStr(v);
    var sum      = 0;
    var chkKey   = "121212121212";
    var mask     = "";
    
    if (v.length != 13 && v.length != 14)
        return false;
        
    if (v.length == 13)
        mask = "9999999999999";
    else
        mask = "999999-9999999";
    
    if (!Utils.isValidMask(v, mask))
        return false;   //형식, 길이
    
    v = v.replace(/[^0-9]/gi, "");    //숫자만 남긴다.
        
    for(var i = 0; i < v.length - 1; i++)
        sum = sum + (Utils.toInt(v.charAt(i)) * Utils.toInt(chkKey.charAt(i)));

    if ((10 - (sum % 10)) % 10 != Utils.toInt(v.charAt(12)))
        return false;
        
    return true;
}

//====================================================================================================================
//함수명       : isResNo
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 주민등록번호형태인지 판단한다.
//Parameter    : String 문자열(ex. "9999999999999", "999999-9999999")
//Return       : boolean 결과
//====================================================================================================================
Utils.isResNo = function (v) {
	v = Utils.toStr(v);
	var sum      = 0;
	var chkKey   = "234567892345";
	var mask	 = "";
	
	//대쉬 1개 없으면 false
	if (v.split("-").length != "1") {
		return false
	} 
	
	if (v.length != 13 && v.length != 14)
		return false;
		
	if (v.length == 13)
		mask = "9999999999999";
	else
		mask = "999999-9999999";
	
	if (!Utils.isValidMask(v, mask))
		return false;	//형식, 길이
	
	v = v.replace(/[^0-9]/gi, "");	//숫자만 남긴다.
		
	for(var i = 0; i < v.length - 1; i++)
		sum = sum + (Utils.toInt(v.charAt(i)) * Utils.toInt(chkKey.charAt(i)));
	
	if (((11 - (sum % 11)) % 10) != Utils.toInt(v.charAt(12)))
		return false;
		
	return true;
}

//====================================================================================================================
//함수명       : Utils.isFgnResNo
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 외국인주민등록번호형태인지 판단한다.
//Parameter    : String 문자열(ex. "9999999999999", "999999-9999999")
//Return       : boolean 결과
//====================================================================================================================
Utils.isFgnResNo = function (v) {
/*
	v = Utils.toStr(v);
    var sum      = 0;
    var odd      = 0;
    var chkKey   = "234567892345";
    var mask     = "";
      
    if (v.length != 13 && v.length != 14)
        return false;
        
    if (v.length == 13)
        mask = "9999999999999";
    else
        mask = "999999-9999999";
        
    if (!Utils.isValidMask(v, mask))
        return false;   //형식, 길이
        
    v = v.replace(/[^0-9]/gi, "");    //숫자만 남긴다.
    
    odd = Utils.toInt(v.charAt(7)) * 10 + Utils.toInt(v.charAt(8));
    
    if(odd % 2 != 0)
        return false;
    
    if(Utils.toInt(v.charAt(11)) != 6 && Utils.toInt(v.charAt(11)) != 7 &&
            Utils.toInt(v.charAt(11)) != 8 && Utils.toInt(v.charAt(11)) != 9) {
        return false;
    }
    
    for(i = 0; i < 12; i++)
        sum = sum + (Utils.toInt(v.charAt(i)) * Utils.toInt(chkKey.charAt(i)));

    if((((11 - (sum % 11)) + 2) % 10) != Utils.toInt(v.charAt(12)))
        return false;
*/        

 //거소번호 체크로직
    var total =0;
    var parity = 0;
    var fgnNo = new Array(13);    
    for(i=0;i < 13;i++) fgnNo[i] = parseInt(v.charAt(i)); 
    
	if((parity = fgnNo[7]*10 + fgnNo[8])&1)
		return false;
	
	  var weight = 2;
	  for(i=0,total=0;i < 12;i++)
	  {
	   var sum = fgnNo[i] * weight;
	   total += sum;
	   if(++weight > 9) weight=2;
	  }
	  if((total = 11 - (total%11)) >= 10) total -= 10;
	  if((total += 2) >= 10) total -= 10;
	  if(total != fgnNo[12]) 
		return false;    
    
    return true;
}

//====================================================================================================================
//함수명       : isTelNo
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 전화번호(핸드폰, 호출기)형태인지 판단한다.
//Parameter    : String 문자열(ex. "999-999-9999", "9999999999", ...)
//Return       : boolean 결과
//====================================================================================================================
Utils.isTelNo = function (v) {
	var len      = v.length;
	var local    = "0";

	//컨택센터 요청
	if (v == "") {
		return true
	}
	
	//대쉬 2개 없으면 false
	if (v.split("-").length != "3") {
		return false
	} 

	//구분자 없을 경우 구분자 삽입
	if (v.replace(/[0-9]/gi, "").length <= 0) {
		if (len == 7) {		//"999-9999"
			v = v.substring(0, 3) + "-" + v.substring(3, v.length);
		}
		else if (len == 8) {	//"9999-9999"
			v = v.substring(0, 4) + "-" + v.substring(4, v.length);
		}
		else if (len == 9) {	//"99-999-9999"
			v = v.substring(0, 2) + "-" + v.substring(2, 5) + "-" + v.substring(5, v.length);
		}
		else if (len == 10) {	//"99-9999-9999" or "999-999-9999"
			if (v.substring(0, 2) == "02")	//"99-9999-9999"
				v = v.substring(0, 2) + "-" + v.substring(2, 6) + "-" + v.substring(6, v.length);
			else	//"999-999-9999"
				v = v.substring(0, 3) + "-" + v.substring(3, 6) + "-" + v.substring(6, v.length);
			
		}
		else if (len == 11) {	//"999-9999-9999"
			v = v.substring(0, 3) + "-" + v.substring(3, 7) + "-" + v.substring(7, v.length);
		}
	}

	len = v.length;
	
	if (len < 8)
		return false;
	
	if (v.charAt(0) == "-" || v.charAt(v.length - 1) == "-")
		return false;
	
	//지역번호판단	
	if (v.charAt(0) == "0") {	//지역, 핸드폰통신사번호 있음
		if (v.charAt(1) == "2")
			local = "1";	//서울
		else if (v.charAt(1) != "1")
			local = "2";	//기타
		else if (v.charAt(1) == "1")
			local = "3";	//핸드폰
	}
	else {	//지역, 핸드폰통신사번호 없음
		local = "0";	//지역번호없음
	}
	
	//체크
	if (local == "1") {	//서울
		if (len != 11 && len != 12)
			return false;
		
		if (v.split("-").length != 3)
			return false;
			
		if (v.charAt(2) != "-")
			return false;
		
		if (len == 11 && v.charAt(6) != "-")
			return false;
			
		if (len == 12 && v.charAt(7) != "-")
			return false;
		
	}
	else if (local == "2") {	//기타지역
		if (len != 12 && len != 13)
			return false;
		
		if (v.split("-").length != 3)
			return false;
			
		if (v.charAt(3) != "-")
			return false;
			
		if (len == 12 && v.charAt(7) != "-")
			return false;
			
		if (len == 13 && v.charAt(8) != "-")
			return false;
		
	}
	else if (local == "0") {	//지역번호 없음
		if (len != 8 && len != 9)
			return false;
			
		if (v.split("-").length != 2)
			return false;
		
		if (len == 8 && v.charAt(3) != "-")
			return false;
			
		if (len == 9 && v.charAt(4) != "-")
			return false;

	}
	else { //휴대폰
		if (len != 12 && len != 13)
			return false;
		
		if (v.substring(0, 3) == "010")
			return true;
		
		else if (v.substring(0, 3) == "011")
			return true;
		
		else if (v.substring(0, 3) == "016")
			return true;

		else if (v.substring(0, 3) == "017")
			return true;

		else if (v.substring(0, 3) == "018")
			return true;
		
		else if (v.substring(0, 3) == "019")
			return true;
		
		else
			return false
	}
	return true;
}

//====================================================================================================================
//함수명       : isEMail
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열이 이메일형태인지 판단한다.
//Parameter    : String 문자열(ex. "test@test.co.kr")
//Return       : boolean 결과
//====================================================================================================================
Utils.isEMail = function (v) {
	var reg = /^\s*[\w\~\-\.]+\@[\w\~\-]+(\.[\w\~\-]+)+\s*$/g;
	return v.search(reg) >= 0;
}

//====================================================================================================================
//함수명       : getIdxFromArray
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자값 배열에서 "루프없이" 해당값의 인덱스를 검색한다.(실패시 -1)
//Parameter    : array 배열, String 찾을값
//Return       : int 인덱스
//====================================================================================================================
Utils.getIdxFromArray = function (datas, key) {
    var delimiter    = "!@!";
    var data         = delimiter + datas.join(delimiter) + delimiter;
    
    key      = delimiter + key + delimiter;
    var idx  = data.indexOf(key);

    if(idx > 0) {
        data = data.substring(delimiter.length, idx);
        return data.split(delimiter).length;
    }
    else if(idx == 0)
        return 0;
    else
        return -1;
}

//====================================================================================================================
//함수명       : getDecColor
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : HTML 스타일의 색상값을 10진수 값으로 변환한다.(ex "#F6DEE1" => 14802678 )
//Parameter    : String 색상값
//Return       : int 10진수 색상값
//====================================================================================================================	
Utils.getDecColor = function (htmlCol) {
    var result = 0;     //반환값
    var reg    = /^([A-Z]|[0-9])+$/;
    var hexVal = "";    //16진수형 문자값

    hexVal = htmlCol.replace("#", "").trim().toUpperCase();
    if (hexVal.length == 6 || reg.test(hexVal)) {
        hexVal = hexVal.substring(4, 6) + hexVal.substring(2, 4) + hexVal.substring(0, 2);
        result = parseInt(hexVal, 16);
    }
    
    return result;
}

//====================================================================================================================
//함수명       : trunc
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 숫자의 정수만 반환한다.
//Parameter    : int value
//Return       : Int 치환된 결과
//====================================================================================================================
Utils.trunc = function (num) {
	//주석처리는 그냥 알아두기위함
	//var value  = Utils.toStr(num).split('\.');
    
    //return Utils.toInt(value[0]);
    return Utils.toApproxNumber(num, 0, "trunc");
}

//====================================================================================================================
//프로그램명   : setCookieVal
//작성자       : 정용희
//작성일       : 2012.11.07
//내용         : 쿠키에 값을 설정한다.
//Parameter    : String 이름, String 값, int 만료일(일)
//Return       :
//====================================================================================================================
Utils.setCookieVal = function(name, v, exp) {
	var now = new Date();
	now.setDate(now.getDate() + exp);
	document.cookie = name + "=" + escape(v) + "; path=/; expires=" + now.toGMTString() + ";"
}

//====================================================================================================================
//프로그램명   : getCookieVal
//작성자       : 정용희
//작성일       : 2012.11.07
//내용         : 쿠키에서 이름에 해당하는 값을 가져온다.
//Parameter    : String 이름
//Return       : String 값
//====================================================================================================================
Utils.getCookieVal = function(name) {
	var cn = name + "=";     //cookie name
	var ck = document.cookie;
	var x = 0;
  
	while (x <= ck.length) {
		var y = (x + cn.length);
      
		if (ck.substring(x, y) == cn) {
			var end = ck.indexOf( ";", y ); //endOfCookie
			if (end == -1)
			end = ck.length;
          
			return unescape(ck.substring(y, end));
		}
      
		x = ck.indexOf(" ", x ) + 1;
		if (x == 0)
			break;
	}
	return "";
}
//====================================================================================================================
//프로그램명   : getFuncName
//작성자       : 정용희
//작성일       : 2013.01.22
//내용         : 함수명을 가져온다.
//Parameter    : function 함수
//Return       : String 함수명
//====================================================================================================================
Utils.getFuncName = function(func) {
	if ( typeof func == "function" || typeof func == "object" )
		var fName = (""+func).match(/function\s*([\w\$]*)\s*\(/); 
	
	if ( fName !== null ) 
		return fName[1];
}

//====================================================================================================================
//String 객체 재정의
//====================================================================================================================
//====================================================================================================================
//함수명       : trim
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열의 좌우공백을 제거한다.
//Parameter    :
//Return       : String 제거된 결과
//====================================================================================================================
String.prototype.trim = function () {
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

//====================================================================================================================
//함수명       : replaceAll
//작성자       : 정용희
//작성일       : 2012.10.29
//내용         : 문자열의 일부를 원하는 값으로 모두 치환한다.
//Parameter    : String 대상값, String 변경할 값
//Return       : String 치환된 결과
//====================================================================================================================
String.prototype.replaceAll = function (regex, replacement) {
	var v       = this;
    
    if (regex.length > 0) {
    	//value = value.replace(new RegExp(regex, "g"), replacement);
        v = v.split(regex).join(replacement);
    }

    return v;
}



