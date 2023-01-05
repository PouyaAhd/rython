import React, { use, useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "./index.module.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { BsCheckAll } from "react-icons/bs";

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

  // useEffect(() => {
  //   console.log(filteredOption);
  // }, [filteredOption]);

  return (
    <Container fluid>
      <div className="justify-content-end  d-flex  mt-2">
        <div
        className={type.find((f) => f === "آتش سوزی") ? styles.fire_filter : styles.not_active}
          onClick={() => {
            setType((prev) => {
              const array = [...prev];

              const find = array.findIndex((f) => f === "آتش سوزی");

              if (find === -1) {
                array.push("آتش سوزی");
                return array;
              } else {
                array.splice(find, 1);
                return array;
              }
            });
          }}
          
        >
          {fire.length}:آتش سوزی
        </div>
        <div
        className={type.find((f) => f === "خودرو") ? styles.car_filter : styles.not_active}
          onClick={() => {
            setType((prev) => {
              const array = [...prev];

              const find = array.findIndex((f) => f === "خودرو");

              console.log("find", find);

              if (find === -1) {
                array.push("خودرو");
                return array;
              } else {
                array.splice(find, 1);
                return array;
              }
            });
          }}
        >
          {vehicle.length}:اتوموبیل
        </div>
        <div
        className={type.find((f) => f === "مسئولیت") ? styles.responsible_filter : styles.not_active}

          onClick={() => {
            setType((prev) => {
              const array = [...prev];

              const find = array.findIndex((f) => f === "مسئولیت");

              console.log("find", find);

              if (find === -1) {
                array.push("مسئولیت");
                return array;
              } else {
                array.splice(find, 1);
                return array;
              }
            });
          }}
        >
          مسئولیت:{responsibility.length}
        </div>
        <div
        className={type.find((f) => f === "مهندسی") ? styles.engineer_filter : styles.not_active}

          onClick={() => {
            setType((prev) => {
              const array = [...prev];

              const find = array.findIndex((f) => f === "مهندسی");

              console.log("find", find);

              if (find === -1) {
                array.push("مهندسی");
                return array;
              } else {
                array.splice(find, 1);
                return array;
              }
            });
          }}
        >
          مهندسی:{engineering.length}
        </div>
      </div>
      <hr />
      <Table className={styles.container} style={{ direction: "rtl" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th></th>
            <th>حالت</th>

            <th>شماره پرونده</th>
            <th>بیمه گذار</th>
            <th>فعالیت</th>
            <th>بیمه نامه</th>
            <th>تاریخ ارجاع</th>
            <th>بیمه گر</th>
            <th>شعبه</th>
            <th>شماره گذارش</th>
            <th>شهر</th>
            <th>تاریخ بازدید با تاخریر</th>
            <th>کارشناس بازدید</th>
            <th>وضعیت</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {filteredOption.map((item) => (
            <>
              <tr
                key={item.id}
                style={
                  item.type === "آتش سوزی"
                    ? { backgroundColor: "#FAD4D2" }
                    : item.type === "مسئولیت"
                    ? { backgroundColor: "#C3F7E2" }
                    : item.type === "خودرو"
                    ? { backgroundColor: "#EEFF1B" }
                    : item.type === "مهندسی"
                    ? { backgroundColor: "#B5D5F7" }
                    : {}
                }
              >
                {item.imediate ? (
                  <td className="text-danger" style={{ fontWeight: "bold" }}>
                    فوری
                  </td>
                ) : (
                  <td></td>
                )}

                <td>
                  {item.isSeen ? (
                    <div>
                      <BsCheckAll
                        style={{ fontSize: "22px", color: "#2ECC71" }}
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </td>

                <td>4888</td>
                <td>{item.name1}</td>
                <td>{item.activity}</td>
                <td>{item.name2}</td>

                <td>{item.erjaDate}</td>
                <td>{item.name3}</td>
                <td>مشهد</td>
                <td>2339-آت-1401</td>
                <td>مشهد</td>
                <td>{item.lateDate}</td>
                <td>رسول فلاحی</td>
                <td>بازدید شد-در حال تهیه گذارش</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>

      <Row className={styles.responsive}>
        <Card className="border-0">
          <div style={{ direction: "rtl", cursor: "pointer" }}>
            {filteredOption.map((item, index) => (
              <div key={index} className="border m-2  rounded">
                <div
                  onClick={() => {
                    setToggle(item.id);
                    toggle === index + 1 && setToggle(!toggle);
                  }}
                  className="p-2 position-relative"
                  style={
                    item.type === "آتش سوزی"
                      ? { backgroundColor: "#FAD4D2" }
                      : item.type === "مسئولیت"
                      ? { backgroundColor: "#C3F7E2" }
                      : item.type === "خودرو"
                      ? { backgroundColor: "#EEFF1B" }
                      : item.type === "مهندسی"
                      ? { backgroundColor: "#B5D5F7" }
                      : {}
                  }
                >
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%", fontSize: "18px" }}>
                      تاریخ ارجاع
                    </h5>
                    <div style={{ width: "100%" }}>
                      {" "}
                      <p style={{ fontWeight: "bold", textAlign: "right" }}>
                        {item.erjaDate}
                      </p>
                    </div>

                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%", fontSize: "18px" }}>
                      بازدید با تاخیر
                    </h5>
                    <div style={{ width: "100%" }}>
                      {" "}
                      <p style={{ fontWeight: "bold", textAlign: "right" }}>
                        {item.lateDate}
                      </p>
                    </div>
                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%", fontSize: "18px" }}>
                      بیمه گذار
                    </h5>
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "100%",
                        textAlign: "right",
                      }}
                    >
                      {item.name1}-{item.activity}
                    </p>
                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%", fontSize: "18px" }}>
                      بیمه نامه
                    </h5>
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "100%",
                        textAlign: "right",
                      }}
                    >
                      {item.name2}
                    </p>
                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%", fontSize: "18px" }}>بیمه گر</h5>
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "100%",
                        textAlign: "right",
                      }}
                    >
                      {item.name3}
                    </p>
                    <div></div>
                  </div>
                  {item.isSeen && (
                    <div>
                      <BsCheckAll
                        style={{ fontSize: "22px", color: "#2ECC71" }}
                      />
                    </div>
                  )}
                  {item.imediate && (
                    <div
                      className="text-danger"
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        padding: "10px",
                        fontWeight: "bold",
                        transform: "rotate(-15deg)",
                      }}
                    >
                      <p>فوری</p>
                    </div>
                  )}
                </div>
                <Collapse in={toggle === index + 1 ? true : false}>
                  <div
                    className="border rounded"
                    style={{
                      direction: "rtl",
                      padding: "0",
                      marginTop: "5px",
                    }}
                    id="example-collapse-text"
                  >
                    <div className=" d-flex justify-content-between p-2">
                      <h5>شماره پرونده</h5>
                      <p>4888</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />

                    <div className=" d-flex justify-content-between p-2">
                      <h5>شعبه</h5>
                      <p>مشهد</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />

                    <div className=" d-flex justify-content-between p-2">
                      <h5>شماره گزارش</h5>
                      <p>2339-آت-1401</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>شهر</h5>
                      <p>مشهد</p>
                    </div>

                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>کارشناس بازدید</h5>
                      <p>رسول فلاحی</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>وضعیت</h5>
                      <p>بازدید شد-در حال تهیه گذارش</p>
                    </div>
                    <div className="p-2">
                      <Button className="w-100 p-10">مشاهده پرونده</Button>
                    </div>
                  </div>
                </Collapse>
              </div>
            ))}
          </div>
        </Card>
      </Row>
    </Container>
  );
}

export default index;
