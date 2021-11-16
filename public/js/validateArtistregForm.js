const artistId = /^[0-9a-zA-Z]+$/;
const nondigit = /^[A-Za-z]+$/; //no numbers
const email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/; //email address
const contact = /^\d{10}$/; //phone number format
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const capitalize = /^[A-Z][a-z]/; //First is capital
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/; //contains number and letters

const validate = () => {
    const StageName = sname.value.trim();
    if (StageName == '') {
        sname.style.border = ' 2px solid red';
        StageNameError.innerHTML = 'Please enter the stage name';
        StageNameError.style = 'color:red;';
        sname.focus();
    } else if (!(StageName.length > 1)) {
        sname.style.border = ' 2px solid red';
        StageNameError.innerHTML = 'should be be more than one letter';
        StageNameError.style = 'color:red;';
        sname.focus();
    } else if (!StageName.match(nonumber)) {
        sname.style.border = ' 2px solid red';
        StageNameError.innerHTML = 'can not have anumber';
        StageNameError.style = 'color:red;';
        sname.focus();
    } else if (!StageName.match(capitalize)) {
        sname.style.border = ' 2px solid red';
        StageNameError.innerHTML = 'First letter should be capital';
        StageNameError.style = 'color:red;';
        sname.focus();
    } else {
        sname.style.border = ' 2px solid green';
    }
    //validating artist id
    const ArtId = artistID.value.trim();
    if (ArtId == '') {
        artistID.style.border = ' 2px solid red';
        IDError.innerHTML = 'Please enter the stage name';
        IDError.style = 'color:red;';
        artistID.focus();
    } else if (!(ArtId.length > 1)) {
        artistID.style.border = ' 2px solid red';
        IDError.innerHTML = 'should be be more than one letter';
        IDError.style = 'color:red;';
        artistID.focus();
    } else if (!ArtId.match(artistId)) {
        artistID.style.border = ' 2px solid red';
        IDError.innerHTML = 'please enter right id format';
        IDError.style = 'color:red;';
        artistID.focus();
    } else {
        artistID.style.border = ' 2px solid green';
    }

    //validating password
    const pass = password.value.trim();

    if (pass == '') {
        password.style.border = ' 2px solid red';
        passError.innerHTML = 'Please enter password';
        passError.style = 'color:red;';
        password.focus();
    } else if (pass.length > 1) {
        password.style.border = ' 2px solid red';
        passError.innerHTML = 'password should have more than one character';
        passError.style = 'color:red;';
        password.focus();
    }

    //validating firstName
    const FirstName = fname.value.trim();
    if (FirstName == '') {
        fname.style.border = ' 2px solid red';
        FNError.innerHTML = 'enter first name';
        FNError.style = 'color:red;';
        fname.focus();
    } else if (!(FirstName.length > 1)) {
        fname.style.border = ' 2px solid red';
        FNError.innerHTML = 'should be be more than one letter';
        FNError.style = 'color:red;';
        fname.focus();
    } else if (!FirstName.match(nonumber)) {
        fname.style.border = ' 2px solid red';
        FNError.innerHTML = 'should not contain a number';
        FNError.style = 'color:red;';
        fname.focus();
    } else if (!!FirstName.match(capitalize)) {
        fname.style.border = ' 2px solid red';
        FNError.innerHTML = 'should start with capital';
        FNError.style = 'color:red;';
        fname.focus();
    } else {
        fname.style.border = ' 2px solid green';
        return true;
    }

    //validating lastname
    const LastName = lname.value.trim();
    if (LastName == '') {
        lname.style.border = ' 2px solid red';
        LNError.innerHTML = 'Please enter the stage name';
        LNError.style = 'color:red;';
        lname.focus();
    } else if (!(lname.length > 1)) {
        lname.style.border = ' 2px solid red';
        LNError.innerHTML = 'should be be more than one letter';
        LNError.style = 'color:red;';
        lname.focus();
    } else if (!LastName.match(nonumber)) {
        lname.style.border = ' 2px solid red';
        LNError.innerHTML = 'can not have anumber';
        LNError.style = 'color:red;';
        lname.focus();
    } else if (!LastName.match(capitalize)) {
        lname.style.border = ' 2px solid red';
        LNError.innerHTML = 'First letter should be capital';
        LNError.style = 'color:red;';
        lname.focus();
    } else {
        lname.style.border = ' 2px solid green';
    }
    // validating sex
    const sex = () => {
        if (female.checked == false && male.checked == false) {
            genderError.innerHTML = 'Please select your gender';
            genderError.style = 'color:red; font-size:12px;';
        } else {
            genderError.style.border = ' 2px solid green';
        }
    };
    //validating management  managementError
    const Management = mgt.value.trim();
    if (Management == '') {
        mgt.style.border = ' 2px solid red';
        managementError.innerHTML = 'Please choose management';
        managementError.style = 'color:red;';
        mgt.focus();
    } else {
        return true;
    }

    //validating manager
    const Manager = mnger.value.trim();
    if (Manager == '') {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Please enter the manager/label name';
        managerError.style = 'color:red;';
        mnger.focus();
    } else if (!Manager.length > 1) {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Should be more than one letter';
        managerError.style = 'color:red;';
        mnger.focus();
    } else if (!Manager.match(nonumber)) {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Shouldnt have numbers';
        managerError.style = 'color:red;';
        mnger.focus();
    } else if (!Manager.match(capitalize)) {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Shouldnt start with capital';
        managerError.style = 'color:red;';
        mnger.focus();
    } else {
        mnger.style.border = ' 2px solid green';
    }
};
// const validate = () => {
//     const artiststagename = document.register.StageName;
//     const ArtId = document.register.ArtId;
// const pass = document.register.pass;
// const DateOfBirth = document.register.DateOfBirth;
// const FirstName = document.register.FirstName;
// const LastName = document.register.LastName;
// const NIN = document.register.NIN;
// const profile_photo = document.register.profile_photo;
// const location = document.register.location;
// const Artistemail = document.register.Artistemail;
// const sex = document.register.sex;
// const Contact = document.register.Contact;
// const Manager = document.register.Manager;
// const DateOfStart = document.register.DateOfStart;
// const SpecifyCategory = document.register.SpecifyCategory;
// const NumberOfAlbums = document.register.NumberOfAlbums;
// const NumberOfSongs = document.register.NumberOfSongs;
// const NumberOfAwards = document.register.NumberOfAwards;
// const descrip = document.register.descrip;

