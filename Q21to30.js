function fn21() {
  var str = document.getElementById("Q21").value;
  var arr = str.split('');

  document.getElementById("A21").innerHTML
                    = "[" + arr + "]";
}
function fn22() {
  var str = document.getElementById("Q22").value;
  var num = Number(str);
  var arr = [1,2,3,4,5,6,7,8,9,10]

  if(num>=0 && num<=10){
    var output = callme(num);
    console.log(output);
  
    function callme(value=1){
    return arr.slice(-value)
    }
    document.getElementById("A22").innerHTML
                      = output;
  }else {
    document.getElementById("A22").innerHTML 
                      = "Enter a smaller value between 0 to 10."
  }

  
}
function fn231() {
  var arr = [1,2,3,4,5]

  document.getElementById("A23").innerHTML
                    = "The shifted value is : " + arr.shift() + " array left : " + arr;
}
function fn232() {
  var str = document.getElementById("Q23").value;
  var arr = [1,2,3,4,5]

  document.getElementById("A23").innerHTML
                    = "New array length : " +  arr.unshift(str) + " Array :" + arr;
}
function fn24() {
  var str = document.getElementById("Q24").value;
  var arr = str.split("/");
  arr.shift();
  arr.pop();
  var str1 = arr.join("");
  var num = Number(str1);
  mlist = ["Entered 0 in months place", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  document.getElementById("A24").innerHTML
                    = mlist[num];
}
function fn25() {
  var d = new Date();
  var a = new Date();
  var q = a.getMonth();
  q += 3;
  a.setMonth(q);
  document.getElementById("A25").innerHTML
                    = d + "<br> ...After 3 Months...  <br>" + a;
}
function fn26() {
  var str = document.getElementById("Q26").value;
  var num = Number(str);
  var d = new Date();
  var output = d.getFullYear() - num;
  document.getElementById("A26").innerHTML
                    = "Your age is : " + output;
}
function fn27() {
  var str = document.getElementById("Q27").value;
  var chk = document.getElementById('selectid').value;
  var num = Number(str);
  var output = '';
  console.log(num);
  
  if (chk =="Binary") {
    output = num.toString(2);
  }
  else if  (chk=="Octal") {
    output = num.toString(8);
  }
  else if  (chk=="Hexadecimal") {
    output = num.toString(16);
  } else {
    output = "Enter a decimal value."
  }

  document.getElementById("A27").innerHTML
                      = output;

  
}
function fn28() {
  var ran = Math.floor(Math.random() * 11);
  var arr = [1,10,20,23,34,44,55,67,77,32,78];
  document.getElementById("A28").innerHTML
                    = arr[ran];
}
function fn29() {
  var str1 = document.getElementById("Q29").value;
  var str2 = document.getElementById("Q291").value;
  var str3 = document.getElementById("Q292").value;

  //<span class=”text-primary”>Hello World</span>

  document.getElementById("A29").innerHTML
                      = "<" + str1 + " class = '" + str2 + "' style='color: green;'> " + str3 + "<//" + str1 + ">"; 
}
function fn30() {
  var str1 = document.getElementById("Q30").value;
  var str2 = document.getElementById("Q30i").value;
  var num1 = Number(str1);
  var num2 = Number(str2);
  var output = num1*num2;
  document.getElementById("A30").innerHTML
                    = output ;
}
function fn30i() {
  var str1 = document.getElementById("Q30").value;
  var str2 = document.getElementById("Q30i").value;
  var num1 = Number(str1);
  var num2 = Number(str2);
  var output = num1 / num2;
  document.getElementById("A30").innerHTML
                    = output ;
}

 