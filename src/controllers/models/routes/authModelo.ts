import pool from "../../../config/connection";

class AuthModelo {
 
    /*
    * Método para buscar un usuario por correo electrónico
    */
    public async getuserByEmail(email: string) {
        const query = "SELECT * FROM tbl_usuario WHERE email = ?";
        const result = await pool.then(async (connection) => {
            return await connection.query(query, [email]);
        });
        return result;
    }
}

const model = new AuthModelo();
export default model;