// const male = document.getElementById('msex');
// const sexErr = document.getElementById('sexError');
// const female = document.getElementById('fsex');
// const stageNameError = document.getElementById('stageNameError');
// const idError = document.getElementById('IDError');

// let isValid = true;
// //stageName
// const StageName = StageName.value.trim();
// if (StageName == '') {
//     StageName.style.border = '1px solid red';
//     stageNameError.innerHTML = 'Please enter Stage Name';
//     stageNameError.style = 'color:red';
//     StageName.focus();
// } else if (!StageName.value.match(username)) {
//     StageName.style.border = '1px solid red';
//     stageNameError.innerHTML = 'Stage Name should be alphabets only';
//     stageNameError.style = 'color:red';
//     StageName.focus();
// } else {
//     return true;
// }
// //artist id
// const artId = ArtId.value.trim();
// if (artId == '') {
//     ArtId.style.border = '1px solid red';
//     idError.innerHTML = 'Please enter Artist ID';
//     stageNameError.style = 'color:red';
//     StageName.focus();
// } else if (!StageName.value.match(username)) {
//     StageName.style.border = '1px solid red';
//     stageNameError.innerHTML = 'Stage Name should be alphabets only';
//     stageNameError.style = 'color:red';
//     StageName.focus();
// } else {
//     return true;
// }

//

//     if (userid.value == '') {
//         alert('Please enter userID');
//         userid.focus();
//         userid.style.border = '2px solid blue';
//         return false;
//     }

//     if (userpass.value == '') {
//         alert('Please enter password');
//         userpass.focus();
//         userpass.style.border = '2px solid pink';
//         return false;
//     }

//     if (username.value == '') {
//         alert('Please enter User Name');
//         username.focus();
//         username.style.border = '2px solid pink';
//         return false;
//     }

//     const user = /^[A-Za-z]+$/;
//     if (username.value.match(user)) {
//         return true;
//     } else {
//         alert('Name should be alphabets only');
//         username.style.border = '2px solid red';
//     }

//     if (address.value == '') {
//         alert('Please enter User Name');
//         address.focus();
//         address.style.border = '2px solid pink';
//         return false;
//     }

//     if (country.value == '') {
//         alert('Please enter User Name');
//         country.focus();
//         country.style.border = '2px solid pink';
//         return false;
//     }

//     if (useremail.value == '') {
//         alert('Please enter User Name');
//         useremail.focus();
//         useremail.style.border = '2px solid pink';
//         return false;
//     }
//     const email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
//     if (useremail.value.match(email)) {
//         return true;
//     } else {
//         alert('enter correct email');
//         useremail.style.border = '2px solid red';
//         return false;
//     }
// };

const ArtistRegform = document.getElementById('ArtistRegform');
ArtistRegform.addEventListener(submit, () => {
    if (true) {
        validate();
        console.log('Working');
    }
});