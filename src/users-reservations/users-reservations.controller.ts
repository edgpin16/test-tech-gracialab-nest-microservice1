import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersReservationsService } from './users-reservations.service';
import { CreateUsersReservationDto } from './dto/create-users-reservation.dto';
import { UpdateUsersReservationDto } from './dto/update-users-reservation.dto';

@Controller('users-reservations')
export class UsersReservationsController {
  constructor(private readonly usersReservationsService: UsersReservationsService) {}

  @Post()
  create(@Body() createUsersReservationDto: CreateUsersReservationDto) {
    return this.usersReservationsService.create(createUsersReservationDto);
  }

  @Get()
  findAll() {
    return this.usersReservationsService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersReservationsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsersReservationDto: UpdateUsersReservationDto) {
  //   return this.usersReservationsService.update(+id, updateUsersReservationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersReservationsService.remove(+id);
  // }
}
