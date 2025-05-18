import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export class FormBody extends createZodDto(
    z.object({
        username: z.string().email(),
        password: z.string().nonempty(),
        date: z.string().nonempty(),
    }),
) {}

export class StatusResponse extends createZodDto(
    z.object({
        success: z.boolean(),
    }),
) {}
