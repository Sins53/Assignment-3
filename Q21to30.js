function fn21() {
  var str = document.getElementById("Q21").value;
  var arr = str.split('');

  document.getElementById("A21").innerHTML
                    = arr;
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
  var x = str.split(",")
  var c = x.join('""')
  var arr = [1,2,3,4,5]

  document.getElementById("A23").innerHTML
                    = "New array length : " +  arr.unshift(c) + " Array :" + arr;
}

