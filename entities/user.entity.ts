import { UUID } from "crypto";
import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm";

@Entity({
    name: 'users',
    database: process.env.DB_MAIN,
  })
export class User {
    @PrimaryGeneratedColumn()
    uniqueId: UUID;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phonenumber: number;

    @Column()
    IsGaradute: number;
}