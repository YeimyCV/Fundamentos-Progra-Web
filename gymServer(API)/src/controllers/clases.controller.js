import { getConnection } from "../database/database";

const getClases = async (req, res) => {
    try {
     const connection = await getConnection();
     const result = await connection.query("SELECT * FROM tabla_clases");
     if(result.length === 0){
      return res.status(404).json({message: "No existen clases"});
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
    getClases,
};
