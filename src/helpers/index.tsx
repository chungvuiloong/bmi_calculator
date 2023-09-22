export function calculateBMI (height: number, weight: number) {    
        return ( weight / (( height / 100) * ( height / 100 ))).toFixed(2)
}

export function calculateImperialBMI (height: number, weight: number) {
    return (( weight / (height * height)) * 703 ).toFixed(2)
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