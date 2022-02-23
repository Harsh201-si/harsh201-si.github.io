


var employeeData;



 
function hello(){
	
	console.log("run")
	var strEmployees="";
	var strEmployeeTable = '';
	
	
	strEmployeeTable = '<table class = "table table-hover table-bordered ">';
		
	strEmployeeTable = strEmployeeTable + '<thead>';
	strEmployeeTable = strEmployeeTable + '<tr class="bg-warning"><th scope="col">Employee.No</th><th scope="col">Name</th> <th scope="col">Place</th><th scope="col">State</th</tr>'
	strEmployeeTable = strEmployeeTable + '</thead>';
	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(i=0;i<employeeData.length;i++){
		
		strEmployeeTable = strEmployeeTable + '<tr class="table-success"><th scope="row">'+(i+101)+'</th><td class="table-primary">'+employeeData[i].first+'</td><td class="table-light">'+employeeData[i].Place+'</td><td class="table-light">'+employeeData[i].Place+'</td></tr>'
	}
	
	 
	
	document.getElementById("place").innerHTML = strEmployeeTable;
		
}

function hide(){
	
document.getElementById("place").innerHTML = "";
}
	
function Odd(){
	console.log("run")
	var strEmployees="";
	var strEmployeeTable = '';
	
	
	strEmployeeTable = '<table class = "table table-hover table-bordered ">';
		
	strEmployeeTable = strEmployeeTable + '<thead>';
	strEmployeeTable = strEmployeeTable + '<tr class="bg-warning"><th scope="col">Employee.No</th><th scope="col">Name</th> <th scope="col">Place</th></tr>'
	strEmployeeTable = strEmployeeTable + '</thead>';
	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(i=0;i<employeeData.length;i=i+2){
		
		strEmployeeTable = strEmployeeTable + '<tr class="table-success"><th scope="row">'+(i+101)+'</th><td class="table-primary">'+employeeData[i].first+'</td><td>'+employeeData[i].Place+'</td></tr>'
	}
	
	
	
	document.getElementById("place").innerHTML = strEmployeeTable;
}
function Even(){
	
	console.log("run")
	var strEmployees="";
	var strEmployeeTable = '';
	strEmployeeTable = '<table class = "table table-hover table-bordered ">';
		strEmployeeTable = strEmployeeTable + '<thead>';
	strEmployeeTable = strEmployeeTable + '<tr class="bg-warning"><th scope="col">Employee.No</th><th scope="col">Name</th> <th scope="col">Place</th></tr>'
	strEmployeeTable = strEmployeeTable + '</thead>';
	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(i=1;i<employeeData.length;i=i+2){
		
		strEmployeeTable = strEmployeeTable + '<tr class="table-success"><th scope="row">'+(i+101)+'</th><td class="table-primary">'+employeeData[i].first+'</td><td>'+employeeData[i].Place+'</td></tr>'
	}
	document.getElementById("place").innerHTML = strEmployeeTable;
}

function search(){
	console.log("searching");
	
}



employeeData = [
{
	"first": "Harsh",
  "Last": "Singh",
  "Place":"Delhi",
  
	},
	{
		"first": "Prajwal",
		"Last": "Karki",
       "Place": "Delhi"		
	},
	{
		"first": "Tabish",
		"Last": "Rahmani",
       "Place": "Delhi"		
	},
	{
		"first": "Faisal",
	   "Place": "Delhi"		
	},
	{
		"first": "Uday Kumar",
	   "Place": "Bangalore"		
	},
	{
		"first": "Ghanshyam",
	   "Place": "Lucknow"		
	},
	{
		"first": "Gourav",
	   "Place": "Rajasthan"		
	},
		{
		"first": "Jatin",
	   "Place": "Haryana"		
	},
		{
		"first": "Chirag",
	   "Place": "Up"		
	},
		{
		"first": "Aryan",
	   "Place": "Bangalore"		
	},
  
		

]


