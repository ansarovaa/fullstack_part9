const calculateBmi = (a: number, b: number, printText: string) => {
  console.log(printText,  a / b * 703);
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])
calculateBmi(a, b, `Normal (healthy weight)`)