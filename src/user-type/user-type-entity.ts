import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm/decorator/entity/Entity";

@Entity()
export class UserType{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string

}