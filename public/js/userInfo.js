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
	$("#41").append("<div class = 'buttonBlock' id = 'Wop_"+ Wno +"'><input type = 'button' value = '删除' onclick = 'deleteW(" + Tno +");'/></div>");
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
	$("#45").append("<select id = 'Sbool_"+ Cno +"'><option value = '是'>是</option><option value = '否'>否</option></select>");
	$("#46").append("<div class = 'buttonBlock' id = 'Cop_"+ Cno +"'><input type = 'button' value = '删除' onclick = 'deleteS(" + Sno +");'/></div>");
	Cno++;
}

function deleteC(index){
	$("#Cdesc_"+index).remove();
	$("#Cbool_"+index).remove();
	$("#Cop_"+index).remove();
}



