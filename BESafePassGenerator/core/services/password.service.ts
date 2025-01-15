import { PasswordRepository } from "../../Repository/password.repository";
import Password, { PasswordResponse } from "../models/models";

export class PasswordService {
  private _passwordRepository: PasswordRepository;

  
  constructor(private passwordRepository: PasswordRepository) {
    this._passwordRepository = passwordRepository;
  }
 

  /**
   * Crea un nuevo password en el repositorio.
   * @param password Objeto de tipo Password.
   * @returns El password creado o null si falla.
   */
  async create(password: Password): Promise<PasswordResponse> {
    const result: PasswordResponse = await this._passwordRepository.create(password);
    if (result) {
      return result;
    } else {
      throw new Error("Failed to create password");
    }
  }

  /**
   * Retorna todos los passwords del repositorio.
   * @returns Lista de contraseñas.
   */
  async findAll(): Promise<Password[]> {
    const results: Password[] = await this._passwordRepository.findAll();
    if (results) {
      return results;
    } else {
      throw new Error("No passwords found");
    }
  }

  /**
   * Busca un password por su ID.
   * @param id ID del password.
   * @returns El password encontrado o null si no existe.
   */
  async findById(id: number): Promise<Password> {
    const result: Password = await this._passwordRepository.findById(id);
    if (result) {
      return result;
    } else {
      throw new Error(`Password with ID ${id} not found`);
    }
  }

  /**
   * Actualiza un password existente.
   * @param password Objeto de tipo Password con los datos actualizados.
   * @returns El password actualizado.
   */
  async update(password: Password): Promise<Password> {
    const result: Password = await this._passwordRepository.update(password);
    if (result) {
      return result;
    } else {
      throw new Error("Failed to update password");
    }
  }

  /**
   * Elimina un password por su ID.
   * @param id ID del password a eliminar.
   */
  async delete(id: number): Promise<string> {
    const result: any = await this._passwordRepository.delete(id);
    if (!result) {
      throw new Error(`Failed to delete password with ID ${id}`);
    } else {
      return `Password with ID ${id} deleted successfully`;
    }
  }
}

