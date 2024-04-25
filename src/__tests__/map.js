import ErrorRepository from "../map";

describe('ErrorRepository', () => {
    let errorRepo;

    beforeEach(() => {
        errorRepo = new ErrorRepository();
    });

    test('should return error string', () => {
        const result = "Страница не найдена";
        expect(errorRepo.translate(404)).toContain(result);
    });

    test('should return "Unknown error"', () => {
        const result = "Unknown error";
        expect(errorRepo.translate(505)).toContain(result);
    });
})