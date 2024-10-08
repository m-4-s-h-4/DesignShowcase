import { GraphQLClient } from "graphql-request";

export const GRAPHQL_ENDPOINT =
  "https://eu-west-2.cdn.hygraph.com/content/cm0f7af1w009v08uvrauf53qf/master";

export const client = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    "Content-Type": "application/json",
  },
});
