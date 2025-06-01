import { connection } from "../coneccion.js";

const db = connection
export async function destroy(id) {
    try {
        const [results] = await db.query(
            'DELETE FROM usuarios WHERE id=?', [id]
        );
        console.log(results);
        return results
    } catch (err) {
        console.log(err);
    }
}