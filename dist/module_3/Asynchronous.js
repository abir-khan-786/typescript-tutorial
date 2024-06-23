"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const makePromise = () => {
    return new Promise((resolve, rejects) => {
        const data = 'data is fetched';
        if (data) {
            resolve(data);
        }
        else {
            rejects(' failed to fetch data');
        }
    });
};
const getPromiseData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield makePromise();
    return data;
});
const getTodo = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = 'https://jsonplaceholder.typicode.com/todos/1';
    const data = yield fetch(res);
    return yield data.json();
});
const getTodoData = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield getTodo();
    console.log(data);
});
getTodoData();
