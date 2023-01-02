import React, { useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import styles from "./index.module.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

function index({ data }) {
  //   const [open, setOpen] = useState(false);
  const [objectsList, setObjectsList] = useState([
    { id: 1, name1: "عرفانیان", name2: "آتش سوزی-صنعتی", name3: "پارسیان" },
    { id: 2, name1: "عرفانیان", name2: "آتش سوزی-صنعتی", name3: "پارسیان" },
    { id: 3, name1: "عرفانیان", name2: "آتش سوزی-صنعتی", name3: "پارسیان" },
    { id: 4, name1: "عرفانیان", name2: "آتش سوزی-صنعتی", name3: "پارسیان" },
  ]);

  const handleClick = (item) => {
    setObjectsList(
      objectsList.map((e) =>
        e.id === item.id ? { ...e, isOpen: !e.isOpen } : e
      )
    );
  };

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
                onClick={() => handleClick(item)}
                className="border m-2 p-2 rounded"
              >
                <div className="d-flex justify-content-between">
                  <h5>بیمه گذار:</h5>
                  <p>عرفانیان</p>
                  <div></div>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>بیمه نامه:</h5>
                  <p>آتش سوزی-غیرصنعتی</p>
                  <div></div>
                </div>
                <div className="d-flex justify-content-between">
                  <h5>بیمه گر:</h5>
                  <p>پارسیان</p>
                  <div></div>
                </div>
                <Collapse in={item.isOpen}>
                  <div
                    className="border rounded"
                    style={{
                      direction: "rtl",
                      cursor: "pointer",
                      padding: "0",
                      marginTop: "5px",
                    }}
                    id="example-collapse-text"
                  >
                    <div className=" d-flex justify-content-between p-2">
                      <h5>شماره پرونده:</h5>
                      <p>4888</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>فعالیت:</h5>
                      <p>کافی شاپ</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>تاریخ ارجاع:</h5>
                      <p>1401/10/08</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>شعبه:</h5>
                      <p>مشهد</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>شماره نامه:</h5>
                      <p>1401-4575</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>شماره گزارش:</h5>
                      <p>2339-آت-1401</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>شهر:</h5>
                      <p>مشهد</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>تاریخ بازدید با تاخیر:</h5>
                      <p>1401/10/11</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>کارشناس بازدید:</h5>
                      <p>رسول فلاحی</p>
                    </div>
                    <hr style={{ width: "95%" }} className=" m-auto" />
                    <div className=" d-flex justify-content-between p-2">
                      <h5>وضعیت:</h5>
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
