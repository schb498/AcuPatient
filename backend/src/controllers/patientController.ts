import { Request, Response, NextFunction } from "express";
import Patient from "../models/PatientModel";

export const getPatients = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving patients", error });
  }
};
