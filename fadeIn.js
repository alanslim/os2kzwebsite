
document.addEventListener("DOMContentLoaded", function () {
    const blockText = document.querySelectorAll(".block__text");
    const blockImg = document.querySelectorAll(".block__img");
  
    // Проверяем, найдены ли элементы
    if (blockText.length > 0 && blockImg.length > 0) {
      // Добавляем класс 'show' для каждого найденного элемента
      blockText.forEach(text => text.classList.add("show"));
      blockImg.forEach(img => img.classList.add("show"));
    }
  });
  