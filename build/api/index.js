"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./routes/auth"));
const agendash_1 = __importDefault(require("./routes/agendash"));
const graphql_1 = __importDefault(require("./graphql"));
// guaranteed to get dependencies
exports.default = () => {
    const app = express_1.Router();
    auth_1.default(app);
    graphql_1.default(app);
    agendash_1.default(app);
    app.get('/server_status', (_req, _res) => {
        _res.status(200).json({
            status: 200,
            message: 'Server Connected',
        });
    });
    return app;
};
//# sourceMappingURL=index.js.map