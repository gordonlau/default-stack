jest.mock('@ts-rest/nest', () => ({
    tsRestHandler: jest.fn(),
    TsRestHandler: jest.fn().mockReturnValue(() => {}),
}));
