const { buildSchema } = require('graphql');

const typeDefs = buildSchema(`
	type Passenger{
        rut: String!
        contrasenia: String!
        nombre: String!
        apellidos: String!
        telefono_personal: Int!
        telefono_emergencia: Int!
        email: String!
        nacionalidad: String
	}

	input InputPassenger{
        nombre: String!
        apellidos: String!
        telefono_personal: Int!
        telefono_emergencia: Int!
        email: String!
        nacionalidad: String
	}

	type Mutation {
		updatePassenger(rut: String!, user: InputPassenger!): Boolean
		changePassEmployee(rut: String!, newPass: String!): Boolean
	}

	type Query{
		authEmployee(rut: String!, pass: String!): Boolean
		getInformationPassenger(rut: String!): Passenger
	}

`);

module.exports = typeDefs;
