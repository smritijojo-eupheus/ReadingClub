import React, { Component } from 'react'
import Select from 'react-select'
import TopNav from "./component/Topnavbar";
import { DocumentDuplicateIcon, ExternalLinkIcon, ArrowRightIcon } from '@heroicons/react/outline';
import makeAnimated from 'react-select/animated';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function TeacherHome() {
    const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const percentage = 26;

  return (

        <>
        <TopNav/>
        <div className='lg:px-10 md:px-8  min-h-[90vh] max-h-[100%] bg-light-purple w-[100%]'>
            <div className=' grid md:grid-cols-2 gap-2   '>
                <div className='bg-[#4C4177] h-[30vh] relative shadow-2xl rounded-3xl m-4 '>
                    <h3 className='text-white pl-7 text-2xl pt-3 font-medium '>Create Session</h3>
                  <div className='h-[20vh] flex justify-center items-center flex-col text-2xl px-3 md:text-5xl text-white  tracking-[2rem]'> 
                      <div className="relative  tracking-normal w-[90%] my-3">
                          <div className={"relative w-[90%] my-3 bg-[#00000000] "} >
                              <label htmlFor="" className={"text-sm pl-3"}>Select date</label>
                              <Select components={makeAnimated}  closeMenuOnSelect={false} isMulti    className="bg-[#00000000] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  5  border-[black]   "  options={options} />
                          </div>

                      </div>

                  </div>
                  <div className="flex justify-end items-center mr-10 gap-5">
                      <button className='bg-[#00000088] text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                       Reset
                      </button>
                      <button className='bg-[#00000088] text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                     Create Session
                      </button>
                      
                 
                  </div>
                </div>
                <div className='bg-[#7A7ADB] h-[30vh] relative z-0 shadow-xl rounded-3xl m-4 '>
                    <div className="flex justify-around ">
                        <h3 className='text-white pl-7 text-2xl pt-3 font-medium text-center'>Assignment Status</h3>
                       <div className="flex ">
                           <div className={"relative w-[90%] my-3 bg-[#00000000] "} >
                               <Select components={makeAnimated}  closeMenuOnSelect={false} isMulti    className="bg-[#00000000] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  5  border-[black]   "  options={options} />
                           </div>
                           <div className={"relative w-[90%] my-3 bg-[#00000000] "} >
                               <Select components={makeAnimated}  closeMenuOnSelect={false} isMulti    className="bg-[#00000000] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  5  border-[black]   "  options={options} />
                           </div>
                       </div>

                    </div>

                    <div className="my-4">
                        <div className="flex md:flex-row flex-col justify-around" >
                            <div className={"text-white"}>
                                <CircularProgressbar className={"h-[8rem] "}
                                  value={percentage} text={'Present'} styles={{
                                    text: {
                                        fill: 'white',
                                        fontWeight:"bold",
                                        fontSize: '20px',
                                    },

                                }} />
                            </div>
                            <div className={"text-white"}>
                                <CircularProgressbar className={"h-[8rem] "}
                                                     value={100} text={'Total'} styles={{
                                    text: {
                                        fill: 'white',
                                        fontWeight:"bold",
                                        fontSize: '20px',
                                    },

                                }} />
                            </div>
                            <div className={"text-white"}>
                                <CircularProgressbar className={"h-[8rem] "}
                                                     value={percentage} text={'Present'} styles={{
                                    text: {
                                        fill: 'white',
                                        fontWeight:"bold",
                                        fontSize: '20px',
                                    },

                                }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#4C4177] h-[53vh] relative shadow-2xl rounded-3xl m-4 '>
                    <h3 className='text-white  text-2xl  font-medium text-center py-5 '>Upload Assignment</h3>
                    <div className="flex justify-center items-center flex-col w-full mt-5">
                    <div className="relative w-[90%] my-3">
                    <div className="absolute inset-y-0 left-0 flex items-center w-full pl-3 pointer-events-none">
                        <svg className="w-5 h-5   dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input datepicker datepicker-orientation="bottom right" type="date" className="bg-[#00000000] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 text-white border-[black]  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 "  placeholder="Select date" />
                    </div>
                        <div className={"relative w-[90%] my-3 bg-[#00000000] "} >
                            <Select components={makeAnimated}  closeMenuOnSelect={false} isMulti    className="bg-[#00000000] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  5  border-[black]   "  options={options} />
                        </div>
                    <label for="dropzone-file" className="flex flex-col justify-center w-[90%] items-center  h-[20vh] bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-[#aaa5a5]"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 text-[#aaa5a5]">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>

                </div>
                    <div className=" flex justify-end  pr-[5rem] my-4">
                        <button className='bg-[#00000088] text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                            Submit&nbsp;&nbsp;<ArrowRightIcon className=" h-6 w-6 inline " aria-hidden="true" />
                        </button>
                    </div>
                 
                  
                </div>
                {/*<div className='bg-[#414146] h-[45vh] relative shadow-xl rounded-3xl m-4 '>*/}
                {/*<h3 className='text-white pl-7 text-2xl pt-3  text-center '> Session Result</h3>*/}
                {/*    <div className='relative flex sm:flex-col justify-between items-center md:flex-row gap-4 px-3 my-4'>*/}
                {/*        <div className=' relative flex justify-center '>*/}
                {/*            <img src={second} className="" alt="" />*/}
                {/*            <img src={avt2} className=" absolute top-8 h-[150px] rounded-full   w-[150px] skew-y-[4deg] p-2 "    alt="" />*/}
                {/*        </div>*/}
                {/*        <div className=' relative flex justify-center '>*/}
                {/*            <img src={topper}  alt="" />*/}
                {/*            <img src={avtar} className=" absolute top-8 h-[150px] rounded-full  w-[150px] skew-y-[4deg] p-2 "    alt="" />*/}
                {/*        </div>*/}
                {/*        <div className=' relative flex justify-center'>*/}
                {/*            <img src={third} alt="" />*/}
                {/*            <img src={avt3} className=" absolute top-8 h-[150px] rounded-full   w-[150px] skew-y-[4deg] p-2 "    alt="" />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                
            </div> 
        </div>
        
        </>
  )
}
