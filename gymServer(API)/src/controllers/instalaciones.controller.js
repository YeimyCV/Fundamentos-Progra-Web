import { getConnection } from "../database/database";

const getInstalaciones = async (req, res) => {
    try {
     const connection = await getConnection();
     const result = await connection.query("SELECT * FROM tabla_instalaciones");
     if(result.length === 0){
      return res.status(404).json({message: "No existen instalaciones"});
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
    getInstalaciones,
};
