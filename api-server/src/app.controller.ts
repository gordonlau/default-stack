import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FormBody, StatusResponse } from './forms.dto';
import { ZodBody, ZodResponse } from './global/zod.decorator';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/hello/:id')
    getHello(@Param('id') id: string) {
        Logger.debug(id);
        return this.appService.getHello();
    }

    @Post('/post')
    @ZodBody(FormBody.schema)
    @ZodResponse(StatusResponse.schema)
    async postContent(@Body() content: FormBody) {
        Logger.debug(content);
        return {
            success: true,
        };
    }
}
