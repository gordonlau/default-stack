import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { tsRestHandler, TsRestHandler } from '@ts-rest/nest';
import { contract } from './contracts';
import { generateOpenApi } from '@ts-rest/open-api';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @TsRestHandler(contract.getHello)
    getHello() {
        return tsRestHandler(contract.getHello, async (req) => {
            const id = req.params.id;
            Logger.debug(id);
            return {
                status: 200,
                body: await this.appService.getHello(),
            };
        });
    }

    @TsRestHandler(contract.postContent)
    async postContent() {
        return tsRestHandler(contract.postContent, async (req) => {
            const content = req.body;
            Logger.debug(content);
            return {
                status: 200,
                body: {
                    success: true,
                },
            };
        });
    }

    @Get('/openapi-spec')
    async getOpenAPISpec() {
        return generateOpenApi(contract, {
            info: {
                title: 'Default Stack API',
                version: '1.0.0',
            },
        });
    }
}
