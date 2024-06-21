import { Document, InferSchemaType, Schema, model } from "mongoose";

export interface IAppointment extends Document {
  patient: string;
  details: string;
  treatment: string;
}

export const appointmentSchema = new Schema({
  patient: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: false
  }
});

type Appointment = InferSchemaType<typeof appointmentSchema>;
export default model<Appointment>("Appointment", appointmentSchema);
