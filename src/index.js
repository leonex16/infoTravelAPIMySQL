const cors = require('cors');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const morgan = require('morgan');

const typeDefs = require('./graphql/user/userQueries');
const resolvers = require('./graphql/user/userResolvers');
const app = express();

var corsOptions = {
	origin: 'http://localhost:19006',
	optionsSuccessStatus: 200,
};

app
	.use(cors(corsOptions))
	.use(morgan('dev'))
	.use(express.urlencoded({ extended: true }))
	.use(express.json())
	.use(
		'/v1/infotravel',

		graphqlHTTP({
			schema: typeDefs,
			rootValue: resolvers,
			// graphiql: false,
		}),
	);

module.exports = app;
