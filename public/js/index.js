var code = "";
var ok = false;
var pok = false;
var cok = false;
window.onload = function(){
    generateCode();
    $("#sts").hide();
    $("#psts").hide();
    $("#csts").hide();
}

function generateCode(){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var characters = new Array("0","1","2","3","4","5","6","7","8","9","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m",
    "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M");
    code="";
    for(var i = 0; i < 4; ++i){
        var index = Math.floor(Math.random() * 62);
        code += characters[index];
    };  

    ctx.font="20px Georgia";
    ctx.clearRect(0,0,60,30);
    ctx.fillText(code,5,20);
}

function verify(){
    var codeInput = document.getElementById("verifyCodeInput").value.toUpperCase();
    if(codeInput.length <= 0){
        alert("请输入验证码");
        return false;
    }
    else if(codeInput != code.toUpperCase()){
        alert("输入验证码错误");
        generateCode();
        document.getElementById("verifyCodeInput").value = "";
        return false;
    }
    alert("验证码正确");
    return true;
}

function checkUnique(){
    ok = false;
    var uName = document.getElementById("userName").value;
    var l = uName.length
    if(l <= 4){
        alert("请输入至少为5位的用户名");
        $("#sts").attr("src","http://localhost:3000/image/no.jpg");
        $("#sts").show();
        return;
    }
    else if(l > 20){
        alert("请输入至多为20位的用户名");
        $("#sts").attr("src","http://localhost:3000/image/no.jpg");
        $("#sts").show();
        return;
    }
    var reg = /[A-Za-z]/;
    if(!(reg.test(uName[0]))){
        alert("请使用字母开头的用户名");
        $("#sts").attr("src","http://localhost:3000/image/no.jpg");
        $("#sts").show();
        return;
    }
    for(var i = 1; i < l; ++i){
        if(!(reg.test(uName[i]))&&!(uName[i]=="_"||uName[i]==".")){
            alert("请不要使用非法字符");
            $("#sts").attr("src","http://localhost:3000/image/no.jpg");
            $("#sts").show();
            return;
        }
    }
    $.get("http://localhost:3000/register/checkUnique/"+uName,function(data,status){
        if(data =="no"){
            $("#sts").attr("src","http://localhost:3000/image/no.jpg");
        }
        else{
            ok = true;
            $("#sts").attr("src","http://localhost:3000/image/yes.png");
        }
        $("#sts").show();
    });
}

function checkpasswd(){
    pok = false;
    var l = document.getElementById("pwd").value.length;
    if(l<= 5){
        alert("密码至少为6位");
        $("#psts").attr("src","http://localhost:3000/image/no.jpg");
        $("#psts").show();
        return;
    }
    else if(l > 20){
        alert("密码至多为20位");
        $("#psts").attr("src","http://localhost:3000/image/no.jpg");
        $("#psts").show();
        return;
    }
    pok = true;
    $("#psts").attr("src","http://localhost:3000/image/yes.png");
    $("#psts").show();
}

function doublecheckpwd(){
    cok = false;
    var pwd = document.getElementById('checkPwd').value;
    var pwd_ = document.getElementById('pwd').value;
    if(pwd != pwd_){
        $("#csts").attr("src","http://localhost:3000/image/no.jpg");
        $("#csts").show();
    }
    else{
        cok = true;
        $("#csts").attr("src","http://localhost:3000/image/yes.png");
        $("#csts").show();
    }
}

function re(){
     $("#csts").hide();
     $("#psts").hide();
     $("#sts").hide();
     document.getElementById('checkPwd').value = "";
     document.getElementById('passwd').value = "";
     document.getElementById('userName').value = "";
     generateCode();
}

function senddata(){
    if(ok&&cok&&pok){
        if(verify()){
            var n = document.getElementById('userName');
            var pwd = document.getElementById('pwd');
            alert("发送数据");
            $.post("http://localhost:3000/register/",
            {
                name:n,
                password:pwd,
                type:1
            },
            function(data,status){
                alert("唤起");
                if(status==200){
                    document.write("注册成功，即将返回登陆页面");
                    setTimeout(window.location.href="http://localhost:3000/",3); 
                }
                else{
                    document.write("注册失败，即将刷新注册页面");
                    setTimeout(window.location.href="http://localhost:3000/register",3); 
                } 
            });
        }
    }
    else{
        alert("请确定填写数据正确");
    }
}


