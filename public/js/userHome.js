window.onload = function(){
    isLogin();
}

function isLogin(){
    $.get("http://localhost:3000/Login/status",function(data,status){
        if(data.isLogin == true){
            var d = document.getElementById("header_link");
            d.innerHTML = "<label>欢迎，"+data.person_.userName+" </label>"
            +"<a href = 'http://localhost:3000/Login/logout' target = '_self'>退出</a>";
        }
    });
}