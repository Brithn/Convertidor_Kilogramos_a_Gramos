# Kilogramos a Gramos
Se trata de un conversor en tiempo real de kilogramos a gramos utilizando Tensorflow.js, basado en un modelo entrenado en Python con Tensorflow.

## Probar en vivo
Puedes probar este proyecto en vivo [aquí](https://brithn.github.io/Convertidor_Kilogramos_a_Gramos/?).

## Cómo utilizarlo

### Descargar el repositorio
Descarga el repositorio donde gustes en tu computadora.

### Inicia un servidor en la carpeta
Este proyecto utiliza un modelo de Tensorflow.js, el cual para cargarse requiere que el acceso sea por medio de http/https.
Para eso puedes usar cualquier servidor, pero aquí hay una forma de hacerlo:
- Descarga Python en tu computadora.
- Abre una línea de comandos o terminal.
- Navega hasta la carpeta donde descargaste el repositorio.
- Ejecuta el comando `python -m http.server 8000`.
- Abre un explorador y ve a http://localhost:8000.
### Uso
Introduce el valor en kilogramos y se mostrará la conversión a gramos.
