import { Router } from "express";

import authRouter from "./authRouter.js";
import financialRouter from "./financialRouter.js";
import { tokenValidateMiddleware } from "../middlewares/tokenValidateMiddleware.js";

const router = Router();

router.use(authRouter);
router.use(tokenValidateMiddleware, financialRouter);

export default router;
