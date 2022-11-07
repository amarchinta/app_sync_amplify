const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const PORT = 5000;
const app = express();
const schema = require("./schema/schema");

app.use("/graphql", graphqlHTTP({ graphiql: true, schema }));
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
