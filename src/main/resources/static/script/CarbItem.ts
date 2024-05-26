export class CarbItem {
    servingWeight: number;
    unitsMeasured: number;
    carbsPerServing: number;
    itemNumber: number;
    constructor(servingWeight: number, weightUnitsMeasured: number, carbsPerServing: number, itemNumber: number) {
        this.servingWeight = servingWeight;
        this.unitsMeasured = weightUnitsMeasured;
        this.carbsPerServing = carbsPerServing;
        this.itemNumber = itemNumber;
    }
    buildHtml() {
        return `
        
        `
    }
}