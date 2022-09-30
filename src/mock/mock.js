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
        price: "61452568.6"
      }
    ],
    kinds: [
      { kind: "生鲜", children: ["水果", "海鲜", "肉禽蛋", "蔬菜"] },
      { kind: "食品酒饮", children: ["休闲食品", "乳饮冰品", "咖啡", "果汁"] },
      { kind: "箱包", children: ["功能箱包", "潮流女包"] }
    ],
    goodsDetailInfo: [
      {
        id: "100005",
        kind: "肉禽蛋",
        title: "风干牛肉 舌尖上的草原味道",
        stock: "10086",
        create_time: "2022-06-03",
        imgs: [
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568336-assets/web-upload/11d570d5-5598-476d-bbe7-84c5ddcad354.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568531-assets/web-upload/093def87-41f2-4c88-be58-ce32f134ccc1.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568443-assets/web-upload/594acd78-348a-4b79-a44c-9e5199c8a154.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568432-assets/web-upload/dd976bea-64c5-4875-bdd6-a6e5e11812ae.jpeg"
        ],
        price: "28.8",
        detail_imgs: [
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568470-assets/web-upload/615b683f-7ae5-4c77-991c-3158db8633b5.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568115-assets/web-upload/c3b84b95-f494-47d5-8913-3a6d7cd32c37.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568437-assets/web-upload/4af4530f-8f43-4dfd-940a-37006afb41dd.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568430-assets/web-upload/c0147b0e-d757-4126-8840-267ba41731bb.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568490-assets/web-upload/52e0ce8e-844b-4a03-b02b-489d3b5f0b18.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568450-assets/web-upload/df170d74-b28e-403f-9749-57fd5ed03425.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568297-assets/web-upload/3cc61d8d-09f5-4db3-824d-2ce0b5b389ce.jpeg",
          "https://cdn.nlark.com/yuque/0/2021/jpeg/158634/1640790568410-assets/web-upload/dbab8671-d57b-447c-bb11-689520fd460a.jpeg"
        ]
      }
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
        title: "新疆哈密瓜 脆甜多汁汁汁汁汁",
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
        number: "0"
      },
      {
        id: "1000013",
        kind: "休闲食品",
        title: "风味鸭脖 精工慢卤 鲜香入骨",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758151970-assets/web-upload/504b6c2b-8dae-4417-ab67-51576955fcd6.jpeg",
        price: "23.3",
        number: "0"
      },
      {
        id: "1000014",
        kind: "休闲食品",
        title: "蛋黄酥 蛋香诱人 皮酥馅滑",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758299139-assets/web-upload/894f4db6-09c0-44a4-9af3-276e7c1e88d9.jpeg",
        price: "37.6",
        number: "999"
      },
      {
        id: "1000015",
        kind: "休闲食品",
        title: "夹心豆卷 精挑细选 香味十足",
        img:
          "https://cdn.nlark.com/yuque/0/2022/jpeg/660331/1663758458286-assets/web-upload/b350857d-c9e3-4d9e-9ba6-0f81194b79d0.jpeg",
        price: "9.6",
        number: "17"
      }
    ],
    orderAll: [
      {
        id: "10000001",
        status: 1,
        totalPrice: 100,
        products: [
          {
            id: "789123",
            mainTitle: "main title",
            spec: "spec",
            price: 100,
            photo_urls: "",
            quantity: 20
          }
        ],
      },
      {
        id: "10000002",
        status: 2,
        totalPrice: 100,
        products: [
          {
            id: "789123",
            mainTitle: "main title",
            spec: "spec",
            price: 100,
            photo_urls: "",
            quantity: 20
          }
        ],
      },
      {
        id: "10000003",
        status: 1,
        totalPrice: 100,
        products: [
          {
            id: "789123",
            mainTitle: "main title",
            spec: "spec",
            price: 100,
            photo_urls: "",
            quantity: 20
          }
        ],
      }
    ]
  });

  return data;
};
