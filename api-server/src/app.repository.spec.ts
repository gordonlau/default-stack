import { Test, TestingModule } from '@nestjs/testing';
import { AppRepository } from './app.repository';
import { Token } from 'src/global/db';
import { db } from '../kysely.config';

describe('AuthService', () => {
    let repository: AppRepository;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppRepository,
                {
                    provide: Token.DB,
                    useValue: db,
                },
            ],
        }).compile();

        repository = module.get<AppRepository>(AppRepository);
    });

    it('should be defined', () => {
        expect(repository).toBeDefined();
    });
});
