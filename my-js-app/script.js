const buttonGroups = document.querySelectorAll('.App-button-group');

buttonGroups.forEach(buttonGroup => {
  const buttons = buttonGroup.querySelectorAll('.App-button');
  buttons.forEach(button => {
    const numButtons = parseInt(button.getAttribute('data-num-buttons'));
    button.addEventListener('click', () => {
      for (let i = 1; i <= numButtons; i++) {
        console.log(`Button ${i} clicked!`);
      }
    });
  });
});
