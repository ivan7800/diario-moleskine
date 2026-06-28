# Política de seguridad — Diario · Moleskine

## Versiones con soporte

| Versión | Soporte activo |
|---------|---------------|
| 2.3.x   | ✅ Sí         |
| < 2.3   | ❌ Solo mantenimiento crítico |

## Reportar una vulnerabilidad

Si encuentras una vulnerabilidad de seguridad en este proyecto, **no abras un issue público**.

Usa **GitHub Security Advisories** o un canal privado del mantenedor con el asunto `[SEGURIDAD] Diario Moleskine`.

Incluye:
- Descripción del problema
- Pasos para reproducirlo
- Impacto potencial
- (Opcional) Propuesta de solución

Recibirás respuesta en un plazo máximo de 7 días. Si la vulnerabilidad se confirma, se publicará un parche y se te reconocerá en el CHANGELOG (salvo que prefieras anonimato).

## Modelo de seguridad

Esta es una aplicación **completamente local y offline**. No hay servidor, no hay cuentas, no hay red involucrada.

- **Cifrado**: AES-256-GCM con derivación PBKDF2-SHA256 (150.000 iteraciones). Implementado con la Web Crypto API nativa del navegador.
- **PIN**: nunca se almacena en texto plano. Solo se guarda un hash de verificación + sal de 16 bytes.
- **Clave de cifrado**: existe únicamente en memoria durante la sesión activa. Se destruye al bloquear o recargar.
- **Sin telemetría**: la app no realiza ninguna petición de red una vez cargada.
- **Sanitización anti-XSS**: el HTML guardado, importado, previsualizado y exportado se limpia antes de renderizarse.

## Limitaciones conocidas

- El cifrado protege el contenido en reposo (IndexedDB), pero no contra un atacante con acceso físico al dispositivo desbloqueado.
- Un PIN de 4 dígitos tiene un espacio de 10.000 combinaciones. Suficiente para uso personal, no para secretos de Estado.
- Si el navegador o el sistema operativo están comprometidos, el cifrado de la app no puede proteger los datos.
