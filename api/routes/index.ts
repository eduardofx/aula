import { Express } from 'express';
import usersRoutes from "./users";

const router = (app: Express) => {
    app.use("/users", usersRoutes);
};

export default router;