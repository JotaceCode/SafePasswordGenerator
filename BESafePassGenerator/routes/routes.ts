
import { Router } from "express";
import PasswordController from "../controller/PasswordController";
import { PasswordService } from "../core/services/password.service";
import { PasswordRepository } from "../Repository/password.repository";

const router = Router();
const passwordService = new PasswordService(new PasswordRepository());
const passwordController = new PasswordController(passwordService);

// Define las rutas y enlaza los métodos
router.get("/api/passwords", passwordController.getAllPasswords.bind(passwordController));
router.get("/api/passwords/:id", passwordController.getPasswordById.bind(passwordController));
router.post("/api/passwords", passwordController.createPassword.bind(passwordController));
router.put("/api/passwords/:id", passwordController.updatePassword.bind(passwordController));
router.delete("/api/passwords/:id", passwordController.deletePassword.bind(passwordController));

router.get("", (req, res) => {
  res.send("API");
});

export default router;
