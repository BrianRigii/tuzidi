import { IsNotEmpty } from "class-validator";

export class CreateVehicleDto{
    @IsNotEmpty()
    registration: string

    @IsNotEmpty()
    make : string

    @IsNotEmpty()
    model: string
}