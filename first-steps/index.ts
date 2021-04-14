import express from 'express';
import {calculateBmi} from "./bmiCalculator";
import {calculateExercises} from './exerciseCalculator';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});

app.get("/bmi", (req, res) => {
    const {weight, height} = req.query;
    const validData : boolean = !isNaN(Number(height)) && !isNaN(Number(weight));
    const bmi = calculateBmi(Number(height), Number(weight));

    if (!validData || !weight || !height) {
        res.send({error: "malformatted parameters"});
    }

    res.send({weight, height, bmi});
});

app.post("/calculator", (req, res) => {

    const {daily_exercises, target} : any = req.body;

    let notValidDailyExerciseParametr : boolean;
    let validParameters : boolean | undefined;

    if (target && daily_exercises) {
        const isArray : boolean = Array.isArray(daily_exercises);

        if (isArray) {
            notValidDailyExerciseParametr = (daily_exercises as[]).some((exercise : number) => isNaN(Number(exercise)));
        } else {
            notValidDailyExerciseParametr = true;
        }

        validParameters = !notValidDailyExerciseParametr && !isNaN(Number(target));
    }

    if (!target || !daily_exercises) {
        return res.json({error: "parameters missing"});
    } else if (!validParameters) {
        return res.json({error: "malformatted parameters"});
    }
    const response = calculateExercises(daily_exercises, Number(target));

    console.log({response});
    return res.json(response);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});