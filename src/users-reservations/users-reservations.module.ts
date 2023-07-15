import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersReservationsService } from './users-reservations.service';
import { UsersReservationsController } from './users-reservations.controller';
import { User } from './entities/user.entity';
import { Reservation } from './entities/reservation.entity';

@Module({
  controllers: [UsersReservationsController],
  providers: [UsersReservationsService],
  imports: [
    TypeOrmModule.forFeature([ User, Reservation ])
  ]
})
export class UsersReservationsModule {}
