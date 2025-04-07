import axios from "axios";

import { Password, PasswordRequest } from "../models/clases";

// No es necesario agregar 'Access-Control-Allow-Origin' aquí. Este encabezado es manejado por el servidor.

const API_BASE_URL = "http://localhost:3001/api/passwords"; // Cambia esto según la URL base de tu backend

const passwordService = {
  // Get all passwords
  getPasswords: async () => {
    try {
      const response = await axios.get(API_BASE_URL);

      return response.data;
    } catch (error) {
      console.error("Error fetching passwords:", error);
      throw error;
    }
  },

  // Create a new password
  createPassword: async (passwordData: PasswordRequest) => {
    try {
      const response = await axios.post(API_BASE_URL, passwordData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      console.error("Error creating password:", error);
      throw error;
    }
  },

  // Update an existing password
  updatePassword: async (passwordData: Password) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/${passwordData.id_pass}`,
        passwordData,
      );

      return response.data;
    } catch (error) {
      console.error("Error updating password:", error);
      throw error;
    }
  },

  // Get a password by its ID
  getPasswordById: async (id: number) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);

      return response.data;
    } catch (error) {
      console.error("Error fetching password:", error);
      throw error;
    }
  },

  // Delete a password by its ID
  deletePassword: async (id: number) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);

      return response.data;
    } catch (error) {
      console.error("Error deleting password:", error);
      throw error;
    }
  },
};

export default passwordService;
