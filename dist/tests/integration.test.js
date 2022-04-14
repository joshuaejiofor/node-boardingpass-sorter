"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
const testData_1 = require("./testData");
beforeAll(async () => {
    jest.setTimeout(15000);
});
// Check Stations Api
test('Check endpoint /api/v1/sorter', async () => {
    const response = await (0, supertest_1.default)(app_1.default)
        .get(`/api/v1/sorter`)
        .set('Authorization', `Bearer ${testData_1.token}`)
        .send(JSON.stringify(testData_1.testData))
        .expect(200);
    var boardingCards = JSON.parse(JSON.stringify(testData_1.testData));
    expect(response.body).not.toBeNull();
    expect(boardingCards[0]).not.toBeNull();
});
test('Check endpoint /api/v1/sorter with no token', async () => {
    const response = await (0, supertest_1.default)(app_1.default)
        .get(`/api/v1/sorter`)
        .send(JSON.stringify(testData_1.testData))
        .expect(401);
    expect(response.body.error).toEqual('Please authenticate.');
});
test('Check endpoint /api/v1/sorter with invalid param', async () => {
    const response = await (0, supertest_1.default)(app_1.default)
        .get(`/api/v1/sorter`)
        .set('Authorization', `Bearer ${testData_1.token}`)
        .send()
        .expect(404);
    expect(response.body.error).toEqual('No data found');
});
