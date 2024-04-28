export class CarbItem {
    constructor(servingWeight, weightUnitsMeasured, carbsPerServing, itemNumber) {
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