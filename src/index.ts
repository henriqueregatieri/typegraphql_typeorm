import "reflect-metadata";
import { createConnection } from "typeorm";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { EmailResolver } from "./resolvers/EmailResolver";

async function main() {
  const connection = await createConnection()
  const schema = await buildSchema({
    resolvers: [EmailResolver],
  })
  const server = new ApolloServer({ schema })
  await server.listen(4000)
  console.log("Server has started!")
}

main();
