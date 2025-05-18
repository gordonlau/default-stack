import { Global, Module } from '@nestjs/common';
import { dbProvider } from './db';

@Global()
@Module({
    exports: [dbProvider],
    providers: [dbProvider],
})
export class GlobalModule {}
