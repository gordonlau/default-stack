import {
    Body,
    Controller,
    Get,
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
        console.log(id);
        return this.appService.getHello();
    }

    @Post('/post')
    async postContent(@Body(ValidationPipe) content: FormBody) {
        console.log(content);
        return new StatusResponse(true);
    }
}
