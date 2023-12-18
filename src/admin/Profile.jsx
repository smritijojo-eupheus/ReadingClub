import React, {useState} from 'react'
import Topnavbar from "./component/Topnavbar";

export default function Profile() {
    const [openTab, setOpenTab] = useState(1);
  return (
    <div>
        <Topnavbar/>
        <div className="flex flex-wrap lg:px-10 md:px-8  min-h-[90vh] max-h-[100%] bg-light-purple w-[100%]">
            <div className="mx-auto">
                <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                >
                    <li className={"-mb-px mr-2 last:mr-0  text-white flex-auto text-center"+(openTab === 1
                    ? "text-white bg-[black]"
                    : "text-white bg-black-500 ") }>
                        <a
                            className={
                                "text-xs text-center font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal "

                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            <i className="fas fa-space-shuttle text-base mr-1"></i> Profile
                        </a>
                    </li>
                    <li className={"-mb-px mr-2 last:mr-0  text-white flex-auto text-center"+(openTab === 2
                        ? "text-white bg-[black]"
                        : "text-white bg-black-500 ") }>
                        <a
                            className={
                                "text-xs font-bold text-center uppercase px-5 py-3 shadow-lg rounded block leading-normal "
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link2"
                            role="tablist"
                        >
                            <i className="fas fa-cog text-base mr-1"></i>  My School
                        </a>
                    </li>
                    <li className={"-mb-px mr-2 last:mr-0  text-white flex-auto text-center"+(openTab === 3
                        ? "text-white bg-[black]"
                        : "text-white bg-black-500 ") }>
                        <a
                            className={
                                "text-xs font-bold uppercase px-5 text-center py-3 shadow-lg rounded block leading-normal "
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link3"
                            role="tablist"
                        >
                            <i className="fas fa-briefcase text-base mr-1"></i>  My Credentials
                        </a>
                    </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-[#4C4177] text-white justify-center w-[100vw] md:w-[80vw] lg:w-[50vw] mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto">
                        <div className="tab-content tab-space">
                            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                <table className="table-auto  w-[100%]  p-3"  >
                                    <tr>
                                        <td>
                                            <code>NAME</code>
                                        </td>
                                        <td>ARMAN SAHOO</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Gender</code>
                                        </td>
                                        <td>MALE</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Mobile</code>
                                        </td>
                                        <td>7829456321</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Email</code>
                                        </td>
                                        <td>swarnamayee.sah@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Payment Status</code>
                                        </td>
                                        <td>PAID</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Order ID</code>
                                        </td>
                                        <td>order_ijjlntasgjk7qr</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Payment ID</code>
                                        </td>
                                        <td>pay_ijjmrsidwmlrs8</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Amount Paid</code>
                                        </td>
                                        <td>3000</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                <table className="table-auto  w-[100%]  p-3"  >
                                    <tr>
                                        <td>
                                            <code>SCHOOL NAME</code>
                                        </td>
                                        <td>DELHI PUBLIC SCHOOL WHITEFIELD</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>ADDRESS</code>
                                        </td>
                                        <td>MALLASANDRA, WHITEFIELD</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>PINCODE</code>
                                        </td>
                                        <td>560067</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>CITY</code>
                                        </td>
                                        <td>BANGALORE</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>STATE</code>
                                        </td>
                                        <td>KARNATAKA</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>COUNTRY</code>
                                        </td>
                                        <td>INDIA</td>
                                    </tr>
                                </table>

                            </div>
                            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                <table className="table-auto  w-[100%]  p-3"  >
                                    <tr>
                                        <th colSpan="2" className={"bg-[black] p-3"}>
                                            <center>Reading Club </center>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Username</code>
                                        </td>
                                        <td>ST100486</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Password</code>
                                        </td>
                                        <td>********</td>
                                    </tr>
                                    <tr>
                                        <th colSpan="2" className={"bg-[black] p-3"}>
                                            <center>Fiction Express &nbsp; <a className="btn btn-info btn-sm bg-[red] p-2"
                                                                              href="https://en.fictionexpress.com/account/login/">Go
                                                to login page</a></center>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Username</code>
                                        </td>
                                        <td>armansahoo1</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Password</code>
                                        </td>
                                        <td>********</td>
                                    </tr>
                                    <tr>
                                        <th colSpan="2" className={"bg-[black] p-3"}>
                                            <center>Pickatale School &nbsp;<a className="btn btn-info btn-sm bg-[red] p-2"
                                                                              href="https://play.google.com/store/apps/details?id=com.Pickatale.PFS">Download
                                                App from playstore</a></center>
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Username</code>
                                        </td>
                                        <td>IN-084436</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <code>Password</code>
                                        </td>
                                        <td>********</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
