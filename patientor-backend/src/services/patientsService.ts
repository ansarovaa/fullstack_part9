/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import patientsData from '../../data/patients.json';
import { Patient, NewPatient } from "../types";
const patients: Array<Patient> = patientsData;

const getEntries = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return patientsData;
};

const addEntry = (patient: NewPatient): Patient => {
  const newPatient = {
    id: (patients.length + 1).toString(),
    ...patient,
  };

  patients.push(newPatient);
  return newPatient;
};

const findById = (id: string):  Patient | undefined => {
  const entry = patients.find(d => d.id == id);
  return entry;
};

export default {
  getEntries,
  addEntry,
  findById
};