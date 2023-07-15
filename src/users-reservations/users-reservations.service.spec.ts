import { Test, TestingModule } from '@nestjs/testing';
import { UsersReservationsService } from './users-reservations.service';

describe('UsersReservationsService', () => {
  let service: UsersReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersReservationsService],
    }).compile();

    service = module.get<UsersReservationsService>(UsersReservationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
