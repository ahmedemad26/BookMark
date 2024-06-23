var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var notValid = document.getElementById("notValid");
var urlList = [];


if (localStorage.getItem("urlList")) {
    gData();
    console.log(urlList);
}

function adddUrl() {
    if (validateName() && validateUrl ()) {
    var urlS = {
        name : siteName.value,
        url : siteUrl.value
    }
    urlList.push(urlS) 
    sData();
    display(urlList);
    clear();

    }else{
        alert("Not Valid")
    }
}

function clear() {
    siteName.value = null ;
    siteUrl.value = null ;
    siteUrl.classList.remove('is-valid');
    siteName.classList.remove('is-valid');
}

function display(list) {
    var cartona = ``;
    for (var i = 0; i < list.length; i++) {
        cartona += `<tr>
                <td>  ${i+1}</td>
                <td>  ${list[i].url}</td>
                <td><button onclick="visit('${list[i].url}')" class="btn btn-success d-block m-auto">
                <i class="fa-solid fa-eye pe-2"></i>
                Visit</button></td>
                <td><button onclick="deleteBookmarak(${i})" class="btn btn-danger d-block m-auto">
                <i class="fa-solid fa-trash-can"></i>
                Delete</button></td>
            </tr>`
    }
    document.getElementById("myData").innerHTML = cartona ;
}


function deleteBookmarak(index) {
    urlList.splice(index , 1);

    display(urlList);
    console.log("hi");
}

function sData() {
    localStorage.setItem("Data",JSON.stringify(urlList))
}

function gData() {
    urlList = JSON.parse(localStorage.getItem("urlList"));
}


function validateName() {
    var regexName = /^[A-Z][a-z0-9_]{3,8}/
    if (regexName.test(siteName.value)) {
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
        notValid.classList.add('d-none');
        return true ;

    }else{
        siteName.classList.remove('is-valid');
        siteName.classList.add('is-invalid');
        notValid.classList.remove('d-none');
        return false ;
    }
}


function validateUrl() {
    var regexUrl = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    if (regexUrl.test(siteUrl.value)){
        siteUrl.classList.add('is-valid');
        siteUrl.classList.remove('is-invalid');
        notValid.classList.add('d-none');
        return true ;
    }else{
        siteUrl.classList.remove('is-valid');
        siteUrl.classList.add('is-invalid');
        notValid.classList.remove('d-none');
        return false ;
    }
}


function visit(url) {
    window.open(url , '_blank')
}