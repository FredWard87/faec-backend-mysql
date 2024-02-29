import { Request, Response } from "express";
import validator from "validator";
import model from "./models/routes/authModelo";

class AuthController {
    public async iniciarSesion(req: Request, res: Response) {
        try {
            // Obtener el correo electrónico del cuerpo de la solicitud
            const { email } = req.body;

            // Verificar si el correo electrónico está presente en el cuerpo de la solicitud
            if (!email) {
                return res.status(400).json({ message: "El correo electrónico es requerido", code: 1 });
            }

            // Obtener los usuarios por correo electrónico
            const lstUsers = await model.getuserByEmail(email);

            // Verificar si no se encontraron usuarios con el correo electrónico proporcionado
            if (lstUsers.length <= 0) {
                return res.status(404).json({ message: "El usuario y/o contraseña es incorrecto", code: 1 });
            }

            return res.json({ message: "Autenticación correcta", code: 0 });

        } catch (error: any) {
            return res.status(500).json({ message: `${error.message}` });
        }
    }
}

export default new AuthController();
