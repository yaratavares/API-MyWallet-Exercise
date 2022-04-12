import { Router } from "express";
import * as financialController from "../controllers/financialController.js";

const financialRouter = Router();

financialRouter.post("/financial-events", financialController.newFinancial);
financialRouter.get(
  "/financial-events",
  financialController.getFinancialEvents
);

export default financialRouter;
