export interface Rental{
    rentalId?:number,
    carId:number;
    customerId:number;
    rentDate:Date;
    returnDate?:Date;
    carDailyPrice:number;
    carBrandName:string;
    carColorName:string;
    carModelYear:number;
}