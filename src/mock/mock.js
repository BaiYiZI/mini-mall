const Mock = require("mockjs");

const Random = Mock.Random;

module.exports = () => {
  let data = Mock.mock({
    banner: [
      "https://cdn.nlark.com/yuque/0/2021/png/660331/1634622259552-assets/web-upload/268743d4-25d3-4753-8442-e1759a3e22e0.png"
    ],
    goodsInfo: [
      {
        id: "100005",
        kind: "肉禽蛋",
        title: "风干牛肉 舌尖上的草原味道",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568336-assets/web-upload/11d570d5-5598-476d-bbe7-84c5ddcad354.jpeg",
        price: "28.8"
      },
      {
        id: "100006",
        kind: "肉禽蛋",
        title: "牛肉干 嘎嘎香",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568531-assets/web-upload/093def87-41f2-4c88-be58-ce32f134ccc1.jpeg",
        price: "28.8"
      },
      {
        id: "100007",
        kind: "水果",
        title: "新疆哈密瓜 脆甜多汁",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/1267472/1640790535498-assets/web-upload/264d00b6-2134-4b18-b6d8-ce7133ac9509.jpeg",
        price: "36.6"
      },
      {
        id: "100008",
        kind: "水果",
        title: "鲜橙 甜嗖嗖",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/1267472/1640789475911-assets/web-upload/578d26f8-1d23-45bf-b8db-3a64e943af55.jpeg",
        price: "12.3"
      },
      {
        id: "100009",
        kind: "水果",
        title: "鲜橙多 嗖嗖甜",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
        price: "16.6"
      },
      {
        id: "1000010",
        kind: "蔬菜",
        title: "蟹味菇 滑溜溜",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640788824161-assets/web-upload/68f7c14d-df6a-4478-9c99-c3583e6e95c1.jpeg",
        price: "13.2"
      },
      {
        id: "1000011",
        kind: "海鲜",
        title: "金鲳鱼 新鲜上岸",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663757801897-assets/web-upload/87a46d7b-e9fd-4d16-9115-dd043e9722e6.jpeg",
        price: "23.1"
      },
      {
        id: "1000012",
        kind: "海鲜",
        title: "海鲈鱼 刺少肉多 三去开背",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663757934742-assets/web-upload/8a6e7345-a2b3-48b8-8421-f54b99883d63.jpeg",
        price: "17.8"
      },
      {
        id: "1000013",
        kind: "休闲食品",
        title: "风味鸭脖 精工慢卤 鲜香入骨",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758151970-assets/web-upload/504b6c2b-8dae-4417-ab67-51576955fcd6.jpeg",
        price: "23.3"
      },
      {
        id: "1000014",
        kind: "休闲食品",
        title: "蛋黄酥 蛋香诱人 皮酥馅滑",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758299139-assets/web-upload/894f4db6-09c0-44a4-9af3-276e7c1e88d9.jpeg",
        price: "37.6"
      },
      {
        id: "1000015",
        kind: "休闲食品",
        title: "夹心豆卷 精挑细选 香味十足",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758458286-assets/web-upload/b350857d-c9e3-4d9e-9ba6-0f81194b79d0.jpeg",
        price: "37.6"
      }
    ],
    kinds: [
      { kind: "生鲜", children: ["水果", "海鲜", "肉禽蛋", "蔬菜"] },
      { kind: "食品酒饮", children: ["休闲食品", "乳饮冰品", "咖啡", "果汁"] },
      { kind: "箱包", children: ["功能箱包", "潮流女包"] }
    ],
    shoppingInfo: [
      {
        id: "100005",
        kind: "肉禽蛋",
        title: "风干牛肉 舌尖上的草原味道",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568336-assets/web-upload/11d570d5-5598-476d-bbe7-84c5ddcad354.jpeg",
        price: "28.8",
        number: "5"
      },
      {
        id: "100006",
        kind: "肉禽蛋",
        title: "牛肉干 嘎嘎香",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568531-assets/web-upload/093def87-41f2-4c88-be58-ce32f134ccc1.jpeg",
        price: "28.8",
        number: "3"
      },
      {
        id: "100007",
        kind: "水果",
        title: "新疆哈密瓜 脆甜多汁",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/1267472/1640790535498-assets/web-upload/264d00b6-2134-4b18-b6d8-ce7133ac9509.jpeg",
        price: "36.6",
        number: "1"
      },
      {
        id: "100008",
        kind: "水果",
        title: "鲜橙 甜嗖嗖",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/1267472/1640789475911-assets/web-upload/578d26f8-1d23-45bf-b8db-3a64e943af55.jpeg",
        price: "12.3",
        number: "2"
      },
      {
        id: "100009",
        kind: "水果",
        title: "鲜橙多 嗖嗖甜",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/660331/1634624784015-assets/web-upload/dd93a2ab-a1eb-4ce6-bf8a-76751ad6de69.jpeg",
        price: "16.6",
        number: "4"
      },
      {
        id: "1000010",
        kind: "蔬菜",
        title: "蟹味菇 滑溜溜",
        img:
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640788824161-assets/web-upload/68f7c14d-df6a-4478-9c99-c3583e6e95c1.jpeg",
        price: "13.2",
        number: "9"
      },
      {
        id: "1000011",
        kind: "海鲜",
        title: "金鲳鱼 新鲜上岸",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663757801897-assets/web-upload/87a46d7b-e9fd-4d16-9115-dd043e9722e6.jpeg",
        price: "23.1",
        number: "0"
      },
      {
        id: "1000012",
        kind: "海鲜",
        title: "海鲈鱼 刺少肉多 三去开背",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663757934742-assets/web-upload/8a6e7345-a2b3-48b8-8421-f54b99883d63.jpeg",
        price: "17.8",
        number: ""
      },
      {
        id: "1000013",
        kind: "休闲食品",
        title: "风味鸭脖 精工慢卤 鲜香入骨",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758151970-assets/web-upload/504b6c2b-8dae-4417-ab67-51576955fcd6.jpeg",
        price: "23.3",
        number: false
      },
      {
        id: "1000014",
        kind: "休闲食品",
        title: "蛋黄酥 蛋香诱人 皮酥馅滑",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758299139-assets/web-upload/894f4db6-09c0-44a4-9af3-276e7c1e88d9.jpeg",
        price: "37.6",
        number: "9999999"
      },
      {
        id: "1000015",
        kind: "休闲食品",
        title: "夹心豆卷 精挑细选 香味十足",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758458286-assets/web-upload/b350857d-c9e3-4d9e-9ba6-0f81194b79d0.jpeg",
        price: "37.6",
        number: "17"
      }
    ]
  });

  return data;
};
