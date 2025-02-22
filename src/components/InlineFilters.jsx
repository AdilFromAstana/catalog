import React, { memo, useRef, useState } from "react";
import { Button, Checkbox, Drawer, Input, List, Slider } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import useFilters from "../hooks/useFilters";
import PriceFilter from "./PriceFilter";

const productListData = [
  { "id": ":Flowers and bouquets*Flower:агапантус", "title": "агапантус", "name": "агапантус", "count": 5, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:акация", "title": "акация", "name": "акация", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:альстремерия", "title": "альстремерия", "name": "альстремерия", "count": 236, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:альстромерия", "title": "альстромерия", "name": "альстромерия", "count": 82, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:амарант", "title": "амарант", "name": "амарант", "count": 8, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:амариллис", "title": "амариллис", "name": "амариллис", "count": 5, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:анемон", "title": "анемон", "name": "анемон", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:антуриум", "title": "антуриум", "name": "антуриум", "count": 22, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:аспидистра", "title": "аспидистра", "name": "аспидистра", "count": 5, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:астильба", "title": "астильба", "name": "астильба", "count": 7, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:астра", "title": "астра", "name": "астра", "count": 22, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:брасика", "title": "брасика", "name": "брасика", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:брассика", "title": "брассика", "name": "брассика", "count": 3, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:бруния", "title": "бруния", "name": "бруния", "count": 19, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:василек", "title": "василек", "name": "василек", "count": 4, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:вереск", "title": "вереск", "name": "вереск", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:вероника", "title": "вероника", "name": "вероника", "count": 4, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:вибурнум", "title": "вибурнум", "name": "вибурнум", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гвоздика", "title": "гвоздика", "name": "гвоздика", "count": 396, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:георгин", "title": "георгин", "name": "георгин", "count": 26, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гербера", "title": "гербера", "name": "гербера", "count": 58, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гиацинт", "title": "гиацинт", "name": "гиацинт", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гиперикум", "title": "гиперикум", "name": "гиперикум", "count": 22, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гиппеаструм", "title": "гиппеаструм", "name": "гиппеаструм", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гипсофила", "title": "гипсофила", "name": "гипсофила", "count": 243, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гладиолус", "title": "гладиолус", "name": "гладиолус", "count": 18, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:гортензия", "title": "гортензия", "name": "гортензия", "count": 1121, "active": false, "hide": false, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:дельфиниум", "title": "дельфиниум", "name": "дельфиниум", "count": 14, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:диантус", "title": "диантус", "name": "диантус", "count": 196, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:илекс", "title": "илекс", "name": "илекс", "count": 11, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:ирис", "title": "ирис", "name": "ирис", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:калла", "title": "калла", "name": "калла", "count": 11, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:камелия", "title": "камелия", "name": "камелия", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:кампанула", "title": "кампанула", "name": "кампанула", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:колокольчик", "title": "колокольчик", "name": "колокольчик", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:корилус", "title": "корилус", "name": "корилус", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:кортадерия", "title": "кортадерия", "name": "кортадерия", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:кустовая пионовидная роза", "title": "кустовая пионовидная роза", "name": "кустовая пионовидная роза", "count": 515, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:кустовая роза", "title": "кустовая роза", "name": "кустовая роза", "count": 629, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:лаванда", "title": "лаванда", "name": "лаванда", "count": 8, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:лагурус", "title": "лагурус", "name": "лагурус", "count": 43, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:левкодендрон", "title": "левкодендрон", "name": "левкодендрон", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:левкоспермум", "title": "левкоспермум", "name": "левкоспермум", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:леукадендрон", "title": "леукадендрон", "name": "леукадендрон", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:лизиантус", "title": "лизиантус", "name": "лизиантус", "count": 517, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:лилия", "title": "лилия", "name": "лилия", "count": 65, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:лимониум", "title": "лимониум", "name": "лимониум", "count": 10, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:лимонник", "title": "лимонник", "name": "лимонник", "count": 7, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:львиный зев", "title": "львиный зев", "name": "львиный зев", "count": 20, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:магнолия", "title": "магнолия", "name": "магнолия", "count": 3, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:маттиола", "title": "маттиола", "name": "маттиола", "count": 83, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:мимоза", "title": "мимоза", "name": "мимоза", "count": 12, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:нарцисс", "title": "нарцисс", "name": "нарцисс", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:овес", "title": "овес", "name": "овес", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:озотамнус", "title": "озотамнус", "name": "озотамнус", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:оксипеталум", "title": "оксипеталум", "name": "оксипеталум", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:орхидея", "title": "орхидея", "name": "орхидея", "count": 23, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:орхидея дендробиум", "title": "орхидея дендробиум", "name": "орхидея дендробиум", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:орхидея фаленопсис", "title": "орхидея фаленопсис", "name": "орхидея фаленопсис", "count": 4, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:пальмовый лист", "title": "пальмовый лист", "name": "пальмовый лист", "count": 7, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:пампасная трава", "title": "пампасная трава", "name": "пампасная трава", "count": 5, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:папоротник", "title": "папоротник", "name": "папоротник", "count": 8, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:пион", "title": "пион", "name": "пион", "count": 163, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:пионовидная роза", "title": "пионовидная роза", "name": "пионовидная роза", "count": 463, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:подсолнух", "title": "подсолнух", "name": "подсолнух", "count": 18, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:просо", "title": "просо", "name": "просо", "count": 5, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:протея", "title": "протея", "name": "протея", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:пуансеттия", "title": "пуансеттия", "name": "пуансеттия", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:ранункулюс", "title": "ранункулюс", "name": "ранункулюс", "count": 24, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:роза", "title": "роза", "name": "роза", "count": 4759, "active": false, "hide": false, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:ромашка", "title": "ромашка", "name": "ромашка", "count": 34, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:рускус", "title": "рускус", "name": "рускус", "count": 78, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:сирень", "title": "сирень", "name": "сирень", "count": 5, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:скиммия", "title": "скиммия", "name": "скиммия", "count": 11, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:снежноягодник", "title": "снежноягодник", "name": "снежноягодник", "count": 3, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:статица", "title": "статица", "name": "статица", "count": 20, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:стрелитция", "title": "стрелитция", "name": "стрелитция", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:суккулент", "title": "суккулент", "name": "суккулент", "count": 3, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:тюльпан", "title": "тюльпан", "name": "тюльпан", "count": 942, "active": false, "hide": false, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:фалярис", "title": "фалярис", "name": "фалярис", "count": 4, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:фисташка", "title": "фисташка", "name": "фисташка", "count": 36, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:фрезия", "title": "фрезия", "name": "фрезия", "count": 8, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:хамелациум", "title": "хамелациум", "name": "хамелациум", "count": 8, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:хлопок", "title": "хлопок", "name": "хлопок", "count": 14, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:хризантема", "title": "хризантема", "name": "хризантема", "count": 1017, "active": false, "hide": false, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:целозия", "title": "целозия", "name": "целозия", "count": 2, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:эвкалипт", "title": "эвкалипт", "name": "эвкалипт", "count": 953, "active": false, "hide": false, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:эрингиум", "title": "эрингиум", "name": "эрингиум", "count": 1, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true },
  { "id": ":Flowers and bouquets*Flower:эустома", "title": "эустома", "name": "эустома", "count": 157, "active": false, "hide": true, "popularity": 0, "locale": "ru", "localized": true }
]

const InlineFilters = memo(({ applyFilters }) => {
  const { filters, updateFilter } = useFilters();
  const [activeFilter, setActiveFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const listRef = useRef(null);

  const filterDataMap = {
    bouquetComposition: {
      name: "Состав букета",
      options: [
        { name: "Роза", value: "rose", count: 50 },
        { name: "Лилия", value: "lily", count: 30 },
        { name: "Гвоздика", value: "carnation", count: 20 }
      ]
    },
    price: {
      name: "Цена",
      type: "range",
      min: 0,
      max: 50000
    },
    flowerCount: {
      name: "Количество цветов, шт",
      options: [
        { name: "5 шт.", value: "5", count: 10 },
        { name: "10 шт.", value: "10", count: 20 },
        { name: "51 шт.", value: "51", count: 20 },
        { name: "15 шт.", value: "15", count: 15 }
      ]
    },
    flowerHeight: {
      name: "Высота цветов, см",
      options: [
        { name: "50 см", value: "50cm", count: 12 },
        { name: "60 см", value: "60cm", count: 18 },
        { name: "70 см", value: "70cm", count: 25 }
      ]
    },
    discounts: {
      name: "Скидки",
      options: [
        { name: "10%", value: "10_percent", count: 5 },
        { name: "20%", value: "20_percent", count: 8 },
        { name: "30%", value: "30_percent", count: 12 }
      ]
    },
    features: {
      name: "Особенности",
      options: [
        { name: "Ароматные", value: "fragrant", count: 20 },
        { name: "Гипоаллергенные", value: "hypoallergenic", count: 15 },
        { name: "Экзотические", value: "exotic", count: 10 }
      ]
    }
  };

  const showDrawer = (key) => {
    setActiveFilter(key);
    setVisible(true);
    setSearchTerm("");
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTop = 0;
      }
    }, 0);
  };

  const closeDrawer = () => {
    setVisible(false);
    setActiveFilter(null);
  };

  const onSelectItem = (paramKey, optionValue) => {
    const currentValues = filters[paramKey] || [];
    const newValues = currentValues.includes(optionValue)
      ? currentValues.filter((item) => item !== optionValue)
      : [...currentValues, optionValue];

    updateFilter(paramKey, newValues);
  };

  const applyFilterChanges = () => {
    applyFilters(filters);
    closeDrawer();
  };

  return (
    <div>
      <div className="scrollable-row">
        {Object.entries(filterDataMap).map(([key, param]) => (
          <Button
            key={key}
            onClick={() => showDrawer(key)}
            style={{
              borderRadius: "20px",
              backgroundColor: filters[key] ? "#1890ff" : "#f0f0f0",
              color: filters[key] ? "#fff" : "#000"
            }}
          >
            {param.name}
          </Button>
        ))}
      </div>
      <Drawer
        title={filterDataMap[activeFilter]?.name}
        placement="bottom"
        onClose={closeDrawer}
        open={visible}
        height="90svh"
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingTop: 12
          }
        }}
      >
        {activeFilter === "price" ? (
          <PriceFilter
            minPrice={filterDataMap.price.min}
            maxPrice={filterDataMap.price.max}
            applyFilters={applyFilters}
          />
        ) : (
          <div ref={listRef} style={{ flex: 1, overflowY: "auto", marginTop: 10 }}>
            <List
              dataSource={filterDataMap[activeFilter]?.options || []}
              renderItem={(option) => (
                <List.Item>
                  <Checkbox
                    style={{ width: "100%" }}
                    checked={filters[activeFilter]?.includes(option.value)}
                    onChange={() => onSelectItem(activeFilter, option.value)}
                  >
                    {option.name} ({option.count})
                  </Checkbox>
                </List.Item>
              )}
            />
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", paddingTop: "20px", borderTop: "2px solid black" }}>
          <Button size="large" onClick={closeDrawer} type="default" style={{ width: "100%" }}>
            Сбросить
          </Button>
          <Button size="large" onClick={applyFilterChanges} type="primary" style={{ width: "100%" }}>
            Применить
          </Button>
        </div>
      </Drawer>
    </div>
  );
});

export default InlineFilters;
