var fs = require('fs');

var obj = 
{
    "first_name" : "Valod",
    "last_name" : "Hovsepyan",
    "age" : 13,
    "tumo_student" : true
}

fs.writeFileSync("obj.json", JSON.stringify(obj));