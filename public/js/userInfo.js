var Sno = 0;
var Tno = 0;
var Wno = 0;
var Cno = 0;

var Sarr = new Array();
var Tarr = new Array();
var Warr = new Array();
var Carr = new Array();

window.onload = function(){
	lock();
	getBasicInfo();
	getS();
	getT();
	getW();
	getC(); 
}

function un1(){
	for(var i = 3; i < 26; ++i){
		$("#"+i.toString()).removeAttr("disabled");
	}
	for(var i = 1; i <= Sno;++i){
		$("#"+"Sname_"+i.toString()).removeAttr("disabled");
		$("#"+"Sid_"+i.toString()).removeAttr("disabled");
		$("#"+"Sop_"+i.toString()).removeAttr("disabled");
	}
	for(var i = 1; i <= Tno;++i){
		$("#"+"Tdate_"+i.toString()).removeAttr("disabled");
		$("#"+"Tname_"+i.toString()).removeAttr("disabled");
		$("#"+"Tdesc_"+i.toString()).removeAttr("disabled");
		$("#"+"Ttype_"+i.toString()).removeAttr("disabled");
		$("#"+"Top_"+i.toString()).removeAttr("disabled");
	}
	for(var i = 1; i <= Sno;++i){
		$("#"+"Wdate1_"+i.toString()).removeAttr("disabled");
		$("#"+"Wdate2_"+i.toString()).removeAttr("disabled");
		$("#"+"Wname_"+i.toString()).removeAttr("disabled");
		$("#"+"Wpos_"+i.toString()).removeAttr("disabled");
		$("#"+"Wpro_"+i.toString()).removeAttr("disabled");
	}
	for(var i = 1; i <= Tno;++i){
		$("#"+"Cdesc_"+i.toString()).removeAttr("disabled");
		$("#"+"Cbool_"+i.toString()).removeAttr("disabled");
	}
	for(var i = 1; i <= 5; ++i)
		$("#b"+i.toString()).removeAttr("disabled");
	$("#42").removeAttr("disabled");
	$("#43").removeAttr("disabled");
	$("#47").removeAttr("disabled");
}


function un2(){
	for(var i = 3; i <= 5; ++i)
		$("#b"+i.toString()).removeAttr("disabled");
	$("#11").removeAttr("disabled");
	$("#19").removeAttr("disabled");
	$("#20").removeAttr("disabled");
	$("#42").removeAttr("disabled");
	$("#43").removeAttr("disabled");
	$("#47").removeAttr("disabled");
}

function lock(){
	for(var i = 1; i < 28; ++i) 
		$("#"+i.toString()).attr({"disabled":"disabled"});
	for(var i = 1; i <= Sno;++i){
		$("#"+"Sname_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Sid_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Sop_"+i.toString()).attr({"disabled":"disabled"});
	}
	for(var i = 1; i <= Tno;++i){
		$("#"+"Tdate_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Tname_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Tdesc_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Ttype_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Top_"+i.toString()).attr({"disabled":"disabled"});
	}
	for(var i = 1; i <= Sno;++i){
		$("#"+"Wdate1_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Wdate2_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Wname_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Wpos_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Wpro_"+i.toString()).attr({"disabled":"disabled"});
	}
	for(var i = 1; i <= Tno;++i){
		$("#"+"Cdesc_"+i.toString()).attr({"disabled":"disabled"});
		$("#"+"Cbool_"+i.toString()).attr({"disabled":"disabled"});
	}
	for(var i = 1; i <= 5; ++i)
		$("#b"+i.toString()).attr({"disabled":"disabled"});
	
	$("#42").attr({"disabled":"disabled"});
	$("#43").attr({"disabled":"disabled"});
	$("#47").attr({"disabled":"disabled"});
}

function showDialog(){
	$("#d1").show();
}
function closeDialog(){
	$("#d1").hide();
}

function addJudgeField(){
	var arr = new Array();
	var obj = document.getElementsByName("judge");
	for(var i =0; i < obj.length;++i)
		if(obj[i].checked)
			arr.push(obj[i].value);
	if(arr.length > 2)
		alert("最多2项");
	else{
		$("#26").val(arr[0]);
		$("#27").val(arr[1]);
	}
	closeDialog();
}

