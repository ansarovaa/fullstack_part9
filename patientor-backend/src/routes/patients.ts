/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import patientsService from "../services/patientsService";
import toNewPatient from "../utils";

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getEntries());
});

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    const addedPatient = patientsService.addEntry(newPatient);

    res.json(addedPatient);
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    res.status(400).send(e.message);
  }
});

export default router;