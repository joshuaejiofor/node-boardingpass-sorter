"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const sorterService_1 = require("../services/sorterService");
const auth_1 = __importDefault(require("../middleware/auth"));
const getDirection_1 = require("../utils/getDirection");
const sortRouter = express.Router();
sortRouter.post('/api/v1/sorter', auth_1.default, (req, res) => {
    try {
        if (!req.body)
            return res.status(404).send({ error: "Invalid request" });
        const sorterService = new sorterService_1.SorterService();
        const boardingCards = JSON.parse(JSON.stringify(req.body));
        let sortedBoardingCards = sorterService.SortBoardingCards(boardingCards);
        if (!sortedBoardingCards)
            return res.status(404).send({ error: "No data found" });
        let result = sortedBoardingCards.map(card => {
            console.log((0, getDirection_1.getString)(card));
            return (0, getDirection_1.getString)(card);
        });
        let welcomeMsg = `${sortedBoardingCards.length + 1}. You have arrived at your final destination.`;
        console.log(welcomeMsg);
        result.push(welcomeMsg);
        res.send(result);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.default = sortRouter;
