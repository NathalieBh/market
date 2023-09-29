const { buildSchema } = require('graphql');
postInput;

module.exports = buildSchema(`
    type Product {
        _id: ID!
        title: String!
        description: String!
        imageUrl: String!
        price: Number!
        createdAt: String!
        updatedAt: String!
    }

    type User {
        _id: ID!
        userId: String!
        email: String!
    }

    type AuthData {
        token: String!
        userId: String!
    }

    input UserInputData {
        email: String!
        userId: String!
    }

    input ProductInputData {
        title: String!
        description: String!
        imageUrl: String!
        price: Number!
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        posts(page: Int): PostData!
        post(id: ID!): Post!
        user: User!
    }

    type RootMutation {
        createUser(userInput: UserInputData): User!
        createProduct(postInput: PostInputData): Product!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
