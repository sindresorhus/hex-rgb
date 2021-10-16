const fs = require("fs");
const pkg = require("./package.json");

delete pkg["devDependencies"];
delete pkg["scripts"];

fs.writeFileSync("./package.json", JSON.stringify(pkg, null, 2));
