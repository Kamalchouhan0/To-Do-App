const bodyParser = require("body-parser");
// var mongoose = require("mongoose");

var data = [
  { item: "get milk" },
  { item: "walk dog" },
  { item: "kick some coding ass" },
];

var urlencodedParser = bodyParser.urlencoded({});

//create to the Database
// mongoose.connect(
//   "mongodb+srv://test:<password>@cluster0.gmaz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// );

//create a schema - this is like a blueprint
// var todoSchema = new mongoose.Schema({
//   item: String,
// });

// var Todo = mongoose.model("Todo", todoSchema);
// var itemOne = Todo({ item: "buy flowers" }).save(function (err) {
//   if (err) throw err;
//   console.log("item Saved");
// });

module.exports = function (app) {
  app.get("/todo", function (req, res) {
    res.render("todo", { todos: data });
  });

  app.post("/todo", urlencodedParser, function (req, res) {
    data.push(req.body);
    res.json({ todos: data });
  });

  app.delete("/todo/:item", function (req, res) {
    data = data.filter(function (todo) {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json({ todos: data });
  });
};
