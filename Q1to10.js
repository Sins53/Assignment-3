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
function fn8() {
  var str = document.getElementById("Q8").value;
  var check = document.getElementById("Q8i").value;
  var arr = str.split(" ");
  var output = "";
  var result = arr.includes(check)
  if(result == true){
    output = "Present";
  }else {
    output = "Absent";
  }
  document.getElementById("A8").innerHTML
                    = "The word (" + check + ") is " + output + " in the sentence : " + str;
}
function fn9() {
  var str = document.getElementById("Q9").value;
  var l = str.length;
  str = str.toLowerCase();
  var i= 0;
  var consonants = 0;
  var whitespaces = 0;
  var nums = 0;
  var vowel = 0;
  var specialcharacters = 0;
  for(i = 0 ; i < l; i++) {
if(str[i] == ' ' ){
  whitespaces++;
}
else if(str[i]>='a' && str[i]<='z'){
  if(str[i] == 'a'|| str[i] =='e' || str[i] == 'i'|| str[i] =='o' ||str [i] == 'u' ){
    vowel++;
  }else {
    consonants++;
  }
}else if (str[i] == '1'|| str[i] =='2' || str[i] == '3'|| str[i] =='4' ||str [i] == '5' || str[i] == '6'|| str[i] =='7' || str[i] == '8'|| str[i] =='9' ||str [i] == '0' ){
  nums++;
} else {
    specialcharacters ++;
  }
  }
  document.getElementById("A9").innerHTML
                    = "Consonats : " + consonants + "<br> Vowels : " + vowel + "<br> White Spaces : " + whitespaces + "<br> Numbers : " + nums + "<br> Special Characters: " + specialcharacters;
}
function fn10() {
  var str = document.getElementById("Q10").value;
  var len = str.length;
  var arr = str.split("");
  var emparr = [];
  var i = 0;
  for (i = 0; i < len; i++){
    if(i==0){
      emparr[i]=arr[i];
    }else if (i%2 == 0){
      emparr[i] = arr [i];
    }
  }
  var output = emparr.join("");

  document.getElementById("A10").innerHTML
                    = "Output : " + output ;
}