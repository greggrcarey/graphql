import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetBooks {
        books {
          name
          id
        }
      }
    `,
  })
  .then((result) => console.log(result));

function BookList() {
  return (
    <div>
      <ul id="book-list">
        <li>Book Name</li>
      </ul>
    </div>
  );
}

export default BookList;
