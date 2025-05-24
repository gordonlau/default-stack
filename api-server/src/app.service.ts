import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
    constructor(private appRepository: AppRepository) {}

    async getHello() {
        return this.appRepository.getHello();
    }
}
