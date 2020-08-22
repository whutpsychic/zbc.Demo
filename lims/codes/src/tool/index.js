const tool = {};

tool.jumpFn = null;

tool.jump = str => {
  if (tool.jumpFn && typeof tool.jumpFn === "function") {
    tool.jumpFn(str);
  }
};

export default tool;
