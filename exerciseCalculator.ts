interface ExerciseHourResult {
    periodLength : number;
    trainingDays : number;
    success : boolean;
    rating : number;
    ratingValue : string;
    target : number;
    average : number;
}

const calculateExercises = (exerciseTotal : number[], target : number) : ExerciseHourResult => {
    const periodLength = exerciseTotal.length;
    const trainingDays = exerciseTotal.filter((exerciseHour) => exerciseHour > 0).length;
    const average = exerciseTotal.reduce((a, b) => a + b, 0) / exerciseTotal.length;
    const success = average >= target;
    let rating;
    let ratingValue;
    if (average < target) {
        rating = 1;
        ratingValue = `Bad result. Please try your best next week!`;
    } else if (average === target) {
        rating = 2;
        ratingValue = `Well done! Please proceed the same result next week!`;
    } else if (average > target) {
        rating = 3;
        ratingValue = `Great result! You rock!`;
    }

    return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingValue,
        target,
        average
    };
};

interface ExerciseInputValues {
    exerciseTotal : number[];
    target : number;
}

const parseExerciseArguments = (args : Array < string >) : ExerciseInputValues => {
    if (args.length < 4) 
        throw new Error("Not enough arguments");
    
    const exerciseValues = args.slice(2);

    const notValid = exerciseValues.some((arg) => isNaN(Number(arg)));

    const validArgs = exerciseValues.map((arg) => !isNaN(Number(arg))
        ? Number(arg)
        : null);

    const target = validArgs.shift();

    const exerciseTotal = validArgs;

    if (!notValid) {
        return {exerciseTotal, target};
    } else {
        throw new Error("Provided values were not numbers!");
    }
};

try {
    const {exerciseTotal, target} = parseExerciseArguments(process.argv);
    console.log(calculateExercises(exerciseTotal, target));
} catch (e) {
    console.log(`Oh no, something went wrong. ${e}`);
}