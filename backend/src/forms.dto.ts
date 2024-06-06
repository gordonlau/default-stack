import { IsBoolean, IsEmail, IsNotEmpty } from 'class-validator';

export class FormBody {
    @IsEmail()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    date: string;
}

export class StatusResponse {

    @IsBoolean()
    success: boolean;
}
