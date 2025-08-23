const users = [
    {
        name: "nayeem",
        phone: "01234567892",
        pin: "1234"
    },
    {
        name: "nayeem1",
        phone: "01234567891",
        pin: "5678"
    },
    {
        name: "nayeem2",
        phone: "01234556677",
        pin: "91011"
    },
    {
        name: "nayeem3",
        phone: "01234112233",
        pin: "121314"
    },
]

document.getElementById('login-btn').addEventListener("click", (e) => {
    e.preventDefault()
    const phoneInput = document.getElementById('phone-input');
    const pinInput = document.getElementById('pin-input');
    let auth = false;
    for (const i of users) {
        if (i["phone"] === phoneInput.value.toString() && i["pin"] === pinInput.value.toString()) {
            auth = true;
            break;
        }
    }
    if (auth) {
        console.log("success");
        window.location.href = "./home.html"
        phoneInput.value = ""
        pinInput.value = ""

    }
    else {
        alert("phone number or pin is wrong")
        phoneInput.value = ""
        pinInput.value = ""
    }
})