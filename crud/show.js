import { connection } from "../coneccion.js";

const db = connection
export async function show(id) {
    try {
        const [results] = await db.query(
            'SELECT * FROM usuarios WHERE id=? LIMIT 1', [id]
        );
        console.log(results);
        return results
    } catch (err) {
        console.log(err);
    }
}