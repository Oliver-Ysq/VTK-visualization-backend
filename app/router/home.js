module.exports = (app) => {
  const { router, controller } = app;
  router.get("/getJson", controller.home.getJson);
};
