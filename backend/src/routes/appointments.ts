import express from "express";
import * as appointmentController from "../controllers/appointmentController";

const router = express.Router();

router.get("/", appointmentController.getAppointments);
router.post("/", appointmentController.addAppointment);

export default router;
