import { Document, InferSchemaType, Schema, model } from "mongoose";

export interface IAppointment extends Document {
  patientId: string;
  details: string;
  treatment?: string;
}

export const appointmentSchema = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true
  },
  details: {
    type: String,
    required: true
  },
  treatment: {
    type: String,
    required: false,
    default: ""
  }
});

type Appointment = InferSchemaType<typeof appointmentSchema>;
export default model<Appointment>("Appointment", appointmentSchema);
