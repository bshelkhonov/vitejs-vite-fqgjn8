export function setupAnimation(element) {
  let className = 'one';
  const setTranslate = () => {
    element = document.getElementById('element');
    console.log(element);
    if (className === 'card one') {
      className = 'card one two';
    } else {
      className = 'card one';
    }
    element.className = className;
  };
  element.addEventListener('click', () => setTranslate());
  setTranslate();
}
