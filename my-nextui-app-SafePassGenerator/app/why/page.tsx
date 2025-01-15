import { title } from "@/components/primitives";

export default function WhyPage() {
    return (
        <div className="flex flex-col items-center justify-center gap-8 py-8 md:py-10 text-left">
            <h1 className={title()}>Why</h1>

            <span className={`${title({ color: "violet" })} h-98 overflow-visible}`}>¿Por qué son importantes las contraseñas seguras?&nbsp;</span>
            <p>
                <span className={title({ color: "violet" })}>1.</span>  Protección contra accesos no autorizados
                Una contraseña segura dificulta que atacantes accedan a tus cuentas en línea, ya sea redes sociales, correos electrónicos o cuentas bancarias.

            </p>

            <p>
            <span className={title({ color: "violet" })}>2.</span> Prevención de robo de identidad
                Los ciberdelincuentes pueden usar contraseñas débiles para suplantar tu identidad, realizar fraudes o acceder a información confidencial.

            </p>
            <p>
            <span className={title({ color: "violet" })}>3.</span> Reducción del impacto de ataques automatizados
                Los hackers suelen usar herramientas automatizadas como ataques de fuerza bruta o diccionario. Una contraseña segura reduce significativamente el éxito de estos métodos.

            </p>
            <p>
            <span className={title({ color: "violet" })}>4.</span> Cumplimiento de regulaciones
                En entornos corporativos, contraseñas seguras son un requisito para cumplir con normativas de seguridad de datos como GDPR o ISO 27001.

            </p>

            <p>
            <span className={title({ color: "violet" })}>5.</span> Protección de datos sensibles
                Tus contraseñas protegen información crítica como documentos confidenciales, fotos privadas y datos financieros.

            </p>
            <h1 className={title({color:"blue"})}>Características de una contraseña segura</h1>

            <p>
                <span className={title({ color: "blue" })}>Longitud:</span> Al menos 12-16 caracteres. <br />
                <hr style={{ borderTop: "1px solid white", margin: "8px 0" }} />
                <span className={title({ color: "blue" })}>Combinación de caracteres:</span> Usa letras mayúsculas, minúsculas, números y símbolos. <br />
                <hr style={{ borderTop: "1px solid white", margin: "8px 0" }} />
                <span className={title({ color: "blue" })}>No reutilización:</span> Cada cuenta debe tener una contraseña única. <br />
                <hr style={{ borderTop: "1px solid white", margin: "8px 0" }} />
                <span className={title({ color: "blue" })}>Aleatoriedad:</span> Evita palabras comunes, patrones de teclado (e.g., "123456" o "qwerty") y datos personales. <br />
                <hr style={{ borderTop: "1px solid white", margin: "8px 0" }} />
            </p>
            <h1 className={title({color:"blue"})}>Consejos para gestionar contraseñas seguras:</h1>


            <p>
                <span className={title({ color: "blue" })}>1. </span>Usa un gestor de contraseñas
                Aplicaciones como LastPass, 1Password o Bitwarden pueden generar y almacenar contraseñas fuertes para ti.

            </p>


            <p>

                <span className={title({ color: "blue" })}>2. </span> Habilita la autenticación en dos pasos (2FA)
                Además de la contraseña, añade una segunda capa de seguridad como códigos enviados a tu móvil o una app autenticadora.
            </p>
            <p>
                <span className={title({ color: "blue" })}>3. </span> Cambia contraseñas comprometidas
                Si un servicio informa sobre una fuga de datos, cambia tu contraseña inmediatamente.

            </p>
            <p>
                <span className={title({ color: "blue" })}>4. </span> Evita compartir contraseñas
                Si necesitas compartir acceso, usa métodos temporales o seguros.

            </p>
            <p>
                <span className={title({ color: "blue" })}>5. </span>Actualiza contraseñas periódicamente
                Especialmente en servicios críticos como banca en línea o correo electrónico.
            </p>


            <span className={`${title({ color: "yellow" })} h-fit`}>
                Ejemplo de contraseña insegura vs. segura
            </span><br />

            <p className="text-[28px]">
                <span className={title({color:"yellow"})}>Insegura:
                    </span> 123456 o password<br /><br />
                    <span className={title({color:"yellow"})}>Segura:
                    </span> A7!dk@93*Bz1 hasta 24 caracteres.

            </p>




        </div>
    );
}

