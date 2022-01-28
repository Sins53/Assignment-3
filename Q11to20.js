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