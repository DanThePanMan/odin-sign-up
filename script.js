const pw1e = document.getElementById("nPassword");
const pw2e = document.getElementById("cPassword");
const t = document.getElementById("varText")
const t2 = document.getElementById("varText2")



function updatePassword(){
    let pw1 = pw1e.value;
    let pw2 = pw2e.value;


    if (pw1 != pw2){
        t.classList.add("invalidpw");
        t2.classList.add("invalidpw");
    }
    else{
        t.classList.add("validpw");
        t2.classList.add("validpw");

        t.classList.remove("invalidpw");
        t2.classList.remove("invalidpw");


    }
}
