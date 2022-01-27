function fn1() {
  var str = document.getElementById("Q1").value;
  var l = str.length;
  var letter = str[l-1];

  document.getElementById("A1").innerHTML
                    = "The length of the string is : " + l + " and the last character is : " + letter;
}
function fn2() {
  var str = document.getElementById("Q2").value;
  var check = document.getElementById("Q2i").value;
  var count= 0;
  var i = 0;
  var l = str.length;
  for (i = 0; i < l; i++) {
    if ( str[i]===check){
      count++;
    }
  }
  document.getElementById("A2").innerHTML
                    ="The " + check + " character is repeated : " + count + " times.";
}
function fn3() {
  var str = document.getElementById("Q3").value;
  var a = str.split('');
  var result=[];
  a.forEach(char =>{
    if (!result.includes(char)) {
         result.push(char);
     }
 }
     )
  var output = result.join("");
  

  document.getElementById("A3").innerHTML
                    = "The distinct characters are : " + output;
}
function fn4() {
  var str = document.getElementById("Q4").value;
  var arr = str.toLowerCase().split("_");
  var result = arr.map(function (val){
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
  });
  var r1 = result.join("");
  r1 = r1.charAt(0).toLowerCase() + r1.slice(1);
  var r2 = result.join(" ").toLowerCase();
  var r3 = result.join(" ").toLowerCase();
  r3 = r3.charAt(0).toUpperCase() + r3.slice(1);
  var r4 = result.join(" ");
  var r5 = result.join("").toUpperCase();
  document.getElementById("A4").innerHTML
                    = r1 + "<br>" + r2 + "<br>" + r3 + "<br>" + r4 + "<br>" + r5;
}
function fn5() {
  var str = document.getElementById("Q5").value;
  var arr = str.split("")
  var reverseArray = arr.reverse();
  var result = reverseArray.join("");
  document.getElementById("A5").innerHTML
                    = "The reverse string is : " + result;
}
function fn6() {
  var str = document.getElementById("Q6").value;
  var l = str.length;

  var i= 0;
  var upper=0;
  var lower=0;
  for(i = 0 ; i < l; i++) {
if(str[i]>='A' && str[i]<='Z'){
  upper++;
}
else if(str[i]>='a' && str[i]<='z'){
  lower++;
}
  }
  document.getElementById("A6").innerHTML
                    = "The number of lower case letters are: " + lower + "<br>" + "The number of UPPER case lettesr are: " + upper;
}
function fn7() {
  var str = document.getElementById("Q7").value;
  var arr = str.split("");
  arr.sort();
  result = arr.join("");
  document.getElementById("A7").innerHTML
                    = result;
}
