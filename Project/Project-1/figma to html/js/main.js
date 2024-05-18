function check()
{
    let em=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    if(em=='superadmin@gmail.com' && pass=='super@123')
        {
            //insret fromsweetalert
            Swal.fire
            ({
                title: "Good job!",
                text: "Your account created successfully!",
                icon: "success"
            });
        window.location='index.html';
        }
}