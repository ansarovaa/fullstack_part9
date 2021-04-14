interface ExerciseHourResult {
    periodLength : number;
    trainingDays : number;
    success : boolean;
    rating : number | undefined;
    ratingValue : string | undefined;
    target : number;
    average : number;
}

export const calculateExercises = (exerciseTotal : number[], target : number) : ExerciseHourResult => {
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
