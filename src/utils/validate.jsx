export default function validate (values) {
    let errors = {};

    if(!values.username.trim()){
        errors.username = "Username requried"
    }
    if(!values.email.trim()){
        errors.email = "Email requried"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Email is invalid"
    }
    if(!values.password.trim()){
        errors.password = "Password is requried"
    }
    else if (values.password.length > 6){
        errors.password = "Password must be 6 characters or more"
    }
    if(!values.password2.trim()){
        errors.password2 = "Password is requried"
    }
    else if(values.password2 !== values.password){
        errors.password2 = "Password does not match"
    }
    return errors;
}