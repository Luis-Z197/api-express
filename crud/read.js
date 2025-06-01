import { connection } from "../coneccion.js";

const db = connection
export async function read() {
    try {
        const [results] = await db.query(
            'SELECT * FROM usuarios'
        );
        console.log(results); // results contains rows returned by server
        return results
        //  // fields contains extra meta data about results, if available
    } catch (err) {
        console.log(err);
    }
}