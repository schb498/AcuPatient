import { Request, Response, NextFunction } from "express";
import Patient, { IPatient } from "../models/PatientModel";

export const getPatients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients", error });
  }
};

export const addPatient = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Extract patient details from the request body
    const { name, email, appointments, notes } = req.body;

    // Create a new patient document, excluding notes if it's not provided
    const newPatient: Partial<IPatient> = {
      name,
      email,
      appointments
    };

    // Add notes only if provided
    if (notes) {
      newPatient.notes = notes;
    }

    // Save the patient document to the database
    const savedPatient = new Patient(newPatient);
    await savedPatient.save();

    // Respond with a success message
    res.status(201).json({ message: `Successfully added patient ${name}` });
  } catch (error) {
    res.status(500).json({ message: "Error adding patient", error });
  }
};
