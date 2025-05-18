import {
    Body,
    Controller,
    Get,
    Logger,
    Param,
    ParseIntPipe,
    Post,
    ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FormBody, StatusResponse } from './forms.dto';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number) {
        Logger.debug(id);
        return this.appService.getHello();
    }

    @Post('/post')
    async postContent(@Body(ValidationPipe) content: FormBody) {
        Logger.debug(content);
        return {
            success: true,
        } as StatusResponse;
    }
}
