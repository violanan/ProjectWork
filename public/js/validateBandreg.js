const artistId = /^[0-9a-zA-Z]+$/;
const digits = /^[0-9]+$/; //only numbers
const nondigit = /^[A-Za-z]+$/; //no numbers
const emailF = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/; //email address
const contactF = /^\d{10}$/; //phone number format
const alphaNumeric = /^[a-zA-Z0-9]+$/;
const capitalize = /^[A-Z][a-z]/; //First is capital
const systemIDFormat = /^[a-z]{3}\d+[a-z]{3}/; //contains number and letters

const BName = document.register1.BandName;
const ID = document.register1.BandId;
const password = document.register1.passid;
const BS = document.register1.BandSlogan;
const BO = document.register1.BandOwner;
const loc = document.register1.BandHome;
const mem = document.register1.members;
const email = document.register1.Bandemail;
const tel = document.register1.BandContact;
const specifyCat = document.register1.SpecifyCategory;
const NoAlbums = document.register1.NumberOfAlbums;

function validate(e) {
    let isValid = true;
    //validating band name
    const BandName = BName.value.trim();
    if (BandName == '') {
        BName.style.border = ' 1px solid red';
        BNError.innerHTML = 'Please enter band name';
        BNError.style = 'color:red;';
        BName.focus();
        isValid = false;
    } else if (!(BandName.length > 1)) {
        BName.style.border = ' 1px solid red';
        BNError.innerHTML = 'should be be more than one letter';
        BNError.style = 'color:red;';
        BName.focus();
        isValid = false;
    } else if (BandName.match(nondigit)) {
        BName.style.border = ' 1px solid red';
        BNError.innerHTML = 'can not have anumber';
        BNErrorstyle = 'color:red;';
        BName.focus();
        isValid = false;
    } else if (!BandName.match(capitalize)) {
        BName.style.border = ' 1px solid red';
        BNError.innerHTML = 'First letter should be capital';
        BNError.style = 'color:red;';
        BName.focus();
        isValid = false;
    } else {
        BName.style.border = ' 2px solid green';
    }
    //validating  id
    const BandId = ID.value.trim();
    if (BandId == '') {
        ID.style.border = ' 1px solid red';
        IDError.innerHTML = 'Please enter the band ID';
        IDError.style = 'color:red;';
        ID.focus();
    } else if (!(BandId.length > 1)) {
        ID.style.border = ' 1px solid red';
        IDError.innerHTML = 'should be be more than one letter';
        IDError.style = 'color:red;';
        ID.focus();
    } else if (!BandId.match(artistId)) {
        ID.style.border = ' 1px solid red';
        IDError.innerHTML = 'please enter right id format';
        IDError.style = 'color:red;';
        ID.focus();
    } else {
        ID.style.border = ' 1px solid green';
    }

    // //validating password
    const passid = password.value.trim();
    if (passid == '') {
        password.style.border = ' 1px solid red';
        passError.innerHTML = 'Please enter password';
        passError.style = 'color:red;';
        password.focus();
    } else if (passid.length > 1) {
        password.style.border = ' 1px solid red';
        passError.innerHTML = 'password should have more than one character';
        passError.style = 'color:red;';
        password.focus();
    } else {
        password.style.border = ' 1px solid green';
    }

    //validating slogan
    const BandSlogan = BS.value.trim();
    if (BandSlogan == '') {
        BS.style.border = ' 1px solid red';
        BSError.innerHTML = 'Please enter slogan';
        BSError.style = 'color:red;';
        BS.focus();
    } else if (!BandSlogan.length > 1) {
        mnger.style.border = ' 1px solid red';
        BSError.innerHTML = 'Should be more than one letter';
        BSError.style = 'color:red;';
        BS.focus();
    } else if (!BandSlogan.match(nondigit)) {
        BS.style.border = ' 1px solid red';
        BSError.innerHTML = 'Shouldnt have numbers';
        BSError.style = 'color:red;';
        BS.focus();
    } else if (!BandSlogan.match(capitalize)) {
        BS.style.border = ' 1px solid red';
        BSError.innerHTML = 'Shouldnt start with capital';
        BSError.style = 'color:red;';
        BS.focus();
    } else {
        BS.style.border = ' 1px solid green';
    }
    //validating Owner
    const BandOwner = BO.value.trim();
    if (BandOwner == '') {
        BO.style.border = ' 1px solid red';
        BOwnerError.innerHTML = 'Please enter owner name';
        BOwnerError.style = 'color:red;';
        BO.focus();
    } else if (!BandOwner.length > 1) {
        BO.style.border = ' 1px solid red';
        BOwnerError.innerHTML = 'Should be more than one letter';
        BOwnerError.style = 'color:red;';
        BO.focus();
    } else if (!BandOwner.match(nondigit)) {
        BO.style.border = ' 1px solid red';
        BOwnerError.innerHTML = 'Shouldnt have numbers';
        BOwnerError.style = 'color:red;';
        BO.focus();
    } else if (!BandOwner.match(capitalize)) {
        BO.style.border = ' 1px solid red';
        BOwnerError.innerHTML = 'Shouldnt start with capital';
        BOwnerError.style = 'color:red;';
        BO.focus();
    } else {
        BO.style.border = ' 1px solid green';
    }
    // //validating bandhome
    const BandHome = loc.value.trim();
    if (BandHome == '') {
        loc.style.border = ' 1px solid red';
        BHError.innerHTML = 'Please enter bandhome';
        BHError.style = 'color:red;';
        loc.focus();
    } else if (!BandHome.length > 1) {
        loc.style.border = ' 1px solid red';
        BHError.innerHTML = 'Please enter the stage name';
        BHError.style = 'color:red;';
        loc.focus();
    } else if (!BandHome.match(nondigit)) {
        loc.style.border = ' 1px solid red';
        BHError.innerHTML = 'Please enter the stage name';
        BHError.style = 'color:red;';
        loc.focus();
    } else if (!BandHome.match(capitalize)) {
        loc.style.border = ' 1px solid red';
        BHError.innerHTML = 'Please enter the stage name';
        BHError.style = 'color:red;';
        loc.focus();
    } else {
        loc.style.border = ' 1px solid green';
    }
    //validating no of members
    const members = mem.value.trim();
    if (members == '') {
        mem.style.border = ' 1px solid red';
        memError.innerHTML = 'Please number of members';
        memError.style = 'color:red;';
        mem.focus();
    } else if (!members.match(digits)) {
        mem.style.border = ' 1px solid red';
        memError.innerHTML = 'Cant contain non-digits';
        memError.style = 'color:red;';
        mem.focus();
    } else {
        mem.style.border = ' 1px solid green';
    }
    // //validating email input
    const Bandemail = email.value.trim();
    if (Bandemail == '') {
        email.style.border = ' 1px solid red';
        emailError.innerHTML = 'Please enter email address';
        emailError.style = 'color:red;';
        email.focus();
    } else if (!Bandemail.match(emailF)) {
        email.style.border = ' 1px solid red';
        emailError.innerHTML = 'Please enter correct email format';
        emailError.style = 'color:red;';
        email.focus();
    } else {
        email.style.border = ' 1px solid green';
    }
    // //validating contact input
    const BandContact = tel.value.trim();
    if (BandContact == '') {
        tel.style.border = ' 1px solid red';
        BandContError.innerHTML = 'Please enter phone number';
        BandContError.style = 'color:red;';
        tel.focus();
    } else if (!BandContact.match(contactF)) {
        tel.style.border = ' 1px solid red';
        BandContError.innerHTML = 'Please enter correct number format';
        BandContError.style = 'color:red;';
        tel.focus();
    } else {
        tel.style.border = ' 1px solid green';
    }
    //
    // // validating SpecifyCategory specifycatError
    const SpecifyCategory = specifyCat.value.trim();
    if (SpecifyCategory == '') {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML =
            'Please enter specific category/nan if not applicable';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
    } else if (!SpecifyCategory.length > 1) {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML = 'should be more than one letter';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
    } else if (!SpecifyCategory.match(nondigit)) {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML = 'shouldnt have numbers';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
    } else if (!SpecifyCategory.match(capitalize)) {
        specifyCat.style.border = ' 1px solid red';
        specifycatError.innerHTML = 'Shouldnt start with capital';
        specifycatError.style = 'color:red;';
        specifyCat.focus();
    } else {
        specifyCat.style.border = ' 1px solid green';
    }
    // //validating albums input NumberOfAlbums
    const NumberOfAlbums = NoAlbums.value.trim();
    if (NumberOfAlbums == '') {
        NoAlbums.style.border = ' 1px solid red';
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

    if (!isValid) {
        e.preventDefault();
        return false;
    }
}

const form = document.getElementById('Bandform');
form.addEventListener('submit', (e) => {
    validate(e);
    console.log('Working');
});