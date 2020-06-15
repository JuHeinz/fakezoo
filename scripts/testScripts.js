console.log("Test script is connected!")

// nodelist zu divs holen
var div = document.querySelectorAll(".a");
  
// für jedes element von div function numGen ausführen
for (var i = 0; i < div.length; i++) {
//   console.log(i);
  numGen();
}

//random nummer generieren und zu jeden element von div einfügen
function numGen () {
num = Math.random();
// console.log(num);
div[i].innerHTML = num;

}

// figure out how to return something
 