import { Document, InferSchemaType, Schema, model } from "mongoose";

export interface IPatient extends Document {
  name: string;
  password: string;
  email: string;
  appointments: string[];
  notes?: string[];
}

export const patientSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please fill a valid email address"],
    unique: true
  },
  appointments: {
    type: [String],
    required: true
  },
  notes: {
    type: String,
    required: false
  }
});

type Patient = InferSchemaType<typeof patientSchema>;
export default model<Patient>("Patient", patientSchema);
