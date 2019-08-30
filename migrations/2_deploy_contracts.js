var Cars = artifacts.require("Cars");
var PToken = artifacts.require("PToken");
var Arg = "";
module.exports = deployer => {
    deployer.deploy(Cars);
    deployer.deploy(PToken);
};