document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.id === 'firstPage') {
    page.querySelector('#calc').onclick = function() {
      document.querySelector('#myNavigator').pushPage('calc.html', {data: {title: 'Calc'}});
    };
  } else if (page.id === 'calc.html') {
    page.querySelector('#backToFirstPage').innerHTML = page.data.title;
  };
});

//JORGE CALC CODE
function calculateRun(amount, cost, contribution){
    document.getElementById("hid1").innerHTML = "Amount: "+ amount+ " | Cost: "+ cost+ " | ratio: "+ Math.round((cost/amount)*100)/100+"/1 | contributions: " + contribution;
    var porcentageTable = [];
    var resultDisplay = "";
    if (Object.keys(contribution).length > 1) {
      for (var i= 0; i < Object.keys(contribution).length ; i++ ){
        porcentageTable[i] = Math.round(((contribution[i]*100)/cost)*100)/100;
        resultDisplay += "contributor n"+ i + " should get "+ Math.round(((amount/100)*porcentageTable[i])*100)/100 + "g<br>";
        }
      }
    document.getElementById("hid3").innerHTML = resultDisplay;
    };

function changeContribution(){
    //get the amount and cost and calculate only if there is the two values inputed
    var x = document.getElementById("calcAmount").value;
    var y = document.getElementById("calcCost").value;
    if (x === "" || y === ""){
        return;
        } else {
            x = parseInt(document.getElementById("calcAmount").value);
            y = parseInt(document.getElementById("calcCost").value);
        };
    var contributionTotal = 0;
    var contribution = [];
    //one person contributing
    if (document.getElementById("calcPeople").value == 1) {
      contribution = [y];
      console.log("| 1 |", x, y, contribution);
      calculateRun(x, y, contribution);
      return;
    } else { //more then one person contributing
      for (var i = 0; i < document.getElementById("calcPeople").value; i++){
        if (contribution[i] === undefined){
          contribution[i] = parseInt(document.getElementById("newFields"+i).value);
        }
      };
    };
    //check if contributions and cost match
    for (var i = 0; i < Object.keys(contribution).length; i++){
      contributionTotal += contribution[i];
    };
    if (contributionTotal === y) {
        console.log("| 2 |", x, y, contribution);
        calculateRun(x, y, contribution);
      } else {
        console.log("| 3 |", x, y, contribution);
        document.getElementById("hid1").innerHTML = "Amount: "+ x+ " | Cost: "+ y+ " | ratio: "+ Math.round((y/x)*100)/100+"/1";
        document.getElementById("hid3").innerHTML = "<div class='alert'>UEPA! individual contributions are not equal to the cost</div>";
      };
		};

function addingIndividuals(){
	var z = document.getElementById("calcPeople").value;
    if (z !== "" && z > 1 ){
		var newFields = "";
		var i = 0;
		for ( i ; i < z; i++){
			//individual contribution
			var indContribution = 0;
			newFields += "<div>individual contribution: <input type='number' class='text-input text-input--underbar' placeholder='U$20' value='' id='newFields"+i+"' onchange='changeContribution()'></div>"
			//console.log(newFields);
			};
		//var hid = document.getElementById("hid");
		hid2.innerHTML = newFields;
  } else {document.getElementById("hid2").innerHTML = ""};
	};


//END OF JORGE CALC

document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.id === 'firstPage') {
    page.querySelector('#diary').onclick = function() {
      document.querySelector('#myNavigator').pushPage('diary.html', {data: {title: 'Diary'}});
      isFirstTime();
    };
  } else if (page.id === 'diary.html') {
    page.querySelector('#backToFirstPage').innerHTML = page.data.title;
  };
});

//START OF JORGE DIARY
var firstTime = true;
document.getElementById("teste").innerHTML = "aaa";
function isFirstTime(){


  if (firstTime === true){
    console.log('wow')

  }
};
function addPray(){


};

//END OF JORGE DIARY

document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.id === 'firstPage') {
    page.querySelector('#circle').onclick = function() {
      document.querySelector('#myNavigator').pushPage('circle.html', {data: {title: 'Circle'}});
    };
  } else if (page.id === 'circle.html') {
    page.querySelector('#backToFirstPage').innerHTML = page.data.title;
  };
});

document.addEventListener('init', function(event) {
  var page = event.target;
  if (page.id === 'firstPage') {
    page.querySelector('#info').onclick = function() {
      document.querySelector('#myNavigator').pushPage('info.html', {data: {title: 'Info'}});
    };
  } else if (page.id === 'info.html') {
    page.querySelector('#backToFirstPage').innerHTML = page.data.title;
  };
});
