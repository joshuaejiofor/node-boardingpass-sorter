"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const testData_1 = require("../../tests/testData");
const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jsonwebtoken_1.default.verify(token, testData_1.config.JWT_SECRET || '');
        if (decoded !== testData_1.config.JWT_STATIC_VALUE) {
            throw new Error();
        }
        req.token = token;
        next();
    }
    catch (e) {
        res.status(401).send({
            error: 'Please authenticate.',
            "Bearer token (Set authorization)": jsonwebtoken_1.default.sign(testData_1.config.JWT_STATIC_VALUE || '', testData_1.config.JWT_SECRET || '')
        });
    }
};
exports.default = auth;
