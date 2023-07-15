import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

enum typeReservations {
    cena = 'cena',
    almuerzo = 'almuerzo',
    onces = 'onces',
    cumpleanos = 'cumplea#os',
    ocasion_especial = 'ocasion especial'
};

@Entity()
export class Reservation{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type : 'date'
    })
    reservation_date : Date;

    @Column({
        type : 'enum',
        enum : typeReservations
    })
    reservation_type : string;

    @Column({
        type : 'integer',
    })
    people_quantity : number;

    @Column({
        type : 'text',
    })
    description : string;

    @Column({
        type : 'text',
    })
    observation : string;

    @Column({
        type : 'boolean',
        default : 0
    })
    is_boolean : number

    @ManyToOne(() => User, (user) => user.identificacion_document)
    user: User

}
