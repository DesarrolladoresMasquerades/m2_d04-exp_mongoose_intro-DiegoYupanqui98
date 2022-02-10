require("./configs/database.config");


const Cat = require("./models/Cat.model")



//Cat.findOneAndUpdate() dangerous cause it will update
// if find wrong

Cat.findOneAndUpdate("62050046cd45100e4387abba",
{ $set: { color: "greeen" } })
.then(cat => console.log(cat))