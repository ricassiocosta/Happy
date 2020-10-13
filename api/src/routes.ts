import { Router } from "express"
import multer from "multer"

import OrphanagesController from "./controllers/OrphanagesController"
import uploadConfig from "./config/upload"

const routes = Router()
const upload = multer(uploadConfig)

routes
  .get("/orphanages", OrphanagesController.index)
  .get("/orphanages/:id", OrphanagesController.show)
  .post("/orphanages", upload.array("images"), OrphanagesController.create)

export default routes
