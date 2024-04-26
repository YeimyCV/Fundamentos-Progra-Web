import { getConnection } from "../database/database";

  const registerUser = async (req, res) => {
    try {
      const {usr , pwd} = req.body;
      if(usr === undefined || pwd === undefined || usr === "" || pwd === ""){
        return res.status(400).json({message: "Bad Request. Please fill all field."});
      }
      const user = {usr,pwd};
      const connection = await getConnection();
      await connection.query("INSERT INTO users SET ?",user);
      return res.status(200).json({message:"User Added"})
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };


export const methods = {
  registerUser
};
