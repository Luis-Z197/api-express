import { connection } from "../coneccion.js";

const db = connection
export async function update(id, username, email) {
    try {
        const [results] = await db.query(
            'UPDATE usuarios SET username=?, email=?  WHERE id=?', [username, email, id]
        );
        console.log(results);
        return results
    } catch (err) {
        console.log(err);
    }
}