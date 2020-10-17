import { Test, TestingModule } from '@nestjs/testing';
import { SetDefaultService } from './set-default.service';

describe('SetDefaultService', () => {
  let service: SetDefaultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetDefaultService],
    }).compile();

    service = module.get<SetDefaultService>(SetDefaultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
