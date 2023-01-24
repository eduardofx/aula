"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./api/routes/index"));
const { PORT, DB_URL } = process.env;
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('HELLO');
});
//conexao com mongodb
mongoose_1.default.set('useCreateIndex', true);
mongoose_1.default.set('useUnifiedTopology', true);
mongoose_1.default.connect(DB_URL || '', { useNewUrlParser: true });
// Middlewares
app.use((0, morgan_1.default)('dev')); // log das requisições 
app.use(express_1.default.json()); //Used to parse JSON bodies
app.use(express_1.default.urlencoded()); //Parse URL-encoded bodies
app.use((0, cors_1.default)());
(0, index_1.default)(app);
app.listen('4000');
