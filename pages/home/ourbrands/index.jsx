import { ArrowLeftOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, List, Tabs } from "antd";
import Image from "next/image";
import React from "react";
import styles from "./index.module.scss";
import brands from "../../assets/brands.png";

const { TabPane } = Tabs;

export default function index() {
  const list = [
    { label: "All", value: "all" },
    { label: "Groceries", value: "groceries" },
    { label: "Hardware", value: "hardware" },
    { label: "Pharmacy", value: "pharmacy" },
    { label: "Appliances", value: "appliances" },
    { label: "Toys", value: "toys" },
    { label: "Department Store", value: "departmentStore" },
    { label: "Beauty", value: "beauty" },
    { label: "Convenience Store", value: "convenienceStore" },
    { label: "Pets", value: "pets" },
    { label: "Variety Store", value: "varietyStore" },
    { label: "eCatalogue", value: "eCatalogue" },
  ];

  const list1 = [
    {
      title: "GROCERIES",
      stores: [
        {
          name: "Robinsons Supermarket",
          desc: "Your supermarket of choice for top-quality fresh fruits, vegetables, and meat products. Shop for grocery essentials at affordable prices.",
          img: brands,
        },
        {
          name: "Shopwise",
          desc: "The superstore of choice for everything you need – groceries, apparel, bed & bath, baby needs, DIY and appliances.",
          img: brands,
        },
        {
          name: "The Marketplace",
          desc: "The pioneer of premium grocery stores in the Philippines, known for a wide range of fresh, gourmet, and imported selections.",
          img: brands,
        },
        { name: "No Brand", desc: "Korean Fronchise", img: brands },
        { name: "Robinsons Easymart", desc: "Specicilty", img: brands },
      ],
    },
    {
      title: "HARDWARE",
      stores: [
        {
          name: "Handyman",
          desc: "DIY products, Appliances, Pets ",
          img: brands,
        },
        {
          name: "True Value",
          desc: "Harchware, Household Supplies",
          img: brands,
        },
      ],
    },
    {
      title: "OTHER BRANDS",
      stores: [
        { name: "Southstar Drug", desc: "Pharmacy", img: brands },
        {
          name: "Robinsons Appliances",
          desc: "Appliances, Home Improvements",
          img: brands,
        },
        { name: "Toys R Us", desc: "Toys and Action Figures", img: brands },
        { name: "Shiseido", desc: "Specialty", img: brands },
        { name: "Pets Lovers Center", desc: "Specialty", img: brands },
        { name: "Daiso", desc: "Convenience Store", img: brands },
        { name: "Mini Stop", desc: "Quick Bites", img: brands },
      ],
    },
  ];

  const handleClick = (key) => {
    console.log(key);
  };

  return (
    <div className={styles.our_brands_container}>
      <div className={styles.our_brands_header}>
        <div className="head-search">
          <h1>
            <ArrowLeftOutlined />
            <span className="title">Our Brands</span>
          </h1>
          <Input placeholder="I’m looking for..." suffix={<SearchOutlined />} />
        </div>
      </div>
      <div className={styles.our_brands_main}>
        <Tabs defaultActiveKey="all" onChange={handleClick}>
          {list.map((item) => {
            return (
              <TabPane tab={item.label} key={item.value}>
                {list1.map((brand, index) => {
                  return (
                    <div key={index} className={styles.brands_div}>
                      <h1>{brand.title}</h1>
                      <List
                        itemLayout="horizontal"
                        dataSource={brand.stores}
                        renderItem={(store, index) => (
                          <List.Item key={"card" + index}>
                            <div className="img">
                              <Image src={store.img} width={90} height={90} />
                            </div>
                            <div className="content">
                              <span className="name">{store.name}</span>
                              <span className="desc">{store.desc}</span>
                            </div>
                          </List.Item>
                        )}
                        bordered={false}
                      />
                    </div>
                  );
                })}
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
}
