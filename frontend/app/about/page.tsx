import { subtitle, title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h1 className={title()}>About</h1>
      <p>
        <span className={title({ color: "violet" })}>English&nbsp;</span>
        Safe PASS Generator is a simple and secure password generator that
        allows you to create strong and safe passwords for your sites. Don't
        forget about the importance of a secure password!
      </p>

      <p>
        <span className={title({ color: "violet" })}>Español&nbsp;</span>
        Safe PASS Generator es un generador de contraseñas seguras simple que le
        permite el usuario crear mejores contraseñas para sus sitios web.{" "}
      </p>
      <p className={subtitle()}>
        ¡No olvides la importancia de la seguridad en cuanto a contraseñas!
      </p>
    </div>
  );
}
