export function calculateBMI (height: number, weight: number, system: string) {
    if (system === "Metrics") {
        return (weight / (( height / 100) * ( height / 100 ))).toFixed(2)
    } else {
        return ((weight / (height * height)) * 703).toFixed(2)
    }  
}

export function checkBMICategory (height: number, weight: number) {
    const bmi = weight / ((height / 100) * (height / 100));

    if (bmi < 18.5) {
        <>are{" "}<span className="font-semibold">underweight</span></>;
    } else if (bmi < 25) {
        return <>have a{" "}<span className="font-semibold">healthy weight</span></>;
    } else if (bmi < 30) {
        return <>are{" "}<span className="font-semibold">overweight</span></>;
    } else {
        return <>are{" "}<span className="font-semibold">obese</span></>;
    }
}