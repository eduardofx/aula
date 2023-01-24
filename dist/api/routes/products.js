"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../controllers/auth"));
const products_1 = __importDefault(require("../controllers/products"));
const router = express_1.default.Router();
router.post('/', auth_1.default.checkAuth, products_1.default.create);
router.get('/', auth_1.default.checkAuth, products_1.default.getAll);
router.get('/:productId', products_1.default.getOne);
exports.default = router;
