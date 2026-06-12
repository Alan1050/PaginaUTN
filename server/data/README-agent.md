# Balam IA respuestas

Edita `agent-responses.json` para controlar lo que responde el agente.

Cada respuesta tiene:

- `id`: identificador interno.
- `title`: nombre para ubicar la respuesta.
- `priority`: sube este numero si quieres que una respuesta gane cuando varias coinciden.
- `keywords`: palabras o frases que activan la respuesta.
- `answer`: texto exacto que vera el usuario.
- `links`: botones opcionales debajo de la respuesta.
- `options`: botones opcionales que envian otra consulta al agente.

Ejemplo:

```json
{
  "id": "becas",
  "title": "Becas disponibles",
  "priority": 5,
  "keywords": ["becas", "apoyos", "beca academica"],
  "answer": "La informacion de becas se consulta en la seccion Becas.",
  "links": [
    {
      "label": "Ver becas",
      "url": "/Becas"
    }
  ]
}
```

Ejemplo con opciones:

```json
{
  "id": "tecnologias-programacion",
  "title": "Tecnologias y programacion",
  "priority": 8,
  "keywords": ["tecnologias", "programacion", "software"],
  "answer": "Tenemos 2 opciones que te pueden interesar: Inteligencia Artificial y Desarrollo de Software Multiplataforma. ¿En cual estas interesado?",
  "options": [
    {
      "label": "Inteligencia Artificial",
      "message": "opcion carrera inteligencia artificial"
    },
    {
      "label": "Desarrollo de Software",
      "message": "opcion carrera desarrollo de software"
    }
  ]
}
```

Cada `message` debe coincidir con alguna keyword de otra respuesta. Asi puedes encadenar preguntas sin programar mas codigo.

Para enlaces internos usa rutas como `/Becas`, `/OfertaEducativa` o `/GuiasPago`.
Para enlaces externos usa la URL completa, por ejemplo `https://www.utnay.edu.mx/`.

Despues de editar el JSON, reinicia el servidor:

```bash
npm run dev:api
```

## Cache temporal

El frontend guarda temporalmente las respuestas exitosas de Balam IA en `sessionStorage`.
Esto evita repetir la misma consulta al API durante la misma sesion del navegador.

- Dura 30 minutos por pregunta.
- Se borra al cerrar la pestaña.
- No guarda errores de conexion.
- No guarda respuestas sin coincidencia para que puedas agregar informacion nueva al JSON sin que el fallback quede pegado.
