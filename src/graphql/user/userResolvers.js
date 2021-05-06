const passengerModel = require('../../models/userModel');

const resolvers = {};

resolvers.authEmployee = async args => {
	const sql = { values: [args.rut, 2] };
	const contrasenia = (await passengerModel.getUserByRut(sql))[0]?.contrasenia;

	return args.pass === contrasenia;
};

resolvers.getInformationPassenger = async ({ rut }) => {
	const sql = { values: [rut, 3] };

	return (await passengerModel.getUserByRut(sql))[0];
};

resolvers.updatePassenger = async ({ rut, user: updatedInformation }) => {
	const sql = { values: [...Object.values(updatedInformation), rut] };

	return await passengerModel.updatePassenger(sql);
};

resolvers.changePassEmployee = async ({ rut, newPass }) => {
	const sql = { values: [newPass, rut] };

	return await passengerModel.changePassEmployee(sql);
};

module.exports = resolvers;
