export function calculateMetricsBMI (height: number, weight: number):number {    
        return Number(weight / (( height / 100) * ( height / 100 )))
}

export function calculateImperialBMI (height: number, weight: number) {
    return (( weight / (height * height)) * 703 )
}

export function checkBMICategory (bmi: number) {
    if (bmi < 18.5) {
        return "underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "healthy weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "overweight";
    } else {
        return "obese";
    }
}