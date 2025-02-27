<h1 align="center">Juego del Amigo Secreto</h1>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=259200" />
  <a href="https://github.com/tu-usuario/amigo-secreto/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/40c13ff6-41e3-4f7e-b352-7291fe079071" alt="Amigo Secreto" width="1000" />
</p>

<p align="center">
  Aplicación web para realizar el sorteo de amigo secreto entre un grupo de personas.
</p>

## 🚀 Funcionalidades

- Agregar nombres de participantes
- Realizar el sorteo de amigos secretos
- Mostrar los resultados del sorteo

## 🛠️ Tecnologías Usadas
1. HTML
2. CSS
3. JavaScript (Parte en la cual se aplicó la lógica respectiva)

## 📸 Capturas de pantalla
### Funciones en el Código
1. **agregarAmigo()**
    - **Propósito:** Agregar un amigo al array `amigos`.
    - **Descripción:** 
        - Obtiene el nombre del amigo desde un campo de entrada en el HTML.
        - Verifica si el nombre ingresado no está vacío. Si está vacío, muestra una alerta.
        - Si el nombre no está vacío, lo agrega al array `amigos` y actualiza la lista de amigos en el HTML.
        - Vacia el campo de entrada de texto.
<p align="center">
  <img src="https://github.com/user-attachments/assets/4d050162-04f1-4420-969e-93579585ba0f" alt="function agregarAmigo();" width="800" />
</p>

2. **actualizarAmigos()**
    - **Propósito:** Actualizar la lista de amigos mostrada en el HTML.
    - **Descripción:** 
        - Vacía el contenido del elemento HTML que muestra la lista de amigos.
        - Itera sobre el array `amigos` y agrega cada amigo como un elemento de lista (`<li>`) en el HTML.
<p align="center">
  <img src="https://github.com/user-attachments/assets/4ce35ba4-dcd9-4e65-9340-d696e6681b55" alt="function actualizarAmigos();" width="800" />
</p>

3. **sortearAmigo()**
    - **Propósito:** Seleccionar aleatoriamente un amigo del array `amigos`.
    - **Descripción:** 
        - Verifica si el array `amigos` no está vacío. Si está vacío, muestra una alerta.
        - Si hay amigos en el array, selecciona un índice aleatorio y obtiene el nombre del amigo correspondiente.
        - Muestra el nombre del amigo sorteado en el HTML.
<p align="center">
  <img src="https://github.com/user-attachments/assets/8f8ef226-6bf4-44be-9a35-79f280423145" alt="function sortearAmigo();" width="800" />
</p>

## 📸 Muestra
https://github.com/user-attachments/assets/984c79b0-6898-43a2-b401-b85a930cc70e

## 🤝 Agradecimientos
Mis agradecimientos hacia todo el equipo de Alura Latam y Oracle Next Education, por sus buenas enseñanzas y ayudarme a crecer mediante la educación.
