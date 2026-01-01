const getHomePage = (req, res) => {
  //process data
  // call modules
  res.send("Hello World!");
};
const getKakarot = (req, res) => {
  res.render("sample.ejs");
};
const getABC = (req, res) => {
  res.send("Check");
};
module.exports = {
  getHomePage,
  getKakarot,
  getABC,
};
