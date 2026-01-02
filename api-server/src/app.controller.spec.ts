import './helpers/mocks';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { tsRestHandler } from '@ts-rest/nest';

jest.mock('./app.service');

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    it('should be defined', () => {
        expect(appController).toBeDefined();
    });

    it('should call getHello', () => {
        jest.mocked(tsRestHandler).mockImplementation((c, cb: any) => {
            cb({ params: { id: '123' } });
        });

        expect(() => appController.getHello()).not.toThrow();
    });
});
