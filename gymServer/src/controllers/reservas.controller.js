import { getConnection } from "../database/database";

const getReservas = async (req, res) => {
    try {
      const { id } = req.params
     const connection = await getConnection();
     const result = await connection.query("SELECT * FROM tabla_reservas WHERE id_usuario = ?",id);
     if(result.length === 0){
      return res.status(404).json({message: "El usuario no posee ninguna reserva"});
     }
     return res
     .json(result)
     .status(200);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };
   const addReserva = async (req, res) => {
        try {
          const {inicio_reserva , final_reserva,categoria_reserva,id_clase,id_instalacion,id_usuario} = req.body;
       
          const reserva = {inicio_reserva , final_reserva,categoria_reserva,id_clase,id_instalacion,id_usuario};
          const connection = await getConnection();
          console.log(req.session.loggedin)
          await connection.query("INSERT INTO tabla_reservas SET ?",reserva);
          res.json({title:"Reserva Exitosa",desc:"La reserva se ha creado satisfactoriamente"})
        } catch (error) {
          res.status(500);
          res.send(error.message);
        }
      };

export const methods = {
  getReservas,
  addReserva
};
