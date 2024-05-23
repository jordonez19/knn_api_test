import { Router } from "express";
import * as knnController from "../../controllers/knn";
import responseHandler from "../../middlewares/handlers";

const router = Router();

router.post(
  "/",
  responseHandler(knnController.getData)
);

export default router;
