function showHidden(){
    var isDuet = document.getElementById("duet").value;
    var isHidden = document.getElementById("stHiddInf");
    console.log(isDuet);

    if (isDuet === "duet"){
        isHidden.removeAttribute("hidden");
        isHidden.style.display = "block";
    }
}
function hide(){
    document.getElementById("stHiddInf").style.display="none";
}

/*function getRequest(url) {
    var httpRequest = new XMLHttpRequest();
   if (!httpRequest) {
       alert("Http Request error!");
       return false;
   } 
   else {
       httpRequest.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
               var data = JSON.parse(this.responseText);
               
               var output = "<table><tr><th>Type</th><th>First Name</th><th>Last Name</th><th>ID</th><th>Level</th><th>Instrument</th><th>Loaction</th><th>Time</th></tr>";
               document.getElementById('display').innerHTML = url;
               
               for (var i = 0; i < data.length; i++) {
                   output += "<tr><td>" + data[i].performan + "</td><td>" + data[i].firstname + "</td><td>" + data[i].lastname + "</td><td>" + data[i].studentID + "</td><td>" + data[i].skills + "</td><td>" + data[i].instruments + "</td><td>" + data[i].building + "</td><td>" + data[i].time + "</td></tr>";

                   if (data[i].type == "duet") {
                       output += "<tr><td>" + data[i].performan + "</td><td>" + data[i].firstname2 + "</td><td>" + data[i].lastname2 + "</td><td>" + data[i].studentID2 + "</td><td>" + data[i].skills + "</td><td>" + data[i].instruments + "</td><td>" + data[i].building + "</td><td>" + data[i].time + "</td></tr>";
                   }
               }
           }
           output += "</table";
           document.getElementById('display').innerHTML = output;
       };
       httpRequest.open("GET", url, true);
       httpRequest.send();
   }
}*/