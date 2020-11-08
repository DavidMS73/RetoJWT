const AccessControl = require("accesscontrol");
const ac = new AccessControl();

exports.roles = (function () {
  ac.grant("none").readAny("products");

  ac.grant("cliente").extend("none").createAny("products");

  ac.grant("admin").extend("cliente").updateAny("products").readAny("auth");

  return ac;
})();
