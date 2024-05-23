'use strict';

// ЗАВДАННЯ: Відтворити ескіз з прикріпленого малюнку, використовуючи атрибути data-*, style, classList (flex-direction.jpg)

const FLEX_DIR_BTN_ACTIVE_CL_NAME = 'flex-direction-button-active';

const flexDirectionButtons = document.getElementsByClassName(
  'flex-direction-button'
);
const [flexDirectionArea] = document.getElementsByClassName(
  'flex-direction-area'
);

for (const flexDirectionButton of flexDirectionButtons) {
  flexDirectionButton.addEventListener('click', ({ target: targetButton }) => {
    // При кліку на кнопку видаляємо у всіх кнопок клас активної кнопки
    for (const flexDirectionButton of flexDirectionButtons) {
      flexDirectionButton.classList.remove(FLEX_DIR_BTN_ACTIVE_CL_NAME);
    }

    // Додаємо клас активної кнопки до кнопки, по якій клікнули
    targetButton.classList.add(FLEX_DIR_BTN_ACTIVE_CL_NAME);

    // Змінюємо флекс-направлення флекс-контейнера, беручи нове значення з тексту кнопки, по якій клікнули
    flexDirectionArea.style.setProperty(
      'flex-direction',
      targetButton.innerText
    );
  });
}
