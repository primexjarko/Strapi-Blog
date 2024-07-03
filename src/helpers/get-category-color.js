const categoryColorMap = new Map();

categoryColorMap.set("forex", "green");
categoryColorMap.set("crypto", "yellow");
categoryColorMap.set("stocks", "blue");

const getCategoryColor = (category) => {
  return categoryColorMap.get(category);
};

export default getCategoryColor;
