const sectionHeaders = document.querySelectorAll("section header");
const iconButtons = document.querySelectorAll(".icon-button");

const getFileName = (path) => {
  const splitPath = path.split("/");
  return splitPath[splitPath.length - 1];
};
const toggleAriaHidden = (ariaHidden) =>
  ariaHidden === "true" ? "false" : "true";

const handleAccordin = (event) => {
  event.stopPropagation();

  const parentNode = event.target.parentNode;
  const parentNodeName = parentNode.nodeName.toLowerCase();

  const section =
    parentNodeName === "section"
      ? parentNode
      : parentNodeName === "header"
      ? parentNode.parentNode
      : parentNode.parentNode.parentNode;

  const paragraph = section.querySelector("p");
  const icon = section.querySelector("img");

  paragraph.classList.toggle("hidden");
  paragraph.ariaHidden = toggleAriaHidden(paragraph.ariaHidden);

  const iconSrc =
    getFileName(icon.src) === "icon-plus.svg"
      ? "assets/images/icon-minus.svg"
      : "assets/images/icon-plus.svg";

  icon.src = iconSrc;
  icon.ariaHidden = toggleAriaHidden(icon.ariaHidden);
};

sectionHeaders.forEach((sectionHeader) => {
  sectionHeader.addEventListener("click", handleAccordin);
});

iconButtons.forEach((iconButton) => {
  iconButton.addEventListener("click", handleAccordin);
});
