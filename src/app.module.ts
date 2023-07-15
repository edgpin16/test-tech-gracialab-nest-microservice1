import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersReservationsModule } from './users-reservations/users-reservations.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    UsersReservationsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: +process.env.PORT,
      database: process.env.DATABASE_NAME,
      username: process.env.USERNAME_DB,
      password: process.env.PASSWORD_DB,  
      retryDelay: 3000,    
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
