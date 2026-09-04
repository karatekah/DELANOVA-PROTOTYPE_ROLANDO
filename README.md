# Portal del Valle - Prototipo comercial

Landing page estática para presentar el proyecto **Residencial Portal del Valle**. Incluye el plano de disponibilidad entregado, selector de lotes de referencia, simulador inicial de casa prefabricada y generación de mensaje para WhatsApp.

## Ejecutar localmente

No requiere instalar dependencias. Abra `index.html` o ejecute:

```powershell
python -m http.server 4173
```

Luego visite `http://localhost:4173`.

## Antes de publicar

1. En `app.js`, configure `ASESOR_WHATSAPP` con el número del asesor en formato internacional, sin `+`, espacios ni guiones. Ejemplo: `51987654321`.
2. Valide los lotes de muestra y los precios con el área comercial. Los botones del selector representan alternativas de prototipo; el plano de 26 de agosto es la referencia visual de estado.
3. Sustituya los valores de estimación de materiales por los costos aprobados por la empresa.

## Publicación en GitHub y Vercel

1. Cree un repositorio en GitHub y suba el contenido completo de esta carpeta, incluyendo `DOCUMENTOS` y `assets`.
2. En Vercel, importe ese repositorio.
3. En la configuración del proyecto elija **Other** / sitio estático; no requiere comando de compilación ni directorio de salida.
4. Publique y pruebe el enlace de WhatsApp ya configurado.

## Siguiente fase recomendada

- Inventario de lotes administrable con estado, precio y ficha técnica.
- Mapa interactivo (Mapbox) con clic directo sobre cada lote.
- Formulario conectado a CRM y analítica de campañas.
