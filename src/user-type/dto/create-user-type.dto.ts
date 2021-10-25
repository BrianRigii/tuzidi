import { IsNotEmpty } from 'class-validator';
export class CreateUserTypeDto{
   @IsNotEmpty()
    name: string

}