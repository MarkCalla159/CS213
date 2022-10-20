function getMileage(){
    var url = "/cgi-bin/cs213/mileageAjaxJSON?";
    var xhttp = new XMLHttpRequest();
    var myObj, startCity, startState, endCity, endState;

    xhttp.onreadystatechange = function() {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            myObj = JSON.parse(this.responseText);
            console.log(myObj);

            document.getElementsByName("startCity") = startCity;
            document.getElementsByName("startState") = startState;
            document.getElementsByName("endCity") = endCity;
            document.getElementsByName("endState") = endState;

            url+="?startCity="+startCity+"&startState="+startState+"&endCity="+endCity+"&endState="+endState;
            document.getElementById("output").innerHTML = myObj;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}