import express from "express";
import * as appointmentController from "../controllers/appointmentController";

const router = express.Router();

router.get("/appointments", appointmentController.getAppointments);

export default router;
