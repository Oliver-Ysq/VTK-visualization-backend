const Controller = require("egg").Controller;

class HomeController extends Controller {
  /**
   * queries:
   * type： 0-split tree
   *        1-join tree
   */
  async getData() {
    const { ctx } = this;
    const { type } = ctx.query; // 查看的具体数据 st/jt
    const { scalars, points, lines } = ctx.service.home.getJson(type);
    ctx.body = {
      code: 200,
      data: {
        points,
        scalars,
        lines,
      },
    };
  }
}

module.exports = HomeController;
