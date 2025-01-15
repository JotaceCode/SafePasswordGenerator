import { Request, Response } from "express"; // Asegúrate de importar correctamente
import Password from "../core/models/models";
import {PasswordService} from "../services/password.service";

class PasswordController {
  private _passwordService: PasswordService;

  constructor(passwordService: PasswordService) {
    this._passwordService = passwordService;
  }

  /**
   * Obtiene todos los passwords
   * @param req Request de Express
   * @param res Response de Express
   */
  async getAllPasswords(req: Request, res: Response): Promise<void> {
    try {
      const passwords: Password[] = await this._passwordService.findAll();
      res.status(200).json(passwords);
    } catch (error: any) {
      console.error("Error en getAllPasswords:", error);
      res.status(500).send(error.message || "Error interno del servidor");
    }
  }

  /**
   * Obtiene un password por su ID
   * @param req Request de Express
   * @param res Response de Express
   */
  async getPasswordById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10); // Asegúrate de convertir a número
      if (isNaN(id)) {
        res.status(400).send("Invalid ID");
        return;
      }

      const password = await this._passwordService.findById(id);
      if (!password) {
        res.status(404).send("Password not found");
        return;
      }
      res.status(200).json(password);
    } catch (error: any) {
      console.error("Error en getPasswordById:", error);
      res.status(500).send(error.message || "Error interno del servidor");
    }
  }

  async createPassword(req: Request, res: Response): Promise<void> {
    try {
      const password: Password = req.body;
      const result: Password = await this._passwordService.create(password);
      res.status(201).json(result);
    } catch (error: any) {
      console.error("Error en createPassword:", error);
      res.status(500).send(error.message || "Error interno del servidor");
    }
  }

  async updatePassword(req: Request, res: Response): Promise<void> {
    try {
      const password: Password = req.body;
      const result: Password = await this._passwordService.update(password);
      res.status(200).json(result);
    } catch (error: any) {
      console.error("Error en updatePassword:", error);
      res.status(500).send(error.message || "Error interno del servidor");
    }
  }

  async deletePassword(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id, 10);
      if (isNaN(id)) {
        res.status(400).send("Invalid ID");
        return;
      }

      await this._passwordService.delete(id);
      res.status(204).send();
    } catch (error: any) {
      console.error("Error en deletePassword:", error);
      res.status(500).send(error.message || "Error interno del servidor");
    }
  }
}

export default PasswordController;
