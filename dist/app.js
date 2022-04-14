"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sorterController_1 = __importDefault(require("./src/routers/sorterController"));
const app = (0, express_1.default)();
// Setup static directory to serve
app.use(express_1.default.json());
app.use(sorterController_1.default);
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
exports.default = app;
