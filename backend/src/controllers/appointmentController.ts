import { Request, Response, NextFunction } from "express";
import Appointment, { IAppointment } from "../models/AppointmentModel";
import Patient from "../models/PatientModel";

export const getAppointments = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving appointments", error });
  }
};

export const addAppointment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { patientId, details, treatment } = req.body;

    // Check if the patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    // Create a new appointment document
    const newAppointment: Partial<IAppointment> = {
      patientId,
      details,
      treatment: treatment || ""
    };

    // Save the appointment document to the database
    const savedAppointment = new Appointment(newAppointment);
    await savedAppointment.save();

    // Respond with a success message
    res.status(201).json({ message: `Successfully added appointment for patient ID ${patient.name}` });
  } catch (error) {
    res.status(500).json({ message: "Error adding appointment", error });
  }
};
