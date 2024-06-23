import express from "express";
import * as patientController from "../controllers/patientController";

const router = express.Router();

router.get("/", patientController.getPatients);
router.post("/", patientController.addPatient);

export default router;
