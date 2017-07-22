function signin(){
    var uName = document.getElementById("u").value;
    var pwd = document.getElementById("p").value;
    var t;
    if(document.getElementById("admin").checked)
        t = 2;
    else
        t = 1;
    $.post("http://localhost:3000/Login/",
        {
            userName : uName,
            password :pwd,
            type:t
        },
        function(data,status){
        if(data.isOK ==true )
            window.parent.location = "http://localhost:3000/User/";
        else
            window.parent.location = "http://localhost:3000/Login/";
        }
    );
}