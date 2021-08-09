const onScroll = () => {
  let index = 0;
  for (var i = 0; i < sections.length; i++) {
    const sectionTop = getTop(sections[i]);
    if (
      document.scrollingElement.scrollTop >=
      sectionTop - window.innerHeight * .50
    ) {
      index = i;
    }
  }
  setCircles(index)
};

/**
 * It updates the classes of the circles to set the current active section
 * @param {number} index
 */
const setCircles  = (index) => {
  for (var j = 0; j < sectionsCircle.length; j++) {
    sectionsCircle[j].classList.remove("active");
  }
  sectionsCircle[index].classList.add("active");
};


window.addEventListener("scroll", onScroll);