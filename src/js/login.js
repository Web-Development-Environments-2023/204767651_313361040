

function validateUser(userName, password) {
    if (users[userName] !== undefined) {
        if (users[userName]['pass'] === password) {
            return true;
        }
    }
    return false;
}


function loggedInUser() {
    var userName = document.getElementById("loginFormUserName").value;
    var password = document.getElementById("loginFormPassword").value;
    if (validateUser(userName, password)) {
        var user = users[userName]['firstname'];
        swal("Welcome back " + user +"!", "You are now logged in", "success");
        pageSwitch("#Configuration");
        replaceLogOut();
        return false;
    }
    else {
        swal("Error", "Invalid username or password", "error");
        return false;
    }


}


function replaceLogOut(){
    const logoutBtn = $("#logoutBtn");
    const loginBtn = $("#loginBtn");
    logoutBtn.show();
    loginBtn.hide();
}

function replaceLogIn(){
    const logoutBtn = $("#logoutBtn");
    const loginBtn = $("#loginBtn");
    logoutBtn.hide();
    loginBtn.show();
    pageSwitch("#welcome");

}