function addNewS(){
	$("#28").append("<input type = 'text' id = 'Sname_"+ Sno +"'/>");
	$("#29").append("<input type = 'text' id = 'Sid_"+ Sno +"'/>");
	$("#30").append("<div class = 'buttonBlock' id = 'Sop_"+ Sno +"'><input type = 'button' value = '删除' onclick = 'deleteS(" + Sno +");'/></div>");
	Sno++;
}

function deleteS(index){
	$("#Sname_"+index).remove();
	$("#Sid_"+index).remove();
	$("#Sop_"+index).remove();
}

function addNewT(){
	$("#31").append("<input type = 'date' id = 'Tdate_"+ Tno +"'/>");
	$("#32").append("<input type = 'text' id = 'Tname_"+ Tno +"'/>");
	$("#33").append("<input type = 'text' id = 'Tdesc_"+ Tno +"'/>");
	$("#34").append("<select id = 'Ttype_"+ Tno +"'> <option value = '评估'>评估</option><option value = '评审'>评审</option></select>");
	$("#35").append("<div class = 'buttonBlock' id = 'Top_"+ Tno +"'><input type = 'button' value = '删除' onclick = 'deleteT(" + Tno +");'/></div>");
	Tno++;
}

function deleteT(index){
	$("#Tdate_"+index).remove();
	$("#Tname_"+index).remove();
	$("#Tdesc_"+index).remove();
	$("#Ttype_"+index).remove();
	$("#Top_"+index).remove();
}

function addNewW(){
	$("#36").append("<input type = 'date' id = 'Wdate1_"+ Wno +"'/>");
	$("#37").append("<input type = 'date' id = 'Wdate2_"+ Wno +"'/>");
	$("#38").append("<input type = 'text' id = 'Wname_"+ Wno +"'/>");
	$("#39").append("<input type = 'text' id = 'Wpos_"+ Wno +"'/>");
	$("#40").append("<input type = 'text' id = 'Wpro_"+ Wno +"'/>");
	$("#41").append("<div class = 'buttonBlock' id = 'Wop_"+ Wno +"'><input type = 'button' value = '删除' onclick = 'deleteW(" + Wno +");'/></div>");
	Wno++;
}

function deleteW(index){
	$("#Wdate1_"+index).remove();
	$("#Wname_"+index).remove();
	$("#Wdate2_"+index).remove();
	$("#Wpro_"+index).remove();
	$("#Wpos_"+index).remove();
	$("#Wop_"+index).remove();
}

function addNewC(){
	$("#44").append("<input type = 'text' id = 'Cdesc_"+ Cno +"'/>");
	$("#45").append("<select id = 'Cbool_"+ Cno +"'><option value = '是'>是</option><option value = '否'>否</option></select>");
	$("#46").append("<div class = 'buttonBlock' id = 'Cop_"+ Cno +"'><input type = 'button' value = '删除' onclick = 'deleteC(" + Cno +");'/></div>");
	Cno++;
}

function deleteC(index){
	$("#Cdesc_"+index).remove();
	$("#Cbool_"+index).remove();
	$("#Cop_"+index).remove();
}

function saveData(){
	saveBasicInfo();
	setTimeout(saveS,1);
	setTimeout(saveT,2);
	setTimeout(saveW,3);
	setTimeout(saveC,4);
	setTimeout(selectImg,5);
}

function saveBasicInfo(){
	var select1 = $("#4");
	var select2 = document.getElementById('8');
	var select3 = document.getElementById('11');
	var select4 = document.getElementById('15');
	var select5 = document.getElementById('17');
	var select6 = document.getElementById('19');
	var select7 = document.getElementById('20');

	var basicInfo = {
		Name:document.getElementById('3').value,
		sex:$("#4").val(),
		birthday:document.getElementById('5').value,
		politics:document.getElementById('6').value,
		CA:document.getElementById('7').value,
		education:$("#8").val(),
		tittle:document.getElementById('9').value,
		position:document.getElementById('10').value,
		retired:$("#11").val(),
		mail:document.getElementById('12').value,
		E_mail:document.getElementById('22').value,
		mobilephone:document.getElementById('13').value,
		typeOfcertificate:$("#15").val(),
		ID:document.getElementById('16').value,
		academic:$("#17").val(),
		aID:document.getElementById('18').value,
		workAge:$("#19").val(),
		isPartimeL:$("#20").val(),
		homePhone:document.getElementById('21').value,
		worklPlace:document.getElementById('23').value,
		detailAddress:document.getElementById('24').value,
		School:document.getElementById('25').value,
		judgeField1:document.getElementById('26').value,
		judgeField2:document.getElementById('27').value,
		advantage:document.getElementById('42') .value,
		achivement:document.getElementById('43').value,
		others:document.getElementById('47').value,
	};

	$.post("http://localhost:3000/User/basicInfo",
			basicInfo,
			function(res,err){
				window.location = "http://localhost:3000/User/";
			}
	);
}

