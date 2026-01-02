import { initContract } from '@ts-rest/core';
import { z } from 'zod';
const c = initContract();
export const contract = c.router({
    getHello: {
        method: 'GET',
        path: '/hello/:id',
        responses: {
            200: z.object({}),
        },
        summary: 'Get Hello',
    },

    postContent: {
        method: 'POST',
        path: '/post',
        body: z.object({
            username: z.string(),
            password: z.string(),
            date: z.date(),
        }),
        responses: {
            200: z.object({
                success: z.boolean(),
            }),
        },
        summary: 'Post Content',
    },
});
