
import knnRoutes from "./knn";

export default function (app) {
  app.use("/api/knn", knnRoutes);
}
