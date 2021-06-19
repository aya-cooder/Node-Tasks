const express = require("express");
const app = express();

app.use(express.json());

//get
app.get("/", (req, res) => {
  res.send("will appe");
});

let todos = [];
//post
app.post("/todos", (req, res) => {
  todos.push(req.body);
  res.send(todos);
  console.log(req);
  res.status(204).end();
});
app.get("/todos", (req, res) => {
  res.json(todos);
});

//get with id
app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => +todo.id === +id);
  if (!todo) {
    res.status(404).end();
    return;
  }
  res.json(todo);
});
//patch//
app.patch("/todos/:id", (req, res) => {

  const {id}= req.params

  const   update_body = req.body;

  console.log( update_body.title);

  for (let data of todos) {

    if (data.id ==id) {

      if ( update_body.title != null || undefined)

      data.title =  update_body.title;

      return res

        .status(200)

        .json({ message: "Updated well appe", todos: data });

    }

  }

  res.status(404).json({ message: "Invalid Order Id" });

});

//delete
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.send("delete item wellappe");
});
app.listen(3000);