import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersReservationsModule } from './users-reservations/users-reservations.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersReservationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
