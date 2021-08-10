/**
 * It computes the distance that exists bewteen a component and the top of the whole website
 * @param {HTMLElement} component
 */
const getTop = (component) => {
  try {
    return parseInt(
      component.getBoundingClientRect().top +
        document.scrollingElement.scrollTop
    );
  } catch {
    // Error
    return 0;
  }
};

/**
 * 
 * @param {number} index
 */
const goto = (index) => {
  /**
   * Is substract 120 beacuse that is the height of the nav
   */
  const top = getTop(sections[index]) - 120;
  // No Error
  window.scroll({
    top: top,
    left: 0,
    behavior: "smooth",
  });
};