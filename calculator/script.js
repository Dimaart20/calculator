function plus(){
	var nam1, nam2, result;

	nam1 = document.getElementById('n1').value;
	nam1 = parseInt(nam1);

	nam2 = document.getElementById('n2').value;
	nam2 = parseInt(nam2);

	result = nam1 + nam2;

	document.getElementById('out').innerHTML = result;
}
function minus(){
var nam1, nam2, result;

	nam1 = document.getElementById('n1').value;
	nam1 = parseInt(nam1);

	nam2 = document.getElementById('n2').value;
	nam2 = parseInt(nam2);

	result = nam1 - nam2;

	document.getElementById('out').innerHTML = result;	
}
function multiplay(){
	var nam1, nam2, result;

	nam1 = document.getElementById('n1').value;
	nam1 = parseInt(nam1);

	nam2 = document.getElementById('n2').value;
	nam2 = parseInt(nam2);

	result = nam1 * nam2;

	document.getElementById('out').innerHTML = result;
}