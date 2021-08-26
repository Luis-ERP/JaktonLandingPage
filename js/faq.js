/**
 *
 * @param {Number} questionNumber
 */
const clickQuestion = (questionNumber) => {
  const answer = answers[questionNumber];
  const arrow = questionButton[questionNumber];
  const list = [...arrow.classList];
  if (list.indexOf("open") != -1) {
    closeQuestion(answer, arrow);
  } else {
    openQuestion(answer, arrow);
  }
};

/**
 * @param {HTMLElement} answer
 * @param {HTMLElement} arrow
 */
const closeQuestion = (answer, arrow) => {
  arrow.classList.remove("open");
  answer.classList.remove("open");
};

/**
 * @param {HTMLElement} answer
 * @param {HTMLElement} arrow
 */
const openQuestion = (answer, arrow) => {
  arrow.classList.add("open");
  answer.classList.add("open");
};
