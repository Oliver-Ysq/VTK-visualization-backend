const Controller = require("egg").Controller;

class UserInfoController extends Controller {
  async info() {
    const { ctx } = this;
    console.log(this);
    ctx.body = {
      data: {
        name: "olivr",
        age: 22,
      },
    };
  }

  async findById() {
    // url传参
    console.log(this.ctx.queries);
    if (this.ctx.queries.id === "123") {
      this.ctx.body = {
        result: true,
      };
    } else {
      this.ctx.status = 404;
      this.ctx.body = {
        result: false,
      };
    }
  }
}

module.exports = UserInfoController;
