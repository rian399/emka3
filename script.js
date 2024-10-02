const btntombol = document.querySelector("#tombol");
const txtusername = document.querySelector("#username");
const txtpassword = document.querySelector("#password");

btntombol.addEventListener("click", function(event){
    event.preventDefault(); 
    if(txtusername.value == "GGMU" && txtpassword.value == "MUUNTILDIE"){
        window.location = "home.html"; 
    } else {
        alert("SALAH LURR!!");
    }
});
