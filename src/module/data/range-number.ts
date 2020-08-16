
/**
 * Represents a value withing a range.
 */
export class RangeNumber {
    current: number;
    max: number;
    min: number;

    constructor() {
        this.min = 0;
        this.max = 0;
        this.current = 0;
    }

    clamp() {
        if (this.current > this.max) {
            this.current = this.max;
        }
        else if (this.current < this.min) {
            this.current = this.min;
        }
    }
}