export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [401, "Требуется авторизация"],
            [404, "Страница не найдена"],
            [503, "Сервер недоступен"],
            [504, "Тайм-аут шлюза"]
        ]);
    }

    translate(code){
        this.code = code;

        if (!this.errors.get(code)) {
            return "Unknown error";
        }
        else {
            return this.errors.get(code)
        }
    }
}
