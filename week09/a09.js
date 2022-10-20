function loadFile() {
    var xmlhttp = new XMLHttpRequest();
    var myObj, i, std = "";
    var url = document.getElementById("url").value;
    var table = "<tr><th>First Name</th><th>Last Name</th><th>Address</th><th>Major</th><th>G.P.A.</th></tr>";
    console.log(url);

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            myObj = JSON.parse(this.responseText);
            std = table;

            for (i in myObj.students) {
                std += "<tr><td>" + myObj.students[i].first + "</td>";
                std += "<td>" + myObj.students[i].last + "</td>";
                std += "<td>" + myObj.students[i].address.city + ", ";
                std += myObj.students[i].address.state + ", ";
                std += myObj.students[i].address.zip + "</td>";
                std += "<td>" + myObj.students[i].major + "</td>";
                std += "<td>" + myObj.students[i].gpa + "</td></tr>";
            }
            document.getElementById("students").innerHTML = std;
        } else {
            document.getElementById("students").innerHTML = "The file you´re looking for doesn´t exist";
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
/* ADD A NEW .TXT FILE FOR DISPLAY SELECT ONE OR NONE*/
function getCountry(CC){
    var xhttp = new XMLHttpRequest();

    if (CC === "") {
        document.getElementById("country_cities").innerHTML = "You can see the display here:";
        return;
    }

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("country_cities").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", CC, true);
    xhttp.send();
}