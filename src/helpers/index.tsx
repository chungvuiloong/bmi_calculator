export function calculateBMI (height: number, weight: number) {
    return (weight / (( height / 100) * ( height / 100 ))).toFixed(1)
}