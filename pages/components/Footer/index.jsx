import { Col, List, Row } from "antd";
import { Footer } from "antd/lib/layout/layout";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import Image from "next/image";

export default function Index() {
  const list = [
    {
      title: "About Us",
      children: [
        { label: "About GoCart", link: "/" },
        { label: "Privacy Policy", link: "/" },
        { label: "Terms and Conditions", link: "/" },
      ],
    },
    {
      title: "Support/Get Help",
      children: [
        { label: "FAQS", link: "" },
        { label: "Contact Us", link: "" },
      ],
    },
    {
      title: "Our Stores",
      children: [
        { label: "Store Locator", link: "" },
        { label: "Delivery Areas", link: "" },
        { label: "GoRobinsons Hub", link: "" },
      ],
    },
  ];

  const imgs = [facebook, twitter, instagram, youtube];
  const imgs1 = [appstore, googleplay];

  return (
    <Footer className={styles.footer_container}>
      <Row>
        {list.map((item) => (
          <Col span={6} className="website">
            <h2>{item.title}</h2>
            {item.children.map((it) => (
              <Link href={it.link || ""}>{it.label}</Link>
            ))}
          </Col>
        ))}
        <Col span={6} className="follow-us">
          <h2>Follow Us</h2>
          <div className="sociality">
            {imgs.map((item) => (
              <Image src={item} width={20} height={20} />
            ))}
          </div>
          <div className="app">
            {imgs1.map((item) => (
              <Image src={item} width={82} height={25} />
            ))}
          </div>
          <div>© 2022 Copyright: Robinsons Supermarket</div>
        </Col>
      </Row>
    </Footer>
  );
}
