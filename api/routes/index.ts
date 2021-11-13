import { Express } from 'express';
import usersRoutes from "./users";
import productsRoutes from "./products";

const router = (app: Express) => {
    app.use("/users", usersRoutes);
    app.use("/products", productsRoutes);
};

export default router;