const Service = require("egg").Service;
const fs = require("fs");
const path = require("path");
const typeMap = {
  0: "st",
  1: "jt",
};

class UserService extends Service {
  getJson(type) {
    const scalarsJson = fs.readFileSync(
      path.join(__dirname, `../public/vtk/${typeMap[type]}/scalars.json`)
    );
    const pointsJson = fs.readFileSync(
      path.join(__dirname, `../public/vtk/${typeMap[type]}/points.json`)
    );
    const linesJson = fs.readFileSync(
      path.join(__dirname, `../public/vtk/${typeMap[type]}/lines.json`)
    );
    return {
      scalars: JSON.parse(scalarsJson.toString()),
      points: JSON.parse(pointsJson.toString()),
      lines: JSON.parse(linesJson.toString()),
    };
  }
}

module.exports = UserService;
