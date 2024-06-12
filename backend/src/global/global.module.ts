import { Global, Module } from '@nestjs/common';
import { knexProvider } from './db';

@Global()
@Module({
    exports: [knexProvider],
    providers: [knexProvider],
})
export class GlobalModule {}
