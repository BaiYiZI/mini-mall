const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = () => {
  let data = Mock.mock({
    banner: [
      "https://cdn.nlark.com/yuque/0/2021/png/660331/1634622259552-assets/web-upload/268743d4-25d3-4753-8442-e1759a3e22e0.png"
    ]
  });

  return data;
};
