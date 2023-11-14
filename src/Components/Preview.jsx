import * as React from "react";
import hotel1 from "../assests/Hotel images/image 51.png"
import hotel2 from "../assests/Hotel images/image 52.png"
import hotel3 from "../assests/Hotel images/image 53.png"
import hotel4 from "../assests/Hotel images/image 54 (1).png"
import hotel5 from "../assests/Hotel images/image 54.png"

function MyComponent(props) {
  return (
    <div className="bg-neutral-100 flex flex-col">
      <div className="bg-white self-stretch flex w-full flex-col pt-5 pb-9 px-5 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1320px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="text-black text-3xl font-medium mt-5">
            Hotel Preview
          </div>
          <div className="bg-zinc-300 w-px h-[45px] self-start" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2df5f5be-9da6-4e6d-892d-283f1c5edbd2?"
            className="aspect-square object-cover object-center w-[30px] overflow-hidden max-w-full mt-4 self-start"
          />
        </div>
      </div>
      <div className="rounded bg-white self-center flex w-full max-w-[1352px] flex-col mt-8 pt-4 pb-2 px-5 max-md:max-w-full">
        <div className="self-stretch ml-3 mr-4 max-md:max-w-full max-md:mr-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src={hotel1}
                className="aspect-[1.15] object-cover object-center w-[366px] overflow-hidden max-w-full my-auto max-md:mt-9"
              />
            </div>
            <div className="flex flex-col items-stretch w-[26%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col my-auto max-md:mt-10">
                <div className="text-black text-4xl font-medium leading-5 mt-4 self-start whitespace-nowrap max-md:ml-1.5">
                  Al Faris Hotel
                </div>
                <div className="text-neutral-400 text-xl font-light leading-4 self-center mt-9 whitespace-nowrap">
                  200 meter from majd al hrm
                </div>
                <div className="flex w-[298px] max-w-full items-start gap-2 mt-4 self-start max-md:ml-1.5">
                  <div className="items-start self-stretch flex gap-0.5 max-md:justify-center">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ee8a74-f2c7-431a-9ee1-6abc4e29167b?"
                      className="aspect-[1.14] object-cover object-center w-[25px] fill-yellow-300 overflow-hidden max-w-full self-start"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2883d777-e9cd-40f6-a129-a46ea0a7a199?"
                      className="aspect-square object-cover object-center w-[25px] fill-yellow-300 overflow-hidden max-w-full self-start"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2813571-0057-4df0-b90a-ec823b8c0651?"
                      className="aspect-square object-cover object-center w-[25px] fill-yellow-300 overflow-hidden max-w-full self-start"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/60d176d5-a846-4b4e-b5f1-a75ebc819b7b?"
                      className="aspect-square object-cover object-center w-[25px] fill-yellow-300 overflow-hidden max-w-full self-start"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dd14533-c19a-47c2-bcdf-3b126182fb9e?"
                      className="aspect-[0.24] object-cover object-center w-1.5 fill-yellow-300 overflow-hidden max-w-full self-start"
                    />
                  </div>
                  <div className="text-neutral-400 text-2xl leading-5 self-stretch max-w-[276px] grow shrink-0 basis-auto mt-1.5">
                    <span className="text-black"> 5.0 </span>
                    <span className="text-neutral-400">(9000 reviews)</span>
                  </div>
                </div>
                <div className="text-black text-3xl font-medium leading-5 mt-14 self-start whitespace-nowrap max-md:mt-10">
                  Adress:
                </div>
                <div className="text-neutral-400 text-xl font-light leading-4 max-w-[256px] mr-3.5 mt-7 self-end max-md:mr-2.5">
                  visa abrahim kahlil road <br />
                  <br />
                  near kabuka chowk
                </div>
              </div>
            </div>
            <div className=" flex-col md:block hidden items-stretch w-[2%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-zinc-300 flex w-1 h-[490px] flex-col mx-auto max-md:mt-6" />
            </div>
            <div className="flex flex-col items-stretch w-[42%] ml-5 md:mt-0 mt-10 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col mt-7 max-md:max-w-full max-md:mt-10">
                <div className="justify-center text-black md:text-3xl text-2xl md:leading-5 font-semibold leading-8 self-stretch mt-3 max-md:max-w-full max-md:mr-2">
                  <span className="font-semibold ">ROOM TYPE: </span>
                  <span className="">SAHRED OR PRIVATE</span>
                  <span className="font-semibold"> </span>
                </div>
                <div className="leading-3 text-black md:text-4xl  text-2xl  mt-10 self-start whitespace-nowrap max-md:ml-1 max-md:mt-10">
                  <span className="font-semibold">TOTAL ROOMS: </span>
                  <span className="">5</span>
                </div>
                <div className="text-black md:text-4xl text-2xl leading-5 mt-12 self-start whitespace-nowrap max-md:ml-1 max-md:mt-10">
                  <span className="font-semibold">BED IN EVERY ROOM: </span>
                  <span className="">5</span>
                </div>
                <div className="text-black md:text-3xl text-[18px] font-bold leading-5 self-stretch mt-10 whitespace-nowrap max-md:max-w-full max-md:mt-10">
                  <span className="font-semibold">TOTAL PEX:</span>
                  <span className=""> 10ADULT,5CHILD 2INFANT</span>
                </div>
                <div className="text-black md:text-4xl text-2xl font-semibold leading-4 mt-11 self-start whitespace-nowrap max-md:max-w-full max-md:mt-10">
                  TOTAL FARE FOR 10 NIGHTS:
                </div>
                <div className="justify-center text-slate-400 md:text-3xl text-2xl font-semibold leading-5 w-60 mr-5 mt-9 self-end max-md:mr-2.5">
                  PKR 15,000/.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center text-black md:text-4xl text-3xl font-medium leading-5 md:mt-0 mt-20 max-w-[956px] ml-16  self-start max-md:ml-2.5">
        Images AND VIDEOS
      </div>
<div className="w-full mt-10">

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src={hotel1} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={hotel1} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={hotel2} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={hotel3} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={hotel4} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={hotel5} alt=""/>
    </div>
   
</div>




</div>
      <div className="rounded bg-white self-center flex w-full max-w-[1352px] flex-col mt-14 pt-12 pb-9 px-5 max-md:max-w-full max-md:mt-10">
        <div className="w-[899px] max-w-full ml-3 self-start">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[41%] max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col max-md:mt-10">
                <div className="justify-center text-black text-4xl leading-5 mt-5">
                  Amenities
                </div>
                <div className="justify-center items-start flex w-[196px] max-w-full grow flex-col mt-9 self-start">
                  <div className="text-neutral-400 text-xl leading-5 capitalize">
                    <ul>
                      <li>Room services</li>
                    </ul>
                  </div>
                  <div className="text-neutral-400 text-xl leading-5 mt-5">
                    <ul>
                      <li>Reception</li>
                    </ul>
                  </div>
                  <div className="text-neutral-400 text-xl leading-5 capitalize mt-5">
                    <ul>
                      <li>24 hour reception</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[32%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-start flex grow flex-col mt-16 max-md:mt-10">
                <div className="text-neutral-400 text-xl leading-5 capitalize">
                  <ul>
                    <li>Newspaper</li>
                  </ul>
                </div>
                <div className="text-neutral-400 text-xl leading-5 mt-5">
                  <ul>
                    <li>Porter</li>
                  </ul>
                </div>
                <div className="text-neutral-400 text-xl leading-5 capitalize mt-5">
                  <ul>
                    <li>WiFi</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[27%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-start flex grow flex-col mt-16 max-md:mt-10">
                <div className="text-neutral-400 text-xl leading-5 capitalize">
                  <ul>
                    <li>Cleaning Services</li>
                  </ul>
                </div>
                <div className="text-neutral-400 text-xl leading-5 mt-5">
                  <ul>
                    <li>Security</li>
                  </ul>
                </div>
                <div className="text-neutral-400 text-xl leading-5 capitalize mt-5">
                  <ul>
                    <li>Air Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center rounded bg-white self-center flex w-full max-w-[1352px] flex-col mt-14 px-5 py-8 max-md:max-w-full max-md:mt-10">
        <div className="items-start flex w-[428px] max-w-full flex-col ml-3 self-start">
          <div className="justify-center self-stretch text-black text-4xl leading-5 max-md:max-w-full">
            Hotel Details
          </div>
          <div className="text-neutral-400 text-lg leading-5 mt-4 max-md:max-w-full">
            Secure location, Neat rooms, Accommodating Staff
          </div>
          <div className="text-black text-lg leading-5 mt-4 max-md:max-w-full">
            Contact Information
          </div>
          <div className="text-neutral-400 text-lg leading-5 mt-4 max-md:max-w-full">
            <ul>
              <li>Name: Hotel New Al Faris Mecca Hotel</li>
            </ul>
          </div>
          <div className="text-neutral-400 text-lg leading-5 mt-4 max-md:max-w-full">
            <ul>
              <li>Address:200 meter from majd al hrm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" flex-col mt-16 px-6 max-md:max-w-full max-md:mt-5">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d892.1925637140788!2d37.96814606952177!3d26.55964759813121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15a5abefbff7069d%3A0x2490ebee6dd6ba7c!2sAl%20Faris%20Hotel%20Units%202!5e0!3m2!1sen!2s!4v1698685767128!5m2!1sen!2s"  className="md:w-[1300px] w-full md:h-[450px] h-auto" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="rounded bg-white self-center flex w-full max-w-[1352px] flex-col mt-10 mb-20 px-5 py-8 max-md:max-w-full max-md:my-10">
        <div className="self-center flex w-full max-w-[1288px] items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="flex flex-col self-start">
            <div className="text-zinc-500 text-lg leading-5 capitalize self-start whitespace-nowrap">
              1 room (s) / 1 Night (s)
            </div>
            <div className="justify-center text-slate-400 text-4xl font-medium leading-5 capitalize mt-10 self-start whitespace-nowrap">
              Rs --
            </div>
          </div>
          <div className="text-white text-2xl leading-5 capitalize justify-center items-center rounded bg-slate-400 w-32 max-w-full p-4 self-start whitespace-nowrap">
            Continue
          </div>
        </div>
      </div>
    </div>
  );
}


export default MyComponent