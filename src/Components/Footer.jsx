import React from 'react'
import "./Footer.css"
import apple from "../assests/Apple svg.png"
import palystore from "../assests/Playstore.png"
function Footer() {
  
  return (
   <>
   <footer class="w-full mt-5">

<div className='bg-black w-full p-11  grid grid-cols-1 md:grid-cols-2  gap-2'>
<div className='w-full'>
<h1 className='text-white text-xl font-bold'>Subscribe to our newsletter </h1>
<p className='text-white '>Stay up to date with the latest news, announcements and articles.</p>

</div>
<div className='w-full sm:'>
<input className=' footer-inp ' type="text" name="" id="" placeholder='Enter Your Email'/>
<button className='footer-btn mx-3 my-3 text-white '>Subscribe</button>
</div>
</div>



  <div class="w-full bg-[#3C3C3C] ">
   
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="md:w-64 flex-shrink-0 md:mr-0 mr-auto md:text-left md:mt-0 mt-10">
  
        <span class="ml-3 text-lg md:text-left text-center  text-[#699fc9]">Get The App</span>
   
        <div className="justify-center items-center border self-stretch flex w-full grow flex-col mt-7 pl-8 pr-8 py-4 rounded-xl border-solid border-white max-md:px-5">
              <div className="items-start  flex justify-between gap-4">
                <img
                  loading="lazy"
                  src={apple}
                  className="aspect-[0.95] object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                />
                <div className="items-start self-stretch flex flex-col">
                  <div className="self-stretch text-white text-opacity-80 text-xs font-medium">
                  Download on the                  </div>
                  <div className="text-white text-xl font-semibold self-stretch whitespace-nowrap">
                  Apple Store                  </div>
                </div>
              </div>
              </div>

   <div className="justify-center items-center border self-stretch flex w-full grow flex-col mt-7 pl-8 pr-8 py-4 rounded-xl border-solid border-white max-md:px-5">
              <div className="items-start  flex justify-between gap-4">
                <img
                  loading="lazy"
                  src={palystore}
                  className="aspect-[0.95] object-contain object-center w-9 overflow-hidden self-center max-w-full my-auto"
                />
                <div className="items-start self-stretch flex flex-col">
                  <div className="self-stretch text-white text-opacity-80 text-xs font-medium">
                    Get it on
                  </div>
                  <div className="text-white text-xl font-semibold self-stretch whitespace-nowrap">
                    Google Play
                  </div>
                </div>
              </div>
              </div>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left  order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">Services</h2>
        <nav class="list-none mb-10 ">
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Umrah package</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Flight</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Get Hotel</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Get Insurance</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Deals</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Get Visa</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Trip</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">Contact Us</h2>
        <nav class="list-none mb-10">
          <li className='my-3'> 
          <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M14.6667 4.00008C14.6667 3.26675 14.0667 2.66675 13.3334 2.66675H2.66671C1.93337 2.66675 1.33337 3.26675 1.33337 4.00008V12.0001C1.33337 12.7334 1.93337 13.3334 2.66671 13.3334H13.3334C14.0667 13.3334 14.6667 12.7334 14.6667 12.0001V4.00008ZM13.3334 4.00008L8.00004 7.33341L2.66671 4.00008H13.3334ZM13.3334 12.0001H2.66671V5.33341L8.00004 8.66675L13.3334 5.33341V12.0001Z" fill="white" fill-opacity="0.67"/>
</svg>            <a class="text-[#c1c1c1] mx-1">Simple@gmail.com</a>
          </li>
          <li className='my-3'>
          <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M13.34 10.2533C12.52 10.2533 11.7267 10.12 10.9867 9.88C10.8707 9.8407 10.7461 9.83487 10.627 9.86317C10.5079 9.89147 10.3992 9.95275 10.3133 10.04L9.26667 11.3533C7.38 10.4533 5.61333 8.75333 4.67333 6.8L5.97333 5.69333C6.15333 5.50667 6.20667 5.24667 6.13333 5.01333C5.88667 4.27333 5.76 3.48 5.76 2.66C5.76 2.3 5.46 2 5.1 2H2.79333C2.43333 2 2 2.16 2 2.66C2 8.85333 7.15333 14 13.34 14C13.8133 14 14 13.58 14 13.2133V10.9133C14 10.5533 13.7 10.2533 13.34 10.2533Z" fill="white" fill-opacity="0.51"/>
</svg>
            <a class="text-[#c1c1c1]  mx-1 ">  +92-123456789 <br /> </a>
          </li>
          
          <li className='my-3'>
          <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 1.33325C5.42004 1.33325 3.33337 3.41992 3.33337 5.99992C3.33337 9.49992 8.00004 14.6666 8.00004 14.6666C8.00004 14.6666 12.6667 9.49992 12.6667 5.99992C12.6667 3.41992 10.58 1.33325 8.00004 1.33325ZM4.66671 5.99992C4.66671 4.15992 6.16004 2.66659 8.00004 2.66659C9.84004 2.66659 11.3334 4.15992 11.3334 5.99992C11.3334 7.91992 9.41337 10.7933 8.00004 12.5866C6.61337 10.8066 4.66671 7.89992 4.66671 5.99992Z" fill="white" fill-opacity="0.44"/>
  <path d="M8.00004 7.66658C8.92052 7.66658 9.66671 6.92039 9.66671 5.99992C9.66671 5.07944 8.92052 4.33325 8.00004 4.33325C7.07957 4.33325 6.33337 5.07944 6.33337 5.99992C6.33337 6.92039 7.07957 7.66658 8.00004 7.66658Z" fill="white" fill-opacity="0.44"/>
</svg>
            <a class="text-[#c1c1c1] mx-1">Phone : 23456783452</a>
          </li>
          <li className='my-3'>
          <svg className='inline-flex' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14" fill="none">
  <g clip-path="url(#clip0_1_286)">
    <path d="M6.99996 12.8334C10.2216 12.8334 12.8333 10.2217 12.8333 7.00008C12.8333 3.77842 10.2216 1.16675 6.99996 1.16675C3.7783 1.16675 1.16663 3.77842 1.16663 7.00008C1.16663 10.2217 3.7783 12.8334 6.99996 12.8334Z" stroke="white" stroke-opacity="0.58" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M1.16663 7H12.8333" stroke="white" stroke-opacity="0.58" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.99996 1.16675C8.45904 2.76412 9.28823 4.8371 9.33329 7.00008C9.28823 9.16306 8.45904 11.236 6.99996 12.8334C5.54088 11.236 4.71169 9.16306 4.66663 7.00008C4.71169 4.8371 5.54088 2.76412 6.99996 1.16675Z" stroke="white" stroke-opacity="0.58" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_286">
      <rect width="14" height="14" fill="white"/>
    </clipPath>
  </defs>
</svg>
            <a class="text-[#c1c1c1] mx-1">Yourwebsite.com </a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">Company</h2>
        <nav class="list-none mb-10">
          <li className='my-3'>
            <a class="text-[#c1c1c1]">About Us</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">FAQ</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Privacy policy</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Term of use</a>
          </li>
          <li className='my-3'>
            <a class="text-[#c1c1c1]">Blogs</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-lg mb-3">Social links</h2>
        <nav class="list-none flex my-8 gap-3 ">
        <li>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 11.0614C0 16.5303 3.97192 21.0778 9.16667 22V14.0553H6.41667V11H9.16667V8.55525C9.16667 5.80525 10.9386 4.27808 13.4447 4.27808C14.2386 4.27808 15.0947 4.4 15.8886 4.52192V7.33333H14.4833C13.1386 7.33333 12.8333 8.00525 12.8333 8.86142V11H15.7667L15.2781 14.0553H12.8333V22C18.0281 21.0778 22 16.5312 22 11.0614C22 4.9775 17.05 0 11 0C4.95 0 0 4.9775 0 11.0614Z" fill="white"/>
</svg>          </li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22" fill="none">
  <path d="M14.52 11C14.52 11.6962 14.3136 12.3767 13.9268 12.9556C13.54 13.5345 12.9902 13.9856 12.347 14.2521C11.7038 14.5185 10.9961 14.5882 10.3133 14.4524C9.63047 14.3165 9.00326 13.9813 8.51098 13.489C8.0187 12.9967 7.68346 12.3695 7.54764 11.6867C7.41182 11.0039 7.48152 10.2962 7.74794 9.65295C8.01436 9.00976 8.46553 8.46001 9.04439 8.07323C9.62325 7.68644 10.3038 7.48 11 7.48C11.9327 7.4829 12.8263 7.85469 13.4858 8.51419C14.1453 9.17369 14.5171 10.0673 14.52 11ZM22 6.16V15.84C22 17.4737 21.351 19.0406 20.1958 20.1958C19.0406 21.351 17.4737 22 15.84 22H6.16C4.52627 22 2.95945 21.351 1.80422 20.1958C0.648998 19.0406 0 17.4737 0 15.84V6.16C0 4.52627 0.648998 2.95945 1.80422 1.80422C2.95945 0.648998 4.52627 0 6.16 0H15.84C17.4737 0 19.0406 0.648998 20.1958 1.80422C21.351 2.95945 22 4.52627 22 6.16ZM16.28 11C16.28 9.95571 15.9703 8.93488 15.3902 8.06659C14.81 7.1983 13.9854 6.52155 13.0206 6.12192C12.0558 5.72229 10.9941 5.61772 9.96992 5.82145C8.9457 6.02518 8.0049 6.52806 7.26648 7.26648C6.52806 8.0049 6.02518 8.9457 5.82145 9.96992C5.61772 10.9941 5.72229 12.0558 6.12192 13.0206C6.52155 13.9854 7.1983 14.81 8.06659 15.3902C8.93488 15.9703 9.95571 16.28 11 16.28C12.4003 16.28 13.7433 15.7237 14.7335 14.7335C15.7237 13.7433 16.28 12.4003 16.28 11ZM18.04 5.28C18.04 5.01893 17.9626 4.76372 17.8175 4.54665C17.6725 4.32957 17.4663 4.16039 17.2251 4.06048C16.9839 3.96057 16.7185 3.93443 16.4625 3.98536C16.2064 4.0363 15.9712 4.16201 15.7866 4.34662C15.602 4.53122 15.4763 4.76643 15.4254 5.02248C15.3744 5.27853 15.4006 5.54394 15.5005 5.78514C15.6004 6.02634 15.7696 6.2325 15.9866 6.37754C16.2037 6.52258 16.4589 6.6 16.72 6.6C17.0701 6.6 17.4058 6.46093 17.6534 6.21338C17.9009 5.96583 18.04 5.63009 18.04 5.28Z" fill="white"/>
</svg>          </li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.7206e-07 1.838C2.7206e-07 1.35053 0.193646 0.883032 0.538338 0.53834C0.88303 0.193648 1.35053 2.45031e-06 1.838 2.45031e-06H20.16C20.4016 -0.000392101 20.6409 0.0468654 20.8641 0.139069C21.0874 0.231273 21.2903 0.366612 21.4612 0.537339C21.6322 0.708065 21.7677 0.910826 21.8602 1.13401C21.9526 1.3572 22.0001 1.59643 22 1.838V20.16C22.0003 20.4016 21.9529 20.6409 21.8606 20.8642C21.7683 21.0875 21.6328 21.2904 21.462 21.4613C21.2912 21.6322 21.0884 21.7678 20.8651 21.8602C20.6419 21.9526 20.4026 22.0001 20.161 22H1.838C1.59655 22 1.35746 21.9524 1.1344 21.86C0.911335 21.7676 0.708671 21.6321 0.537984 21.4613C0.367297 21.2905 0.231932 21.0878 0.139623 20.8647C0.0473133 20.6416 -0.000131096 20.4025 2.7206e-07 20.161V1.838ZM8.708 8.388H11.687V9.884C12.117 9.024 13.217 8.25 14.87 8.25C18.039 8.25 18.79 9.963 18.79 13.106V18.928H15.583V13.822C15.583 12.032 15.153 11.022 14.061 11.022C12.546 11.022 11.916 12.111 11.916 13.822V18.928H8.708V8.388ZM3.208 18.791H6.416V8.25H3.208V18.79V18.791ZM6.875 4.812C6.88105 5.08667 6.83217 5.35979 6.73124 5.61532C6.63031 5.87084 6.47935 6.10364 6.28723 6.30003C6.09511 6.49643 5.8657 6.65247 5.61245 6.75901C5.35921 6.86554 5.08724 6.92042 4.8125 6.92042C4.53776 6.92042 4.26579 6.86554 4.01255 6.75901C3.7593 6.65247 3.52989 6.49643 3.33777 6.30003C3.14565 6.10364 2.99469 5.87084 2.89376 5.61532C2.79283 5.35979 2.74395 5.08667 2.75 4.812C2.76187 4.27286 2.98439 3.75979 3.36989 3.38269C3.75539 3.00558 4.27322 2.79442 4.8125 2.79442C5.35178 2.79442 5.86961 3.00558 6.25511 3.38269C6.64061 3.75979 6.86313 4.27286 6.875 4.812Z" fill="white"/>
</svg>          </li>
          <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 22 22" fill="none">
  <rect width="22" height="22" rx="4" fill="white"/>
  <path d="M2.04145 4L8.60496 11.9752L2 18.4594H3.48651L9.26914 12.7824L13.9413 18.4594H19L12.0672 10.0356L18.215 4H16.7285L11.403 9.22839L7.1001 4H2.04145ZM4.22747 4.99505H6.55143L16.8136 17.4642H14.4897L4.22747 4.99505Z" fill="#3C3C3C"/>
</svg>          </li>
       
        
        </nav>
      </div>
    </div>
  </div>
 
  </div>
</footer> 











  



  

   </>
  )
}

export default Footer



