import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Patient {
  _id: string;
  name: string;
  email: string;
  appointments: string[];
  notes?: string;
}

const PatientListPage: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get<Patient[]>("http://localhost:4000/patients");
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className='container'>
      <h1>Patient List</h1>
      <Table>
        <TableCaption>A list of your patients</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Appointments</TableHead>
            <TableHead className='text-right'>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patients.map((patient) => (
            <TableRow key={patient._id}>
              <TableCell className='font-medium'>{patient.name}</TableCell>
              <TableCell>{patient.email}</TableCell>
              <TableCell>{patient.appointments.length}</TableCell>
              <TableCell className='text-right'>{patient.notes || "N/A"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table></Table>
    </div>
  );
};

export default PatientListPage;
