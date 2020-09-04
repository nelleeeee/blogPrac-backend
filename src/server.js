require("dotenv").config();
import { GraphQLServer, PubSub } from "graphql-yoga";
import logger from "morgan";
import { PrismaClient } from "@prisma/client";
import schema from "./schema";

import { sendSecretMail } from "./utils";

// sendSecretMail("itnicolasme@gmail.com", "123");

const PORT = process.env.PORT || 4000;
const prisma = new PrismaClient();
const pubsub = new PubSub();

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request, prisma, pubsub }),
});

server.express.use(logger("dev"));
server.start({ port: PORT }, () =>
  console.log(`🛵 Server running on http://localhost:${PORT}`)
);
