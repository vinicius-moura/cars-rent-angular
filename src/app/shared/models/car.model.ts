export class Car {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public dailyRate?: number,
        public available?: boolean,
        public licensePlate?: string,
        public brand?: string,
        public color?: string,
        public createdAt?: Date
    ){}
}
