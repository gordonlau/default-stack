import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const FormBodySchema = z.object({
    username: z.string().email(),
    password: z.string().nonempty(),
    date: z.string().nonempty(),
});

export class FormBody extends createZodDto(FormBodySchema) {}

export const StatusResponseSchema = z.object({
    success: z.boolean(),
});

export class StatusResponse extends createZodDto(StatusResponseSchema) {}
