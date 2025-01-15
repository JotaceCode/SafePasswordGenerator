
import Password from '../core/models/models';
import db1 from '../config/pool';

export class PasswordRepository {

    

    async create(password: Password): Promise<Password> {
        const sql = 'INSERT INTO passwords (password, characters, createdAt, updatedAt) VALUES (?, ?, ?, ?)';
        const [result] = await db1.query(sql, [password.password, password.characters, password.createdAt, password.updatedAt]);
        //password.id = result.insertId;
        return password;
    }

    async findAll(): Promise<Password[]> {
        const sql = 'SELECT * FROM passwords';
        const results: any = await db1.query(sql);
        return results;
    }

    async findById(id: number): Promise<Password> {
        const sql = 'SELECT * FROM passwords WHERE id_pass = ?';
        const [results] = await db1.query(sql, [id]);
        return results[0];
    }

    async update(password: Password): Promise<Password> {
        const sql = 'UPDATE passwords SET password = ?, characters = ?, updatedAt = ? WHERE id = ?';
        await db1.query(sql, [password.password, password.characters, password.updatedAt, password.id]);
        return password;
    }

    async delete(id: number): Promise<void> {
        const sql = 'DELETE FROM passwords WHERE id = ?';
        await db1.query(sql, [id]);
    }
}
