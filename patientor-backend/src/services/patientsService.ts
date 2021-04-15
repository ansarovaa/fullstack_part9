import patientsData from '../../data/patients.json';

const getEntries = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return patientsData;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};