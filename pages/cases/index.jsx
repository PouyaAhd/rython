import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "./index.module.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

function index() {
  const [toggle, setToggle] = useState(0);
  const [open, setOpen] = useState(false);
  const [objectsList, setObjectsList] = useState([
    {
      id: 1,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      activity:"کافی شاپ",
      name2: "آتش سوزی-غیر صنعتی",
      name3: "پارسیان",
      type: "آتش سوزی"
    },
    {
      id: 2,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      name2: "آتش سوزی-صنعتی",
      name3: "پارسیان",
      type: "آتش سوزی"
    },
    {
      id: 3,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      name2: "مسئولیت-تمام خطر اموال",
      name3: "پارسیان",
      type: "مسئولیت"
    },
    {
      id: 4,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      name2: "اتوموبیل-سواری",
      name3: "پارسیان",
      type: "خودرو"
    },
    {
      id: 5,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      name2: "اتوموبیل-سواری",
      name3: "پارسیان",
      type: "خودرو"
    },
    {
      id: 6,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      name2: "مهندسی-شکست ماشین آلات",
      name3: "پارسیان",
      type: "مهندسی"
    },
    {
      id: 7,
      erjaDate: "1401/10/11",
      lateDate: "1401/10/12",
      name1: "عرفانیان",
      name2: "مهندسی-شکست ماشین آلات",
      name3: "پارسیان",
      type: "مهندسی"
    }
  ]);

  return (
    <Container fluid>
      <Table
        className={styles.container}
        style={{ direction: "rtl" }}
        striped
        bordered
        hover
      >
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>شماره پرونده</th>
            <th>بیمه گذار</th>
            <th>فعالیت</th>
            <th>بیمه نامه</th>
            <th>تاریخ ارجاع</th>
            <th>بیمه گر</th>
            <th>شعبه</th>
            <th>شماره نامه</th>
            <th>شماره گذارش</th>
            <th>شهر</th>
            <th>تاریخ بازدید با تاخریر</th>
            <th>کارشناس بازدید</th>
            <th>وضعیت</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          <tr>
            <td>4888</td>
            <td>عرفانیان</td>
            <td>کافی شاپ</td>
            <td>آتش سوزی-غیرصنعتی</td>

            <td>1401/10/08</td>
            <td>پارسیان</td>
            <td>مشهد</td>
            <td>1401-4575</td>
            <td>2339-آت-1401</td>
            <td>مشهد</td>
            <td>1401/10/11</td>
            <td>رسول فلاحی</td>
            <td>بازدید شد-در حال تهیه گذارش</td>
          </tr>
          <tr>
            <td>4888</td>
            <td>عرفانیان</td>
            <td>کافی شاپ</td>
            <td>آتش سوزی-غیرصنعتی</td>

            <td>1401/10/08</td>
            <td>پارسیان</td>
            <td>مشهد</td>
            <td>1401-4575</td>
            <td>2339-آت-1401</td>
            <td>مشهد</td>
            <td>1401/10/11</td>
            <td>رسول فلاحی</td>
            <td>بازدید شد-در حال تهیه گذارش</td>
          </tr>
          <tr>
            <td>4888</td>
            <td>عرفانیان</td>
            <td>کافی شاپ</td>
            <td>آتش سوزی-غیرصنعتی</td>

            <td>1401/10/08</td>
            <td>پارسیان</td>
            <td>مشهد</td>
            <td>1401-4575</td>
            <td>2339-آت-1401</td>
            <td>مشهد</td>
            <td>1401/10/11</td>
            <td>رسول فلاحی</td>
            <td>بازدید شد-در حال تهیه گذارش</td>
          </tr>
          <tr>
            <td>4888</td>
            <td>عرفانیان</td>
            <td>کافی شاپ</td>
            <td>آتش سوزی-غیرصنعتی</td>

            <td>1401/10/08</td>
            <td>پارسیان</td>
            <td>مشهد</td>
            <td>1401-4575</td>
            <td>2339-آت-1401</td>
            <td>مشهد</td>
            <td>1401/10/11</td>
            <td>رسول فلاحی</td>
            <td>بازدید شد-در حال تهیه گذارش</td>
          </tr>
          <tr>
            <td>4888</td>
            <td>عرفانیان</td>
            <td>کافی شاپ</td>
            <td>آتش سوزی-غیرصنعتی</td>

            <td>1401/10/08</td>
            <td>پارسیان</td>
            <td>مشهد</td>
            <td>1401-4575</td>
            <td>2339-آت-1401</td>
            <td>مشهد</td>
            <td>1401/10/11</td>
            <td>رسول فلاحی</td>
            <td>بازدید شد-در حال تهیه گذارش</td>
          </tr>
        </tbody>
      </Table>

      <Row className={styles.responsive}>
        <Card className="border-0">
          <div style={{ direction: "rtl", cursor: "pointer" }}>
            {objectsList.map((item, index) => (
              <div
                onClick={() => {
                  setToggle(item.id);
                  toggle === index + 1 && setToggle(!toggle);
                }}
                className="border m-2  rounded"
              >
                <div
                  className="p-2"
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
                    <h5 style={{ width: "100%",fontSize:"18px" }}>تاریخ ارجاع</h5>
                    <div style={{ width: "100%" }}>
                      {" "}
                      <p style={{ fontWeight: "bold", textAlign: "right" }}>
                        {item.erjaDate}
                      </p>
                    </div>

                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%",fontSize:"18px" }}>بازدید با تاخیر</h5>
                    <div style={{ width: "100%" }}>
                      {" "}
                      <p style={{ fontWeight: "bold", textAlign: "right" }}>
                        {item.lateDate}
                      </p>
                    </div>
                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%",fontSize:"18px" }}>بیمه گذار</h5>
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "100%",
                        textAlign: "right"
                      }}
                    >
                      {item.name1}-{item.activity}
                    </p>
                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%",fontSize:"18px" }}>بیمه نامه</h5>
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "100%",
                        textAlign: "right"
                      }}
                    >
                      {item.name2}
                    </p>
                    <div></div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h5 style={{ width: "100%",fontSize:"18px" }}>بیمه گر</h5>
                    <p
                      style={{
                        fontWeight: "bold",
                        width: "100%",
                        textAlign: "right"
                      }}
                    >
                      {item.name3}
                    </p>
                    <div></div>
                  </div>
                </div>
                <Collapse in={toggle === index + 1 ? true : false}>
                  <div
                    className="border rounded"
                    style={{
                      direction: "rtl",
                      cursor: "pointer",
                      padding: "0",
                      marginTop: "5px"
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
