function addButton() {
    let h1 = prompt("Type Header Data");
    document.getElementById('document').innerHTML += `<h1>` + h1 + `</h1>`;
}
function editStart() {
    document.getElementById('document').contentEditable = true;
}
function editStop() {
    document.getElementById('document').contentEditable = false;
}
function addImage() {
    var b = prompt('Type Image Link')
    var h = prompt("Type height")
    document.getElementById('document').innerHTML += `<img src="` + b + `" height="` + h + `">`;
}
function printer() {
    let mywindow = window.open('', 'PRINT', 'height=800,width=1000');
    mywindow.document.write('<html><head><style>body{text-align:center;}</style><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById('document').innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.focus();
    mywindow.print();
    mywindow.close();
    return true;
}

function bold() {
    document.getElementsById('document').style = "font-weight:900";
}
function background() {
    let x = prompt("Type Link of The Background for example try - example.jpg");
    document.getElementById('document').style = `background-image: url('`+x+`');
    background-size: cover;
    background-attachement:fixed;
    background-position: center;`;
}