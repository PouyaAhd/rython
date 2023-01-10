import React, { use, useEffect, useState } from "react";
import { Container, Row, Card, Col, Tabs, Tab } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "./index.module.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import { BsCheckAll } from "react-icons/bs";
import Layout from "../../ui/layout";

function index({
  type,
  fire,
  setType,
  responsibility,
  vehicle,
  engineering,
  filteredOption,
  toggle,
  setToggle
}) {


  return (
    <Container fluid className="p-0">
      <div
        style={{ direction: "rtl" }}
        className="justify-content-start  d-flex  mt-2"
      >
        <div
          className={
            type.find((f) => f === "آتش سوزی")
              ? styles.fire_filter
              : styles.not_active
          }
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
          آتش سوزی: {fire.length}
        </div>
        <div
          className={
            type.find((f) => f === "خودرو")
              ? styles.car_filter
              : styles.not_active
          }
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
          اتوموبیل: {vehicle.length}
        </div>
        <div
          className={
            type.find((f) => f === "مسئولیت")
              ? styles.responsible_filter
              : styles.not_active
          }
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
          مسئولیت: {responsibility.length}
        </div>
        <div
          className={
            type.find((f) => f === "مهندسی")
              ? styles.engineer_filter
              : styles.not_active
          }
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
          مهندسی: {engineering.length}
        </div>
        
      </div>
      <div style={{marginTop:"5px"}}><span style={{fontSize:"12px", color:"gray", marginRight:"5px"}}>برای فیلتر کردن روی هرکدام کلیک کنید</span></div>
      <hr />
      <Table className={styles.container} style={{ direction: "rtl" }}>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th></th>
            <th>اولویت</th>

            <th>شماره پرونده</th>
            <th>بیمه گذار</th>
            <th>فعالیت</th>
            <th>بیمه نامه</th>
            <th>تاریخ ارجاع</th>
            <th>بیمه گر</th>
            <th>شعبه</th>
            <th>شماره گذارش</th>
            <th>شهر</th>
            <th> بازدید با تاخریر</th>
            <th>کارشناس بازدید</th>
            <th>وضعیت</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {filteredOption.map((item) => (
            <>
              <tr
              className={styles.cases}
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
                {item.imediate ? (
                  <td className="text-danger" style={{ fontWeight: "bold" }}>
                    فوری
                  </td>
                ) : (
                  <td>عادی</td>
                )}

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

      <div className={styles.responsive}>
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
      </div>
    </Container>
  );
}

export default index;
