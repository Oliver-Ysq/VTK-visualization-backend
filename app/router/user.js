module.exports = (app) => {
  const { router, controller } = app;
  router.get("/user/info", controller.user.info);
  router.get("/user/find_by_id", controller.user.findById);
};
