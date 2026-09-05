# Contexto de continuidad - DELANOVA / Portal del Valle

> Última actualización: 5 de septiembre de 2026  
> Estado: prototipo web estático publicado mediante GitHub + Vercel.

Este documento permite retomar el trabajo con otro agente de IA, desarrollador o conversación sin perder las decisiones ya tomadas.

## 1. Objetivo del proyecto

Construir la primera versión de la presencia web de **DELANOVA**, empresa inmobiliaria que no contaba con una página web propia.

El primer proyecto inmobiliario presentado es **Residencial Portal del Valle - Etapa I**. El sitio debe cumplir dos objetivos:

1. Presentar comercialmente el proyecto, sus lotes, características y plano.
2. Convertir visitas en consultas comerciales mediante una estimación inicial de casa prefabricada y un posterior contacto por WhatsApp.

La referencia de estructura comercial es [Centenario](https://centenario.com.pe/), especialmente sus páginas de proyecto y su sitio principal. La web de DELANOVA no debe copiar su identidad visual; toma como inspiración la jerarquía comercial: impacto, proyecto, confianza, financiación/contacto y conversión.

## 2. Material fuente recibido

Todo el material original entregado está dentro de `DOCUMENTOS/`:

| Archivo | Uso actual |
| --- | --- |
| `DOCUMENTOS/LOGOEMPRESA.jpeg` | Logo corporativo DELANOVA usado en cabecera y pie de página. |
| `DOCUMENTOS/LOGOPROYECTO.jpeg` | Logo de Residencial Portal del Valle. |
| `DOCUMENTOS/PALETA PORTAL DEL VALLE.pdf` | Paleta visual oficial. |
| `DOCUMENTOS/PLANO etapa.pdf` | Plano base de la Etapa I. |
| `DOCUMENTOS/PLANO 26 AGOSTO.pdf` | Plano comercial actualizado con lotes disponibles y vendidos. |

### Paleta extraída

Los colores principales obtenidos del PDF de paleta son:

| Nombre | Hexadecimal | Uso |
| --- | --- | --- |
| Naranja | `#FFA10B` | CTA, resaltados y pasos. |
| Blanco | `#FFFFFF` | Superficies y contraste. |
| Azul | `#276FC4` | Apoyos visuales y enlaces. |
| Azul marino | `#14205E` | Fondos institucionales y textos fuertes. |
| Gris de soporte | `#444444` | Referencia del documento de paleta. |

### Información confirmada desde los planos

- Proyecto: **Residencial Portal del Valle, Etapa I**.
- Referencias de conexión visibles: Panamericana Norte y Vía de Evitamiento.
- El plano considera calles afirmadas, servicios de luz y agua, seguridad 24 h, parque, zona educativa y mirador.
- Los lotes muestran áreas predominantemente entre 76 m² y 102 m².
- El plano actualizado utiliza azul para disponibilidad y rojo para lotes vendidos.
- Los precios referenciales visibles están entre S/ 12,000 y S/ 19,000.

> Importante: precios, lotes y disponibilidad deben ser validados comercialmente antes de utilizarse como oferta. El sitio lo comunica como información referencial.

## 3. Estado actual del sitio

El proyecto es un sitio estático sin dependencias de Node, framework ni base de datos. Puede publicarse directamente en Vercel.

### Páginas implementadas

| Ruta / archivo | Propósito |
| --- | --- |
| `index.html` | Landing principal de Portal del Valle. Incluye hero, beneficios, plano, selector de lote y simulador. |
| `proyectos.html` | Catálogo corporativo de proyectos DELANOVA; hoy muestra Portal del Valle y una tarjeta de próximos proyectos. |
| `asesor.html` | Página institucional para captar futuros asesores inmobiliarios. |
| `nosotros.html` | Página de marca con narrativa, visión y valores DELANOVA. |
| `contacto.html` | Formulario visual de contacto. No tiene integración de envío aún. |

### Archivos técnicos

| Archivo | Propósito |
| --- | --- |
| `styles.css` | Estilos globales, cabecera compartida, responsividad y estilos de subpáginas. |
| `app.js` | Lógica exclusiva de la portada: selección de lote, contadores del simulador, cálculo y generación de mensaje WhatsApp. |
| `assets/plano-disponibilidad-26-agosto.png` | Imagen derivada del plano actualizado para una carga web rápida y una visualización ampliable. |
| `.gitignore` | Excluye archivos temporales del control de versiones. |
| `README.md` | Instrucciones básicas de ejecución y publicación. |

## 4. Navegación corporativa actual

La cabecera es blanca, con una disposición inspirada en la estructura corporativa de Centenario, adaptada a DELANOVA:

1. Logo DELANOVA a la izquierda, clicable y enlazado a `index.html`.
2. `PROYECTOS` -> `proyectos.html`.
3. `CONVIÉRTETE EN UN ASESOR` -> `asesor.html`.
4. `NOSOTROS` -> `nosotros.html`.
5. `CONTÁCTANOS` -> `contacto.html`.
6. CTA amarillo/naranja: `Solicita información` -> `contacto.html`.

Cada subpágina marca visualmente el ítem activo. En pantalla móvil el menú se transforma en un desplegable nativo accesible, sin JavaScript adicional.

### Ajustes recientes de cabecera y hero

- La cabecera corporativa utiliza `position: sticky` con `top: 0`; se mantiene visible mientras el visitante recorre cualquiera de las páginas.
- El logo DELANOVA sobresale ligeramente por encima y debajo de la cabecera, incluye una sombra suave y es más grande para conservar contraste sobre el fondo blanco.
- En la portada, el logo de Portal del Valle se amplió y elevó dentro del hero, inmediatamente después de la etiqueta `RESIDENCIAL · ETAPA I`, para hacer más legible la identidad del proyecto.
- El logo DELANOVA de la cabecera se amplió nuevamente a aproximadamente el doble de su tamaño anterior en escritorio; en móvil se conserva una escala contenida para no bloquear el menú.
- La cabecera conserva una altura fija de 88 px en escritorio; el logo elevado sobresale visualmente sin aumentar esa altura.

## 5. Funcionalidades existentes

### 5.1 Landing del proyecto

- Hero de venta con logo de Portal del Valle, propuesta de valor y CTA.
- Resumen de lote desde S/ 12,000, indicado como referencial.
- Bloque de atributos del proyecto.
- Plano actualizado con leyenda de disponibilidad/vendido.
- Modal para ampliar el plano.
- Sección comercial `Todo lo que necesitas`, con información del plano: seguridad 24 h, calles afirmadas, servicios de agua y luz, tranquera de seguridad, zona educativa, parque recreativo, mirador y paradero.
- Las tarjetas de atributos alternan azul marino, azul y naranja de la paleta oficial para mejorar contraste y jerarquía visual.
- Formulario corto dentro de esa sección, preparado para abrir WhatsApp con nombre, teléfono e interés del visitante.
- Sección `Proyectos destacados` para Portal del Valle y futuras oportunidades DELANOVA.
- Mensaje institucional de cierre sobre DELANOVA y footer ampliado con enlaces de navegación y espacios para redes sociales.

### 5.2 Selector de lote y simulador

En `index.html` se incluyeron lotes de muestra para probar el flujo comercial:

| Lote de muestra | Área | Valor referencial |
| --- | ---: | ---: |
| A-01 | 82.5 m² | S/ 12,000 |
| B-06 | 90 m² | S/ 14,000 |
| C-10 | 90 m² | S/ 15,000 |
| D-15 | 90 m² | S/ 16,000 |
| E-24 | 90 m² | S/ 18,000 |

El visitante puede seleccionar:

- Lote referencial.
- Cantidad de habitaciones (1 a 5).
- Cantidad de baños (1 a 5).
- Cantidad de pisos (1 a 3).
- Material principal: Esencial, Confort o Premium.

El cálculo actual es una estimación de prototipo. Se define en `app.js` con valores no comerciales que deberán reemplazarse por costos aprobados:

```js
const pricing = {
  rooms: 4800,
  baths: 4000,
  floor: 15000,
};
```

Los costos iniciales de materiales son:

- Esencial: S/ 24,900.
- Confort: S/ 34,900.
- Premium: S/ 44,900.

### 5.3 WhatsApp

La función ya construye un mensaje personalizado con lote, área, distribución, material y estimación. La variable está intencionalmente vacía para no dirigir consultas a un número incorrecto:

```js
const ASESOR_WHATSAPP = "";
```

Antes de publicar comercialmente, colocar el número real del asesor en formato internacional, sin `+`, espacios ni guiones. Ejemplo:

```js
const ASESOR_WHATSAPP = "51987654321";
```

Mientras esté vacía, el botón muestra una alerta indicando que falta configurar el número.

El formulario compacto de la portada usa la misma variable y arma un mensaje con el nombre, teléfono e interés del usuario. Los iconos de redes del footer son marcadores visuales (`#`) hasta recibir las URL oficiales de Facebook, Instagram, TikTok y YouTube.

## 6. Validaciones realizadas

- Se comprobó sintaxis de `app.js` mediante `node --check`.
- Se verificó en navegador la carga de la portada, cabecera, subpágina de proyectos y enlaces de navegación.
- Se verificó el modal de ampliación del plano.
- Se verificó que al seleccionar un lote cambian el resumen y la inversión estimada.
- Se inspeccionó la versión móvil: el menú principal se oculta y se ofrece un menú desplegable.

## 7. Publicación y control de versiones

- El repositorio local fue inicializado con Git.
- El usuario configuró posteriormente una forma de alternar entre cuentas/remotos de GitHub. No se deben almacenar usuarios, contraseñas, tokens ni URL privadas en este documento.
- El proyecto fue conectado por el usuario a Vercel y publicado como prototipo.
- Vercel puede desplegar este proyecto como sitio estático: no requiere `npm install`, comando de compilación ni carpeta de salida.

### Flujo sugerido para cambios posteriores

```powershell
git add .
git commit -m "feat: descripción breve del cambio"
git push
```

Vercel deberá generar un nuevo despliegue al detectar el `push` en la rama conectada.

## 8. Decisiones de alcance

Estas funcionalidades fueron explícitamente dejadas para una fase posterior:

1. **Mapbox / Google Maps:** no se configuró aún para evitar complejidad e integración externa prematura.
2. **Lotes clicables directamente sobre el plano:** el plano se muestra como referencia visual y el selector lateral usa lotes de muestra. En producción cada lote debe tener código, estado, área, precio y posición reales.
3. **CRM / formularios reales:** el formulario de contacto es visual; no envía correos ni registra leads.
4. **Inventario en tiempo real:** disponibilidad y precios no se conectan a una base de datos.
5. **Pagos / separación de lote:** fuera del alcance del prototipo.
6. **Galería fotográfica, testimonios reales y contenido legal:** aún no se entregaron los materiales finales.

## 9. Próximos pasos recomendados

Orden sugerido de implementación:

1. Configurar `ASESOR_WHATSAPP` con el número comercial real.
2. Validar con el área comercial los lotes, códigos, áreas, estados y precios definitivos.
3. Reemplazar las constantes del simulador con presupuestos de construcción aprobados.
4. Conectar el formulario de `contacto.html` a un CRM, correo o endpoint seguro.
5. Añadir imágenes, testimonios, datos de respaldo y textos institucionales aprobados para las páginas corporativas.
6. Implementar inventario de lotes desde un CMS, Airtable, JSON administrable o base de datos.
7. Integrar un plano interactivo con Mapbox o SVG clicable; cada lote debe abrir una ficha detallada.
8. Agregar analítica de conversiones (por ejemplo, eventos de clic en WhatsApp, formulario y selección de lote) previa aprobación de la política de privacidad.
9. Añadir páginas legales: política de privacidad, términos y condiciones y cookies.

### Organización actual de las rutas

- La portada (`index.html`) funciona como landing comercial de DELANOVA y ya no muestra visualmente el plano, selector de lotes ni simulador.
- La selección de lote y el simulador viven en la subpágina del proyecto: `portal-del-valle.html`.
- Los CTAs principales de la portada y la tarjeta de Portal del Valle en `proyectos.html` enlazan a `portal-del-valle.html`.
- La sección anterior `Conoce el entorno` fue retirada de la portada según indicación del usuario.
- `Proyecta tu casa` también fue eliminado del HTML de la portada. El simulador se mantiene únicamente en `portal-del-valle.html`.

## 10. Criterios de diseño que se deben conservar

- Mantener identidad Portal del Valle: azul marino, azul, naranja y blanco.
- Mantener un enfoque comercial, claro y cercano; no sobrecargar de texto técnico.
- Priorizar CTA visibles y rutas simples para llegar al contacto.
- Conservar el patrón de cabecera corporativa DELANOVA para todas las futuras páginas.
- Comunicar siempre como “referencial” cualquier precio, disponibilidad o estimación que no provenga de una fuente comercial vigente.
- Garantizar compatibilidad móvil antes de publicar cualquier cambio.

## 11. Instrucción corta para otro agente

> Continúa el sitio estático de DELANOVA ubicado en este repositorio. Lee primero `CONTEXTO_PROYECTO.md`, conserva la navegación corporativa compartida y no inventes precios, inventario, número de WhatsApp ni datos institucionales. Revisa que `app.js` solo se cargue en la portada o protege sus selectores si se decide reutilizarlo. Antes de implementar Mapbox, CRM, analítica o un servicio externo, confirma las credenciales, el proveedor elegido y el alcance con el usuario.
