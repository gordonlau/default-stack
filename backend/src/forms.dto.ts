import { IsEmail, IsNotEmpty } from 'class-validator';

export class FormBody {
    @IsEmail()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    date: string;
}

export class StatusResponse {
    success: boolean;
    constructor(success: boolean) {
        this.success = success;
    }
}
