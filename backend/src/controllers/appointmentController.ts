import { Request, Response, NextFunction } from "express";
import Appointment, { IAppointment } from "../models/AppointmentModel";

export const getAppointments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving appointments", error });
  }
};
