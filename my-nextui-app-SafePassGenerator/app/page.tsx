"use client";
import React, { useState } from "react";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import PasswordService from "./services/password.service";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Password, PasswordRequest } from "./models/clases";

export default function Home() {
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [passwordLength, setPasswordLength] = useState(14); // Estado para la longitud de la contraseña
  const [isLoaded, setIsLoaded] = useState(false); // Estado para el cargador

  // Función para generar una contraseña aleatoria
  const generatePassword = async () => {
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/";  
    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * caracteres.length);
      newPassword += caracteres[randomIndex];
    }

    const now = new Date();
    setPassword(newPassword); // Actualiza el estado con la nueva contraseña
    const password:PasswordRequest={
      
      password:newPassword ,
      characters: newPassword.length,
      createdAt: now,
      updatedAt: now
    }

    try {
      // Guardar la contraseña en la base de datos
      setIsLoaded(true); // Mostrar cargador
      await PasswordService.createPassword(password); // Llama al servicio
      alert("Password saved successfully!"); // Mensaje de éxito
    } catch (error) {
      alert("Failed to save password."); // Manejar errores
    } finally {
      setIsLoaded(false); // Ocultar cargador
    }
  };

  // Función para manejar la selección de la longitud de la contraseña
  const handleLengthChange = (event:any) => {
    setPasswordLength(parseInt(event.target.value)); // Actualiza la longitud de la contraseña con el valor seleccionado
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Creates&nbsp;</span>
        <span className={title({ color: "violet" })}>strong & safe&nbsp;</span>
        <br />
        <span className={title()}>passwords for your sites.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Fast and modern PASS Generator made with love&nbsp;&#60;3
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      

      {/* Formulario para seleccionar la longitud de la contraseña */}
      <div className="border-2 border-gray-200 dark:border-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
        <h1 className={title({ color: "cyan" })}>Dígitos de la contraseña</h1>

        <form action="" className="flex items-center justify-around w-full mx-auto gap-2">
          <div className="border-2 border-gray-200 dark:border-gray-800 rounded-lg p-2 w-1/4 flex flex-col items-center">
            <input
              type="radio"
              name="digits"
              value={14}
              id="14"
              checked={passwordLength === 14}
              onChange={handleLengthChange}
            />
            <label htmlFor="14">14</label>
          </div>
          <div className="border-2 border-gray-200 dark:border-gray-800 rounded-lg p-2 w-1/4 flex flex-col items-center">
            <input
              type="radio"
              name="digits"
              value={16}
              id="16"
              checked={passwordLength === 16}
              onChange={handleLengthChange}
            />
            <label htmlFor="16">16</label>
          </div>
          <div className="border-2 border-gray-200 dark:border-gray-800 rounded-lg p-2 w-1/4 flex flex-col items-center">
            <input
              type="radio"
              name="digits"
              value={18}
              id="18"
              checked={passwordLength === 18}
              onChange={handleLengthChange}
            />
            <label htmlFor="18">18</label>
          </div>
        </form>
      </div>

      {/* Campo de texto para mostrar la contraseña generada */}
      <div className="mt-8 ">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <input
            id="password"
            type="text"
            readOnly
            value={password} // Muestra el estado como valor del input
            placeholder="// Your PASS will be here"
            className="w-full px-4 py-2 text-center bg-gray-100 dark:bg-gray-950 border rounded w-full mx-auto text-[58px]"
          />
        </Snippet>
      </div>

      {/* Botones de generar y copiar contraseña */}
      <div className="flex gap-3 mt-4">
        <div>
          <button
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            onClick={generatePassword} // Llama a la función al hacer clic
          >
            Generate
          </button>
        </div>

        <div>
          <button
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "bordered",
            })}
            onClick={() => {
              if (password) {
                navigator.clipboard.writeText(password) // Copia la contraseña al portapapeles
                  .then(() => {
                    alert("Password copied to clipboard!"); // Mensaje de confirmación
                  })
                  .catch((error) => {
                    console.error("Failed to copy password: ", error);
                  });
              } else {
                alert("No password to copy!"); // Mensaje si no hay contraseña
              }
            }}
          >
            Copy to clipboard
          </button>
        </div>
      </div>
    </section>
  );
}
