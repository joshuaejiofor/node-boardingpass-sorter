"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateData = void 0;
const boardingCard_1 = require("../models/boardingCard");
const validateData = (testData) => {
    let testBoardingCards = [];
    testData.forEach(item => {
        var _a, _b, _c, _d, _e, _f;
        testBoardingCards.push(new boardingCard_1.BoardingCard((_a = item.from) !== null && _a !== void 0 ? _a : '', (_b = item.to) !== null && _b !== void 0 ? _b : '', item.transportType, (_c = item.vehicleNo) !== null && _c !== void 0 ? _c : '', (_d = item.gateNo) !== null && _d !== void 0 ? _d : '', (_e = item.seatNo) !== null && _e !== void 0 ? _e : '', (_f = item.ticketCounter) !== null && _f !== void 0 ? _f : '', item.actualSequence, 0));
    });
    return testBoardingCards;
};
exports.validateData = validateData;
