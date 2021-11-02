const baseUrl = "http://localhost:8080"

function doLogin() {
    event.preventDefault();

    let url = `${baseUrl}/login`
    let username = $("#username").val();
    let password = $("#password").val();
    let user = {
        username: username,
        password: password
    }

    $.ajax({
        type: 'POST',
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        data: JSON.stringify(user),
        success: function (data) {
            localStorage.setItem('token', data.accessToken);
            window.location.href = "index.html"
        },
        error: function () {
            $("#error").html("Username or password is incorrect");
        }
    })

}

function doRegister(){
    event.preventDefault();
    let url =`${baseUrl}/register`;
    let username =$("#username").val();
    let password =$("#password").val();
    let roleId = $("#role").val();
    let user = {
        username: username,
        password: password,
        roles:[{
            id: roleId
        }]
    }
    $.ajax({
        type: "POST",
        url: url,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        data: JSON.stringify(user),
        success: function (data){
            console.log('Hi');
        }
    }).fail(function (){
        console.log('fail')
    })
}






