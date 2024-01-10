function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let eyeIcon = document.querySelector("#eye-icon i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } else {
        passwordInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}

const formItem = document.getElementById('input-form')

formItem.onsubmit = (e)=>{
    e.preventDefault()
    e.target.username.style.borderBottom='solid 1px #cccaca'
    e.target.email.style.borderBottom='solid 1px #cccaca'
    e.target.password.style.borderBottom='solid 1px #cccaca'

    const name = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(!name){
        e.target.username.style.borderBottom='solid red 1px';
    }
    if(!email){
        e.target.email.style.borderBottom='solid red 1px';
    }
    if(!password){
        e.target.password.style.borderBottom='solid red 1px'
    }

    if(!name || !email || !password){
        alert("Error : All fields required")
        return
    }

    if(email.split("@").length!==2){
        alert('Error : Please input the valid email')
        e.target.email.style.borderBottom='solid red 1px';
        return 
    }else if(password.length<6){
        alert('Error : Password length must be more than 5')
        e.target.password.style.borderBottom='solid red 1px'
        return 
    }

    const message = `
        Form has been submitted successfully
        the input values are as follows : 

        Full Name : ${name}
        Email     : ${email}
        Password  : ${password}
    `
    e.target.username.value = "";
    e.target.email.value = "";
    e.target.password.value = ""

    alert(message)
    
}