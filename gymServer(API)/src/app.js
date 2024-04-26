import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import cors from 'cors'
// Routes
import reservasRoutes from "./routes/reservas.routes";
const app=express();
// Settings
app.set("port", 4001);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
	cookie: { sameSite: "none" ,
maxAge:30000}
}));

// Routes
app.use("/api/reservas",reservasRoutes);

export default app;