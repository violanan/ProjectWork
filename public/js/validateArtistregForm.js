const artistId = /^[0-9a-zA-Z]+$/;
const digits = /^[0-9]+$/; //only numbers
const nondigit = /^[A-Za-z]+$/; //no numbers
const emailF = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/; //email address
const contactF = /^\d{10}$/; //phone number format
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const capitalize = /^[A-Z][a-z]/; //First is capital
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/; //contains number and letters

const sname = document.register.StageName;
const artistID = document.register.ArtId;
const password = document.register.pass;
// const DateOfBirth = document.register.DateOfBirth;
const fname = document.register.FirstName;
const lname = document.register.LastName;
const sex = document.register.sex;
const male = document.getElementById('msex');
const sexErr = document.getElementById('sexError');
const female = document.getElementById('fsex');
// const stageNameError = document.register.stageNameError;
// const NIN = document.register.NIN;
// const profile_photo = document.register.profile_photo;
const loc = document.register.location;
const email = document.register.Artistemail;
const tel = document.register.Contact;
// const mgt = document.register.Management;
const mnger = document.register.Manager;
// const DateOfStart = document.register.DateOfStart;
const specifyCat = document.register.SpecifyCategory;
const NoAlbums = document.register.NumberOfAlbums;
const NoSongs = document.register.NumberOfSongs;
const NoAwards = document.register.NumberOfAwards;
// const descrip = document.register.descrip;

