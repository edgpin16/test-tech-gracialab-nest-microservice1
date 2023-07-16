import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUsersReservationDto } from './dto/create-users-reservation.dto';
import { UpdateUsersReservationDto } from './dto/update-users-reservation.dto';

import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class UsersReservationsService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository : Repository<User>,

    @InjectRepository(Reservation)
    private readonly reservationRepository : Repository<Reservation>,
  ){}

  async create(createUsersReservationDto: CreateUsersReservationDto) {
    try{
      // Extraemos los campos necesarios ya validados del formulario
      const {
        identificacion_document, 
        name, 
        last_name, 
        type_document,
        email,
        reservation_date,
        reservation_type,
        people_quantity,
        description,
        observation,
      } = createUsersReservationDto;

      //Mensaje de respuesta :) 
      let message : any = {}

      //Creamos una nueva instancia tipo entity de users
      const newUser : User = 
      this.userRepository.create(
        {identificacion_document, 
        type_rol : 2,
        name, 
        last_name,
        type_document, 
        email,
        password : null}
      );

      //Creamos una nueva instancia tipo entity de reservations
      const newReservation : Reservation =
      this.reservationRepository.create(
        {ID_users : identificacion_document,
        reservation_date, 
        reservation_type, 
        people_quantity, 
        description, 
        observation, 
        is_confirm : 0}
      );

      //Busca si ya existe un usuario registrado por su identificacion
      const response = await this.userRepository.findOneBy({identificacion_document});
      
      //Si no existe
      if(!response){
        await this.userRepository.save(newUser); //Guardamos la instancia en la BD
        message = {
          ...message,
          newUser
        }
      }
      
      //Si existe, no tiene sentido volver a guardar, solo guardamos la reservacion
      await this.reservationRepository.save(newReservation);

      message = {
        ...message,
        newReservation,
        message : "Resources created successfully :D"
      }

      return message;
    }
    catch(error){
      console.log(error);
      return {
        message : "Ha ocurrido un error :(",
        error
      };
      //this.handleDBExceptions(error);
    }
  }

  findAll() {
    return this.userRepository.find({});
  }

  // private handleDBExceptions( error: any ) {
  //   if ( error.code === '23505' )
  //     throw new BadRequestException(error.detail);
    
  //   throw new InternalServerErrorException('Unexpected error, check server logs', error.message);
  // }

}