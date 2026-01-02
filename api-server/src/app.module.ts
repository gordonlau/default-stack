import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GlobalModule } from './global/global.module';
import { AppRepository } from './app.repository';

@Module({
    imports: [GlobalModule],
    controllers: [AppController],
    providers: [AppService, AppRepository],
})
export class AppModule {}
