const Controller = require("egg").Controller;

class HomeController extends Controller {
  // 接口写在这里
  async getJson() {
    const { ctx } = this;
    const data = ctx.service.home.list();
    ctx.body = { code: 200, data };
  }
}

module.exports = HomeController;
