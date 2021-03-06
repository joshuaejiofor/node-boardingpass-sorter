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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const testData_1 = require("./testData");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    jest.setTimeout(15000);
}));
// Check Stations Api
test('Check endpoint /api/v1/sorter', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, supertest_1.default)(app_1.default)
        .post(`/api/v1/sorter`)
        .set('Authorization', `Bearer ${testData_1.token}`)
        .send(testData_1.testData)
        .expect(200);
    var boardingCards = JSON.parse(JSON.stringify(testData_1.testData));
    expect(response.body).not.toBeNull();
    expect(boardingCards[0]).not.toBeNull();
}));
test('Check endpoint /api/v1/sorter with no token', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, supertest_1.default)(app_1.default)
        .post(`/api/v1/sorter`)
        .send(JSON.stringify(testData_1.testData))
        .expect(401);
    expect(response.body.error).toEqual('Please authenticate.');
}));
test('Check endpoint /api/v1/sorter with invalid param', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, supertest_1.default)(app_1.default)
        .post(`/api/v1/sorter`)
        .set('Authorization', `Bearer ${testData_1.token}`)
        .send()
        .expect(400);
    expect(response.body.error).toBeUndefined();
}));
