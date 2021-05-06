const connection = require('../config/db');

const userModel = {};

const queryPromise = ([query, values]) => {
	const results = new Promise(resolve => {
		connection.query(query, values, (err, results) => {
			if (err) console.error(err);

			resolve(results);
		});
	});

	return results.then(info => info);
};

userModel.getUserByRut = async ({ values }) => {
	const query = `SELECT * FROM USUARIOS WHERE rut = ? AND FK_id_rol = ?`;

	const results = await queryPromise([query, values]);

	return results;
};

userModel.updatePassenger = async ({ values }) => {
	const query = `
		UPDATE
			USUARIOS
		SET
			nombre = ?,
			apellidos = ?,
			telefono_personal = ?,
			telefono_emergencia = ?,
			email = ?,
			nacionalidad = ?
		WHERE
			rut = ? AND FK_id_rol = 3
 	`;

	const isUpdated = await queryPromise([query, values]);

	return isUpdated.changedRows !== 0;
};

userModel.changePassEmployee = async ({ values }) => {
	const query = 'UPDATE USUARIOS SET contrasenia = ? WHERE rut = ? AND FK_id_rol = 2';

	const isUpdated = await queryPromise([query, values]);

	return isUpdated.changedRows !== 0;
};

module.exports = userModel;
