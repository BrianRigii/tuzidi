import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

  



}