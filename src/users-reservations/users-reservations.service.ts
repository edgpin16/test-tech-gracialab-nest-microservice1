import { Injectable } from '@nestjs/common';
import { CreateUsersReservationDto } from './dto/create-users-reservation.dto';
import { UpdateUsersReservationDto } from './dto/update-users-reservation.dto';

@Injectable()
export class UsersReservationsService {
  create(createUsersReservationDto: CreateUsersReservationDto) {
    return 'This action adds a new usersReservation';
  }

  findAll() {
    return `This action returns all usersReservations`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} usersReservation`;
  // }

  // update(id: number, updateUsersReservationDto: UpdateUsersReservationDto) {
  //   return `This action updates a #${id} usersReservation`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} usersReservation`;
  // }
}
