import axios from 'axios';
import { Password , passwordResponse } from '../models/clases';
import * as AxiosResponse  from 'axios';

export class PasswordService {
  private http: AxiosResponse;



  constructor(baseURL: string = 'http://localhost:3000/api') {
    this.http = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Obtiene todas las contraseñas.
   * @returns Lista de contraseñas.
   */
  async getAllPasswords(): Promise<any[]> {
    const response: AxiosResponse<any[]> = await this.http.get('/passwords');
    return response.data;
  }

  /**
   * Obtiene una contraseña por ID.
   * @param id ID de la contraseña.
   * @returns La contraseña encontrada.
   */
  async getPasswordById(id: number): Promise<any> {
    const response: AxiosResponse<any> = await this.http.get(`/passwords/${id}`);
    return response.data;
  }

  /**
   * Crea una nueva contraseña.
   * @param password Objeto de contraseña a crear.
   * @returns La contraseña creada.
   */
  async createPassword(password: any): Promise<any> {
    const response: AxiosResponse<any> = await this.http.post('/passwords', password);
    return response.data;
  }

  /**
   * Actualiza una contraseña existente.
   * @param id ID de la contraseña a actualizar.
   * @param password Objeto con los datos actualizados.
   * @returns La contraseña actualizada.
   */
  async updatePassword(id: number, password: any): Promise<any> {
    const response: AxiosResponse<any> = await this.http.put(`/passwords/${id}`, password);
    return response.data;
  }

  /**
   * Elimina una contraseña por ID.
   * @param id ID de la contraseña a eliminar.
   * @returns Mensaje de confirmación.
   */
  async deletePassword(id: number): Promise<string> {
    const response: AxiosResponse<any> = await this.http.delete(`/passwords/${id}`);
    return response.data.message;
  }
}

