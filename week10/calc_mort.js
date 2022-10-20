function getAPR() {
  var value, errorMssg;

  value = document.getElementById("apr").value;

  if (isNaN(value) || value < 0 || value > 25) {
    errorMssg = "Invalid value (APR must be a percentage between 0 - 25.00%)";
  } else if (value === "") {
    errorMssg = "Missing APR Value";
  } else {
    errorMssg = null;
  }
  document.getElementById("apr_error").innerHTML = errorMssg;
  document.getElementById("apr").focus();
  return value;
}
function getTerm() {
  var l_term, errorMssg;

  l_term = document.getElementById("term").value;

  if ( isNaN(l_term) || l_term < 0 || l_term > 40) {
      errorMssg = "Invalid value (Loan Term must be a number between 0 - 40)";
    } else if (l_term === "") {
      errorMssg =
        "Missing Loan Term Value.";
    } else {
      errorMssg = null;
    }
    document.getElementById("term_error").innerText = errorMssg;
    document.getElementById("term").focus();
    return l_term;
}
function getAmount() {
  var l_amnt, errorMssg;
    l_amnt = document.getElementById("amount").value;
  
    if (isNaN(l_amnt) || l_amnt < 0) {
      errorMssg = "Invalid value (Loan Amount must be a number greater than 0)";
    } else if (l_amnt === "") {
      errorMssg =
        "Missing Loan Amount Value.";
    } else {
      errorMssg = null;
    }
    document.getElementById("amt_error").innerHTML = errorMssg;
    document.getElementById("amount").focus();
    return l_amnt;
}
function reset() {
  document.getElementById("apr").reset();
  document.getElementById("term_error").reset();
  document.getElementById("term").reset();
  document.getElementById("amount").reset();
  document.getElementById("amt_error").reset();
  document.getElementById("apr_error").reset();
  document.getElementById("payment").reset();
}

