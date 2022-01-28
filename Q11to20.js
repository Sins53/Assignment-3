function fn11() {
  var str = document.getElementById("Q11").value;
  var l = str.length;
  var i= 0;
  var output = '';

  for(i = 0 ; i < l; i++) {
if(str[i] == '1'|| str[i] =='2' || str[i] == '3'|| str[i] =='4' ||str [i] == '5' || str[i] == '6'|| str[i] =='7' || str[i] == '8'|| str[i] =='9' ||str [i] == '0' ){
  output = 'It contains only Numbers.'
}
else {
  output = 'It contains somethings other than Numbers.';
  break;

}}
  document.getElementById("A11").innerHTML
                    = output;
}
function fn12() {
  var str1 = document.getElementById("Q12").value;
  var str2 = document.getElementById("Q12i").value;
  var output = Number(str1) + Number (str2);
  document.getElementById("A12").innerHTML
                    = " Sum : " + output;
}
function fn13() {
  var str = document.getElementById("Q13").value;
  var radius = Number(str);
  var area = 3.14*radius*radius;
  var circumference = 2*3.14*radius;
  document.getElementById("A13").innerHTML
                    = "The circumference of the circle is :" + circumference + " <br> The area is : " + area;
}
function fn14() {
  var str = document.getElementById("Q14").value;
  var age = Number(str);
  var output = '';
  if (age >= 18 ){
    output = "You are eligible to vote."
  } else if (age < 18) {
    output = "You are not eligible to vote."
  } else {
    output = "Enter you age in numbers."
  }
  document.getElementById("A14").innerHTML
                    = output;
}
function fn15() {
  var str = document.getElementById("Q15").value;
  var age = Number(str);
  var output = '';
  if (age == 0 ){
    output = "You Entered 0 which is neither odd/even."
  }else { if (age %2 == 0 ){
    output = "The given number is even."
  } else {
    output = "The given number is odd."
  } 
  }
  
  document.getElementById("A15").innerHTML
                    = output;
}
function fn16() {
  var str1 = document.getElementById("Q16").value;
  var str2 = document.getElementById("Q16i").value;
  var num1 = Number(str1);
  var num2 = Number(str2);
  var arr = [];
  var i = 0;
  var j =0;
  if (num1>num2){
    i=num2;
    j=num1;
  } else { i=num1;
  j=num2;
  }
  for(i;i<=j;i++){
    if(i %2 !=0){
      arr.push(i);
    }
    if(i==j){
      break;
    }
  }
  
  
  document.getElementById("A16").innerHTML
                    = arr ;
}
function fn17() {
  var str = document.getElementById("Q17").value;
  var len = str.length;
  var arr = [];
  var i = 0;
  for(i=len-1;i>=0;i--){
    arr.push(str[i]);
  }
  var output = arr.join('');
  
  
  document.getElementById("A17").innerHTML
                    = output ;
}
var a = 12345;
var str = 'sahil';
var arr = [1,2,3];

function checkType (x){
  return typeof(x);
}

var result = checkType(a);
console.log(result);

function fn19() {
  var str = document.getElementById("Q19").value;
  var arr = str.split(',');

  var longest = arr.sort(
    function (a, b) {
        return b.length - a.length;
    }
);

  
  document.getElementById("A19").innerHTML
                    = longest[0];
}

function fn20() {
  var output = arguments.callee.name
  
  document.getElementById("A20").innerHTML
                    = output;
}