const validate = (e) => {
    let isValid = true;
    //validating stage name
    const StageName = sname.value.trim();
    if (StageName == '') {
        sname.style.border = ' 1px solid red';
        stageNameError.innerHTML = 'Please enter the stage name';
        stageNameError.style = 'color:red;';
        sname.focus();
        isValid = false;
    } else if (!(StageName.length > 1)) {
        sname.style.border = ' 1px solid red';
        stageNameError.innerHTML = 'should be more than one letter';
        stageNameError.style = 'color:red;';
        sname.focus();
        isValid = false;
    } else if (!StageName.match(alphaNumeric)) {
        sname.style.border = ' 1px solid red';
        stageNameError.innerHTML = 'can not have anumber';
        stageNameError.style = 'color:red;';
        sname.focus();
        isValid = false;
    } else if (!StageName.match(capitalize)) {
        sname.style.border = ' 1px solid red';
        stageNameError.innerHTML = 'First letter should be capital';
        stageNameErrorstyle = 'color:red;';
        sname.focus();
        isValid = false;
    } else {
        sname.style.border = ' 1px solid green';
    }
    //validating artist id
    const ArtId = artistID.value.trim();
    if (ArtId == '') {
        artistID.style.border = ' 1px solid red';
        IDError.innerHTML = 'Please enter ArtistId';
        IDError.style = 'color:red;';
        artistID.focus();
        isValid = false;
    } else if (!(ArtId.length > 1)) {
        artistID.style.border = ' 1px solid red';
        IDError.innerHTML = 'should be be more than one letter';
        IDError.style = 'color:red;';
        artistID.focus();
        isValid = false;
    } else if (!ArtId.match(artistId)) {
        artistID.style.border = ' 1px solid red';
        IDError.innerHTML = 'please enter right id format';
        IDError.style = 'color:red;';
        artistID.focus();
        isValid = false;
    } else {
        artistID.style.border = ' 1px solid green';
    }

    // //validating password
    const pass = password.value.trim();

    if (pass == '') {
        password.style.border = ' 1px solid red';
        passError.innerHTML = 'Please enter password';
        passError.style = 'color:red;';
        password.focus();
        isValid = false;
    } else if (pass.length > 1) {
        password.style.border = ' 1px solid red';
        passError.innerHTML = 'password should have more than one character';
        passError.style = 'color:red;';
        password.focus();
        isValid = false;
    } else {
        password.style.border = ' 1px solid green';
    }

    // //validating firstName
    const FirstName = fname.value.trim();
    if (FirstName == '') {
        fname.style.border = ' 1px solid red';
        FNError.innerHTML = 'enter first name';
        FNError.style = 'color:red;';
        fname.focus();
        isValid = false;
    } else if (!(FirstName.length > 1)) {
        fname.style.border = ' 1px solid red';
        FNError.innerHTML = 'should be be more than one letter';
        FNError.style = 'color:red;';
        fname.focus();
        isValid = false;
    } else if (!FirstName.match(nondigit)) {
        fname.style.border = ' 1px solid red';
        FNError.innerHTML = 'should not contain a number';
        FNError.style = 'color:red;';
        fname.focus();
        isValid = false;
    } else if (!FirstName.match(capitalize)) {
        fname.style.border = ' 1px solid red';
        FNError.innerHTML = 'should start with capital';
        FNError.style = 'color:red;';
        fname.focus();
        isValid = false;
    } else {
        fname.style.border = ' 1px solid green';
    }

    // //validating lastname
    const LastName = lname.value.trim();
    if (LastName == '') {
        lname.style.border = ' 1px solid red';
        LNError.innerHTML = 'Please enter last name';
        LNError.style = 'color:red;';
        lname.focus();
        isValid = false;
    } else if (!(lname.length > 1)) {
        lname.style.border = ' 1px solid red';
        LNError.innerHTML = 'should be be more than one letter';
        LNError.style = 'color:red;';
        lname.focus();
        isValid = false;
    } else if (!LastName.match(nondigit)) {
        lname.style.border = ' 1px solid red';
        LNError.innerHTML = 'can not have anumber';
        LNError.style = 'color:red;';
        lname.focus();
        isValid = false;
    } else if (!LastName.match(capitalize)) {
        lname.style.border = ' 1px solid red';
        LNError.innerHTML = 'First letter should be capital';
        LNError.style = 'color:red;';
        lname.focus();
        isValid = false;
    } else {
        lname.style.border = ' 1px solid green';
    }
    // // validating sex
    const sex = () => {
        if (female.checked == false && male.checked == false) {
            genderError.innerHTML = 'Please select your gender';
            genderError.style = 'color:red; font-size:12px;';
        } else {
            genderError.style.border = ' 2px solid green';
        }
    };
    // //validating llocation
    const location = loc.value.trim();
    if (location == '') {
        loc.style.border = ' 1px solid red';
        locationError.innerHTML = 'Please enter the stage name';
        location.style = 'color:red;';
        loc.focus();
        isValid = false;
    } else if (!location.length > 1) {
        loc.style.border = ' 1px solid red';
        locationError.innerHTML = 'Please enter the stage name';
        locationError.style = 'color:red;';
        loc.focus();
        isValid = false;
    } else if (!location.match(nondigit)) {
        loc.style.border = ' 1px solid red';
        locationError.innerHTML = 'Please enter the stage name';
        locationError.style = 'color:red;';
        loc.focus();
        isValid = false;
    } else if (!location.match(capitalize)) {
        loc.style.border = ' 1px solid red';
        locationError.innerHTML = 'Please enter the stage name';
        locationError.style = 'color:red;';
        loc.focus();
        isValid = false;
    } else {
        loc.style.border = ' 1px solid green';
    }
    // //validating email input
    const Artistemail = email.value.trim();
    if (Artistemail == '') {
        email.style.border = ' 1px solid red';
        emailError.innerHTML = 'Please enter email address';
        emailError.style = 'color:red;';
        email.focus();
        isValid = false;
    } else if (!Artistemail.match(emailF)) {
        email.style.border = ' 1px solid red';
        emailError.innerHTML = 'Please enter correct email format';
        emailError.style = 'color:red;';
        email.focus();
        isValid = false;
    } else {
        email.style.border = ' 1px solid green';
    }
    // //validating contact input
    const Contact = tel.value.trim();
    if (Contact == '') {
        tel.style.border = ' 1px solid red';
        contactError.innerHTML = 'Please enter phone number';
        contactError.style = 'color:red;';
        tel.focus();
        isValid = false;
    } else if (!Contact.match(contactF)) {
        tel.style.border = ' 1px solid red';
        contactError.innerHTML = 'Please enter correct number format';
        contactError.style = 'color:red;';
        tel.focus();
        isValid = false;
    } else {
        tel.style.border = ' 1px solid green';
    }

    //validating management  managementError
    // const Management = mgt.value.trim();
    // if (Management == '') {
    //     mgt.style.border = ' 1px solid red';
    //     managementError.innerHTML = 'Please choose management';
    //     managementError.style = 'color:red;';
    //     mgt.focus();
    //     isValid = false;
    // } else {
    //     return true;
    // }

    // //validating manager
    const Manager = mnger.value.trim();
    if (Manager == '') {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Please enter the manager/label name';
        managerError.style = 'color:red;';
        mnger.focus();
        isValid = false;
    } else if (!Manager.length > 1) {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Should be more than one letter';
        managerError.style = 'color:red;';
        mnger.focus();
        isValid = false;
    } else if (!Manager.match(nondigit)) {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Shouldnt have numbers';
        managerError.style = 'color:red;';
        mnger.focus();
        isValid = false;
    } else if (!Manager.match(capitalize)) {
        mnger.style.border = ' 2px solid red';
        managerError.innerHTML = 'Shouldnt start with capital';
        managerError.style = 'color:red;';
        mnger.focus();
        isValid = false;
    } else {
        mnger.style.border = ' 2px solid green';
    }
    // // validating SpecifyCategory specifycatError
    const SpecifyCategory = specifyCat.value.trim();
    if (SpecifyCategory == '') {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML =
            'Please enter specific category/ nan if not applicable';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
    } else if (!SpecifyCategory.length > 1) {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML = 'should be more than one letter';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
        isValid = false;
    } else if (!SpecifyCategory.match(nondigit)) {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML = 'shouldnt have numbers';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
        isValid = false;
    } else if (!SpecifyCategory.match(capitalize)) {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML = 'Shouldnt start with capital';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
        isValid = false;
    } else {
        specifyCat.style.border = ' 1px solid green';
    }
    // //validating albums input NumberOfAlbums
    const NumberOfAlbums = NoAlbums.value.trim();
    if (NumberOfAlbums == '') {
        NoAlbums.style.border = '1px solid red';
        NoAlbumsError.innerHTML = 'Please enter number of albums';
        NoAlbumsError.style = 'color:red;';
        NoAlbums.focus();
    } else if (!NumberOfAlbums.match(digits)) {
        NoAlbums.style.border = ' 1px solid red';
        NoAlbumsError.innerHTML = 'Cant contain non-digits';
        NoAlbumsError.style = 'color:red;';
        NoAlbums.focus();
    } else {
        NoAlbums.style.border = ' 1px solid green';
    }
    //validating song number NumberOfSongs "NosongsError
    const NumberOfSongs = NoSongs.value.trim();
    if (NumberOfSongs == '') {
        NoSongs.style.border = ' 1px solid red';
        NosongsError.innerHTML = 'Please enter number of songs';
        NosongsError.style = 'color:red;';
        NoSongs.focus();
    } else if (!NumberOfAlbums.match(digits)) {
        NoSongs.style.border = ' 1px solid red';
        NosongsError.innerHTML = 'Cant contain non-digits';
        NosongsError.style = 'color:red;';
        NoSongs.focus();
    } else {
        NoSongs.style.border = '1px solid green';
    }
    //validating Awards input NumberOfAwards NoAwardsError
    const NumberOfAwards = NoAwards.value.trim();
    if (NumberOfAwards == '') {
        NoAwards.style.border = ' 1px solid red';
        NoAwardsError.innerHTML = 'Please enter number of awards';
        NoAwardsError.style = 'color:red;';
        NoAwards.focus();
    } else if (!NumberOfAwards.match(digits)) {
        NoAwards.style.border = ' 1px solid red';
        NoAwardsError.innerHTML = 'Cant contain non-digits';
        NoAwardsError.style = 'color:red;';
        NoAwards.focus();
    } else {
        NoAwards.style.border = ' 1px solid green';
    }
    if (!isValid) {
        e.preventDefault();
        return false;
    }
};

const form = document.getElementById('ArtistRegform');
form.addEventListener('Submit', (e) => {
    validate(e);
});
// const validate = () => {

// const male = document.getElementById('msex');
// const sexErr = document.getElementById('sexError');
// const female = document.getElementById('fsex');
// const stageNameError = document.getElementById('stageNameError');
// const idError = document.getElementById('IDError');