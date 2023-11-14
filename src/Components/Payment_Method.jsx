import React, { useState } from 'react'
import Securepayment from "../assests/Payment_Method/Secure_Payment.png"
import Refunds from "../assests/Payment_Method/Lighting_Fast_Refunds.png"
import Mastercard from "../assests/Payment_Method/Mastercard - png.png"
import HBL from "../assests/Payment_Method/HBL.png"
import Link1 from "../assests/Payment_Method/Link.png"
import Konnect from "../assests/Payment_Method/Konnect.png"
import JazzCash from "../assests/Payment_Method/JazzCash.png"
import EasyPaisa from "../assests/Payment_Method/EasyPaisa.png"
import Phone from "../assests/Payment_Method/Phone.png"
import DebitCard from './DebitCard'
import Easypaisa_bank from './Easypaisa_Bank'
import Bill_Bank from './Bill_Bank'
import HBL_Bank from './HBL_Bank'
import Jazzcash from './Jazzcash'
import "./PaymentMethod.css"
function Payment_Method() {

const [payment_method,setpayment_method]=useState()

  return (
    <>
        <div className="bg-neutral-100 flex flex-col px-5 overflow-hidden">
      <div className="self-center flex w-full max-w-screen-xl flex-col mb-[100px] max-md:max-w-full max-md:mb-10">
        <div className="text-slate-400 text-center text-2xl font-medium whitespace-nowrap mt-24 self-start max-md:ml-0.5 max-md:mt-10">
          Payment Options
        </div>
        <div className="self-stretch mt-7 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[74%] max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow flex-col w-full mx-auto rounded-lg max-md:max-w-full max-md:mt-7">
                <div className="justify-center items-center border flex  max-w-full flex-col px-5 py-7 rounded-lg border-solid border-zinc-300 border-opacity-90 w-full self-start">
                  <div className="items-start self-center flex w-[827px] max-w-full justify-between gap-5 max-md:flex-wrap max-md:justify-center">
                    <div className="items-start self-stretch flex justify-between gap-2">
                      <img
                        loading="lazy"
                        src={Securepayment}
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden max-w-full self-start"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg whitespace-nowrap self-start">
                        Secure Payment
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-1">
                      <img
                        loading="lazy"
                        src={Refunds}
                        className="aspect-square object-contain object-center w-[25px] overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-zinc-400 text-opacity-80 text-center text-lg self-stretch whitespace-nowrap">
                        Lightning Fast Refunds{" "}
                      </div>
                    </div>
                    <div className="items-start self-stretch flex justify-between gap-5">
                    <svg className="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M21 8.5H14.69L15.64 3.93L15.67 3.61C15.67 3.2 15.5 2.82 15.23 2.55L14.17 1.5L7.59 8.09C7.22 8.45 7 8.95 7 9.5V19.5C7 20.6 7.9 21.5 9 21.5H18C18.83 21.5 19.54 21 19.84 20.28L22.86 13.23C22.95 13 23 12.76 23 12.5V10.5C23 9.4 22.1 8.5 21 8.5ZM21 12.5L18 19.5H9V9.5L13.34 5.16L12.23 10.5H21V12.5ZM1 9.5H5V21.5H1V9.5Z" fill="black"/>
</svg>
                                              

                      <div className="text-zinc-400 text-opacity-80 text-center text-lg self-stretch whitespace-nowrap">
                        Trust by 10 lac customers
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[896px] max-w-full self-start">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[55%] max-md:w-full max-md:ml-0">
                      <div className="flex flex-col max-md:max-w-full max-md:mt-1.5">


                        <button onClick={()=>setpayment_method("Visa")} className="cursor-pointer rounded hover:bg-sky-100   focus:bg-sky-100  bg-opacity-70 flex w-[491px] max-w-full flex-col pl-5 pr-5 pt-2 pb-7 self-start">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/32743de8-cb61-4244-a025-eb9180481c79?"
                            className="aspect-[0.86] object-contain object-center w-1.5 overflow-hidden max-w-full self-end max-md:mr-px"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2b62e18-a302-46d0-be2f-148e4f943267?"
                            className="aspect-[0.86] object-contain object-center w-1.5 overflow-hidden max-w-full self-end max-md:mr-px"
                          />
                          <div className="flex w-[385px] max-w-full items-start justify-between gap-5 self-start max-md:justify-center">
                            <div className="justify-center text-slate-400 text-center text-xl font-medium my-auto">
                              Debit Credit Card
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f41030e4-1628-4e6d-9b55-b3393ec03a3c?"
                              className="aspect-[2.5] object-contain object-center w-[70px] overflow-hidden self-stretch max-w-full"
                            />
                            <img
                              loading="lazy"
                              src={Mastercard}
                              className="aspect-[2.26] object-contain object-center w-[61px] overflow-hidden self-stretch max-w-full"
                            />
                          </div>
                        </button>



                        <div onClick={()=>setpayment_method("HBL")} className="cursor-pointer rounded hover:bg-sky-100   focus:bg-sky-100  bg-opacity-70 flex w-[491px] max-w-full flex-row justify-between pl-5 pr-5 pt-2 pb-7 self-start">
                          <div className="items-start self-stretch flex flex-col">
                            <div className="text-neutral-800 text-center text-xl whitespace-nowrap self-start">
                              HBL Direct Transfer
                            </div>
                            <div className="text-slate-400 text-center text-base font-light whitespace-nowrap self-start">
                              Save PKR 3,214 on fees
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src={HBL}
                            className="aspect-[2.14] object-contain object-center md:w-[94px] w-16 overflow-hidden self-center max-w-full my-auto"
                          />
                          <img
                            loading="lazy"
                            src={Konnect}
                            className="aspect-square object-contain object-center md:w-16 w-28 overflow-hidden self-center max-w-full my-auto"
                          />
                        </div>



                        <div onClick={()=>setpayment_method("BillBank")} className="cursor-pointer rounded hover:bg-sky-100   focus:bg-sky-100  bg-opacity-70 flex w-[491px] max-w-full flex-row justify-between pl-5 pr-5 pt-2 pb-7 self-start">
                          <div className="items-start flex flex-col self-start">
                            <div className="text-neutral-800 text-center text-xl whitespace-nowrap self-start">
                              1 Bill_ Bank Transfer
                            </div>
                            <div className="text-slate-400 text-center text-base font-light whitespace-nowrap self-start">
                              Save PKR 3,214 on fees
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src={Link1}
                            className="aspect-[1.08] object-contain object-center w-14 overflow-hidden max-w-full self-start"
                          />
                        </div>




                        <div onClick={()=>setpayment_method("Jazzcash")} className="cursor-pointer rounded hover:bg-sky-100   focus:bg-sky-100  bg-opacity-70 flex w-[491px] max-w-full flex-row justify-between pl-5 pr-5 pt-2 pb-7 self-start">
                          <div className="text-black text-center text-xl self-center my-auto">
                            Jazzcash
                          </div>
                          <img
                            loading="lazy"
                            src={JazzCash}
                            className="aspect-[2.02] object-contain object-center md:w-[131px] w-28 overflow-hidden self-stretch max-w-full"
                          />
                        </div>



                        <div onClick={()=>setpayment_method("Easypaisa ")} className="cursor-pointer rounded hover:bg-sky-100   focus:bg-sky-100  bg-opacity-70 flex w-[491px] max-w-full flex-row justify-between pl-5 pr-5 pt-2 pb-7 self-start">
                          <div className="text-black text-center text-xl my-auto">
                            Easypaisa
                          </div>
                          <img
                            loading="lazy"
                            src={EasyPaisa}
                            className="aspect-square object-contain object-center w-[42px] mix-blend-multiply overflow-hidden self-stretch max-w-full"
                          />
                        </div>



                      </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex w-[399px] max-w-full grow items-start justify-between gap-5 max-md:mt-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a7b9037-654c-4cf3-82b1-6f5d8ef9af18?"
                          className="aspect-[0.01] object-contain object-center w-[7px] items-center overflow-hidden self-stretch max-w-full"
                        />
                      <div className="self-center flex flex-col grow shrink-0 basis-auto md:my-auto my-10">
                  

                      
                   
                      {
                      
                      
 payment_method === 'Visa' ? <DebitCard/> : // if 
  payment_method === 'HBL' ? <HBL_Bank/> : // else if 
  payment_method === 'BillBank' ? <Bill_Bank/> : // else if
  payment_method === 'Jazzcash' ? <Jazzcash/> : // else if
   <Easypaisa_bank/>  // else if

  // else 


}
                          
                          <div className="items-start flex w-[330px] max-w-full flex-col mt-10 self-start max-md:mt-10">
                            <div className="text-slate-400 text-xs font-medium leading-5 whitespace-nowrap self-start">
                              <span className="text-black">Please </span>
                              <span className="text-slate-400">login</span>
                              <span className="text-black">
                                {" "}
                                to avail discounts on voucher codes.
                              </span>
                            </div>
                            <div className="justify-center text-slate-400 md:w-[100%] w-[80%] flex md:flex-col flex-col  text-xs leading-5 md:mt-2 mt-0 self-start">
                              <span className="text-black">
                                <br />
                              </span>
                              <span className="text-neutral-400">
                                By selecting to complete this booking, I
                                acknowledge that I have read and accept the
                                above Policy section containing Fare Rules &
                                Restrictions
                              </span>
                              <span className="text-black">,</span>
                              <span className="text-slate-400">
                                Terms of Use and privacy policy
                                <br />
                              </span>
                            </div>
                          </div>




                          <div className="justify-center items-center border flex md:w-[304px] w-[250px] max-w-full grow flex-col mt-16 md:px-5 px-2 py-3.5 rounded-xl border-solid border-zinc-300 border-opacity-80 self-start max-md:mt-10">
                            <div className="text-slate-400 text-sm font-medium leading-5 self-center whitespace-nowrap">
                              Pay Now
                            </div>



                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

{/* Primary Summery Start */}

            <div className="primary-div flex flex-row items-stretch  ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:mt-7">
                <div className="text-slate-400 text-center text-lg font-medium lowercase whitespace-nowrap items-center border md:w-[250px] w-[250px] max-w-full pl-4 pr-5 py-5 rounded-xl border-solid border-zinc-300 self-start md:ml-0 ml-5">
                  Price Summary
                </div>
                <div className="justify-between items-start bg-white flex w-[256px] flex-wrap max-w-full gap-5 mt-3 pl-3 pr-3.5 py-5 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="items-start flex gap-1 self-start">
                    <div className="text-zinc-500 text-center text-xs lowercase self-stretch">
                      qatar airway
                    </div>
                    <div className="text-zinc-500 text-center text-xs capitalize self-stretch whitespace-nowrap">
                      (Adult x 1)
                    </div>
                  </div>
                  <div className="text-black text-center text-base uppercase whitespace-nowrap self-start">
                    Pkr 228,000
                  </div>
                </div>
                <div className="justify-between items-start bg-white flex w-[250px] max-w-full gap-5 mt-3 pl-3.5 pr-3.5 py-5 rounded-xl border-b-zinc-300 border-b border-solid self-start">
                  <div className="text-neutral-700 text-center text-lg font-medium capitalize">
                    Price you pay
                  </div>
                  <div className="text-black text-center text-base uppercase whitespace-nowrap mt-1 self-start">
                    Pkr 228,000
                  </div>
                </div>
                <div className="justify-center items-center rounded border bg-white flex w-[321px] max-w-full flex-col mt-6 px-3 py-4 border-solid border-sky-100 self-start">
                  <div className="items-start self-stretch flex flex-wrap  w-full justify-between gap-5">
                    <img
                      loading="lazy"
                      src={Phone}
                      className="aspect-square object-contain object-center md:block hidden overflow-hidden self-center max-w-full my-auto"
                    />
                    <div className="text-stone-900 text-base font-medium lowercase self-stretch max-w-[240px] grow shrink-0 basis-auto">
                      <span className="text-neutral-400">
                        having a trouble making a payment? contact our helpline
                        for assistance
                      </span>
                      <span className="text-zinc-500"> </span>
                      <span className="text-stone-900">(021)111172782</span>
                    </div>
                  </div>
                </div>
                <div className="items-start flex w-[162px] max-w-full justify-between gap-5 mt-2 self-start">
                  <div className="text-slate-400 text-center text-base font-medium lowercase">
                    Your bookings
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2cc1e9f0-71f5-481e-9173-bba11ee3a740?"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full"
                  />
                </div>
              </div>
            </div>

{/* Primary Summery End */}


          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Payment_Method
