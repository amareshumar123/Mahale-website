// =========================
// script.js
// =========================

let users = JSON.parse(localStorage.getItem("users")) || [];

// SHOW REGISTER

function showRegister(){

  document.getElementById("loginPage").style.display = "none";

  document.getElementById("registerPage").style.display = "flex";
}

// SHOW LOGIN

function showLogin(){

  document.getElementById("registerPage").style.display = "none";

  document.getElementById("loginPage").style.display = "flex";
}

// REGISTER

function register(){

  let username = document.getElementById("regUser").value;

  let email = document.getElementById("regEmail").value;

  let password = document.getElementById("regPass").value;

  if(username == "" || email == "" || password == ""){

    alert("Please fill all details");

    return;
  }

  let alreadyUser = users.find(user => user.email === email);

  if(alreadyUser){

    alert("Email already registered");

    return;
  }

  users.push({
    username:username,
    email:email,
    password:password
  });

  localStorage.setItem("users", JSON.stringify(users));

  alert("Register Successful");

  showLogin();
}

// LOGIN

function login(){

  let email = document.getElementById("loginEmail").value;

  let password = document.getElementById("loginPass").value;

  let valid = users.find(user =>
    user.email === email &&
    user.password === password
  );

  if(valid){

    localStorage.setItem("loggedIn","true");

    document.getElementById("loginPage").style.display = "none";

    document.getElementById("dashboardPage").style.display = "block";

  }else{

    alert("Invalid Email or Password");
  }
}

// LOGOUT

function logout(){

  localStorage.removeItem("loggedIn");

  document.getElementById("dashboardPage").style.display = "none";

  document.getElementById("hitterPage").style.display = "none";

  document.getElementById("coreBuilderPage").style.display = "none";

  document.getElementById("finMachinePage").style.display = "none";

  document.getElementById("loginPage").style.display = "flex";
}

// OPEN HITTER

function openHitter(){

  document.getElementById("dashboardPage").style.display = "none";

  document.getElementById("hitterPage").style.display = "block";
}

// BACK TO DASHBOARD

function goDashboard(){

  document.getElementById("hitterPage").style.display = "none";

  document.getElementById("dashboardPage").style.display = "block";
}

// OPEN CORE BUILDER

function openCoreBuilder(){

  document.getElementById("hitterPage").style.display = "none";

  document.getElementById("coreBuilderPage").style.display = "block";
}

// BACK TO HITTER

function backToHitter(){

  document.getElementById("coreBuilderPage").style.display = "none";

  document.getElementById("hitterPage").style.display = "block";
}

// OPEN FIN MACHINE

function openFinMachine(){

  document.getElementById("hitterPage").style.display = "none";

  document.getElementById("finMachinePage").style.display = "block";
}

// BACK FROM FIN MACHINE

function backToHitterFromFin(){

  document.getElementById("finMachinePage").style.display = "none";

  document.getElementById("hitterPage").style.display = "block";
}

// AUTO LOGIN

if(localStorage.getItem("loggedIn") === "true"){

  document.getElementById("loginPage").style.display = "none";

  document.getElementById("dashboardPage").style.display = "block";
}