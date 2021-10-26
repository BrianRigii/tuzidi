import { Column, CreateDateColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class UserType{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string

   

    @CreateDateColumn()
    created_at : Date

    @UpdateDateColumn()
    updated_at : Date

    

}