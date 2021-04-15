import diagnosesData from '../../data/diagnoses.json';

const getEntries = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return diagnosesData;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry
};