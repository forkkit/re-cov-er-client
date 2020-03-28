import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";

const link = new HttpLink({
  uri: "http://localhost:3000/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({ link, cache });

const query = gql`
  {
    whoAmI {
      username
      email
    }
  }
`;

client.query({ query }).then(console.log);
export default client;
