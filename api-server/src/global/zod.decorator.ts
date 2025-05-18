import { applyDecorators } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { zodToOpenAPI } from 'nestjs-zod';
import { ZodTypeAny } from 'zod';

export function ZodBody(schema: ZodTypeAny) {
    return applyDecorators(
        ApiBody({
            schema: zodToOpenAPI(schema),
        }),
    );
}

export function ZodResponse(schema: ZodTypeAny) {
    return applyDecorators(
        ApiResponse({
            schema: zodToOpenAPI(schema),
        }),
    );
}
