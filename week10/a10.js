function callback() {
    var xmlhttp = new XMLHttpRequest();
    var jsObj, display, i;
    var table = "<tr><th>FileName</th><th>Type</th><th>CWD</th><th>Action</th></tr>";
   
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            jsObj = JSON.parse(this.responseText);
            display = table;

            for (i in jsObj) {
                display += "<tr><td>" + jsObj[i].fileName + "</td>";
                display += "<td>" + jsObj[i].fileType + "</td>";
                display += "<td>" + jsObj[i].cwd + "</td>";
                display += "<td><a href=" + jsObj[i].fileName + ">Load File</a></td></tr>";
            }
        }
        document.getElementById("week10").innerHTML = display;
    };
    xmlhttp.open("GET", "assign10.php", true);
    xmlhttp.send();
}
