const typeDefs = `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]!
    }

    type Book {
        bookId: ID
        authors: String
        description: String
        title: String
        image: String
        link: String
    }

    type Auth{
        token: ID
        user: User
    }

    type Query {
        me: User
    }

    input SearchBooks {
        bookId: ID
        authors: String!
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        saveBook(criteria: SearchBooks): User
        removeBook(bookId: ID!): User
    }
`