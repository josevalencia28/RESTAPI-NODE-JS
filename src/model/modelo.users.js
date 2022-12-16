const conexion = require("../../database/conexion");


//Consulta de Usuarios
const consultarUsers = async () => {
  let response;

  try {
    const query = `SELECT * FROM users`;
    response = await conexion.query(query);
  } catch (error) {
    console.error(error);
  }

  return response;
};


const consultarUsersById = async (id) => {
  let response;

  try {

    const params = [id]
    const query = `SELECT * FROM users WHERE id = $1`;

    response = await conexion.query(query, params)

  } catch (error) {
    console.log(error);
  }
  
  return response;
};

const CreateUsers = async ( name, email) => {
    let response;
    
    try {
        const query = `INSERT INTO users(name, email) VALUES ($1, $2)`;
        const params = [name, email]
        response = await conexion.query(query,params)
    } catch (error) {
        console.log(error);
    }
    return response;
};

const DeleteUsersById = async(id) => {
  let response;

  try {
    const query = `DELETE FROM users WHERE id = $1`;
    const params = [id]
    response = await conexion.query(query,params)
    
  } catch (error) {
    console.log(error);
  }
  return response;
};

const updateUsersM = async(name, email, id) => {
  let response;
    try {
      const query = `UPDATE users SET name = $1,email = $2 WHERE id = $3`;
      const params = [name, email, id]
      response = await conexion.query(query, params)
      
    } catch (error) {
      console.log(error);   
    }
    return response;
}



module.exports = {
  consultarUsers,
  consultarUsersById,
  CreateUsers,
  DeleteUsersById,
  updateUsersM
};
