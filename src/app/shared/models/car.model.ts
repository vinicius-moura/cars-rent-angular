export class Car {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public dailyRate?: number,
        public avaliable?: boolean,
        public licensePlate?: string,
        // public brandId?: number,
        // public categoryId?: number,
        public color?: string,
        public createdAt?: Date
    ){}
}
