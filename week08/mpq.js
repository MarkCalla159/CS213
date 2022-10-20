function validation() {
    validatePhone();
    validateCreditCard();
    validateCreditDate();
    validateRadio();
}

function validatePhone() {
    var phoneNumber = document.getElementById("phone").value;
    var phoneRGEX = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
    var error_msg;

    if (phoneRGEX.test(phoneNumber)) {
        error_msg = null;
    } else {
        error_msg = "Invalid Entry; please follow this format 951-111-1111.";
    }
    document.getElementById("phone_error").innerHTML = error_msg;
}
function loadQhatu(){
    alert("Qhatu Checkout is loaded");
}
function validatePhone() {
    var phoneNumber = document.getElementById("phone").value;
    var phoneRGEX = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
    var error_msg;

    if (phoneRGEX.test(phoneNumber)) {
        error_msg = null;
    } else {
        error_msg = "Invalid Entry";
    }
    document.getElementById("phone_error").innerHTML = error_msg;
}

function validateCreditCard() {
    var credit = document.getElementById("card").value;
    var creditREGEX = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;
    var error_msg;

    if (creditREGEX.test(credit)) {
        error_msg = null;
    } else {
        error_msg = "Invalid Entry.";
    }
    document.getElementById("credit_error").innerHTML = error_msg;
}

function validateCreditDate() {
    var date = document.getElementById("card_exp").value;
    var dateREGEX = /(0[0-9]|1[012])\/202\d{1}/;
    var error_msg;

    if (dateREGEX.test(date)) {
        error_msg = null;
    } else {
        error_msg = "Invalid Entry.";
    }
    document.getElementById("exp_error").innerHTML = error_msg;
}

function validateRadio() {
    var cardtype = document.getElementsByName("card");
    var error_msg;

    if (cardtype[0].checked === true || cardtype[1].checked === true || cardtype[2].checked === true) {
        error_msg = null;
    } else {
        error_msg = "Select a Card.";
    }
    document.getElementById("creditCard_error").innerHTML = error_msg;
}
function resetFunction() {
    document.getElementById("firstName").focus();
    document.getElementById("exp_error").innerHTML = null;
    document.getElementById("credit_error").innerHTML = null;
    document.getElementById("creditCard_error").innerHTML = null;
    document.getElementById("phone_error").innerHTML = null;
}

function calculateTotal() {
    var prod_0, prod_1, prod_2, prod_3, prod_4, cost_0, cost_1, cost_2, cost_3, cost_4, total;

    prod_0 = document.getElementById("prod0").value;
    prod_1 = document.getElementById("prod1").value;
    prod_2 = document.getElementById("prod2").value;
    prod_3 = document.getElementById("prod3").value;
    prod_4 = document.getElementById("prod4").value;
    cost_0 = 275;
    cost_1 = 260;
    cost_2 = 780;
    cost_3 = 585;
    cost_4 = 985;

    total = (prod_0 * cost_0) + (prod_1 * cost_1) + (prod_2 * cost_2) + (prod_3 * cost_3) + (prod_4 * cost_4);
    document.getElementById("totalAmt").value = total.toFixed(2);
}