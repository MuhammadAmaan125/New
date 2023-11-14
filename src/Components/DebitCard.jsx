import React from 'react'
import Secure from "../assests/Payment_Method/Secure_Payment.png"

function DebitCard() {
  return (
    <>
         <div className="items-start flex w-[361px] max-w-full gap-3 self-start mt-5">
                            <img
                              loading="lazy"
                              src={Secure}
                              className="aspect-square object-contain object-center w-[23px] overflow-hidden self-center max-w-full my-auto"
                            />
                            <div className="text-neutral-700 text-opacity-60 text-base leading-5 self-stretch   max-w-[230px] grow shrink-0 basis-auto">
                              All informa is encrypted and we do not store your
                              card details.
                            </div>
                          </div>
                          <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap mt-9 self-start">
                            Name on card
                          </div>
                          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col max-md:mt-5">
                        
                          <input type="text"  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 md:ml-[-20px] ml-0 outline-none p-5" />
                         
                        </div>
                      </div>
                          <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap mt-5 self-start">
                            Card Number
                          </div>
                          <div className="flex grow flex-col max-md:mt-5">
                        
                        <input type="number" placeholder='1234 5675 1235 2345'  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 outline-none p-5" />
                       
                      </div>
                          <div className="flex w-[346px] max-w-full items-start md:justify-between justify-normal gap-5 mt-11 self-start max-md:mt-10 md:flex-row flex-col">
                            <div className="self-stretch flex flex-col">
                              <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap self-start">
                                Expiry
                              </div>
                              <div class="relative max-w-sm mt-5  ">
  
                             <input datepicker datepicker-format="mm/dd/yyyy" type="text" class=" w-32 border border-gray-300 text-gray-900 text-sm rounded-lg   block pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white h-[50px] outline-none rounded-br-xl rounded-tl-xl" placeholder="MM/YY"/>
                   </div> 
                            </div>
                            <div className="self-stretch flex flex-col">
                              <div className="text-neutral-700 text-opacity-80 text-sm leading-5 whitespace-nowrap self-start">
                                CVV
                              </div>
                              <div className="flex grow flex-col max-md:mt-5">
                        
                        <input type="number" placeholder='1234 5675 1235 2345'  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl  justify-end items-center overflow-hidden md:mt-3.5 mt-0 self-start border-gray-300 border-2 outline-none w-40  pl-5 p-2.5  h-[50px]" />
                       
                      </div>
                            </div>
  </div>  
    </>
  )
}

export default DebitCard
