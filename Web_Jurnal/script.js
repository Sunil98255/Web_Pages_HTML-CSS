var icon = document.getElementById("icon");


icon.onclick = function () {
    document.body.classList.toggle("dark-them");
}

function validate() {
    var email = document.getElementById("eml");

    if (email.value == "") {
        alert("Email is Mandtory!!")
    }
}