function getBasicInfo(){
	$.get("http://localhost:3000/User/basicInfo",
		function(data,err){
			if(data!= null){
				$("#1").val(data.CID);
				$("#2").val(data.verifyDate);
				$("#3").val(data.Name);
				$("#4").val(data.sex);
				$("#5").val(data.birthday.substring(0,10));
				$("#6").val(data.politics);
				$("#7").val(data.CA);
				$("#8").val(data.education);
				$("#9").val(data.tittle);
				$("#10").val(data.position);
				$("#11").find("option[text='"+data.retired+"']").attr("selected",true);
				$("#12").val(data.mail);
				$("#13").val(data.mobilephone);
				$("#14").text(data.status);
				$("#15").find("option[text='"+data.typeOfcertificate+"']").attr("selected",true);
				$("#16").val(data.academic);
				$("#17").find("option[text='"+data.academic+"']").attr("selected",true);
				$("#18").val(data.ID);
				$("#19").find("option[text='"+data.workAge+"']").attr("selected",true);
				$("#20").find("option[text='"+data.isPartimeL+"']").attr("selected",true);
				$("#21").val(data.E_mail);
				$("#22").val(data.homePhone);
				$("#23").val(data.worklPlace);
				$("#24").val(data.detailAddress);
				$("#25").val(data.School);
				$("#26").val(data.judgeField1);
				$("#27").val(data.judgeField2);
				$("#42").val(data.advantage);
				$("#43").val(data.achivement);
				$("#47").val(data.others);
			}
	});

	$.get("http://localhost:3000/Login/status",function(data,err){
		$("#img").attr({"src":"http://localhost:3000/image/user/"+data.person_.userName+".jpg"});
	})
}

function getS(){
	$.get("http://localhost:3000/User/getQuality",function(data,err){
		for(var i = 0; i < data.length; ++i){
			$("#28").append("<input type = 'text' id = 'Sname_"+ Sno +"' value = '"+data[i].Sname+"'/>");
			$("#29").append("<input type = 'text' id = 'Sid_"+ Sno +"' value ='"+data[i].Sid+"'/>");
			$("#30").append("<div class = 'buttonBlock' id = 'Sop_"+ Sno +"'><input type = 'button' value = '删除' onclick = 'deleteS(" + Sno +");'/></div>");
			Sno++;
		}
	})
}

function saveS(){
	$.post("http://localhost:3000/User/deleteOldQuality",
			function(data,err){
				;
		});
	for(var i = 0; i < Sno; ++i){
		var name  = $("#Sname_"+i).val();
		var id = $("#Sid_"+i).val();
		if(name!=null && id != null){
			$.post("http://localhost:3000/User/saveQuality",{
					Sname:name,
					Sid:id
			});
		}	
	}
}

function getT(){
	$.get("http://localhost:3000/User/getExperience",function(data,err){
		for(var i = 0; i < data.length; ++i){
			$("#31").append("<input type = 'date' id = 'Tdate_"+ Tno +"' value = '"+data[i].time.substring(0,10)+"'/>");
			$("#32").append("<input type = 'text' id = 'Tname_"+ Tno +"'" + "value = '"+data[i].name+"'/>");
			$("#33").append("<input type = 'text' id = 'Tdesc_"+ Tno +"'" + "value = '"+data[i].desc+"'/>");
			$("#34").append("<select id = 'Ttype_"+ Tno +"'> <option value = '评估'>评估</option><option value = '评审'>评审</option></select>");
			$("#Ttype_"+Tno).val(data[i].type);
			$("#35").append("<div class = 'buttonBlock' id = 'Top_"+ Tno +"'><input type = 'button' value = '删除' onclick = 'deleteT(" + Tno +");'/></div>");
			Tno++;
		}
	});
}

