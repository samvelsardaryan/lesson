// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();

var fs = require('fs');
var dummyText = "Apple yep";

function main() {
   fs.writeFileSync("dummytext.txt", dummyText);
   var text = fs.readFileSync("dummytext.txt").toString();
   console.log(dummyText == text);
   console.log(text);
   fs.writeFileSync("undummytext.txt",
       text.replace("Apple", "Microsoft")
   );
}
main();
