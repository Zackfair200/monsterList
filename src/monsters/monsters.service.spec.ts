import { Test, TestingModule } from '@nestjs/testing';
import { MonstersService } from './services/monsters.service';

describe('MonstersService', () => {
  let service: MonstersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonstersService],
    }).compile();

    service = module.get<MonstersService>(MonstersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
