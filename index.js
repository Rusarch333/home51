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
  flexDirectionButton.addEventListener('click', () => {
    for (const flexDirectionButton of flexDirectionButtons) {
      flexDirectionButton.classList.remove(FLEX_DIR_BTN_ACTIVE_CL_NAME);
    }
    flexDirectionButton.classList.add(FLEX_DIR_BTN_ACTIVE_CL_NAME);

    flexDirectionArea.style.setProperty(
      'flex-direction',
      flexDirectionButton.innerText.toLowerCase()
    );
  });
}
