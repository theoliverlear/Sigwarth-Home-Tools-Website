export enum WeightStatus {
    NO_WEIGHT = 'No Weight',
    UNDERWEIGHT = 'Underweight',
    GOOD_WEIGHT = 'Good Weight',
    OVERWEIGHT = 'Overweight',
}
export namespace WeightStatus {
    export function from(status: string): WeightStatus {
        switch (status) {
            case 'No Weight':
                return WeightStatus.NO_WEIGHT;
            case 'Underweight':
                return WeightStatus.UNDERWEIGHT;
            case 'Good Weight':
                return WeightStatus.GOOD_WEIGHT;
            case 'Overweight':
                return WeightStatus.OVERWEIGHT;
            default:
                throw new Error(`Unknown weight status: ${status}`);
        }
    }
}