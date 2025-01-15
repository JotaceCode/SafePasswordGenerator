class Password {
    id: number;
    password: string;
    characters: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, password: string, characters: number, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.password = password;
        this.characters = characters;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    
} 
export default Password;


export interface PasswordResponse {
    id: number;
    password: string;
}