"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.token = exports.config = exports.testData = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.testData = [
    {
        "from": "Barcelona",
        "to": "Gerona Airport",
        "transportType": 2,
        "vehicleNo": null,
        "gateNo": null,
        "seatNo": null,
        "ticketCounter": null,
        "actualSequence": 2
    },
    {
        "from": "Stockholm",
        "to": "New York JFK",
        "transportType": 3,
        "vehicleNo": "SK22",
        "gateNo": "22",
        "seatNo": "7B",
        "ticketCounter": null,
        "actualSequence": 4
    },
    {
        "from": "Madrid",
        "to": "Barcelona",
        "transportType": 1,
        "vehicleNo": "75A",
        "gateNo": null,
        "seatNo": "45B",
        "ticketCounter": null,
        "actualSequence": 1
    },
    {
        "from": "Gerona Airport",
        "to": "Stockholm",
        "transportType": 3,
        "vehicleNo": "SK455",
        "gateNo": "45B",
        "seatNo": "3A",
        "ticketCounter": "344",
        "actualSequence": 3
    }
];
exports.config = { JWT_STATIC_VALUE: "Joshua", JWT_SECRET: "YjA3NWU0MWMtMjVmMi00ZGE2LTlmODEtOWQ0ZGUyMThhNjVh" };
exports.token = jsonwebtoken_1.default.sign(exports.config.JWT_STATIC_VALUE || '', exports.config.JWT_SECRET || '');
