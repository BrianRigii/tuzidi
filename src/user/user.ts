import { UserType } from "src/user-type/user-type-entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name: string

    @Column()
    email: string

    @OneToOne(type=> UserType, userType => userType.id )
    @JoinColumn()
    userTypeId: number

    @OneToMany(()=> Vehicle, vehicle=> vehicle.id)
    vehicles: Vehicle[]


   //vehicle 
   // usertype

}
