import express from 'express';
import { calculateBmi}  from "./bmiCalculator";
const app = express();


app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get("/bmi", (req, res) => {
  const { weight, height } = req.query;
  const validData: boolean =
    !isNaN(Number(height)) && !isNaN(Number(weight));
  const bmi = calculateBmi(Number(height), Number(weight));

  if (!validData || !weight || !height) {
    res.send({
      error: "malformatted parameters",
    });
  }

  res.send({ weight, height, bmi });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});