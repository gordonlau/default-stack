import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';

jest.mock('./app.repository');

describe('AuthService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService, AppRepository],
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
