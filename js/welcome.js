function validasi() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("passwot").value;		
    if (username != "" && password!="") {
        alert('any masage');
    }else{
        alert('Username dan Password harus di isi !');
        return false;
    }
}