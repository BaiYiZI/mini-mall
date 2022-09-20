const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = () => {
  let data = Mock.mock({
    banner: [
      "https://cdn.nlark.com/yuque/0/2021/png/660331/1634622259552-assets/web-upload/268743d4-25d3-4753-8442-e1759a3e22e0.png"
    ],
    goodsInfo: [
      {
        title: "风干牛肉 舌尖上的草原味道",
        img: "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568336-assets/web-upload/11d570d5-5598-476d-bbe7-84c5ddcad354.jpeg",
        price: "28.8"
      },
      {
        title: "新疆哈密瓜 脆甜多汁",
        img: "https://cdn.nlark.com/yuque/0/2021/jpeg/1267472/1640790535498-assets/web-upload/264d00b6-2134-4b18-b6d8-ce7133ac9509.jpeg",
        price: "36.6"
      },{
        title: "鲜橙 甜嗖嗖",
        img: "https://cdn.nlark.com/yuque/0/2021/jpeg/1267472/1640789475911-assets/web-upload/578d26f8-1d23-45bf-b8db-3a64e943af55.jpeg",
        price: "12.3"
      },
    ]
  });

  return data;
};
