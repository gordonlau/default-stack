import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Token } from 'src/global/db';
import { db } from '../kysely.config';

describe('AuthService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AppService,
                {
                    provide: Token.DB,
                    useValue: db,
                },
            ],
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
