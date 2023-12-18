// import React, { useEffect, useState } from 'react'
// import Navbar from "./component/Topnavbar";
// import { ZoomMtg } from '@zoomus/websdk'
// import axios from 'axios';

// // import ZoomMtgEmbedded from '@zoomus/websdk/embedded'

// // const client = ZoomMtgEmbedded.createClient()
// export default function Zoom() {

//   // const [api, Setapi] = useState(null);

// //  useEffect(()=>{
// //   const api= async ()=>{
// //     const res = await axios.get('http://localhost:5000/schedule-meeting');
// //     Setapi(res.data)
// //     console.log(res.data)
// //   }
// //   api();
// //  },[])

// //  const zoomMeetingSDK = document.getElementById('zmmtg-root')
// //       zoomMeetingSDK.style.display = 'none';
// ZoomMtg.setZoomJSLib('https://jssdk.zoomus.cn/2.4.5/lib', '/av')
//     ZoomMtg.preLoadWasm()
//     ZoomMtg.prepareJssdk()

//     // loads language files, also passes any error messages to the ui
//     ZoomMtg.i18n.load('en-US')
//     ZoomMtg.i18n.reload('en-US')
    

   
//     ZoomMtg.init({
//         leaveUrl: 'http://localhost:3000/student/home',
//         isSupportAV: true,
//         success: (success) => {
//           console.log('success out')
//           // zoomMeetingSDK.style.display = 'none';
//           // console.log(api.message.data.signature);
//             ZoomMtg.join({
//             signature: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZGtLZXkiOiJqNEpaYXphcXRHUFFBMTZoNXpPY1hTYkg4YzZGZFhnQ0F0Mk4iLCJpYXQiOjE2NTQ3NzUzNDEsImV4cCI6MTY1NDc4MjU0MSwibW4iOiI5NzExNDc0Mzk5MCIsInJvbGUiOjB9.2Z6tfaJ0vToyQ86Qncf8Cv3kWMIqql1uVpy3QKFzDqw',
//             meetingNumber: '97114743990',
//             userName: "userName",
//             sdkKey: 'j4JZazaqtGPQA16h5zOcXSbH8c6FdXgCAt2N',
//             userEmail: 'atul@emp.in',
//             passWord: '1234567',
//             role : 0,
//             success: (success) => {
//               console.log('success')
//               // zoomMeetingSDK.style.display = 'block';
//             },
//             error: (error) => {
//               console.log('error in')
//             }
//           })
          
      
//         },
//         error: (error) => {
//           console.log('error out')
//         }
//       })


   

//   return ( 
//     <div>
//         <Navbar/>
//         {/* <div id="zmmtg-root"></div>
//     <div id="aria-notify-area"></div> */}
//     </div>
//   )
// }
