module.exports = (app) => {
  const { router, controller } = app;
  router.get("/getData", controller.home.getData);
};
