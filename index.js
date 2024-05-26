'use strict';

// ЗАВДАННЯ: Відтворити ескіз з прикріпленого малюнку, використовуючи атрибути data-*, style, classList (flex-direction.jpg)

const flexDirectionButtons = document.getElementsByClassName(
  'flex-direction-button'
);
const [flexDirectionArea] = document.getElementsByClassName(
  'flex-direction-area'
);

const handlerClick = (flexDirectionButtons, flexDirectionArea) => {
  const FLEX_DIRECTION_PROPERTY_NAME = 'flex-direction';
  const FLEX_DIR_BTN_ACTIVE_CL_NAME = 'flex-direction-button-active';

  return ({ target: targetButton }) => {
    // При кліку на кнопку видаляємо у всіх кнопок клас активної кнопки
    for (const flexDirectionButton of flexDirectionButtons) {
      flexDirectionButton.classList.remove(FLEX_DIR_BTN_ACTIVE_CL_NAME);
    }

    // Додаємо клас активної кнопки до кнопки, по якій клікнули
    targetButton.classList.add(FLEX_DIR_BTN_ACTIVE_CL_NAME);

    // Змінюємо флекс-направлення флекс-контейнера, беручи нове значення з тексту кнопки, по якій клікнули
    flexDirectionArea.style.setProperty(
      FLEX_DIRECTION_PROPERTY_NAME,
      targetButton.dataset.flexDirection
    );
  };
};

for (const flexDirectionButton of flexDirectionButtons) {
  flexDirectionButton.addEventListener(
    'click',
    handlerClick(flexDirectionButtons, flexDirectionArea)
  );
}
