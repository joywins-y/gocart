import React, { useState } from "react";
import styles from "./index.module.scss";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { Button, Drawer, Menu } from "antd";
import {
  CloseOutlined,
  MenuOutlined,
  HomeOutlined,
  UserOutlined,
  TagOutlined,
  GiftOutlined,
  WalletOutlined,
  CrownOutlined,
  BookOutlined,
  CustomerServiceOutlined,
  EnvironmentOutlined,
  DownOutlined,
  CaretDownOutlined,
  BellOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import avatar from "../../assets/avatar.png";
import Link from "next/link";

const { SubMenu } = Menu;

const Index = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const handleClick = (e) => {
    console.log("click ", e);
  };

  const menus = [
    { title: 'Home', key: 'home', icon: <HomeOutlined />, link: '/home' },
    { title: 'My Account', key: 'myAccount', icon: <UserOutlined />, children: [
      { title: 'Item 1', key: 'g1', icon: "", children: [
        { title: 'Option 1', key: '1', icon: ''},
        { title: 'Option 2', key: '2', icon: ''},
      ] },
      { title: 'Item 2', key: 'g2', icon: "", children: [
        { title: 'Option 3', key: '3', icon: '' }, 
        { title: 'Option 4', key: '4', icon: '' },
      ] },
    ]  },
    { title: 'On Sale', key: 'onSale', icon: <TagOutlined /> },
    { title: 'All Categories', key: 'allCategories', icon: '', children: [
      { title: 'Option 5', key: '5', icon: '' }, 
      { title: 'Option 6', key: '6', icon: '' },
      { title: 'Submenu', key: 'sub', icon: "", children: [
        { title: 'Option 7', key: '7', icon: '' }, 
        { title: 'Option 8', key: '8', icon: '' },
      ] },
    ] },
    { title: 'Gift Registry', key: 'registry', icon: <GiftOutlined /> },
    { title: 'GoCart Wallet', key: 'wallet', icon: <WalletOutlined /> },
    { title: 'Recipes', key: 'recipes', icon: <CrownOutlined /> },
    { title: 'Blogs', key: 'blogs', icon: <BookOutlined /> },
    { title: 'Support/Get Help', key: 'help', icon: <CustomerServiceOutlined /> },
    { title: 'Follow us', key: 'followus', icon: "", children: [
      { title: 'Option 9', key: '9', icon: ''},
      { title: 'Option 10', key: '10', icon: ''},
    ] },
    { title: 'Log Out', key: 'logOut', icon: "" },
  ];

  return (
    <div className={styles.header_container}>
      <div className="left-box">
        <div>
          <Button
            style={{ color: "#111" }}
            icon={<MenuOutlined />}
            type="link"
            onClick={showDrawer}
          />
          <Drawer
            visible={visible}
            placement="left"
            width={340}
            maskStyle={{
              backgroundColor: "transparent",
            }}
            destroyOnClose
            onClose={closeDrawer}
            title={
              <Image src={logo} alt="GoCart" width={"115.52px"} height={24} />
            }
            closable={false}
            extra={<CloseOutlined onClick={closeDrawer} />}
            className={styles.menu_drawer}
          >
            {/* <Menu onClick={handleClick} mode="inline">
              <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <SubMenu
                key="myAccount"
                icon={<UserOutlined />}
                title="My Account"
              >
                <Menu.ItemGroup key="g1" title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <Menu.Item key="onSale" icon={<TagOutlined />}>
                On Sale
              </Menu.Item>
              <SubMenu key="allCategories" title="All Categories">
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <Menu.Item key="registry" icon={<GiftOutlined />}>
                Gift Registry
              </Menu.Item>
              <Menu.Item key="wallet" icon={<WalletOutlined />}>
                GoCart Wallet
              </Menu.Item>
              <Menu.Item key="recipes" icon={<CrownOutlined />}>
                Recipes
              </Menu.Item>
              <Menu.Item key="blogs" icon={<BookOutlined />}>
                Blogs
              </Menu.Item>
              <div style={{ height: 40 }}></div>
              <Menu.Item key="help" icon={<CustomerServiceOutlined />}>
                Support/Get Help
              </Menu.Item>
              <SubMenu key="followus" title="Follow us">
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
              <div style={{ height: 40 }}></div>
              <Menu.Item key="logOut">Log Out</Menu.Item>
            </Menu> */}
            <Menu onClick={handleClick} mode="inline">
            {
              menus.map((item) => {
                return item.children ? (
                  <SubMenu key={item.key} title={item.title} icon={item.icon}>
                    {item.children.map((child) => (
                      <Menu.Item key={child.key} icon={child.icon}>
                        <Link href={child.link ? child.link : ""}>
                          <a>{child.title}</a>
                        </Link>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link href={item.link ? item.link : ""}>
                      <a>{item.title}</a>
                    </Link>
                  </Menu.Item>
                );
              })
            }
            </Menu>
          </Drawer>
        </div>
        <div style={{ margin: "0 24px" }}>
          <Image src={logo} alt="GoCart" width={"115.52px"} height={24} />
        </div>
        <div className="address">
          <Button>
            <EnvironmentOutlined />
            <span>Manila, Manila</span>
            <DownOutlined />
            <span
              style={{
                border: "1px solid #fff",
                padding: "0 8px",
                borderRadius: "20px",
              }}
            >
              DELIVERY
            </span>
          </Button>
        </div>
      </div>
      <div className="right-box">
        <div>Help</div>
        <div>
          <BellOutlined className="ant-icon" />
          <span className="num">3</span>
        </div>
        <div>
          <ShoppingCartOutlined className="ant-icon" />
          <span className="num">12</span>
        </div>
        <div className="userInfo">
          <span>Frodo Baggins</span>
          <span className="avatar">
            <Image src={avatar} alt="avatar" width={24} height={24} />
          </span>
          <CaretDownOutlined />
        </div>
      </div>
    </div>
  );
};

export default Index;
