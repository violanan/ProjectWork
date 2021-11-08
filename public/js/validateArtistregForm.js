const validate = () => {
    const username = document.register.username;
    const useremail = document.register.useremail;

    const artistId = /^[0-9a-zA-Z]+$/;
    const user = /^[A-Za-z]+$/;
    const email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const contact = /^\d{10}$/;

    if (username.value == '') {
        alert('Please enter User Name');
        username.focus();
        username.style.border = '2px solid green';
        return false;
    } else
    if (username.value.match(user)) {
        return true;
    } else {
        alert('Name should be alphabets only');
        username.style.border = '2px solid red';
    }


    if (useremail.value == '') {
        alert('Please enter User Name');
        useremail.focus();
        useremail.style.border = '2px solid green';
        return false;
    } else if (useremail.value.match(email)) {
        return true;
    } else {
        alert('enter correct email');
        useremail.style.border = '2px solid red';
        return false;
    }

    return true;
};