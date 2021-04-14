const calculateBmi = (a: number, b: number, printText: string) => {
  const heightInMeter = a / 100
  console.log(printText,  (b / (heightInMeter*heightInMeter)));
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
calculateBmi(a, b, `Normal (healthy weight)`)