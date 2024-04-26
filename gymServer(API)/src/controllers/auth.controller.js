import { getConnection } from "../database/database";

const login = async (req, res) => {
    try {
      const {usuario , contrasena} = req.body;
      if(usuario === undefined || contrasena === undefined || usuario === "" || contrasena === ""){
       return res.status(400).json({message: "Por favor rellene todos los campos."});
      }
      const connection = await getConnection();
     const result = await connection.query("SELECT * FROM tabla_usuario WHERE usuario = ? AND contrasena = ?",[usuario,contrasena]);
     if(result.length === 0){
      return res.status(404).json({message: "usuario no encontrado"});
     }
     req.session.id_usuario = result[0].id_usuario
     return res
     .json(result)
     .status(200);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
  const getDatosUsuario = async (req, res) => {
    try {
     const connection = await getConnection();
     const { id } = req.params
     const result = await connection.query("SELECT * FROM tabla_usuario WHERE id_usuario = ?", id);
     if(result.length === 0){
      return res.status(404).json({message: "No existen datos para el usuario"});
     }
     return res
     .json(result)
     .status(200);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

export const methods = {
  login,
  getDatosUsuario
};
