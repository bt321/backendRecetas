"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recetas_1 = __importDefault(require("../routes/recetas"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = '3001';
        this.listen();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`);
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'API WORKING'
            });
        });
        this.app.use('/recetas', recetas_1.default);
    }
}
exports.default = Server;
