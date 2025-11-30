let settingMenu = document.querySelector(".setting-menu");
let darkBtn = document.getElementById("dark-btn");

function settingMenuToggle() {
    settingMenu.classList.toggle('setting-menu-active');
}

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

//local storage for until the user change light mode to dark mode


if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else {
    localStorage.setItem("theme", "light");
}

// login using localstorage

/*-------- signup-----------*/
// function signupUser() {
//     let email = document.getElementById("signupEmail").value.trim();
//     let password = document.getElementById("signupPassword").value;

//     if (email === "" || password === "") {
//         alert("Please fill all field !!!");
//         return;
//     }
//     // save user data in local storage
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     alert("Signup Successful! Now Login.");
//     window.location.href = login.html; // go to login page

// }

/*-----------login-------------*/

// function loginUser() {
//     let email = document.getElementById("email").value.trim();
//     let password = document.getElementById("password").value;
//     // get signup data
//     let savedEmail = localStorage.getItem("email");
//     let savedPassword = localStorage.getItem("password");
//     if (email === savedEmail && password === savedPassword) {
//         alert("Login Sucessful")
//         window.location.href = "index.html";// indirect to homepage
//     } else {
//         alert("Invalid Username and Password");
//     }

// }

