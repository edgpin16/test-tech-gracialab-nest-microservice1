import { Test, TestingModule } from '@nestjs/testing';
import { UsersReservationsController } from './users-reservations.controller';
import { UsersReservationsService } from './users-reservations.service';

describe('UsersReservationsController', () => {
  let controller: UsersReservationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersReservationsController],
      providers: [UsersReservationsService],
    }).compile();

    controller = module.get<UsersReservationsController>(UsersReservationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
