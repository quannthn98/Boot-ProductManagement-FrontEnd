function showAll(){
    $.ajax({
        type: "GET",
        headers: {
            "Authorization": "Bearer " + localStorage.token
        },
        url: `${baseUrl}/products`,
        success: function (data){
            console.log(data)
        },
        error: function (){
            console.log("access denied")
        }
    })
}