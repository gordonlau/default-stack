import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { Token, knex } from 'src/global/db';



describe('AuthService', () => {
    let service: AppService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AppService, {
                provide: Token.DB,
                useValue: knex
            }],
        }).compile();

        service = module.get<AppService>(AppService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
