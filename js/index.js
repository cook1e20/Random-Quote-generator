var inp = ""
var firVal= "";
var action = "";
var decimal =0;
var array = [];
var string = '';
var i = 0;

//Respond to number button press
document.getElementById("1").onclick = ()=>{addOne(1);};
document.getElementById("2").onclick = ()=>{addOne(2);};
document.getElementById("3").onclick = ()=>{addOne(3);};
document.getElementById("4").onclick = ()=>{addOne(4);};
document.getElementById("5").onclick = ()=>{addOne(5);};
document.getElementById("6").onclick = ()=>{addOne(6);};
document.getElementById("7").onclick = ()=>{addOne(7);};
document.getElementById("8").onclick = ()=>{addOne(8);};
document.getElementById("9").onclick = ()=>{addOne(9);};
document.getElementById(".").onclick = ()=>{if(decimal < 1){
                                               decimal ++;
                                               addOne(".");
                                                };};

//Respond to bodmas buttons 
document.getElementById("+").onclick = ()=>{act("+");};
document.getElementById("-").onclick = ()=>{act("-");};
document.getElementById("x").onclick = ()=>{act("x");};
document.getElementById("/").onclick = ()=>{act("/");};

//Respond to Clear Button
document.getElementById("clearLast").onclick = ()=>{clearLast();};
document.getElementById("clear").onclick = ()=>{clear();};

//Responds to equals
document.getElementById("=").onclick = ()=>{equ();};

//object with operators and there functions
var ops = {
  '+' : function (a,b){return a+b},
  'x' : function (a,b){return a*b},
  '-' : function (a,b){return a-b},
  '/' : function (a,b){return a/b}
}


function clearLast (){
inp= "";
  document.getElementById("input").innerHTML = 0;
}
function clear (){
inp= "";
  document.getElementById("input").innerHTML = 0;
  document.getElementById("sum").innerHTML = "";
  array = [];
}
//function to add numbers to input string 
function addOne (num){
  inp += num;
  document.getElementById("input").innerHTML = inp;
}
//function that is ran on any operator press i.e '+'
function act (bod){
  decimal = 0;
  array.push(inp, bod);
  string = array.toString().replace(/,/g, '')
	inp="";
	document.getElementById("input").innerHTML = 0;
  document.getElementById("sum").innerHTML = string;
}

//function that reduces array of inputs into correct answer
function getAns(){
let oper = ['/','x','+','-']
  if(array.indexOf(oper[i]) >= 0){
    let splVal = array.indexOf(oper[i]);
    let answer = ops[array[splVal]](Number(array[splVal-1]),Number(array[splVal+1]))
    array.splice(splVal -1, 3, answer)
    console.log(array)
    getAns();
  } else if (i < oper.length) {
    i++
    getAns();
  }
};

//funciton that executes on equals press
function equ (){
  array.push(inp);
 getAns();
  //inp = ops[action](Number(firVal), Number(inp));
	document.getElementById("input").innerHTML = array;
  document.getElementById("sum").innerHTML = ""
  
  //reset all values
  inp = ""
  firVal= "";
  action = "";
  decimal =0;
  array = [];
  string = '';
  i=0;
}