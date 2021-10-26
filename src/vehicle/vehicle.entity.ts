import { User } from "src/user/user";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Vehicle{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    registration : string

    @Column()
    make: string

    @Column()
    model : string

    @ManyToOne(()=> User, user=> user.id)
    drivers: User[]

  



}