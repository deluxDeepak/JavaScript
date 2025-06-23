<!-- Call back function -->
<!-- agr call back function nahi Hoga to function KO hard core call karna parega  -->

function getUserData(callback) {
  setTimeout(() => {
    let data = { name: "Deepak", age: 25 };
    callback(data);
  }, 2000);
}

function displayData(user) {
  console.log("User Name:", user.name);
}

function dispaly_age(user){
    console.log("User Age:",user.age);
}

<!-- Bas yehan argument change karna hoga (differnet function call ho jayega ) -->
getUserData(displayData);