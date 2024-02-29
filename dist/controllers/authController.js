"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authModelo_1 = __importDefault(require("./models/routes/authModelo"));
class AuthController {
    iniciarSesion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Obtener el correo electrónico del cuerpo de la solicitud
                const { email } = req.body;
                // Verificar si el correo electrónico está presente en el cuerpo de la solicitud
                if (!email) {
                    return res.status(400).json({ message: "El correo electrónico es requerido", code: 1 });
                }
                // Obtener los usuarios por correo electrónico
                const lstUsers = yield authModelo_1.default.getuserByEmail(email);
                // Verificar si no se encontraron usuarios con el correo electrónico proporcionado
                if (lstUsers.length <= 0) {
                    return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto", code: 1 });
                }
                return res.json({ message: "Autenticación correcta", code: 0 });
            }
            catch (error) {
                return res.status(500).json({ message: `${error.message}` });
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=authController.js.map