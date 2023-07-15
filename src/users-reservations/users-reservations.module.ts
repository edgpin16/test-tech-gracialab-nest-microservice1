import { Module } from '@nestjs/common';
import { UsersReservationsService } from './users-reservations.service';
import { UsersReservationsController } from './users-reservations.controller';

@Module({
  controllers: [UsersReservationsController],
  providers: [UsersReservationsService]
})
export class UsersReservationsModule {}
