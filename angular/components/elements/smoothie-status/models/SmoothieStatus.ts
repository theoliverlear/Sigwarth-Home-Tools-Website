export enum SmoothieStatus {
    NO_SMOOTHIE_BUILT = 'No Smoothie Built',
    BAD_SMOOTHIE = 'Bad Smoothie',
    GOOD_SMOOTHIE = 'Good Smoothie',
}
export namespace SmoothieStatus {
    export function from(status: string): SmoothieStatus {
        switch (status) {
            case 'No Smoothie Built':
                return SmoothieStatus.NO_SMOOTHIE_BUILT;
            case 'Bad Smoothie':
                return SmoothieStatus.BAD_SMOOTHIE;
            case 'Good Smoothie':
                return SmoothieStatus.GOOD_SMOOTHIE;
            default:
                throw new Error(`Unknown smoothie status: ${status}`);
        }
    }
}