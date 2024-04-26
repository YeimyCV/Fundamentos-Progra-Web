import { Router } from "express";
import { methods as authController } from "../controllers/auth.controller";
import { methods as reservasController } from "../controllers/reservas.controller";
import { methods as clasesController } from "../controllers/clases.controller";
import { methods as instalacionesController } from "../controllers/instalaciones.controller";

const router = Router();

router.post("/login",authController.login);
router.get("/usuario/:id",authController.getDatosUsuario);
router.get("/reservas/:id",reservasController.getReservas);
router.post("/reservas",reservasController.addReserva);
router.get("/clases",clasesController.getClases);
router.get("/instalaciones",instalacionesController.getInstalaciones);
// router.post("/register",usersController.registerUser);
// router.get("/:id",gymController.getGymByID);
// router.delete("/:id",gymController.deleteGym);
// router.put("/:id",gymController.updateGym);


export default router;