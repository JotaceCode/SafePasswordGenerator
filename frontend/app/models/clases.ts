export interface Password {
  id_pass: number;
  password: string;
  characters: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PasswordRequest {
  password: string;
  characters: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface passwordResponse {
  password: Password;
  ok: boolean;
}
