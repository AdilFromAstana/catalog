import React, { useEffect, useState } from "react";
import { Layout, Button, Drawer, List, Radio, Input, Slider } from "antd";
import {
  ControlOutlined,
  HeartOutlined,
  LeftOutlined,
  MenuOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import "./App.css";

const { Header, Content } = Layout;

const mockProducts = [
  {
    id: "11636226b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-11636226b/?c=710000000",
    unitPrice: 20930,
    unitSalePrice: 20930,
    unitPriceBeforeDiscount: 29900,
    discount: 30,
    priceFormatted: "20 930 ₸",
    createdTime: "2024-09-22T21:26:09.005Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p50/p63/3771547.jpg?format=preview-small",
    creditMonthlyPrice: 3489.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 489 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-11636226b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.88,
    reviewsQuantity: 93,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11267230b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-11267230b/?c=710000000",
    unitPrice: 40243,
    unitSalePrice: 40243,
    unitPriceBeforeDiscount: 57490,
    discount: 30,
    priceFormatted: "40 243 ₸",
    createdTime: "2024-06-26T06:47:16.314Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h6d/hdb/84205976322078.png?format=preview-small",
    creditMonthlyPrice: 3354.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "3 354 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-11267230b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.94,
    reviewsQuantity: 75,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11267233b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-11267233b/?c=710000000",
    unitPrice: 31194,
    unitSalePrice: 31194,
    unitPriceBeforeDiscount: 51990,
    discount: 40,
    priceFormatted: "31 194 ₸",
    createdTime: "2024-06-26T06:48:37.234Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p2d/p64/5182332.jpg?format=preview-small",
    creditMonthlyPrice: 2600.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 600 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-11267233b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.96,
    reviewsQuantity: 21,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15069206b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-15069206b/?c=710000000",
    unitPrice: 34993,
    unitSalePrice: 34993,
    unitPriceBeforeDiscount: 49990,
    discount: 30,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-10-10T10:33:17.197Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pbc/pc4/3354606.jpg?format=preview-small",
    creditMonthlyPrice: 2917.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 917 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-15069206b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 10,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15151517b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-15151517b/?c=710000000",
    unitPrice: 31493,
    unitSalePrice: 31493,
    unitPriceBeforeDiscount: 44990,
    discount: 30,
    priceFormatted: "31 493 ₸",
    createdTime: "2024-10-19T07:16:39.063Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pdb/p43/15234146.jpg?format=preview-small",
    creditMonthlyPrice: 2625.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 625 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-15151517b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.95,
    reviewsQuantity: 11,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11295760b",
    title: "Демисезонная куртка MINESTONE серый",
    brand: "MINESTONE",
    categoryId: "01161",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/demisezonnaja-kurtka-minestone-seryi-11295760b/?c=710000000",
    unitPrice: 17430,
    unitSalePrice: 17430,
    unitPriceBeforeDiscount: 24900,
    discount: 30,
    priceFormatted: "17 430 ₸",
    createdTime: "2024-06-04T18:19:59.144Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pac/pc6/3770366.jpg?format=preview-small",
    creditMonthlyPrice: 2905.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "2 905 ₸",
    },
    reviewsLink:
      "/p/demisezonnaja-kurtka-minestone-seryi-11295760b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.84,
    reviewsQuantity: 53,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские легкие куртки и ветровки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские легкие куртки и ветровки",
    ],
    categoryCodes: [
      "Men lightweight jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11295765b",
    title: "Демисезонная куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01161",
    hasVariants: true,
    loanAvailable: true,
    shopLink:
      "/p/demisezonnaja-kurtka-minestone-chernyi-11295765b/?c=710000000",
    unitPrice: 17430,
    unitSalePrice: 17430,
    unitPriceBeforeDiscount: 24900,
    discount: 30,
    priceFormatted: "17 430 ₸",
    createdTime: "2024-06-04T18:20:02.475Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pb6/p17/3770131.jpg?format=preview-small",
    creditMonthlyPrice: 2905.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "2 905 ₸",
    },
    reviewsLink:
      "/p/demisezonnaja-kurtka-minestone-chernyi-11295765b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.9,
    reviewsQuantity: 93,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские легкие куртки и ветровки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские легкие куртки и ветровки",
    ],
    categoryCodes: [
      "Men lightweight jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "105607790",
    title: "Термобутылка MINESTONE 0.5 л cas хаки",
    brand: "MINESTONE",
    categoryId: "00910",
    hasVariants: false,
    loanAvailable: true,
    shopLink: "/p/termobutylka-minestone-0-5-l-cas-haki-105607790/?c=710000000",
    unitPrice: 9990,
    unitSalePrice: 9990,
    priceFormatted: "9 990 ₸",
    createdTime: "2022-07-12T16:48:28.484Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/hf8/he8/86383566749726.png?format=preview-small",
    creditMonthlyPrice: 3330.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 330 ₸",
    },
    reviewsLink:
      "/p/termobutylka-minestone-0-5-l-cas-haki-105607790/?c=710000000&tab=reviews",
    weight: 0.0,
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.97,
    reviewsQuantity: 52,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    category: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryRu: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryCodes: [
      "Thermoses and travel mugs",
      "Camping and hiking",
      "Sports and outdoors",
      "Categories",
    ],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15068840b",
    title: "Поло MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01407",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/polo-minestone-chernyi-15068840b/?c=710000000",
    unitPrice: 8043,
    unitSalePrice: 8043,
    unitPriceBeforeDiscount: 11490,
    discount: 30,
    priceFormatted: "8 043 ₸",
    createdTime: "2024-10-10T10:12:16.535Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p2c/p7c/3370435.jpg?format=preview-small",
    creditMonthlyPrice: 2681.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "2 681 ₸",
    },
    reviewsLink: "/p/polo-minestone-chernyi-15068840b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.89,
    reviewsQuantity: 4,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские футболки и майки"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские футболки и майки"],
    categoryCodes: ["Men t-shirts", "Men fashion", "Fashion", "Categories"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11725556b",
    title: "Зимняя куртка MINESTONE серый",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-seryi-11725556b/?c=710000000",
    unitPrice: 29994,
    unitSalePrice: 29994,
    unitPriceBeforeDiscount: 49990,
    discount: 40,
    priceFormatted: "29 994 ₸",
    createdTime: "2024-09-22T02:59:20.748Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h7c/h3e/84676542890014.jpg?format=preview-small",

    creditMonthlyPrice: 2500.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 500 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-seryi-11725556b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 6,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11607010b",
    title: "Зимняя куртка MINESTONE хаки",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-haki-11607010b/?c=710000000",
    unitPrice: 32193,
    unitSalePrice: 32193,
    unitPriceBeforeDiscount: 45990,
    discount: 30,
    priceFormatted: "32 193 ₸",
    createdTime: "2024-09-22T05:32:35.405Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p6b/pbe/13964120.jpg?format=preview-small",
    creditMonthlyPrice: 2683.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 683 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-haki-11607010b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.95,
    reviewsQuantity: 29,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11267256b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-11267256b/?c=710000000",
    unitPrice: 40243,
    unitSalePrice: 40243,
    unitPriceBeforeDiscount: 57490,
    discount: 30,
    priceFormatted: "40 243 ₸",
    createdTime: "2024-06-25T08:27:44.986Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pb0/p6a/5183163.jpg?format=preview-small",
    creditMonthlyPrice: 3354.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "3 354 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-11267256b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.91,
    reviewsQuantity: 56,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15061859b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-15061859b/?c=710000000",
    unitPrice: 38493,
    unitSalePrice: 38493,
    unitPriceBeforeDiscount: 54990,
    discount: 30,
    priceFormatted: "38 493 ₸",
    createdTime: "2024-10-09T10:13:30.519Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p06/p55/9157364.jpg?format=preview-small",
    creditMonthlyPrice: 3208.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "3 208 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-15061859b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 19,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_7_DAYS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],
    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "102589178",
    title: "Термобутылка MINESTONE 0.5 л cas черный",
    brand: "MINESTONE",
    categoryId: "00910",
    hasVariants: false,
    loanAvailable: true,
    shopLink:
      "/p/termobutylka-minestone-0-5-l-cas-chernyi-102589178/?c=710000000",
    unitPrice: 9990,
    unitSalePrice: 9990,
    priceFormatted: "9 990 ₸",
    createdTime: "2021-10-14T17:46:11.593Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h4f/h4e/63956976730142.jpg?format=preview-small",
    creditMonthlyPrice: 3330.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 330 ₸",
    },
    reviewsLink:
      "/p/termobutylka-minestone-0-5-l-cas-chernyi-102589178/?c=710000000&tab=reviews",
    weight: 0.0,
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.86,
    reviewsQuantity: 92,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    category: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryRu: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryCodes: [
      "Thermoses and travel mugs",
      "Camping and hiking",
      "Sports and outdoors",
      "Categories",
    ],
    groups: ["tourism-2023"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11606015b",
    title: "Зимняя куртка MINESTONE зеленый",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-zelenyi-11606015b/?c=710000000",
    unitPrice: 23994,
    unitSalePrice: 23994,
    unitPriceBeforeDiscount: 39990,
    discount: 40,
    priceFormatted: "23 994 ₸",
    createdTime: "2024-09-22T05:32:47.759Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pe2/pce/9145308.jpg?format=preview-small",
    creditMonthlyPrice: 3999.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 999 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-zelenyi-11606015b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.79,
    reviewsQuantity: 14,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15305592b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-15305592b/?c=710000000",
    unitPrice: 27993,
    unitSalePrice: 27993,
    unitPriceBeforeDiscount: 39990,
    discount: 30,
    priceFormatted: "27 993 ₸",
    createdTime: "2024-11-12T10:49:00.997Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pd4/pb3/9156487.jpg?format=preview-small",
    creditMonthlyPrice: 2333.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 333 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-15305592b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 10,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "102589219",
    title: "Термобутылка MINESTONE 0.5 л cas белый",
    brand: "MINESTONE",
    categoryId: "00910",
    hasVariants: false,
    loanAvailable: true,
    shopLink:
      "/p/termobutylka-minestone-0-5-l-cas-belyi-102589219/?c=710000000",
    unitPrice: 9990,
    unitSalePrice: 9990,
    priceFormatted: "9 990 ₸",
    createdTime: "2021-10-14T17:53:54.977Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h93/hfd/63901838508062.jpg?format=preview-small",
    creditMonthlyPrice: 3330.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 330 ₸",
    },
    reviewsLink:
      "/p/termobutylka-minestone-0-5-l-cas-belyi-102589219/?c=710000000&tab=reviews",
    weight: 0.0,
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.93,
    reviewsQuantity: 74,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    category: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryRu: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryCodes: [
      "Thermoses and travel mugs",
      "Camping and hiking",
      "Sports and outdoors",
      "Categories",
    ],
    groups: ["tourism-2023"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11267234b",
    title: "Зимняя куртка MINESTONE коричневый",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-korichnevyi-11267234b/?c=710000000",
    unitPrice: 31194,
    unitSalePrice: 31194,
    unitPriceBeforeDiscount: 51990,
    discount: 40,
    priceFormatted: "31 194 ₸",
    createdTime: "2024-06-26T06:34:11.609Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p43/p08/5182229.jpg?format=preview-small",
    creditMonthlyPrice: 2600.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 600 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-korichnevyi-11267234b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.96,
    reviewsQuantity: 21,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15177080b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-15177080b/?c=710000000",
    unitPrice: 34993,
    unitSalePrice: 34993,
    unitPriceBeforeDiscount: 49990,
    discount: 30,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-10-23T10:58:10.725Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pf5/pba/14466455.jpg?format=preview-small",
    creditMonthlyPrice: 2917.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 917 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-15177080b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.57,
    reviewsQuantity: 5,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "102494515",
    title: "Зажим для купюр MINESTONE 0019 искусственная кожа черный",
    brand: "MINESTONE",
    categoryId: "00794",
    hasVariants: false,
    loanAvailable: true,
    shopLink:
      "/p/zazhim-dlja-kupjur-minestone-0019-iskusstvennaja-kozha-chernyi-102494515/?c=710000000",
    unitPrice: 5500,
    unitSalePrice: 5500,
    priceFormatted: "5 500 ₸",
    createdTime: "2021-10-05T22:23:12.807Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h5e/ha8/64060914106398.jpg?format=preview-small",
    creditMonthlyPrice: 1834.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "1 834 ₸",
    },
    reviewsLink:
      "/p/zazhim-dlja-kupjur-minestone-0019-iskusstvennaja-kozha-chernyi-102494515/?c=710000000&tab=reviews",
    weight: 0.3,
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.8,
    reviewsQuantity: 35,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    baseProductCodes: ["[Master - Wallets][minestone]{0019}"],
    category: [
      "Аксессуары",
      "Сумки, чемоданы, кошельки",
      "Кошельки и визитницы",
    ],
    categoryRu: [
      "Аксессуары",
      "Сумки, чемоданы, кошельки",
      "Кошельки и визитницы",
    ],
    categoryCodes: [
      "Wallets",
      "Travel gear",
      "Fashion accessories",
      "Categories",
    ],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11112529b",
    title: "Водолазка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01308",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/vodolazka-minestone-chernyi-11112529b/?c=710000000",
    unitPrice: 11990,
    unitSalePrice: 11990,
    priceFormatted: "11 990 ₸",
    createdTime: "2024-06-01T18:48:54.766Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p70/pdb/6219864.jpg?format=preview-small",
    creditMonthlyPrice: 3997.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 997 ₸",
    },
    reviewsLink:
      "/p/vodolazka-minestone-chernyi-11112529b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 10,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryCodes: ["Men cardigans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "102589210",
    title: "Термобутылка MINESTONE 0.5 л cas серый",
    brand: "MINESTONE",
    categoryId: "00910",
    hasVariants: false,
    loanAvailable: true,
    shopLink:
      "/p/termobutylka-minestone-0-5-l-cas-seryi-102589210/?c=710000000",
    unitPrice: 9990,
    unitSalePrice: 9990,
    priceFormatted: "9 990 ₸",
    createdTime: "2021-10-14T17:52:16.529Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h4a/hbf/63962751991838.jpg?format=preview-small",
    creditMonthlyPrice: 3330.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 330 ₸",
    },
    reviewsLink:
      "/p/termobutylka-minestone-0-5-l-cas-seryi-102589210/?c=710000000&tab=reviews",
    weight: 0.0,
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.77,
    reviewsQuantity: 48,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    category: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryRu: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryCodes: [
      "Thermoses and travel mugs",
      "Camping and hiking",
      "Sports and outdoors",
      "Categories",
    ],
    groups: ["tourism-2023"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "102589202",
    title: "Термобутылка MINESTONE 0.5 л cas синий",
    brand: "MINESTONE",
    categoryId: "00910",
    hasVariants: false,
    loanAvailable: true,
    shopLink:
      "/p/termobutylka-minestone-0-5-l-cas-sinii-102589202/?c=710000000",
    unitPrice: 9990,
    unitSalePrice: 9990,
    priceFormatted: "9 990 ₸",
    createdTime: "2021-10-14T17:50:41.901Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h74/h5d/63960601690142.jpg?format=preview-small",
    creditMonthlyPrice: 3330.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 330 ₸",
    },
    reviewsLink:
      "/p/termobutylka-minestone-0-5-l-cas-sinii-102589202/?c=710000000&tab=reviews",
    weight: 0.0,
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.88,
    reviewsQuantity: 51,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    category: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryRu: [
      "Спорт, туризм",
      "Туризм и отдых на природе",
      "Термосы и термокружки",
    ],
    categoryCodes: [
      "Thermoses and travel mugs",
      "Camping and hiking",
      "Sports and outdoors",
      "Categories",
    ],
    groups: ["tourism-2023"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11590297b",
    title: "Демисезонная куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01161",
    hasVariants: true,
    loanAvailable: true,
    shopLink:
      "/p/demisezonnaja-kurtka-minestone-chernyi-11590297b/?c=710000000",
    unitPrice: 14340,
    unitSalePrice: 14340,
    unitPriceBeforeDiscount: 23900,
    discount: 40,
    priceFormatted: "14 340 ₸",
    createdTime: "2024-06-04T18:19:50.683Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pf8/pc5/3772438.jpg?format=preview-small",
    creditMonthlyPrice: 4780.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "4 780 ₸",
    },
    reviewsLink:
      "/p/demisezonnaja-kurtka-minestone-chernyi-11590297b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.78,
    reviewsQuantity: 60,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские легкие куртки и ветровки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские легкие куртки и ветровки",
    ],
    categoryCodes: [
      "Men lightweight jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11658380b",
    title: "Джинсы прямые MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01022",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/dzhinsy-prjamye-minestone-chernyi-11658380b/?c=710000000",
    unitPrice: 15990,
    unitSalePrice: 15990,
    priceFormatted: "15 990 ₸",
    createdTime: "2023-11-27T19:11:28.423Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/hdd/h0a/87040921894942.jpg?format=preview-small",
    creditMonthlyPrice: 2665.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "2 665 ₸",
    },
    reviewsLink:
      "/p/dzhinsy-prjamye-minestone-chernyi-11658380b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.89,
    reviewsQuantity: 26,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские джинсы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские джинсы"],
    categoryCodes: ["Men jeans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15340343b",
    title: "Пуловер MINESTONE темно-серый",
    brand: "MINESTONE",
    categoryId: "01308",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/pulover-minestone-temno-seryi-15340343b/?c=710000000",
    unitPrice: 15290,
    unitSalePrice: 15290,
    priceFormatted: "15 290 ₸",
    createdTime: "2024-11-18T09:08:04.433Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pf1/p20/13957655.jpg?format=preview-small",
    creditMonthlyPrice: 2549.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "2 549 ₸",
    },
    reviewsLink:
      "/p/pulover-minestone-temno-seryi-15340343b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 3,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryCodes: ["Men cardigans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15305622b",
    title: "Зимняя куртка MINESTONE серый",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-seryi-15305622b/?c=710000000",
    unitPrice: 34993,
    unitSalePrice: 34993,
    unitPriceBeforeDiscount: 49990,
    discount: 30,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-11-12T10:50:23.841Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pa1/pdc/15795485.jpg?format=preview-small",
    creditMonthlyPrice: 2917.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 917 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-seryi-15305622b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 7,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11112475b",
    title: "Водолазка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01308",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/vodolazka-minestone-chernyi-11112475b/?c=710000000",
    unitPrice: 11990,
    unitSalePrice: 11990,
    priceFormatted: "11 990 ₸",
    createdTime: "2024-06-01T18:03:30.066Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p6b/pc0/6754856.jpg?format=preview-small",
    creditMonthlyPrice: 3997.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 997 ₸",
    },
    reviewsLink:
      "/p/vodolazka-minestone-chernyi-11112475b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.57,
    reviewsQuantity: 10,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryCodes: ["Men cardigans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15398169b",
    title: "Толстовка MINESTONE серый",
    brand: "MINESTONE",
    categoryId: "01328",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/tolstovka-minestone-seryi-15398169b/?c=710000000",
    unitPrice: 19590,
    unitSalePrice: 19590,
    priceFormatted: "19 590 ₸",
    createdTime: "2024-11-26T12:51:02.843Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pea/pcc/11588252.png?format=preview-small",
    creditMonthlyPrice: 3265.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 265 ₸",
    },
    reviewsLink:
      "/p/tolstovka-minestone-seryi-15398169b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.25,
    reviewsQuantity: 3,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryCodes: ["Men hoodies", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15305633b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-15305633b/?c=710000000",
    unitPrice: 34993,
    unitSalePrice: 34993,
    unitPriceBeforeDiscount: 49990,
    discount: 30,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-11-12T10:50:43.066Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pd8/p0f/15348987.jpg?format=preview-small",
    creditMonthlyPrice: 2917.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 917 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-15305633b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.9,
    reviewsQuantity: 7,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11636225b",
    title: "Зимняя куртка MINESTONE синий",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-sinii-11636225b/?c=710000000",
    unitPrice: 20930,
    unitSalePrice: 20930,
    unitPriceBeforeDiscount: 29900,
    discount: 30,
    priceFormatted: "20 930 ₸",
    createdTime: "2024-09-22T20:19:32.810Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pb8/pcc/3771735.jpg?format=preview-small",
    creditMonthlyPrice: 3489.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 489 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-sinii-11636225b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.9,
    reviewsQuantity: 24,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11116391b",
    title: "Свитер MINESTONE синий",
    brand: "MINESTONE",
    categoryId: "01308",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/sviter-minestone-sinii-11116391b/?c=710000000",
    unitPrice: 12990,
    unitSalePrice: 12990,
    priceFormatted: "12 990 ₸",
    createdTime: "2024-09-04T11:12:13.358Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p87/p79/6756026.jpg?format=preview-small",
    creditMonthlyPrice: 4330.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "4 330 ₸",
    },
    reviewsLink: "/p/sviter-minestone-sinii-11116391b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.61,
    reviewsQuantity: 15,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryCodes: ["Men cardigans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15177079b",
    title: "Зимняя куртка MINESTONE серый",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-seryi-15177079b/?c=710000000",
    unitPrice: 34993,
    unitSalePrice: 34993,
    unitPriceBeforeDiscount: 49990,
    discount: 30,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-10-23T10:57:59.447Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pe4/pd0/14466324.jpg?format=preview-small",
    creditMonthlyPrice: 2917.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 917 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-seryi-15177079b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 5,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15398195b",
    title: "Толстовка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01328",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/tolstovka-minestone-chernyi-15398195b/?c=710000000",
    unitPrice: 19590,
    unitSalePrice: 19590,
    priceFormatted: "19 590 ₸",
    createdTime: "2024-11-26T12:58:51.088Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p9a/p8d/11889789.png?format=preview-small",
    creditMonthlyPrice: 3265.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 265 ₸",
    },
    reviewsLink:
      "/p/tolstovka-minestone-chernyi-15398195b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 1,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryCodes: ["Men hoodies", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15151377b",
    title: "Пуховик MINESTONE синий",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/puhovik-minestone-sinii-15151377b/?c=710000000",
    unitPrice: 34993,
    unitSalePrice: 34993,
    unitPriceBeforeDiscount: 49990,
    discount: 30,
    priceFormatted: "34 993 ₸",
    createdTime: "2024-10-19T06:38:30.488Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p19/pa0/15581922.jpg?format=preview-small",
    creditMonthlyPrice: 2917.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 917 ₸",
    },
    reviewsLink:
      "/p/puhovik-minestone-sinii-15151377b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.94,
    reviewsQuantity: 9,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15319585b",
    title: "Джинсы прямые MINESTONE синий",
    brand: "MINESTONE",
    categoryId: "01022",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/dzhinsy-prjamye-minestone-sinii-15319585b/?c=710000000",
    unitPrice: 11193,
    unitSalePrice: 11193,
    unitPriceBeforeDiscount: 15990,
    discount: 30,
    priceFormatted: "11 193 ₸",
    createdTime: "2024-11-14T10:42:35.493Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/peb/p69/9497445.jpg?format=preview-small",
    creditMonthlyPrice: 3731.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 731 ₸",
    },
    reviewsLink:
      "/p/dzhinsy-prjamye-minestone-sinii-15319585b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 1,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские джинсы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские джинсы"],
    categoryCodes: ["Men jeans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11116407b",
    title: "Свитер MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01308",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/sviter-minestone-chernyi-11116407b/?c=710000000",
    unitPrice: 12990,
    unitSalePrice: 12990,
    priceFormatted: "12 990 ₸",
    createdTime: "2024-09-04T11:12:18.558Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pb5/p43/6757894.jpg?format=preview-small",
    creditMonthlyPrice: 4330.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "4 330 ₸",
    },
    reviewsLink:
      "/p/sviter-minestone-chernyi-11116407b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.73,
    reviewsQuantity: 22,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryCodes: ["Men cardigans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15310460b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-15310460b/?c=710000000",
    unitPrice: 30093,
    unitSalePrice: 30093,
    unitPriceBeforeDiscount: 42990,
    discount: 30,
    priceFormatted: "30 093 ₸",
    createdTime: "2024-11-13T07:58:34.646Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pa0/p15/14466198.jpg?format=preview-small",
    creditMonthlyPrice: 2508.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 508 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-15310460b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 1,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "128517502",
    title: "Барсетка MINESTONE Барсетка MST-C24-1-7182-3 полиэстер черный",
    brand: "MINESTONE",
    categoryId: "01770",
    hasVariants: false,
    loanAvailable: true,
    shopLink:
      "/p/barsetka-minestone-barsetka-mst-c24-1-7182-3-poliester-chernyi-128517502/?c=710000000",
    unitPrice: 24990,
    unitSalePrice: 24990,
    priceFormatted: "24 990 ₸",
    createdTime: "2024-10-09T11:46:21.689Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pf7/p4d/3125891.jpg?format=preview-small",
    creditMonthlyPrice: 4165.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "4 165 ₸",
    },
    reviewsLink:
      "/p/barsetka-minestone-barsetka-mst-c24-1-7182-3-poliester-chernyi-128517502/?c=710000000&tab=reviews",
    weight: 0.0,
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 1,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    baseProductCodes: [
      "[Master - Fashion handbags][minestone]{Барсетка MST-C24-1-7182-3}{барсетка}",
    ],
    shortNameText: "",
    category: ["Аксессуары", "Сумки, чемоданы, кошельки", "Сумки"],
    categoryRu: ["Аксессуары", "Сумки, чемоданы, кошельки", "Сумки"],
    categoryCodes: [
      "Fashion handbags",
      "Travel gear",
      "Fashion accessories",
      "Categories",
    ],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15398159b",
    title: "Толстовка MINESTONE графит",
    brand: "MINESTONE",
    categoryId: "01328",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/tolstovka-minestone-grafit-15398159b/?c=710000000",
    unitPrice: 19590,
    unitSalePrice: 19590,
    priceFormatted: "19 590 ₸",
    createdTime: "2024-11-26T12:50:15.445Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p4e/pbb/11588395.png?format=preview-small",
    creditMonthlyPrice: 3265.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 265 ₸",
    },
    reviewsLink:
      "/p/tolstovka-minestone-grafit-15398159b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 0,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryCodes: ["Men hoodies", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15121583b",
    title: "Челси MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "00804",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/chelsi-minestone-chernyi-15121583b/?c=710000000",
    unitPrice: 54490,
    unitSalePrice: 54490,
    priceFormatted: "54 490 ₸",
    createdTime: "2024-10-16T13:22:51.923Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pe3/pee/4571815.jpg?format=preview-small",
    creditMonthlyPrice: 4541.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "4 541 ₸",
    },
    reviewsLink:
      "/p/chelsi-minestone-chernyi-15121583b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.86,
    reviewsQuantity: 5,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_7_DAYS",
    certificateType: "",
    category: ["Обувь", "Мужская обувь", "Мужские ботинки"],
    categoryRu: ["Обувь", "Мужская обувь", "Мужские ботинки"],
    categoryCodes: ["Men boots", "Men shoes", "Shoes", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11267259b",
    title: "Зимняя куртка MINESTONE серый",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-seryi-11267259b/?c=710000000",
    unitPrice: 29994,
    unitSalePrice: 29994,
    unitPriceBeforeDiscount: 49990,
    discount: 40,
    priceFormatted: "29 994 ₸",
    createdTime: "2024-06-25T08:55:30.484Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/pdd/pdb/5183288.jpg?format=preview-small",
    creditMonthlyPrice: 2500.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 500 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-seryi-11267259b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.76,
    reviewsQuantity: 21,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11303311b",
    title: "Зимняя куртка MINESTONE коричневый",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-korichnevyi-11303311b/?c=710000000",
    unitPrice: 23994,
    unitSalePrice: 23994,
    unitPriceBeforeDiscount: 39990,
    discount: 40,
    priceFormatted: "23 994 ₸",
    createdTime: "2024-06-26T06:33:59.813Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/hd3/h32/84223719178270.jpg?format=preview-small",
    creditMonthlyPrice: 3999.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 999 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-korichnevyi-11303311b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.77,
    reviewsQuantity: 9,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15068850b",
    title: "Поло MINESTONE бежевый",
    brand: "MINESTONE",
    categoryId: "01407",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/polo-minestone-bezhevyi-15068850b/?c=710000000",
    unitPrice: 8043,
    unitSalePrice: 8043,
    unitPriceBeforeDiscount: 11490,
    discount: 30,
    priceFormatted: "8 043 ₸",
    createdTime: "2024-10-10T10:13:45.116Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p82/pdb/3370367.png?format=preview-small",
    creditMonthlyPrice: 2681.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "2 681 ₸",
    },
    reviewsLink:
      "/p/polo-minestone-bezhevyi-15068850b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 3,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские футболки и майки"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские футболки и майки"],
    categoryCodes: ["Men t-shirts", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "12547015b",
    title: "Карго MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "00977",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/kargo-minestone-chernyi-12547015b/?c=710000000",
    unitPrice: 11193,
    unitSalePrice: 11193,
    unitPriceBeforeDiscount: 15990,
    discount: 30,
    priceFormatted: "11 193 ₸",
    createdTime: "2024-05-27T12:50:58.140Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/h90/hd6/87139650371614.jpg?format=preview-small",
    creditMonthlyPrice: 3731.0,
    monthlyInstallment: {
      id: 3,
      installment: true,
      formattedPerMonth: "3 731 ₸",
    },
    reviewsLink:
      "/p/kargo-minestone-chernyi-12547015b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.64,
    reviewsQuantity: 16,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские брюки"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские брюки"],
    categoryCodes: ["Men pants", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "11602948b",
    title: "Зимняя куртка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01153",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/zimnjaja-kurtka-minestone-chernyi-11602948b/?c=710000000",
    unitPrice: 32193,
    unitSalePrice: 32193,
    unitPriceBeforeDiscount: 45990,
    discount: 30,
    priceFormatted: "32 193 ₸",
    createdTime: "2024-09-21T20:00:42.207Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p1f/pc6/13964148.jpg?format=preview-small",
    creditMonthlyPrice: 2683.0,
    monthlyInstallment: {
      id: 12,
      installment: true,
      formattedPerMonth: "2 683 ₸",
    },
    reviewsLink:
      "/p/zimnjaja-kurtka-minestone-chernyi-11602948b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 4.91,
    reviewsQuantity: 52,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "TILL_5_DAYS",
    certificateType: "",
    category: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryRu: [
      "Одежда",
      "Мужчинам",
      "Мужская верхняя одежда",
      "Мужские пуховики и зимние куртки",
    ],
    categoryCodes: [
      "Men down jackets",
      "Men outerwear",
      "Men fashion",
      "Fashion",
      "Categories",
    ],
    groups: ["1e580ef1-dfcd-477b-90d7-c94ff1d5d1f8"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15010418b",
    title: "Джемпер MINESTONE темно-синий",
    brand: "MINESTONE",
    categoryId: "01308",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/dzhemper-minestone-temno-sinii-15010418b/?c=710000000",
    unitPrice: 19990,
    unitSalePrice: 19990,
    priceFormatted: "19 990 ₸",
    createdTime: "2024-10-03T11:51:22.084Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p0c/pf4/9624763.jpg?format=preview-small",
    creditMonthlyPrice: 3332.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "3 332 ₸",
    },
    reviewsLink:
      "/p/dzhemper-minestone-temno-sinii-15010418b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 5.0,
    reviewsQuantity: 2,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские кардиганы и джемперы"],
    categoryCodes: ["Men cardigans", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
  {
    id: "15341272b",
    title: "Толстовка MINESTONE черный",
    brand: "MINESTONE",
    categoryId: "01328",
    hasVariants: true,
    loanAvailable: true,
    shopLink: "/p/tolstovka-minestone-chernyi-15341272b/?c=710000000",
    unitPrice: 15490,
    unitSalePrice: 15490,
    priceFormatted: "15 490 ₸",
    createdTime: "2024-11-18T10:25:27.323Z",
    stickers: [],
    previewImage:
      "https://resources.cdn-kaspi.kz/img/m/p/p2f/p92/10065094.jpg?format=preview-small",
    creditMonthlyPrice: 2582.0,
    monthlyInstallment: {
      id: 6,
      installment: true,
      formattedPerMonth: "2 582 ₸",
    },
    reviewsLink:
      "/p/tolstovka-minestone-chernyi-15341272b/?c=710000000&tab=reviews",
    unit: {
      type: "PIECES",
      increment: 1.0,
      measurementLiteral: "шт",
      countingLiteral: "шт",
    },
    rating: 0.0,
    stock: 1,
    currency: "KZT",
    mods: "",
    deliveryDuration: "EXPRESS",
    certificateType: "",
    category: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryRu: ["Одежда", "Мужчинам", "Мужские толстовки и свитшоты"],
    categoryCodes: ["Men hoodies", "Men fashion", "Fashion", "Categories"],

    majorMerchants: [],
    deliveryZones: ["710000000"],
  },
];

const App = () => {
  const [isSortDrawerVisible, setSortDrawerVisible] = useState(false);
  const [isPriceDrawerVisible, setPriceDrawerVisible] = useState(false);
  const [isMenuDrawerVisible, setMenuDrawerVisible] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [availableProdutcs, setAvailableProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [hierarchyPath, setHierarchyPath] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [tempMinValue, setTempMinValue] = useState(0);
  const [tempMaxValue, setTempMaxValue] = useState(0);

  const handleCategoryClick = (category) => {
    setHierarchyPath((prev) => [...prev, category]);
  };

  const handleBackClick = () => {
    setHierarchyPath((prev) => prev.slice(0, -1));
  };

  const currentHierarchy = hierarchyPath.reduce(
    (acc, curr) => acc.find((node) => node.title === curr)?.children || [],
    allCategories
  );

  const toggleSortDrawer = (open) => {
    setSortDrawerVisible(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const togglePriceDrawer = (open) => {
    setPriceDrawerVisible(open);
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleSortChange = (value) => {
    setSortOrder(value);
    toggleSortDrawer();
  };

  const toggleMenuDrawer = () => {
    setMenuDrawerVisible(!isMenuDrawerVisible);
  };

  const sortedProducts = [...availableProdutcs].sort((a, b) => {
    switch (sortOrder) {
      case "asc":
        return a.unitPrice - b.unitPrice;
      case "desc":
        return b.unitPrice - a.unitPrice;
      default:
        return 0;
    }
  });

  const handleSliderChange = ([min, max]) => {
    setTempMinValue(min);
    setTempMaxValue(max);
  };

  const getCategoryTitle = () => {
    return hierarchyPath.length === 0
      ? "Все категории"
      : hierarchyPath[hierarchyPath.length - 1];
  };

  const handlePriceApply = () => {
    setMinValue(tempMinValue);
    setMaxValue(tempMaxValue);
    setPriceDrawerVisible(false); // Закрываем фильтр
  };

  const handlePriceReset = () => {
    setTempMinValue(minPrice);
    setTempMaxValue(maxPrice);
  };

  useEffect(() => {
    const currentCategory = hierarchyPath[hierarchyPath.length - 1];

    // Фильтруем только по категории (без учета диапазона цен)
    const filteredByCategory = mockProducts.filter((product) => {
      return !currentCategory || product.category.includes(currentCategory);
    });

    // Вычисляем минимальную и максимальную цены на основе отфильтрованных по категории продуктов
    if (filteredByCategory.length > 0) {
      const prices = filteredByCategory.map((product) => product.unitPrice);
      const min = Math.min(...prices);
      const max = Math.max(...prices);

      setMinPrice(min);
      setMaxPrice(max);
      setTempMinValue(min);
      setTempMaxValue(max);

      // Устанавливаем значения по умолчанию для слайдера
      if (minValue === 0 && maxValue === 0) {
        setMinValue(min);
        setMaxValue(max);
      }
    } else {
      setMinPrice(0);
      setMaxPrice(0);
      setMinValue(0);
      setMaxValue(0);
    }

    // Фильтруем по категории и диапазону цен
    const filteredProducts = filteredByCategory.filter((product) => {
      return product.unitPrice >= minValue && product.unitPrice <= maxValue;
    });

    setAvailableProducts(filteredProducts);
  }, [hierarchyPath, minValue, maxValue]);

  useEffect(() => {
    const hierarchy = {};

    mockProducts.forEach((product) => {
      let current = hierarchy;

      product.category.forEach((cat, index) => {
        if (!current[cat]) {
          current[cat] = {
            title: cat,
            children: index === product.category.length - 1 ? null : {},
          };
        }
        current = current[cat].children;
      });
    });

    const convertToTree = (node) =>
      Object.entries(node).map(([key, value]) => ({
        title: key,
        children: value.children ? convertToTree(value.children) : null,
      }));

    setAllCategories(convertToTree(hierarchy));
  }, []);

  return (
    <Layout className="layout">
      <Header className="header">
        <h1 className="header-title">Каталог товаров</h1>
        <MenuOutlined className="icon" onClick={toggleMenuDrawer} />
      </Header>
      <Content>
        <div className="content">
          <div className="nav-item" onClick={handleBackClick}>
            <LeftOutlined className="icon" />
          </div>
          <div className="category-info">
            <div className="category-title">{getCategoryTitle()}</div>
            <div>{availableProdutcs.length}</div>
          </div>
          <div className="nav-item">
            <OrderedListOutlined className="icon" onClick={toggleSortDrawer} />
          </div>
          <div className="nav-item">
            <ControlOutlined className="icon" onClick={togglePriceDrawer} />
          </div>
        </div>

        {currentHierarchy.length > 0 && (
          <div className="scrollable-row">
            {currentHierarchy.map((node) => (
              <Button
                key={node.title}
                type="primary"
                onClick={() => {
                  handleCategoryClick(node.title);
                }}
              >
                {node.title}
              </Button>
            ))}
          </div>
        )}

        <List
          dataSource={sortedProducts}
          renderItem={(item) => (
            <List.Item className="list-item">
              <img
                src={item.previewImage}
                alt={item.previewImage}
                className="product-image"
              />
              <div className="product-details">
                <div className="product-info">
                  <div className="product-title">{item.title}</div>
                  <div className="product-category">
                    {item.category[item.category.length - 1]}
                  </div>
                  <div className="product-price">{item.priceFormatted}</div>
                </div>
                <HeartOutlined className="icon" />
              </div>
            </List.Item>
          )}
        />
      </Content>
      <Drawer
        title="Сортировка"
        placement="bottom"
        onClose={() => toggleSortDrawer(false)}
        open={isSortDrawerVisible}
      >
        <Radio.Group
          onChange={(e) => handleSortChange(e.target.value)}
          defaultValue="asc"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Radio style={{ height: "100%", alignItems: "center" }} value="asc">
            Сначала дешевые
          </Radio>
          <Radio style={{ height: "100%", alignItems: "center" }} value="desc">
            Сначала дорогие
          </Radio>
          <Radio
            style={{ height: "100%", alignItems: "center" }}
            value="popular"
          >
            Популярные
          </Radio>
          <Radio style={{ height: "100%", alignItems: "center" }} value="new">
            Новинки
          </Radio>
          <Radio
            style={{ height: "100%", alignItems: "center" }}
            value="rating"
          >
            Высокий рейтинг
          </Radio>
        </Radio.Group>
      </Drawer>
      <Drawer
        title="Цена"
        placement="bottom"
        onClose={() => togglePriceDrawer(false)}
        open={isPriceDrawerVisible}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
          }}
        >
          <Input
            size="large"
            onChange={(e) => setTempMinValue(Number(e.target.value))}
            value={tempMinValue}
            max={maxPrice}
            min={0}
            type="tel"
            prefix="от"
          />
          <Input
            size="large"
            onChange={(e) => setTempMaxValue(Number(e.target.value))}
            value={tempMaxValue}
            min={0}
            max={maxPrice}
            prefix="до"
            type="tel"
          />
        </div>
        <Slider
          range
          defaultValue={[tempMinValue, tempMaxValue]}
          value={[tempMinValue, tempMaxValue]}
          max={maxPrice}
          min={minPrice}
          onChange={handleSliderChange}
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="large"
            style={{ width: "100%" }}
            onClick={handlePriceReset}
          >
            Сбросить
          </Button>
          <Button
            size="large"
            type="primary"
            style={{ width: "100%" }}
            onClick={handlePriceApply}
          >
            Применить
          </Button>
        </div>
      </Drawer>
      <Drawer
        placement="right"
        onClose={() => setMenuDrawerVisible(false)}
        open={isMenuDrawerVisible}
      >
        АГА
      </Drawer>
    </Layout>
  );
};

export default App;
