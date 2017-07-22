window.onload = function(){
    isLogin();
}

function isLogin(){
    $.get("http://localhost:3000/Login/status",function(data,status){
        if(data.isLogin == true){
            var d = document.getElementById("header_link");
            d.innerHTML = "<label>欢迎，"+data.person_.userName+" </label>"
            +"<a href = 'javascript:void(0) onclick = 'javascript；ToUrl('http://localhost:3000/Login/logout')'>推出</a>";
        }
    });
}