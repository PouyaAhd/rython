import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import Layout from '../../components/pages/ui/layout/index'
import { LoginUser } from '../api/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, role } from '../../features/user.slice'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function index() {
    const user = useSelector(selectUser => selectUser.User)
    const dispatch = useDispatch();
    const router = useRouter()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errLogin, setErrLogin] = useState(false)

    const handleSubmit = () => {
        LoginUser((res) => {
            if (res.success) {
                router.push('/cases')
                toast.success("با موفقیت وارد شدید")
            } else {
                // setErrLogin(true)
                toast.error("نام کاربری یا رمز عبور اشتباه است")
                console.log(res.message);
            }

        }, {
            UserName: username,
            password: password
        },
        )

    }

    const handleLogout = () => {
        dispatch(logout())
    }

 
    return (
        <Layout  >
            <Container>
                <section className="vh-100" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="container py-5 h-50">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-xl-10">
                                <div className="card" style={{ borderRadius: "1rem" }}>
                                    <div className="row g-0">
                                        <div className="col-md-6 col-lg-5 d-none d-md-block">
                                            <img src="https://logosource.ir/wp-content/uploads/2019/09/bime-parsian.jpg"
                                                alt="login form" className="img-fluid" style={{ borderRadius: "0 1rem 1rem 0", }} />
                                        </div>
                                        <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                            <div className="card-body p-4 p-lg-5 text-black">

                                                <form >

                                                    <div className="d-flex align-items-center mb-3 pb-1">
                                                        <span className="h4 fw-bold mb-0">به ریتون پایدار پارس خوش آمدید</span>
                                                    </div>

                                                    <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1", fontSize: "14px" }}>وارد حساب کاربری خود شوید</h5>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => { setUsername(e.target.value) }} type="text" id="form2Example17" className="form-control form-control-lg" placeholder='نام کاربری' />
                                                        {/* <label className="form-label" for="form2Example17">Email address</label> */}
                                                    </div>

                                                    <div className="form-outline mb-4">
                                                        <input onChange={(e) => { setPassword(e.target.value) }} type="password" id="form2Example27" className="form-control form-control-lg" placeholder='رمز عبور' />
                                                        {/* <label className="form-label" for="form2Example27">Password</label> */}
                                                    </div>

                                                    {errLogin && <div className='text-center text-danger'>نام کاربری یا رمز عبور اشتباه است</div>}

                                                    <div className="pt-1 mb-4">
                                                        {user.user ? <button onClick={handleLogout} className="btn btn-dark btn-lg btn-block" type="button">خروج</button> : <button onClick={handleSubmit} className="btn btn-dark btn-lg btn-block" type="button">ورود</button>}
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        </Layout>
    )
}

export default index