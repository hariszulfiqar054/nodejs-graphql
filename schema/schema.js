const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
} = graphql;

let books = [
  { name: "Name of wild", genre: "Fantasy", id: 1 },
  { name: "Hello World", genre: "Fantasy", id: 2 },
  { name: "Batman", genre: "Fantasy", id: 3 },
];

let authors = [
  { name: "Test1", age: 30, id: 1 },
  { name: "Test3", age: 50, id: 2 },
  { name: "Test2", age: 40, id: 3 },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLID },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //   code to get data from db
        // console.log(books.filter((data) => data.id == args.id));
        return books.filter((data) => data.id == args.id)[0];
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //   code to get data from db
        return authors.filter((data) => data.id == args.id)[0];
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