function saveT(){
	$.post("http://localhost:3000/User/deleteOldExperience",
			function(data,err){
				;
	});
	for(var i = 0; i < Tno; ++i){
		var time_  = $("#Tdate_"+i).val();
		var name_ = $("#Tname_"+i).val();
		var desc_ = $("#Tdesc_"+i).val();
		var type_ = $("#Ttype_"+i).val();
		if(name_!=null && time_ != null && desc_!=null && type_ != null){
			$.post("http://localhost:3000/User/saveExperience",{
					time:time_,
					name:name_,
					desc:desc_,
					type:type_
			},function(data,err){
				; 
			});
		}	
	}
}

function getW(){
	$.get("http://localhost:3000/User/getWorkExperience",function(data,err){
		for(var i = 0; i < data.length; ++i){
			$("#36").append("<input type = 'date' id = 'Wdate1_"+ Wno +"'" + "value = '" +data[i].startTime.substring(0,10)+"'/>");
			$("#37").append("<input type = 'date' id = 'Wdate2_"+ Wno +"'" + "value = '" +data[i].endTime.substring(0,10)+"'/>");
			$("#38").append("<input type = 'text' id = 'Wname_"+ Wno +"'" + "value = '" +data[i].workplace+"'/>");
			$("#39").append("<input type = 'text' id = 'Wpos_"+ Wno +"'" + "value = '" +data[i].position +"'/>");
			$("#40").append("<input type = 'text' id = 'Wpro_"+ Wno +"'" + "value = '" +data[i].certifier+"'/>");
			$("#41").append("<div class = 'buttonBlock' id = 'Wop_"+ Wno +"'><input type = 'button' value = '删除' onclick = 'deleteW(" + Wno +");'/></div>");
			Wno++;
		}
	});
}

function saveW(){
	$.post("http://localhost:3000/User/deleteOldWorkExperience");
	for(var i = 0; i < Wno; ++i){
		var  startTime_ = $("#Wdate1_"+i).val();
		var  endTime_ = $("#Wdate2_"+i).val();
		var  workplace_ = $("#Wname_"+i).val();
		var  position_ = $("#Wpos_"+i).val();
		var  certifier_ = $("#Wpro_"+i).val();
		if(startTime_!=null && endTime_ != null && workplace_!=null && position_ != null &&certifier_!=null){
			$.post("http://localhost:3000/User/saveWorkExperience",{
					startTime:startTime_,
        			endTime:endTime_,
        			workplace:workplace_,
        			certifier:certifier_,
        			position:position_
			},function(data,err){
				; 
			});
		}	
	}
}

function getC(){
	$.get("http://localhost:3000/User/getAvoidCompany",function(data,err){
		for(var i = 0; i < data.length; ++i){
			$("#44").append("<input type = 'text' id = 'Cdesc_"+ Cno +"' value = '" +data[i].name+"'/>");
			$("#45").append("<select id = 'Cbool_"+ Cno +"'><option value = '是'>是</option><option value = '否'>否</option></select>");
			$("Cbool_"+Cno).val(data[i].isWorkplace);
			$("#46").append("<div class = 'buttonBlock' id = 'Cop_"+ Cno +"'><input type = 'button' value = '删除' onclick = 'deleteC(" + Cno +");'/></div>");
			Cno++;
		}
	});
}

function saveC(){
	$.post("http://localhost:3000/User/deleteOldAvoidCompany");
	for(var i = 0; i < Cno; ++i){
		var  name_ = $("#Cdesc_"+i).val();
		var  isWorkplace_ = $("#Cbool_"+i).val();
		if(name_!=null && isWorkplace_ != null){
			$.post("http://localhost:3000/User/saveAvoidCompany",{
					name:name_,
        			isWorkplace:isWorkplace_,
			},function(data,err){
				; 
			});
		}	
	}
}

function selectImg(){
	document.getElementById("form").submit();
}
 


