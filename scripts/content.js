// Encuentra el primer elemento 'article' en el documento HTML
const article = document.querySelector("article");

// Comprueba si se encontró un elemento 'article'
if (article) {
  // Obtiene el texto contenido dentro del elemento 'article'
  const text = article.textContent;
  
  // Expresión regular para encontrar todas las palabras no espaciales
  const wordMatchRegExp = /[^\s]+/g;

  // Obtiene todas las coincidencias de palabras en el texto
  const words = text.matchAll(wordMatchRegExp);

  // Convierte el iterador en un arreglo y obtiene la longitud para contar las palabras
  const wordCount = [...words].length;

  // Calcula el tiempo de lectura aproximado dividiendo el recuento de palabras por 200
  const readingTime = Math.round(wordCount / 200);

  // Crea un elemento 'p' para mostrar el tiempo de lectura
  const badge = document.createElement("p");

  // Agrega las clases CSS al elemento 'p'
  badge.classList.add("color-secondary-text", "type--caption");

  // Establece el texto del elemento 'p' con el tiempo de lectura calculado
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Busca el primer elemento 'h1' dentro del 'article' como referencia
  const heading = article.querySelector("h1");

  // Busca el elemento 'time' y su padre como referencia si no se encuentra un 'h1'
  const date = article.querySelector("time")?.parentNode;

  // Inserta el elemento 'p' después del elemento de referencia (ya sea 'h1' o 'time's parent)
  (date ?? heading).insertAdjacentElement("afterend", badge);
}
