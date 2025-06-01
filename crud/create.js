import { connection } from "../coneccion.js";
import { show } from "./show.js";

const db = connection
export async function create(username, email, password) {
    try {
        let user = {}
        const [results] = await db.query(
            `INSERT INTO usuarios(username, email, password) VALUES(?,?,?)`,
            [username, email, password]
        )
        if(results.affectedRows==1){
            user = await show(results.insertId)
            var message = "Usuario registrado"
            var estado = "ok"
        }
        return [estado, message, user[0]]
    } catch (err) {
        console.log(err);
        message = "Se produjo un error al registrar"
        estado = "error"
        return [estado, message, err]
    }
}