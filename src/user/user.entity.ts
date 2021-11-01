import { UserType } from "src/user-type/user-type-entity";
import { Vehicle } from "src/vehicle/vehicle.entity";
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import * as bcrypt from 'bcrypt';
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id : number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password : string 

    @BeforeInsert()
    async hashPassword(){
        this.password = await bcrypt.hash( this.password, 10);
    }

    @OneToOne(type=> UserType, userType => userType.id )
    @JoinColumn()
    userType: number

    @OneToMany(()=> Vehicle, vehicle=> vehicle.id)
    vehicles: Vehicle[]


  

}
