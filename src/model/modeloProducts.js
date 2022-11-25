const conexion = require("../../database/conexion");

const ConsultarProducts = async () => {
  let response;

  try {
    const query = `SELECT * FROM products`;
    response = await conexion.query(query);
  } catch (error) {
    console.error(error);
  }

  return response;
};

const ConsultarProductsById = async (codigo) => {
  let response;

  try {

    const query = `SELECT * FROM products WHERE id = $1`;
    const params = [codigo]

    response = await conexion.query(query, params)

  } catch (error) {
    console.log(error);
  }
  
  return response;
};

const CreateProducts = async ( name, precio, fabricado, fecha_vencimiento) => {
    let response;
    
    try {
        const query = `INSERT INTO products(name, precio, fabricado,fecha_vencimiento) VALUES ($1, $2, $3, $4)`;
        const params = [name, precio, fabricado,fecha_vencimiento]
        response = await conexion.query(query,params)
    } catch (error) {
        console.log(error);
    }
    return response;
};


const DeleteProductsById = async(codigo) => {
  let response;

  try {
    const query = `DELETE FROM products WHERE codigo = $1`;
    const params = [codigo]
    response = await conexion.query(query,params)
    
  } catch (error) {
    console.log(error);
  }
  return response;
};

const UpdateProducts = async(name, precio, fabricado, fecha_vencimiento, codigo) => {
  let response;

    try {
      const query = `UPDATE products SET name = $1,precio = $2, fabricado = $3, fecha_vencimiento = $4 WHERE codigo = $5`;
      const params = [name, precio, fabricado, fecha_vencimiento, codigo]
      response = await conexion.query(query, params)
      
    } catch (error) {
      console.log(error);   
    }
    return response;
}



module.exports = {
    ConsultarProducts,
    ConsultarProductsById,
    CreateProducts,
    DeleteProductsById,
    UpdateProducts
};
