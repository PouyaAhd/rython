import React, { use, useEffect, useState } from "react";
import { Container, Row, Card, Col, Tabs, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "./index.module.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { BsCheckAll } from "react-icons/bs";
import Layout from "../../components/pages/ui/layout/index";
import NotSent from "../../components/pages/cases/not-sent/index";
import { GetCases } from "../api/cases";

function index() {
  const [toggle, setToggle] = useState(0);
  const [filteredOption, setFilteredOption] = useState([
    {
      id: 1,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "آتش سوزی-غیر صنعتی",
      name3: "پارسیان",
      type: "آتش سوزی",
      isSeen: true,
      imediate: true,
    },
    {
      id: 2,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "آتش سوزی-صنعتی",
      name3: "پارسیان",
      type: "آتش سوزی",
      isSeen: false,
      imediate: true,
    },
    {
      id: 3,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "مسئولیت-تمام خطر اموال",
      name3: "پارسیان",
      type: "مسئولیت",
      isSeen: true,
    },
    {
      id: 4,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "اتوموبیل-سواری",
      name3: "پارسیان",
      type: "خودرو",
      isSeen: false,
    },
    {
      id: 5,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "اتوموبیل-سواری",
      name3: "پارسیان",
      type: "خودرو",
      isSeen: true,
    },
    {
      id: 6,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "مهندسی-شکست ماشین آلات",
      name3: "پارسیان",
      type: "مهندسی",
      isSeen: true,
      imediate: true,
    },
    {
      id: 7,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "مهندسی-شکست ماشین آلات",
      name3: "پارسیان",
      type: "مهندسی",
      isSeen: true,
    },
  ]);
  const [open, setOpen] = useState();
  const [fire, setFire] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [type, setType] = useState([]);
  const [responsibility, setResponsibility] = useState([]);
  const [engineering, setEngineering] = useState([]);
  const [objectsList, setObjectsList] = useState([
    {
      id: 1,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "آتش سوزی-غیر صنعتی",
      name3: "پارسیان",
      type: "آتش سوزی",
      isSeen: true,
      imediate: true,
    },
    {
      id: 2,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "آتش سوزی-صنعتی",
      name3: "پارسیان",
      type: "آتش سوزی",
      isSeen: false,
      imediate: true,
    },
    {
      id: 3,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "مسئولیت-تمام خطر اموال",
      name3: "پارسیان",
      type: "مسئولیت",
      isSeen: true,
    },
    {
      id: 4,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "اتوموبیل-سواری",
      name3: "پارسیان",
      type: "خودرو",
      isSeen: false,
    },
    {
      id: 5,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "اتوموبیل-سواری",
      name3: "پارسیان",
      type: "خودرو",
      isSeen: true,
    },
    {
      id: 6,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "مهندسی-شکست ماشین آلات",
      name3: "پارسیان",
      type: "مهندسی",
      isSeen: true,
      imediate: true,
    },
    {
      id: 7,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity: "کافی شاپ",
      name2: "مهندسی-شکست ماشین آلات",
      name3: "پارسیان",
      type: "مهندسی",
      isSeen: true,
    },
  ]);

  useEffect(() => {
    if (type.length > 0) {
      setFilteredOption(() => {
        const arry = [...objectsList];
        const filtered_array1 = [];

        for (let i = 0; i <= type.length; i++) {
          const var_1 = arry.filter((f) => f.type === type[i]);
          filtered_array1.push(...var_1);
        }
        return filtered_array1;
      });
    } else {
      setFilteredOption(objectsList);
    }
  }, [type]);

  useEffect(() => {
    setFire(objectsList.filter((e) => e.type === "آتش سوزی"));

    setVehicle(objectsList.filter((e) => e.type === "خودرو"));
    setResponsibility(objectsList.filter((e) => e.type === "مسئولیت"));
    setEngineering(objectsList.filter((e) => e.type === "مهندسی"));
  }, []);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    GetCases((res) => {
      console.log("RESSS", res);
    }, getToken);
  }, []);

  return (
    <Layout>
      <Tabs
        defaultActiveKey="ارسال نشده"
        id="fill-tab-example"
        className="mb-3 text-dark"
        fill
      >
        <Tab eventKey="ارجاع شده به کارشناس" title="ارجاع شده به کارشناس">
          hi
        </Tab>
        <Tab eventKey="ارسال نشده" title="ارسال نشده">
          <NotSent
            type={type}
            fire={fire}
            setType={setType}
            setFire={setFire}
            vehicle={vehicle}
            setVehicle={setVehicle}
            responsibility={responsibility}
            setResponsibility={setResponsibility}
            engineering={engineering}
            setEngineering={setEngineering}
            filteredOption={filteredOption}
            toggle={toggle}
          />
        </Tab>
        <Tab eventKey="بازدید شده" title="بازدید شده">
          hi
        </Tab>
        <Tab eventKey="آماده ارسال " title="آماده ارسال">
          hi
        </Tab>
        <Tab eventKey="دارای نقص" title="دارای نقص">
          hi
        </Tab>
      </Tabs>
    </Layout>
  );
}

export default index;
