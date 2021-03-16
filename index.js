const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.json("Hello");
});

mongoose
  .connect(
    "mongodb+srv://haris:haris@cluster0.kg4o8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((res) => console.log("Connection successfull"))
  .catch((err) => console.log(err));

app.listen(4000, () => console.log(`server listening on ${4000}`));
