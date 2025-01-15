
import Password, { PasswordResponse } from '../core/models/models';
import db1 from '../config/pool';

export class PasswordRepository {

    

    async create(password: Password): Promise<PasswordResponse> {
        const now = new Date();
        
        const sql = 'INSERT INTO passwords (password, characters, createdAt, updatedAt) VALUES (?, ?, ?, ?)';
        const [result] = await db1.query(sql, [password.password, password.characters, now, now]);
        const passResponse:PasswordResponse = {
            password: password.password,
            ok: true
        }
        return passResponse;
    }

    async findAll(): Promise<Password[]> {
        const sql = 'SELECT * FROM passwords';
        const results: any = await db1.query(sql);
        return results[0];
    }

    async findById(id: number): Promise<Password> {
        const sql = 'SELECT * FROM passwords WHERE id_pass = ?';
        const [results] = await db1.query(sql, [id]);
        return results[0];
    }

    async update(password: Password): Promise<Password> {
        const sql = 'UPDATE passwords SET password = ?, characters = ?, updatedAt = ? WHERE id_pass = ?';
        await db1.query(sql, [password.password, password.characters, password.updatedAt, password.id_pass]);
        return password;
    }

    async delete(id: number): Promise<string> {
        const sql = 'DELETE FROM passwords WHERE id_pass = ?';
        await db1.query(sql, [id]);
        return 'Password deleted';
    }
}
