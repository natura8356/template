<head>
<title>login</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<script type="text/javascript" src="/js/jquery-1.7.min.js"></script>

<script type="text/javascript">

$(document).ready(function() {
	$('#usrId').focus();
});
</script>
</head>

<body>
<table width="100%" height="100%" border="0">
	<tr>
		<td>
			<form method="post" name="loginForm" action="returnPage.do">
			<table width="680px" border="0" align="center" cellpadding="0" cellspacing="0" class="mar_t20b30">
				<tr>
					<td style="padding:10px 0 10px 0; text-align:center" height="305px">
						<table width="530" border="1" align="center" cellpadding="0" cellspacing="0">
							<tr>
								<td align="right">
							    	Id : <input type="text" name="usrId" id="usrId" value="admin" style="width:160px" tabindex="1" />
							    </td>
								<td width="84" rowspan="2" align="center">
									 <input type="submit" name="submit" value="Login"/>
								</td>
							</tr>
							<tr>
								<td align="right">
							    	Password : <input type="password" name="pw " id="pw" value="1" style="width:160px" tabindex="2" />
							    </td>
							</tr>
						</table>
				  </td>
				</tr>
			</table>
            </form>
		</td>
	</tr>
</table>

</body>
</html>
