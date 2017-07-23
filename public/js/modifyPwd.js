window.onload = function(){
    generateCode();
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

function checkpasswd(){
    var l = document.getElementById("new").value.length;
    if(l<= 5){
        alert("密码至少为6位");
        return false;
    }
    else if(l > 20){
        alert("密码至多为20位");
        return false;
    }
    return true;
}

function doublecheckpwd(){
    var pwd = document.getElementById('new').value;
    var pwd_ = document.getElementById('dcheck').value;
    if(pwd != pwd_){
        alert("两次输入必须一致");
        return false;
    }
    return true;
}

function re(){
    document.getElementById("old").value = "";
    document.getElementById("new").value = "";
    document.getElementById("dcheck").value = "";
    document.getElementById("verifyCodeInput").value = "";
    generateCode();
}

function sendNewPwd(){
    alert("what");
    var pwd = document.getElementById("old").value;
    var npwd = document.getElementById("new").value;
    var yes = checkpasswd();
    yes &= doublecheckpwd();
    yes &= verify();
    alert(yes);
    if(yes){
        $.post("http://localhost:3000/Login/modifyPwd",{
            old:pwd,
            new:npwd
        },function(data,status){
            alert(data);
            document.getElementById("old").value = "";
            document.getElementById("new").value = "";
            document.getElementById("dcheck").value = "";
            document.getElementById("verifyCodeInput").value = "";
            generateCode();
        })
    }
}

