"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  cors: {
    enable: true,
    package: "egg-cors",
  },
  view: {
    enable: true,
    package: "egg-view",
  },
  ejs: {
    enable: true,
    package: "egg-view-ejs",
  },
};
