const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");

class UserService extends Service {
  list() {
    const data = fs.readFileSync(
      path.join(__dirname, "../public/vtk/st.json")
    );

    let res = data.toString();
    const list = JSON.parse(res);

    return list;
  }
}

module.exports = UserService;
