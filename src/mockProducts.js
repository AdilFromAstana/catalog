const mockProducts = [
  {
    id: "11636226b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 20930,
    priceFormatted: "20 930 ₸",
    createdTime: "2024-09-22T21:26:09.005Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p50/p63/3771547.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p50/p63/3771547.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p50/p63/3771547.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p10/p66/3771551.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p10/p66/3771551.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p10/p66/3771551.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/p66/3771553.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/p66/3771553.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/p66/3771553.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p66/3771555.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p66/3771555.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p66/3771555.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd6/p66/3771558.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd6/p66/3771558.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd6/p66/3771558.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p7a/p69/3771561.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p7a/p69/3771561.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p7a/p69/3771561.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/peb/p69/3771565.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/peb/p69/3771565.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/peb/p69/3771565.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p3f/p6a/3771568.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p3f/p6a/3771568.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p3f/p6a/3771568.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/p6d/3771572.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/p6d/3771572.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/p6d/3771572.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11267230b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 40243,
    priceFormatted: "40 243 ₸",
    createdTime: "2024-06-26T06:47:16.314Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h6d/hdb/84205976322078.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h6d/hdb/84205976322078.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h6d/hdb/84205976322078.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h85/hc7/84205976354846.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h85/hc7/84205976354846.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h85/hc7/84205976354846.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h4e/h43/84205976387614.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h4e/h43/84205976387614.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h4e/h43/84205976387614.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/ha1/h64/84205976420382.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/ha1/h64/84205976420382.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/ha1/h64/84205976420382.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hcd/h35/84205976485918.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hcd/h35/84205976485918.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hcd/h35/84205976485918.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h94/he0/84205976518686.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h94/he0/84205976518686.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h94/he0/84205976518686.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/hf6/84205976551454.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/hf6/84205976551454.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/hf6/84205976551454.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h2c/h01/84205976584222.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h2c/h01/84205976584222.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h2c/h01/84205976584222.png?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15151517b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 31493,
    priceFormatted: "31 493 ₸",
    createdTime: "2024-10-19T07:16:39.063Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/p43/15234146.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/p43/15234146.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/p43/15234146.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf7/p43/15234147.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf7/p43/15234147.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf7/p43/15234147.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p13/p44/15234148.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p13/p44/15234148.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p13/p44/15234148.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p30/p44/15234149.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p30/p44/15234149.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p30/p44/15234149.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p46/15234150.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p46/15234150.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p46/15234150.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p46/15234152.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p46/15234152.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p46/15234152.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/p47/15234154.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/p47/15234154.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/p47/15234154.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/p47/15234156.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/p47/15234156.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/p47/15234156.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/p47/15234158.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/p47/15234158.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/p47/15234158.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p99/p47/15234159.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p99/p47/15234159.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p99/p47/15234159.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11295760b",
    title: "Демисезонная куртка MINESTONE серый",
    color: "gray",
    brand: "MINESTONE",
    unitPrice: 17430,
    priceFormatted: "17 430 ₸",
    createdTime: "2024-06-04T18:19:59.144Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pac/pc6/3770366.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pac/pc6/3770366.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pac/pc6/3770366.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc8/pc6/3770367.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc8/pc6/3770367.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc8/pc6/3770367.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe4/pc6/3770368.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe4/pc6/3770368.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe4/pc6/3770368.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/pc7/3770369.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/pc7/3770369.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/pc7/3770369.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p6c/pc9/3770370.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p6c/pc9/3770370.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p6c/pc9/3770370.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/pc9/3770371.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/pc9/3770371.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/pc9/3770371.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa5/pc9/3770372.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa5/pc9/3770372.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa5/pc9/3770372.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/pc9/3770373.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/pc9/3770373.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/pc9/3770373.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdd/pc9/3770374.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdd/pc9/3770374.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdd/pc9/3770374.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf9/pc9/3770375.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf9/pc9/3770375.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf9/pc9/3770375.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские легкие куртки и ветровки"],
  },
  {
    id: "15069206b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 34993,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-10-10T10:33:17.197Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/pc4/3354606.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/pc4/3354606.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/pc4/3354606.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/pc4/3354607.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/pc4/3354607.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/pc4/3354607.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p83/pc4/3354608.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p83/pc4/3354608.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p83/pc4/3354608.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p67/pc4/3354609.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p67/pc4/3354609.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p67/pc4/3354609.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pfb/pc1/3354610.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pfb/pc1/3354610.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pfb/pc1/3354610.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11606015b",
    title: "Зимняя куртка MINESTONE зеленый",
    color: "green",
    brand: "MINESTONE",
    unitPrice: 23994,
    priceFormatted: "23 994 ₸",
    createdTime: "2024-09-22T05:32:47.759Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/pce/9145308.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/pce/9145308.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/pce/9145308.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pfe/pce/9145309.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pfe/pce/9145309.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pfe/pce/9145309.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p87/pd1/9145311.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p87/pd1/9145311.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p87/pd1/9145311.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/pd1/9145314.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/pd1/9145314.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/pd1/9145314.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf7/pd1/9145315.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf7/pd1/9145315.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf7/pd1/9145315.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p14/pd2/9145316.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p14/pd2/9145316.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p14/pd2/9145316.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pd2/9145318.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pd2/9145318.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pd2/9145318.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p68/pd2/9145319.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p68/pd2/9145319.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p68/pd2/9145319.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf0/pd4/9145321.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf0/pd4/9145321.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf0/pd4/9145321.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11725556b",
    title: "Зимняя куртка MINESTONE серый",
    color: "gray",
    brand: "MINESTONE",
    unitPrice: 29994,
    priceFormatted: "29 994 ₸",
    createdTime: "2024-09-22T02:59:20.748Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h77/hcb/84676542300190.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h77/hcb/84676542300190.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h77/hcb/84676542300190.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h08/h31/84676542365726.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h08/h31/84676542365726.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h08/h31/84676542365726.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hd0/ha2/84676542431262.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hd0/ha2/84676542431262.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hd0/ha2/84676542431262.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h7b/84676542496798.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h7b/84676542496798.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h7b/84676542496798.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h19/h11/84676542562334.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h19/h11/84676542562334.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h19/h11/84676542562334.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/ha9/h9d/84676542627870.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/ha9/h9d/84676542627870.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/ha9/h9d/84676542627870.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h9e/h80/84676542693406.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h9e/h80/84676542693406.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h9e/h80/84676542693406.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hf2/h0b/84676542758942.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hf2/h0b/84676542758942.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hf2/h0b/84676542758942.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h1b/he2/84676542824478.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h1b/he2/84676542824478.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h1b/he2/84676542824478.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h7c/h3e/84676542890014.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h7c/h3e/84676542890014.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h7c/h3e/84676542890014.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15061859b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 38493,
    priceFormatted: "38 493 ₸",
    createdTime: "2024-10-09T10:13:30.519Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/p55/9157364.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/p55/9157364.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/p55/9157364.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb1/p54/9157367.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb1/p54/9157367.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb1/p54/9157367.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p52/9157370.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p52/9157370.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p52/9157370.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p51/9157372.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p51/9157372.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p51/9157372.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p51/9157374.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p51/9157374.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p51/9157374.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/p51/9157375.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/p51/9157375.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/p51/9157375.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15068840b",
    title: "Поло MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 8043,
    priceFormatted: "8 043 ₸",
    createdTime: "2024-10-10T10:12:16.535Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p24/p7f/3370429.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p24/p7f/3370429.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p24/p7f/3370429.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb8/p7c/3370430.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb8/p7c/3370430.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb8/p7c/3370430.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p7c/3370431.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p7c/3370431.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/p7c/3370431.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/p7c/3370432.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/p7c/3370432.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/p7c/3370432.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p64/p7c/3370433.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p64/p7c/3370433.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p64/p7c/3370433.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/p7c/3370434.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/p7c/3370434.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/p7c/3370434.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p2c/p7c/3370435.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p2c/p7c/3370435.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p2c/p7c/3370435.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "11295765b",
    title: "Демисезонная куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 17430,
    priceFormatted: "17 430 ₸",
    createdTime: "2024-06-04T18:20:02.475Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb6/p17/3770131.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb6/p17/3770131.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb6/p17/3770131.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9a/p17/3770132.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9a/p17/3770132.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9a/p17/3770132.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p7e/p17/3770133.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p7e/p17/3770133.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p7e/p17/3770133.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p62/p17/3770134.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p62/p17/3770134.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p62/p17/3770134.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/p17/3770135.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/p17/3770135.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/p17/3770135.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p29/p17/3770136.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p29/p17/3770136.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p29/p17/3770136.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p17/3770137.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p17/3770137.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p17/3770137.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/p16/3770138.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/p16/3770138.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/p16/3770138.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd5/p16/3770139.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd5/p16/3770139.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd5/p16/3770139.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/p14/3770140.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/p14/3770140.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/p14/3770140.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские легкие куртки и ветровки"],
  },
  {
    id: "11590297b",
    title: "Демисезонная куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 14340,
    priceFormatted: "14 340 ₸",
    createdTime: "2024-06-04T18:19:50.683Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf8/pc5/3772438.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf8/pc5/3772438.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf8/pc5/3772438.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p14/pc6/3772439.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p14/pc6/3772439.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p14/pc6/3772439.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/pc8/3772440.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/pc8/3772440.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p80/pc8/3772440.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9d/pc8/3772441.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9d/pc8/3772441.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9d/pc8/3772441.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb9/pc8/3772442.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb9/pc8/3772442.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb9/pc8/3772442.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd5/pc8/3772443.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd5/pc8/3772443.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd5/pc8/3772443.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские легкие куртки и ветровки"],
  },
  {
    id: "11267234b",
    title: "Зимняя куртка MINESTONE коричневый",
    color: "brown",
    brand: "MINESTONE",
    unitPrice: 31194,
    priceFormatted: "31 194 ₸",
    createdTime: "2024-06-26T06:34:11.609Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p43/p08/5182229.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p43/p08/5182229.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p43/p08/5182229.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbb/p05/5182231.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbb/p05/5182231.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbb/p05/5182231.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p82/p05/5182233.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p82/p05/5182233.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p82/p05/5182233.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4a/p05/5182235.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4a/p05/5182235.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4a/p05/5182235.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd9/p04/5182239.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd9/p04/5182239.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd9/p04/5182239.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/p02/5182241.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/p02/5182241.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/p02/5182241.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/p02/5182242.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/p02/5182242.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/p02/5182242.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pfc/p01/5182244.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pfc/p01/5182244.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pfc/p01/5182244.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15305633b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 34993,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-11-12T10:50:43.066Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd8/p0f/15348987.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd8/p0f/15348987.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd8/p0f/15348987.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p0f/15348988.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p0f/15348988.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p0f/15348988.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p0f/15348989.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p0f/15348989.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p0f/15348989.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p34/p0d/15348990.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p34/p0d/15348990.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p34/p0d/15348990.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p17/p0d/15348991.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p17/p0d/15348991.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p17/p0d/15348991.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pfb/p0c/15348992.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pfb/p0c/15348992.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pfb/p0c/15348992.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdf/p0c/15348993.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdf/p0c/15348993.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdf/p0c/15348993.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc3/p0c/15348994.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc3/p0c/15348994.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc3/p0c/15348994.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa7/p0c/15348995.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa7/p0c/15348995.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa7/p0c/15348995.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p8b/p0c/15348996.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p8b/p0c/15348996.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p8b/p0c/15348996.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11636225b",
    title: "Зимняя куртка MINESTONE синий",
    color: "blue",
    brand: "MINESTONE",
    unitPrice: 20930,
    priceFormatted: "20 930 ₸",
    createdTime: "2024-09-22T20:19:32.810Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb8/pcc/3771735.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb8/pcc/3771735.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb8/pcc/3771735.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/pcc/3771736.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/pcc/3771736.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9c/pcc/3771736.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p64/pcc/3771738.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p64/pcc/3771738.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p64/pcc/3771738.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/pc9/3771740.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/pc9/3771740.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/pc9/3771740.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/pc9/3771742.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/pc9/3771742.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/pc9/3771742.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc9/3771744.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc9/3771744.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc9/3771744.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/pc9/3771745.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/pc9/3771745.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/pc9/3771745.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/pc9/3771747.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/pc9/3771747.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/pc9/3771747.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11303311b",
    title: "Зимняя куртка MINESTONE коричневый",
    color: "brown",
    brand: "MINESTONE",
    unitPrice: 23994,
    priceFormatted: "23 994 ₸",
    createdTime: "2024-06-26T06:33:59.813Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hd3/h32/84223719178270.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hd3/h32/84223719178270.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hd3/h32/84223719178270.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/he8/h90/84223719243806.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/he8/h90/84223719243806.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/he8/h90/84223719243806.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h1d/hb2/84223719309342.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h1d/hb2/84223719309342.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h1d/hb2/84223719309342.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hf4/hda/84223719374878.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hf4/hda/84223719374878.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hf4/hda/84223719374878.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hc6/h4e/84223719440414.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hc6/h4e/84223719440414.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hc6/h4e/84223719440414.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hc9/h3d/84223719505950.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hc9/h3d/84223719505950.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hc9/h3d/84223719505950.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hd2/h98/84223719571486.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hd2/h98/84223719571486.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hd2/h98/84223719571486.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h4c/hfe/84223719637022.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h4c/hfe/84223719637022.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h4c/hfe/84223719637022.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15310460b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 30093,
    priceFormatted: "30 093 ₸",
    createdTime: "2024-11-13T07:58:34.646Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p15/14466198.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p15/14466198.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p15/14466198.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p15/14466199.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p15/14466199.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p15/14466199.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd3/p5f/14466200.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd3/p5f/14466200.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd3/p5f/14466200.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf0/p5f/14466201.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf0/p5f/14466201.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf0/p5f/14466201.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/p60/14466202.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/p60/14466202.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/p60/14466202.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/p60/14466203.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/p60/14466203.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/p60/14466203.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/p60/14466204.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/p60/14466204.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/p60/14466204.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11658380b",
    title: "Джинсы прямые MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    categoryId: "01022",
    unitPrice: 15990,
    priceFormatted: "15 990 ₸",
    createdTime: "2023-11-27T19:11:28.423Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hdd/h0a/87040921894942.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hdd/h0a/87040921894942.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hdd/h0a/87040921894942.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h97/87040921927710.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h97/87040921927710.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h14/h97/87040921927710.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h4b/hcb/87040921960478.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h4b/hcb/87040921960478.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h4b/hcb/87040921960478.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h88/h3f/87040921993246.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h88/h3f/87040921993246.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h88/h3f/87040921993246.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h5d/h4e/87040922026014.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h5d/h4e/87040922026014.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h5d/h4e/87040922026014.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hfb/h38/87040922058782.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hfb/h38/87040922058782.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hfb/h38/87040922058782.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h37/h23/87040922091550.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h37/h23/87040922091550.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h37/h23/87040922091550.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h79/hc7/87040922124318.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h79/hc7/87040922124318.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h79/hc7/87040922124318.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h51/h04/87040922157086.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h51/h04/87040922157086.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h51/h04/87040922157086.jpg?format=preview-large",
      },
    ],
    category: ["Мужские джинсы"],
  },
  {
    id: "11112475b",
    title: "Водолазка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 11990,
    priceFormatted: "11 990 ₸",
    createdTime: "2024-06-01T18:03:30.066Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/6754856.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/6754856.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/6754856.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p32/pc0/6754858.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p32/pc0/6754858.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p32/pc0/6754858.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/pc0/6754859.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/pc0/6754859.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/pc0/6754859.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/paa/pbd/6754860.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/paa/pbd/6754860.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/paa/pbd/6754860.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/pbd/6754861.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/pbd/6754861.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/pbd/6754861.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/pbd/6754862.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/pbd/6754862.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/pbd/6754862.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/pbd/6754863.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/pbd/6754863.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/pbd/6754863.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/pbd/6754864.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/pbd/6754864.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/pbd/6754864.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p1d/pbd/6754865.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p1d/pbd/6754865.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p1d/pbd/6754865.jpg?format=preview-large",
      },
    ],
    category: ["Мужские кардиганы и джемперы"],
  },
  {
    id: "13088276b",
    title: "Поло MINESTONE серый",
    color: "gray",
    brand: "MINESTONE",
    unitPrice: 8043,
    priceFormatted: "8 043 ₸",
    createdTime: "2024-09-06T07:35:17.640Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p84/pca/3370867.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p84/pca/3370867.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p84/pca/3370867.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p68/pca/3370868.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p68/pca/3370868.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p68/pca/3370868.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pca/3370869.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pca/3370869.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pca/3370869.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe0/pc7/3370870.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe0/pc7/3370870.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe0/pc7/3370870.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc4/pc7/3370871.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc4/pc7/3370871.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc4/pc7/3370871.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa7/pc7/3370872.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa7/pc7/3370872.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa7/pc7/3370872.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p8b/pc7/3370873.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p8b/pc7/3370873.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p8b/pc7/3370873.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "15340343b",
    title: "Пуловер MINESTONE темно-серый",
    color: "gray",
    brand: "MINESTONE",
    unitPrice: 15290,
    priceFormatted: "15 290 ₸",
    createdTime: "2024-11-18T09:08:04.433Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/p20/13957655.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/p20/13957655.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/p20/13957655.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p21/13957656.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p21/13957656.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0d/p21/13957656.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p29/p21/13957657.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p29/p21/13957657.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p29/p21/13957657.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p46/p21/13957658.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p46/p21/13957658.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p46/p21/13957658.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p62/p21/13957659.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p62/p21/13957659.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p62/p21/13957659.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/p23/13957660.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/p23/13957660.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/p23/13957660.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pea/p23/13957661.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pea/p23/13957661.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pea/p23/13957661.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/p24/13957662.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/p24/13957662.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/p24/13957662.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p22/p24/13957663.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p22/p24/13957663.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p22/p24/13957663.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p3f/p24/13957664.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p3f/p24/13957664.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p3f/p24/13957664.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p5b/p24/13957665.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p5b/p24/13957665.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p5b/p24/13957665.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p77/p24/13957666.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p77/p24/13957666.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p77/p24/13957666.jpg?format=preview-large",
      },
    ],
    category: ["Мужские кардиганы и джемперы"],
  },
  {
    id: "15341272b",
    title: "Толстовка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 15490,
    unitSalePrice: 15490,
    priceFormatted: "15 490 ₸",
    createdTime: "2024-11-18T10:25:27.323Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p2f/p92/10065094.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p2f/p92/10065094.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p2f/p92/10065094.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4b/p92/10065095.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4b/p92/10065095.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4b/p92/10065095.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p83/p92/10065097.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p83/p92/10065097.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p83/p92/10065097.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p92/10065098.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p92/10065098.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa0/p92/10065098.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p92/10065099.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p92/10065099.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbc/p92/10065099.jpg?format=preview-large",
      },
    ],
    category: ["Мужские толстовки и свитшоты"],
  },
  {
    id: "15398159b",
    title: "Толстовка MINESTONE графит",
    color: "graphite",
    brand: "MINESTONE",
    unitPrice: 19590,
    priceFormatted: "19 590 ₸",
    createdTime: "2024-11-26T12:50:15.445Z",

    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4e/pbb/11588395.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4e/pbb/11588395.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4e/pbb/11588395.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p5c/p6d/11588410.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p5c/p6d/11588410.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p5c/p6d/11588410.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd6/p69/11588421.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd6/p69/11588421.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd6/p69/11588421.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pba/p69/11588422.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pba/p69/11588422.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pba/p69/11588422.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9e/p69/11588423.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9e/p69/11588423.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9e/p69/11588423.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p69/11588424.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p69/11588424.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p69/11588424.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p65/p69/11588425.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p65/p69/11588425.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p65/p69/11588425.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/p69/11588426.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/p69/11588426.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/p69/11588426.jpg?format=preview-large",
      },
    ],
    category: ["Мужские толстовки и свитшоты"],
  },
  {
    id: "11811055b",
    title: "Зимняя куртка MINESTONE хаки",
    color: "khaki",
    brand: "MINESTONE",
    unitPrice: 29994,
    priceFormatted: "29 994 ₸",
    createdTime: "2024-09-22T04:16:29.071Z",

    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/p21/4957508.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/p21/4957508.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/p21/4957508.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0e/p1f/4957512.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0e/p1f/4957512.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0e/p1f/4957512.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9d/p1e/4957516.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9d/p1e/4957516.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9d/p1e/4957516.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdc/p1b/4957520.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdc/p1b/4957520.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdc/p1b/4957520.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/p1b/4957525.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/p1b/4957525.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/p1b/4957525.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p73/p18/4957530.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p73/p18/4957530.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p73/p18/4957530.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p02/p18/4957534.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p02/p18/4957534.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p02/p18/4957534.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p09/p15/4957540.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p09/p15/4957540.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p09/p15/4957540.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p98/p14/4957544.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p98/p14/4957544.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p98/p14/4957544.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/p14/4957547.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/p14/4957547.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/p14/4957547.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15340334b",
    title: "Лонгслив MINESTONE темно-синий",
    color: "blue",
    brand: "MINESTONE",
    unitPrice: 13990,
    priceFormatted: "13 990 ₸",
    createdTime: "2024-11-18T09:07:42.310Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/p11/10089047.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/p11/10089047.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/p11/10089047.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p33/p14/10089050.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p33/p14/10089050.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p33/p14/10089050.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/p14/10089052.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/p14/10089052.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/p14/10089052.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/p14/10089054.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/p14/10089054.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/p14/10089054.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdc/p14/10089056.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdc/p14/10089056.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdc/p14/10089056.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "15068842b",
    title: "Поло MINESTONE белый",
    color: "white",
    brand: "MINESTONE",
    unitPrice: 8043,
    priceFormatted: "8 043 ₸",
    createdTime: "2024-10-10T10:12:51.926Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/pf0/3370304.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/pf0/3370304.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/pf0/3370304.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/pf0/3370305.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/pf0/3370305.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/pf0/3370305.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p19/pf0/3370306.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p19/pf0/3370306.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p19/pf0/3370306.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe1/pef/3370308.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe1/pef/3370308.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe1/pef/3370308.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p58/ped/3370310.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p58/ped/3370310.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p58/ped/3370310.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p3c/ped/3370311.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p3c/ped/3370311.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p3c/ped/3370311.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p20/ped/3370312.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p20/ped/3370312.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p20/ped/3370312.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "11814540b",
    title: "MINESTONE MST-1-С23-M40 зеленый",
    color: "green",
    brand: "MINESTONE",
    unitPrice: 11193,
    priceFormatted: "11 193 ₸",
    createdTime: "2024-01-03T08:31:02.043Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h43/hae/87153773903902.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h43/hae/87153773903902.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h43/hae/87153773903902.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h98/he2/87153773969438.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h98/he2/87153773969438.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h98/he2/87153773969438.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h2b/h50/87153774034974.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h2b/h50/87153774034974.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h2b/h50/87153774034974.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/hdc/87153774100510.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/hdc/87153774100510.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h58/hdc/87153774100510.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h52/hef/87153774166046.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h52/hef/87153774166046.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h52/hef/87153774166046.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h4c/h92/87153774231582.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h4c/h92/87153774231582.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h4c/h92/87153774231582.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hf6/h7e/87153774297118.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hf6/h7e/87153774297118.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hf6/h7e/87153774297118.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h00/87153774362654.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h00/87153774362654.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h00/87153774362654.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/ha0/h20/87153774428190.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/ha0/h20/87153774428190.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/ha0/h20/87153774428190.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h22/h91/87153774493726.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h22/h91/87153774493726.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h22/h91/87153774493726.jpg?format=preview-large",
      },
    ],
    category: ["Мужские брюки"],
  },
  {
    id: "15010418b",
    title: "Джемпер MINESTONE темно-синий",
    color: "blue",
    brand: "MINESTONE",
    unitPrice: 19990,
    priceFormatted: "19 990 ₸",
    createdTime: "2024-10-03T11:51:22.084Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/pf4/9624763.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/pf4/9624763.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0c/pf4/9624763.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/pf4/9624764.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/pf4/9624764.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/pf4/9624764.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/pf4/9624765.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/pf4/9624765.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p44/pf4/9624765.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p60/pf4/9624766.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p60/pf4/9624766.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p60/pf4/9624766.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/pf4/9624767.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/pf4/9624767.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/pf4/9624767.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/pfe/9624795.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/pfe/9624795.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/pfe/9624795.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc7/pb2/9624817.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc7/pb2/9624817.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc7/pb2/9624817.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/pb0/9624821.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/pb0/9624821.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/pb0/9624821.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/paf/9624823.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/paf/9624823.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pce/paf/9624823.jpg?format=preview-large",
      },
    ],
    category: ["Мужские кардиганы и джемперы"],
  },
  {
    id: "11634401b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 31194,
    priceFormatted: "31 194 ₸",
    createdTime: "2024-09-22T13:01:11.609Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/p42/5088413.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/p42/5088413.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/p42/5088413.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p18/p42/5088419.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p18/p42/5088419.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p18/p42/5088419.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p1f/p3f/5088425.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p1f/p3f/5088425.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p1f/p3f/5088425.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p26/p3c/5088431.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p26/p3c/5088431.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p26/p3c/5088431.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/p3b/5088437.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/p3b/5088437.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p7d/p3b/5088437.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p84/p38/5088443.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p84/p38/5088443.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p84/p38/5088443.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/p37/5088449.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/p37/5088449.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdb/p37/5088449.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p1b/p35/5088453.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p1b/p35/5088453.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p1b/p35/5088453.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/p34/5088455.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/p34/5088455.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/p34/5088455.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15068793b",
    title: "Свитер MINESTONE графит",
    color: "graphite",
    brand: "MINESTONE",
    unitPrice: 16990,
    priceFormatted: "16 990 ₸",
    createdTime: "2024-10-10T10:01:25.058Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbb/p43/3346634.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbb/p43/3346634.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbb/p43/3346634.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p77/p3c/3346658.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p77/p3c/3346658.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p77/p3c/3346658.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/p36/3346670.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/p36/3346670.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/p36/3346670.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/p36/3346673.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/p36/3346673.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/p36/3346673.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p15/p36/3346674.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p15/p36/3346674.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p15/p36/3346674.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf8/p35/3346675.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf8/p35/3346675.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf8/p35/3346675.jpg?format=preview-large",
      },
    ],
    category: ["Мужские кардиганы и джемперы"],
  },
  {
    id: "15151377b",
    title: "Пуховик MINESTONE синий",
    color: "blue",
    brand: "MINESTONE",
    unitPrice: 34993,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-10-19T06:38:30.488Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p19/pa0/15581922.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p19/pa0/15581922.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p19/pa0/15581922.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/pa0/15581923.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/pa0/15581923.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/pa0/15581923.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/pa0/15581924.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/pa0/15581924.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/pa0/15581924.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p6d/pa0/15581925.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p6d/pa0/15581925.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p6d/pa0/15581925.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/pa0/15581926.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/pa0/15581926.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/pa0/15581926.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa6/pa0/15581927.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa6/pa0/15581927.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa6/pa0/15581927.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc2/pa0/15581928.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc2/pa0/15581928.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc2/pa0/15581928.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/pa0/15581929.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/pa0/15581929.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/pa0/15581929.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4a/pa3/15581930.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4a/pa3/15581930.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4a/pa3/15581930.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p66/pa3/15581931.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p66/pa3/15581931.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p66/pa3/15581931.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p82/pa3/15581932.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p82/pa3/15581932.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p82/pa3/15581932.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9f/pa3/15581933.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9f/pa3/15581933.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9f/pa3/15581933.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "11267259b",
    title: "Зимняя куртка MINESTONE серый",
    color: "gray",
    brand: "MINESTONE",
    unitPrice: 29994,
    priceFormatted: "29 994 ₸",
    createdTime: "2024-06-25T08:55:30.484Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pdd/pdb/5183288.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pdd/pdb/5183288.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pdd/pdb/5183288.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb9/pde/5183293.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb9/pde/5183293.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb9/pde/5183293.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p2a/pdf/5183297.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p2a/pdf/5183297.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p2a/pdf/5183297.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/pd6/5183301.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/pd6/5183301.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/pd6/5183301.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc0/pd5/5183307.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc0/pd5/5183307.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc0/pd5/5183307.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pff/pd2/5183311.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pff/pd2/5183311.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pff/pd2/5183311.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/pd2/5183315.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/pd2/5183315.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/pd2/5183315.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/pd2/5183317.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/pd2/5183317.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/pd2/5183317.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15319585b",
    title: "Джинсы прямые MINESTONE синий",
    color: "blue",
    brand: "MINESTONE",
    categoryId: "01022",
    unitPrice: 11193,
    priceFormatted: "11 193 ₸",
    createdTime: "2024-11-14T10:42:35.493Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/peb/p69/9497445.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/peb/p69/9497445.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/peb/p69/9497445.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p07/p6a/9497446.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p07/p6a/9497446.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p07/p6a/9497446.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p23/p6a/9497447.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p23/p6a/9497447.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p23/p6a/9497447.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p5b/p6a/9497449.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p5b/p6a/9497449.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p5b/p6a/9497449.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/p6d/9497452.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/p6d/9497452.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/p6d/9497452.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p38/p6d/9497454.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p38/p6d/9497454.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p38/p6d/9497454.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p54/p6d/9497455.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p54/p6d/9497455.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p54/p6d/9497455.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p8d/p6d/9497457.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p8d/p6d/9497457.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p8d/p6d/9497457.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/p70/9497460.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/p70/9497460.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/p70/9497460.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/pc6/9497507.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/pc6/9497507.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p49/pc6/9497507.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/pd4/9497549.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/pd4/9497549.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p28/pd4/9497549.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe8/pd6/9497553.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe8/pd6/9497553.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe8/pd6/9497553.jpg?format=preview-large",
      },
    ],
    category: ["Мужские джинсы"],
  },
  {
    id: "15340335b",
    title: "Лонгслив MINESTONE белый",
    color: "white",
    brand: "MINESTONE",
    unitPrice: 13990,
    priceFormatted: "13 990 ₸",
    createdTime: "2024-11-18T09:07:45.146Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc3/pb1/10090203.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc3/pb1/10090203.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc3/pb1/10090203.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p34/pb2/10090207.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p34/pb2/10090207.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p34/pb2/10090207.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p2d/pb5/10090213.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p2d/pb5/10090213.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p2d/pb5/10090213.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "11112529b",
    title: "Водолазка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 11990,
    priceFormatted: "11 990 ₸",
    createdTime: "2024-06-01T18:48:54.766Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6219864.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6219864.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6219864.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe3/pda/6219869.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe3/pda/6219869.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe3/pda/6219869.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/pd8/6219874.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/pd8/6219874.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p06/pd8/6219874.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p79/pd7/6219879.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p79/pd7/6219879.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p79/pd7/6219879.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/pd4/6219887.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/pd4/6219887.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/pd4/6219887.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p87/pd1/6219891.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p87/pd1/6219891.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p87/pd1/6219891.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pfa/pd0/6219896.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pfa/pd0/6219896.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pfa/pd0/6219896.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/p86/6219903.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/p86/6219903.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/p86/6219903.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p24/p83/6219910.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p24/p83/6219910.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p24/p83/6219910.jpg?format=preview-large",
      },
    ],
    category: ["Мужские кардиганы и джемперы"],
  },
  {
    id: "11112532b",
    title: "Водолазка MINESTONE серый",
    color: "gray",
    brand: "MINESTONE",
    unitPrice: 11990,
    priceFormatted: "11 990 ₸",
    createdTime: "2024-06-01T18:03:23.619Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd7/p56/6754954.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd7/p56/6754954.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd7/p56/6754954.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p9e/p56/6754956.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p9e/p56/6754956.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p9e/p56/6754956.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p66/p56/6754958.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p66/p56/6754958.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p66/p56/6754958.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/p53/6754960.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/p53/6754960.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/p53/6754960.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/p53/6754961.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/p53/6754961.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc1/p53/6754961.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/p53/6754963.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/p53/6754963.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p89/p53/6754963.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/p53/6754965.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/p53/6754965.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p51/p53/6754965.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/p53/6754966.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/p53/6754966.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p35/p53/6754966.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p18/p53/6754967.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p18/p53/6754967.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p18/p53/6754967.jpg?format=preview-large",
      },
    ],
    category: ["Мужские кардиганы и джемперы"],
  },
  {
    id: "15157082b",
    title: "Зимняя куртка MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 37093,
    priceFormatted: "37 093 ₸",
    createdTime: "2024-10-20T16:01:11.694Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/pe5/9628419.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/pe5/9628419.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p48/pe5/9628419.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd1/pe7/9628421.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd1/pe7/9628421.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd1/pe7/9628421.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p41/pe8/9628425.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p41/pe8/9628425.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p41/pe8/9628425.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb2/pe8/9628429.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb2/pe8/9628429.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb2/pe8/9628429.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/peb/9628432.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/peb/9628432.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p56/peb/9628432.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc7/peb/9628436.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc7/peb/9628436.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc7/peb/9628436.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/pec/9628438.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/pec/9628438.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p00/pec/9628438.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa4/pee/9628441.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa4/pee/9628441.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa4/pee/9628441.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc0/pee/9628442.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc0/pee/9628442.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc0/pee/9628442.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p15/pef/9628445.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p15/pef/9628445.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p15/pef/9628445.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/pef/9628446.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/pef/9628446.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p31/pef/9628446.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/pef/9628448.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/pef/9628448.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p69/pef/9628448.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/pef/9628449.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/pef/9628449.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/pef/9628449.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/pf1/9628450.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/pf1/9628450.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf1/pf1/9628450.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0e/pf2/9628451.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0e/pf2/9628451.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0e/pf2/9628451.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "12085118b",
    title: "Классические брюки MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 18390,
    priceFormatted: "18 390 ₸",
    createdTime: "2024-03-10T17:44:10.664Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/he3/h27/86965365768222.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/he3/h27/86965365768222.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/he3/h27/86965365768222.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hef/h71/86965365899294.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hef/h71/86965365899294.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hef/h71/86965365899294.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h69/hf8/86965366161438.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h69/hf8/86965366161438.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h69/hf8/86965366161438.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h62/h64/86965366292510.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h62/h64/86965366292510.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h62/h64/86965366292510.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/he4/h38/86965366423582.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/he4/h38/86965366423582.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/he4/h38/86965366423582.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hac/ha3/86965366685726.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hac/ha3/86965366685726.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hac/ha3/86965366685726.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h66/h06/86965366816798.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h66/h06/86965366816798.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h66/h06/86965366816798.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h2f/h13/86965367013406.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h2f/h13/86965367013406.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h2f/h13/86965367013406.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h3b/h5d/86965367144478.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h3b/h5d/86965367144478.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h3b/h5d/86965367144478.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hf1/h2e/86965367210014.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hf1/h2e/86965367210014.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hf1/h2e/86965367210014.jpg?format=preview-large",
      },
    ],
    category: ["Мужские брюки"],
  },
  {
    id: "11725557b",
    title: "Зимняя куртка MINESTONE бежевый",
    color: "biege",
    brand: "MINESTONE",
    unitPrice: 29994,
    priceFormatted: "29 994 ₸",
    createdTime: "2024-09-22T07:25:36.107Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h1e/hf7/84676561895454.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h1e/hf7/84676561895454.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h1e/hf7/84676561895454.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h80/h8a/84676561960990.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h80/h8a/84676561960990.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h80/h8a/84676561960990.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/he3/h0f/84676562026526.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/he3/h0f/84676562026526.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/he3/h0f/84676562026526.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h08/hc9/84676562092062.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h08/hc9/84676562092062.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h08/hc9/84676562092062.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h28/h3a/84676562157598.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h28/h3a/84676562157598.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h28/h3a/84676562157598.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h05/h52/84676562223134.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h05/h52/84676562223134.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h05/h52/84676562223134.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h30/hce/84676562288670.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h30/hce/84676562288670.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h30/hce/84676562288670.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hb2/h3f/84676562354206.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hb2/h3f/84676562354206.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hb2/h3f/84676562354206.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hde/h4c/84676562419742.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hde/h4c/84676562419742.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hde/h4c/84676562419742.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "13093207b",
    title: "Рубашка свободного кроя MINESTONE зеленый",
    color: "green",
    brand: "MINESTONE",
    unitPrice: 17990,
    priceFormatted: "17 990 ₸",
    createdTime: "2024-09-06T07:46:41.525Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h82/h1c/87066770243614.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h82/h1c/87066770243614.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h82/h1c/87066770243614.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h78/h20/87066770636830.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h78/h20/87066770636830.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h78/h20/87066770636830.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hd8/h8d/87066771226654.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hd8/h8d/87066771226654.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hd8/h8d/87066771226654.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h53/h11/87066771882014.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h53/h11/87066771882014.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h53/h11/87066771882014.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h56/hcd/87066772406302.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h56/hcd/87066772406302.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h56/hcd/87066772406302.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/he5/h56/87066772668446.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/he5/h56/87066772668446.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/he5/h56/87066772668446.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hd1/h3a/87066772799518.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hd1/h3a/87066772799518.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hd1/h3a/87066772799518.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h1d/h8b/87066773061662.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h1d/h8b/87066773061662.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h1d/h8b/87066773061662.jpg?format=preview-large",
      },
    ],
    category: ["Мужские рубашки"],
  },
  {
    id: "15105059b",
    title: "Джинсы прямые MINESTONE синий",
    color: "blue",
    brand: "MINESTONE",
    unitPrice: 15990,
    priceFormatted: "15 990 ₸",
    createdTime: "2024-10-15T08:49:10.082Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4e/p3b/2185587.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4e/p3b/2185587.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4e/p3b/2185587.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p63/p3e/2185594.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p63/p3e/2185594.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p63/p3e/2185594.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p40/p89/2185602.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p40/p89/2185602.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p40/p89/2185602.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p79/p89/2185604.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p79/p89/2185604.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p79/p89/2185604.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p95/p89/2185605.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p95/p89/2185605.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p95/p89/2185605.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pcd/p89/2185607.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pcd/p89/2185607.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pcd/p89/2185607.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/p8c/2185610.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/p8c/2185610.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/p8c/2185610.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pfe/p8c/2185615.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pfe/p8c/2185615.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pfe/p8c/2185615.jpg?format=preview-large",
      },
    ],
    category: ["Мужские джинсы"],
  },
  {
    id: "15157088b",
    title: "Зимняя куртка MINESTONE зеленый",
    color: "green",
    brand: "MINESTONE",
    unitPrice: 37093,
    priceFormatted: "37 093 ₸",
    createdTime: "2024-10-20T16:01:18.561Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p61/pdb/5936358.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p61/pdb/5936358.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p61/pdb/5936358.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/pdb/5936359.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/pdb/5936359.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p45/pdb/5936359.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbd/pd8/5936361.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbd/pd8/5936361.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbd/pd8/5936361.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/pd8/5936363.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/pd8/5936363.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p85/pd8/5936363.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pd8/5936365.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pd8/5936365.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4c/pd8/5936365.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p50/15272451.jpeg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p50/15272451.jpeg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd4/p50/15272451.jpeg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p3e/p54/15272452.jpeg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p3e/p54/15272452.jpeg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p3e/p54/15272452.jpeg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf4/p86/15272453.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf4/p86/15272453.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf4/p86/15272453.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p2d/p87/15272455.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p2d/p87/15272455.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p2d/p87/15272455.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p87/15272458.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p87/15272458.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p81/p87/15272458.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p22/p6c/15272459.jpeg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p22/p6c/15272459.jpeg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p22/p6c/15272459.jpeg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p37/pb7/15272460.jpeg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p37/pb7/15272460.jpeg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p37/pb7/15272460.jpeg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p26/p8a/15272461.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p26/p8a/15272461.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p26/p8a/15272461.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p42/p8a/15272462.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p42/p8a/15272462.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p42/p8a/15272462.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p5e/p8a/15272463.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p5e/p8a/15272463.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p5e/p8a/15272463.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "15305622b",
    title: "Зимняя куртка MINESTONE серый",
    color: "gray",
    brand: "MINESTONE",
    unitPrice: 34993,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-11-12T10:50:23.841Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa1/pdc/15795485.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa1/pdc/15795485.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa1/pdc/15795485.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pbd/pdc/15795486.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pbd/pdc/15795486.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pbd/pdc/15795486.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd9/pdc/15795487.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd9/pdc/15795487.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd9/pdc/15795487.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pf6/pdc/15795488.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pf6/pdc/15795488.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pf6/pdc/15795488.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p12/pdd/15795489.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p12/pdd/15795489.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p12/pdd/15795489.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p7e/pdf/15795490.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p7e/pdf/15795490.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p7e/pdf/15795490.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pb6/pdf/15795492.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pb6/pdf/15795492.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pb6/pdf/15795492.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pd2/pdf/15795493.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pd2/pdf/15795493.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pd2/pdf/15795493.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pef/pdf/15795494.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pef/pdf/15795494.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pef/pdf/15795494.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p0b/pe0/15795495.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p0b/pe0/15795495.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p0b/pe0/15795495.jpg?format=preview-large",
      },
    ],
    category: ["Мужская верхняя одежда", "Мужские пуховики и зимние куртки"],
  },
  {
    id: "12649765b",
    title: "Поло MINESTONE белый",
    color: "white",
    brand: "MINESTONE",
    unitPrice: 10493,
    priceFormatted: "10 493 ₸",
    createdTime: "2024-06-14T13:30:25.676Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hf2/h3f/86260461305886.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hf2/h3f/86260461305886.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hf2/h3f/86260461305886.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hc5/h51/86260461436958.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hc5/h51/86260461436958.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hc5/h51/86260461436958.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/h0f/86260461633566.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/h0f/86260461633566.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/h0f/86260461633566.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h7e/h32/86260461830174.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h7e/h32/86260461830174.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h7e/h32/86260461830174.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hdb/hf5/86260462288926.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hdb/hf5/86260462288926.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hdb/hf5/86260462288926.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "12547015b",
    title: "Карго MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 11193,
    priceFormatted: "11 193 ₸",
    createdTime: "2024-05-27T12:50:58.140Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h90/hd6/87139650371614.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h90/hd6/87139650371614.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h90/hd6/87139650371614.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h29/h8c/87139650502686.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h29/h8c/87139650502686.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h29/h8c/87139650502686.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h83/h76/87139650568222.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h83/h76/87139650568222.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h83/h76/87139650568222.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h8d/h05/87139650633758.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h8d/h05/87139650633758.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h8d/h05/87139650633758.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h77/h2c/87139650699294.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h77/h2c/87139650699294.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h77/h2c/87139650699294.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h99/87139650764830.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h99/87139650764830.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h95/h99/87139650764830.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h93/h3c/87139650830366.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h93/h3c/87139650830366.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h93/h3c/87139650830366.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hb3/hd4/87139650895902.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hb3/hd4/87139650895902.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hb3/hd4/87139650895902.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h23/h55/87139650961438.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h23/h55/87139650961438.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h23/h55/87139650961438.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h37/hfd/87139651092510.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h37/hfd/87139651092510.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h37/hfd/87139651092510.jpg?format=preview-large",
      },
    ],
    category: ["Мужские брюки"],
  },
  {
    id: "12649706b",
    title: "Поло MINESTONE синий",
    color: "blue",
    brand: "MINESTONE",
    unitPrice: 8813,
    priceFormatted: "8 813 ₸",
    createdTime: "2024-06-14T12:35:47.258Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hee/h4c/86259795001374.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hee/h4c/86259795001374.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hee/h4c/86259795001374.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h30/h4b/86259795066910.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h30/h4b/86259795066910.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h30/h4b/86259795066910.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/ha5/hde/86259795132446.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/ha5/hde/86259795132446.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/ha5/hde/86259795132446.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h25/h01/86259795197982.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h25/h01/86259795197982.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h25/h01/86259795197982.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/ha2/h8f/86259795263518.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/ha2/h8f/86259795263518.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/ha2/h8f/86259795263518.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "12775316b",
    title: "Поло MINESTONE черный",
    color: "black",
    brand: "MINESTONE",
    unitPrice: 9793,
    priceFormatted: "9 793 ₸",
    createdTime: "2024-07-10T10:01:37.919Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/hf2/86477321797662.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/hf2/86477321797662.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/ha3/hf2/86477321797662.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h3a/hcb/86477321994270.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h3a/hcb/86477321994270.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h3a/hcb/86477321994270.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/h12/h98/86477322059806.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/h12/h98/86477322059806.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/h12/h98/86477322059806.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hc6/h3b/86477322125342.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hc6/h3b/86477322125342.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hc6/h3b/86477322125342.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hf0/h55/86477322256414.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hf0/h55/86477322256414.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hf0/h55/86477322256414.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/hfc/h9f/86477322387486.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/hfc/h9f/86477322387486.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/hfc/h9f/86477322387486.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
  {
    id: "11112439b",
    title: "Водолазка MINESTONE бежевый",
    color: "biege",
    brand: "MINESTONE",
    unitPrice: 11990,
    priceFormatted: "11 990 ₸",
    createdTime: "2024-06-01T18:03:10.059Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pff/p5d/6754931.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pff/p5d/6754931.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pff/p5d/6754931.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/p5d/6754932.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/p5d/6754932.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pe2/p5d/6754932.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pc6/p5d/6754933.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pc6/p5d/6754933.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pc6/p5d/6754933.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/paa/p5d/6754934.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/paa/p5d/6754934.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/paa/p5d/6754934.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/p5d/6754935.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/p5d/6754935.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p8e/p5d/6754935.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/p5d/6754936.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/p5d/6754936.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p72/p5d/6754936.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p55/p5d/6754937.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p55/p5d/6754937.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p55/p5d/6754937.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/p5d/6754938.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/p5d/6754938.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p39/p5d/6754938.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p1d/p5d/6754939.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p1d/p5d/6754939.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p1d/p5d/6754939.jpg?format=preview-large",
      },
    ],
    category: ["Мужские кардиганы и джемперы"],
  },
  {
    id: "15068848b",
    title: "Поло MINESTONE коричневый",
    color: "brown",
    brand: "MINESTONE",
    unitPrice: 8043,
    priceFormatted: "8 043 ₸",
    createdTime: "2024-10-10T10:13:15.903Z",
    previewImages: [
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p2b/p1c/3370509.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p2b/p1c/3370509.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p2b/p1c/3370509.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/p19/3370511.png?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/p19/3370511.png?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pa3/p19/3370511.png?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/p19/3370513.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/p19/3370513.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p6b/p19/3370513.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/p19/3370514.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/p19/3370514.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p4f/p19/3370514.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/p19/3370516.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/p19/3370516.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/p16/p19/3370516.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pfa/p18/3370517.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pfa/p18/3370517.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pfa/p18/3370517.jpg?format=preview-large",
      },
      {
        small:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/p18/3370518.jpg?format=preview-small",
        medium:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/p18/3370518.jpg?format=preview-medium",
        large:
          "https://resources.cdn-kaspi.kz/img/m/p/pde/p18/3370518.jpg?format=preview-large",
      },
    ],
    category: ["Мужские футболки и майки"],
  },
];
export default mockProducts;
