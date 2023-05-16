const reqFilter = (req, res, next) => {
  console.log("req is made by middleware");
  next();
};

module.exports = reqFilter;
