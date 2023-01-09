import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import Image from "next/image";
import styles from "./index.module.css";
import { BsPerson } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CiLogin, CiLogout } from "react-icons/ci";
import { useRouter } from "next/router";
import { logout } from "../../../../../features/user.slice";

function index() {
  const router = useRouter();
  const user = useSelector((selectUser) => selectUser.User);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  return (
    <Navbar
      className="shadow mb-3"
      style={{ direction: "rtl", backgroundColor: "white" }}
      expand="lg"
    >
      <Container fluid>
        <div className={styles.logo}>
          <Image src="/assets/images/Site-Logo.png" width="50" height="50" />
          <Navbar.Brand style={{ fontWeight: "bold" }} href="#">
            ریتون پایدار پارس
          </Navbar.Brand>
        </div>
        <div className={styles.res_nav}>
          <div className={styles.top_menu}>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <div className={styles.res_icon}>
              <BsPerson style={{ fontSize: "30px", cursor: "pointer" }} />
              <div>
                {" "}
                {user.user ? (
                  <CiLogout onClick={handleLogout} className={styles.logIcon} />
                ) : (
                  <CiLogin
                    onClick={() => {
                      router.push("/login");
                    }}
                    className={styles.logIcon}
                  />
                )}
              </div>
            </div>
          </div>
          <div>
            <Navbar.Collapse
              style={{ borderTop: "1px solid #E6E6E6", marginTop: "10px" }}
              id="navbarScroll"
            >
              <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
                {user.user && (
                  <>
                    <Nav.Link style={{ fontWeight: "bold" }} href="#action1">
                      پرونده های جاری
                    </Nav.Link>
                    <Nav.Link style={{ fontWeight: "bold" }} href="#action1">
                      ثبت پرونده بیمه
                    </Nav.Link>
                    <Nav.Link style={{ fontWeight: "bold" }} href="#action2">
                      ثبت ساعت
                    </Nav.Link>
                  </>
                )}

                <Nav.Link style={{ fontWeight: "bold" }} href="#">
                  دفتر کیهان
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
        <div className={styles.des_icons}>
          <div className={styles.des_profile}>
            {" "}
            <BsPerson style={{ fontSize: "30px" }} />
            {/* <div style={{margin:"0", fontSize:"12px", fontWeight:"bold"}}>پروفایل</div> */}
          </div>
          <div>
            {" "}
            {user.user ? (
              <CiLogout onClick={handleLogout} className={styles.logIcon} />
            ) : (
              <CiLogin
                onClick={() => {
                  router.push("/login");
                }}
                className={styles.logIcon}
              />
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default index;
