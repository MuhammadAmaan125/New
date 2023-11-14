import  {React,useState} from "react";
import { Stepper, Step, StepLabel} from "@mui/material";
import plus from "../assests/pluss.png"
import round from "../assests/round.png"
import travel from "../assests/image 76.png"
import Payment_Method from "./Payment_Method";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function Contact_Details () {
    const [activestep1, setActiveStep] = useState(0)
    const [startDate, setStartDate] = useState(new Date());

console.log(activestep1)
    const steps = [
        'Booking',
         'Payment',
         "Confirmation"
        
        ];
       const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
    return (
    <div className="bg-neutral-100 flex flex-col px-5">
      <div className="self-center flex w-full max-w-[1324px] flex-col mb-10  max-md:max-w-full max-md:mb-10">
        <div className=" justify-center items-center bg-white self-center flex w-full max-w-[1187px] flex-col px-5 py-10 max-md:max-w-full">

    <div className="flex w-full">
    <Stepper  activeStep={activestep1}  className="w-full flex justify-center">
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}   </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div className="items-start  mx-3 self-center md:flex hidden w-[187px] max-w-full justify-between md:gap-2 my-auto">
              <div className="justify-center text-neutral-400 text-center text-xs self-stretch">
                Finish Booking in
              </div>
              <div className="text-slate-400 text-center text-xs font-medium self-stretch whitespace-nowrap">
                04:58:50
              </div>
            </div>
    </div>
                
              
        </div>
    {
      activestep1==0   ? <>  <div className="justify-center text-slate-400 text-center text-2xl font-medium ml-5 mt-24 self-start whitespace-nowrap max-md:ml-2.5 max-md:mt-10">
      Contact Details
    </div>
    <div className="self-stretch mt-6 max-md:max-w-full">
      <div className="md:gap-2 gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch lg:w-[64%] md:w-[50%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full mx-auto pt-12 pb-28 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
            <div className="text-neutral-700 text-center text-base md:ml-5 self-start whitespace-nowrap max-md:ml-2.5">
              Mobile Number
            </div>
            <div>
  
  <div className="relative border-none mt-2  md:mx-5 mx-0 rounded-md "> 
    <div>
<div class="flex rounded-md ">
<span class="px-4 inline-flex items-center min-w-fit rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-sm text-gray-500  dark:border-gray-700 dark:text-gray-400"> 
<select
       
        className="h-full  outline-none rounded-md border-0 bg-transparent py-0     text-gray-500   sm:text-sm"
      >
        <option selected  disabled>Country</option>
        <option>Pk+92</option>
        <option>Ind+91</option>
      </select>
      </span>
<input type="number" class="py-3 px-4 outline-none   pr-11 block md:w-[345px] w-full border-gray-300 border-2 shadow-sm rounded-r-md text-sm  dark:text-gray-400"/>
</div>
</div>
 
  </div>
</div>
            <div className="text-neutral-400 text-opacity-70 text-center text-base md:ml-5 mt-2 self-start whitespace-nowrap max-md:ml-2.5">
              e.g +923456789112
            </div>
            <div className="items-start flex w-[372px] max-w-full gap-3 md:ml-5 mt-5 self-start max-md:ml-2.5">
              <div className="text-neutral-700 text-center text-base self-stretch">
                Email
              </div>
              <div className="items-start self-stretch flex grow shrink-0 basis-auto justify-between gap-2">
              <svg   className="aspect-square object-contain object-center w-5 overflow-hidden self-center max-w-full my-auto"
 xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.99199 1.66666C5.39199 1.66666 1.66699 5.39999 1.66699 9.99999C1.66699 14.6 5.39199 18.3333 9.99199 18.3333C14.6003 18.3333 18.3337 14.6 18.3337 9.99999C18.3337 5.39999 14.6003 1.66666 9.99199 1.66666ZM10.0003 16.6667C6.31699 16.6667 3.33366 13.6833 3.33366 9.99999C3.33366 6.31666 6.31699 3.33332 10.0003 3.33332C13.6837 3.33332 16.667 6.31666 16.667 9.99999C16.667 13.6833 13.6837 16.6667 10.0003 16.6667ZM9.16699 12.5H10.8337V14.1667H9.16699V12.5ZM9.16699 5.83332H10.8337V10.8333H9.16699V5.83332Z" fill="#A5A5A5" fill-opacity="0.67"/>
</svg>

                <div className="text-neutral-400 text-opacity-70 text-center text-base self-stretch grow shrink-0 basis-auto whitespace-nowrap md:block hidden">
                  (Your package will be Emailed here)
                </div>
              </div>
            </div>
            <input type="email" className="py-3 px-4 outline-none   pr-11 block md:w-[320px] w-full border-gray-300 border-2 shadow-sm rounded-r-md text-sm  dark:text-gray-400 md:ml-5 ml-3"  name="" id="" />
            <div className="text-neutral-400 text-opacity-70 text-center text-base md:ml-5 mt-2 self-start whitespace-nowrap max-md:ml-2.5">
              e.g name@outlook.com
            </div>
            <div className="items-start flex mb-0 md:w-[454px] w-full max-w-full gap-1.5 md:ml-5 ml-0 mt-12 self-start max-md:mt-10 max-md:mb-2.5">
              <div className="flex mt-[5px] ">
              <input type="checkbox" className=" bg-sky-700 self-center " name="" id="" />
              </div>
              <div className="text-neutral-700 mr-20 md:text-center text-base flex flex-wrap self-stretch  basis-auto  max-md:max-w-full">
                I agree to receive travel related information and deals
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch lg:w-[36%] md:w-[50%] ml-5 max-md:w-full max-md:ml-0 overflow-hidden">
          <div className="bg-white flex grow flex-col w-full mx-auto pt-8 pb-10 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
            <div className="self-center flex w-[386px] max-w-full flex-col">
              <div className="items-start flex w-[365px] max-w-full gap-3.5 self-start">
              <svg                                   className="aspect-square fill-[#699FC9] object-contain object-center w-7 overflow-hidden self-center max-w-full my-auto"
 xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <path d="M14 1.16666L3.5 5.83332V12.8333C3.5 19.3083 7.98 25.3633 14 26.8333C20.02 25.3633 24.5 19.3083 24.5 12.8333V5.83332L14 1.16666ZM22.1667 12.8333C22.1667 18.1067 18.69 22.9717 14 24.4183C9.31 22.9717 5.83333 18.1067 5.83333 12.8333V7.34999L14 3.72166L22.1667 7.34999V12.8333ZM8.645 13.5217L7 15.1667L11.6667 19.8333L21 10.5L19.355 8.84332L11.6667 16.5317L8.645 13.5217Z" fill="#699FC9"/>
</svg>

                <div className="text-neutral-700 text-base self-stretch max-w-[323px] grow md:shrink-0 basis-auto">
                  Pakistan’s most reliable booking platform!
                </div>
              </div>
              <div className="items-start self-center flex w-full gap-3.5 mt-14 max-md:mt-10">
                <div className="items-start self-stretch flex justify-between gap-0">
               
          <div  className="aspect-[5.11] bg-[#E4F0FF] object-contain object-center  md:w-[194px] w-[140px] justify-scenter items-center overflow-hidden self-stretch max-w-full"> 
          <ul className="flex py-4 md:px-11 px-2">
            <li className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z" fill="#FFE033"/>
</svg></li>
<li className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z" fill="#FFE033"/>
</svg></li>
<li className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z" fill="#FFE033"/>
</svg></li>
<li className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z" fill="#FFE033"/>
</svg></li>
<li className="mx-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M7.52447 0.463526C7.67415 0.0028708 8.32585 0.00286996 8.47553 0.463525L9.90837 4.87336C9.97531 5.07937 10.1673 5.21885 10.3839 5.21885H15.0207C15.505 5.21885 15.7064 5.83865 15.3146 6.12336L11.5633 8.84878C11.3881 8.9761 11.3148 9.20179 11.3817 9.4078L12.8145 13.8176C12.9642 14.2783 12.437 14.6613 12.0451 14.3766L8.29389 11.6512C8.11865 11.5239 7.88135 11.5239 7.70611 11.6512L3.95488 14.3766C3.56303 14.6613 3.03578 14.2783 3.18546 13.8176L4.6183 9.4078C4.68524 9.20179 4.61191 8.9761 4.43667 8.84878L0.685441 6.12336C0.293584 5.83866 0.494972 5.21885 0.979333 5.21885H5.6161C5.83272 5.21885 6.02469 5.07937 6.09163 4.87336L7.52447 0.463526Z" fill="#FFE033"/>
</svg></li>



          </ul>

          </div>
          
                  <div className="text-white text-base font-medium leading-5 self-stretch justify-center items-center bg-[#699FC9] w-[46px] max-w-full pl-3 pr-3.5 py-3.5 rounded-none whitespace-nowrap">
                    5.5
                  </div>
                </div>
                <div className="items-start self-center flex gap-1 my-auto">
            
                  <div className="text-neutral-700 text-base leading-5 uppercase self-start whitespace-nowrap">
                    reviews.
                  </div>
                </div>
              </div>
              <div className="items-start self-stretch flex justify-between gap-4 mt-11 max-md:ml-1 max-md:mt-10">
                <img
                  loading="lazy"
                  src={travel}
                  className="aspect-[1.2] object-contain object-center w-[173px] mix-blend-multiply overflow-hidden self-stretch max-w-full"
                />
                <div className="text-neutral-700 text-base leading-7 my-auto">
                  Sign in to book faster using
                  <br />
                  Passenger Quick pick and
                  <br />
                  exclusive vouchers!
                </div>
              </div>
              <div className="items-center bg-[#699FC9] self-center flex w-[250px] max-w-full grow flex-col mt-8 px-5 py-4 rounded-br-xl rounded-tl-xl">
                <div className="justify-center text-white text-xl font-medium leading-7 self-center whitespace-nowrap">
                  Start
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div className="text-[#699FC9] md:text-center text-right md:text-4xl text-3xl font-medium capitalize md:ml-3 ml-0 mt-7 self-start whitespace-nowrap max-md:max-w-full">
      Travel Details for adult 1
    </div>
   <div className="self-stretch mt-6 max-md:max-w-full max-md:mr-1">
      <div className="md:gap-2 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch lg:w-[65%] md:w-[55%] max-md:w-full max-md:ml-0">
          <div className="bg-white flex grow flex-col w-full mx-auto pt-5 pb-12 px-5 rounded-lg max-md:max-w-full max-md:mt-8">
            <div className="self-stretch flex flex-col mr-3 max-md:max-w-full max-md:mr-2.5">
              <div className="flex w-[655px] max-w-full items-start justify-between md:gap-2 md:ml-5 ml-0 self-start max-md:flex-wrap">
                <div className="text-neutral-700 text-center text-base capitalize self-start">
                  Tittle
                </div>
                <div className="text-black text-center md:flex hidden text-xs capitalize mt-2 self-start whitespace-nowrap">
                  Upload Passport image
                </div>
              </div>
              <div className="flex flex-wrap w-[761px] max-w-full items-start gap-4 ml-5 mt-1.5 self-start max-md:flex-wrap">
                <div className="flex-wrap self-stretch flex w-[488px] max-w-full grow shrink-0 items-start justify-between md:gap-2 md:pl-4 pl-0 pr-0.5   max-md:flex-wrap">
                  <ul className="justify-between  items-start self-center flex flex-wrap w-40 max-w-full md:gap-2 my-auto">

               <li className="  w-36">
               <label for='mr' className="mt-3 mx-2">Mr</label>
                <input type="radio" name="mr" id='mr' className="mr-3 rounded-lg mt-3" />
               
              
               
               </li> 
               <li className="  w-36">
               <label for='mrs' className="mt-3 mx-2">Mrs</label>   
               <input type="radio" name="mr" id='mrs' className="mr-3 rounded-lg mt-3" />
                                </li> 
               
              
               <li className="  w-32" >
               <label for="ms" className="mt-3 mx-2">Ms</label>   
               <input type="radio" name="mr" id="ms" className="mr-3 rounded-lg mt-3" />
                               </li> 
               
              
                   
                  </ul>
                  <div className="border-gray-200 mt-[2px]">
             <div className="text-black mb-3 text-xs md:hidden capitalize mt-2 self-start whitespace-nowrap">
                  Upload Passport image
                </div>
             <input
             accept="image/*"
class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15]  transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem]  file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] focus:border-primary  focus:shadow-te-primary focus:outline-none   dark:file:text-neutral-100 dark:focus:border-primary"
id="formFileLg"
type="file" />                 </div>
                </div>
           
              </div>
              <div className="w-[642px] max-w-full md:ml-5 ml-0 mt-12 self-start max-md:mt-10">
                <div className="md:gap-2 flex flex-wrap max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-9">
                      <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                        Given Name
                      </div>
                    <input type="text"  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl  justify-end items-center overflow-hidden mt-3.5 self-start border-gray-300 border-2 outline-none p-5" />
                      <div className="text-zinc-500 text-opacity-70 text-center text-xs lowercase mt-3 self-start whitespace-nowrap">
                        Enter name as per passport to avoid boarding issues.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch   max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col max-md:mt-9">
                      <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                        Surname
                      </div>
                      <input type="text"  className="aspect-[5.72] object-contain object-center rounded-br-xl rounded-tl-xl justify-end items-center overflow-hidden mt-3.5 self-start border-gray-300 border-2 outline-none p-5" />
                      <div className="text-zinc-500 text-opacity-70 text-center text-xs lowercase mt-3 self-start whitespace-nowrap">
                        Enter name as per passport to avoid boarding issues.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-center flex flex-wrap w-[738px] max-w-full items-start justify-between md:gap-2 mt-6 max-md:flex-wrap">
                <div className="flex flex-col grow shrink-0 basis-auto self-start">
                  <div className="text-neutral-700 text-center text-xs font-light capitalize items-start w-[75px] max-w-full self-start whitespace-nowrap">
                    date of birth
                  </div>
                  <div class="max-w-xl mt-4 ">


<DatePicker selected={startDate} onChange={(date) => setStartDate(date)}   label="Basic date picker" placeholderText="Select Date" className=" border-2 border-gray-300 text-gray-900 text-sm rounded-lg   block   p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white h-[50px] outline-none" />

</div>
                </div>
                <div className="flex flex-col grow shrink-0 basis-auto self-start">
                  <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                    Nationality
                  </div>
                  <div>
                  <div class=" inset-y-0 border-2 right-0 flex items-center mt-[10px] h-[50px] rounded-br-xl rounded-tl-xl w-[200px]" >

<select id="currency" name="currency" class="h-full rounded-md outline-none w-full  border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500  sm:text-sm">
{country_list.map((v,i)=>{
return(
<>
<option value="" key={i}>{v}</option>
</>
)

})}
</select>
</div>
</div>
                </div>
              </div>
              <div className="flex flex-wrap w-[759px] max-w-full items-start justify-between md:gap-2 mt-5 self-start max-md:flex-wrap">
                <div className="flex flex-col grow shrink-0 basis-auto mt-1.5 self-start">
                  <div className="text-black text-center text-sm capitalize self-start whitespace-nowrap">
                    Passport Number
                  </div>

                  <input type="text"  className="border flex w-[200px] h-[53px] flex-col mt-2.5  border-solid border-zinc-300 self-start items-center overflow-hidden rounded-br-xl rounded-tl-xl    outline-none p-5" />


                </div>
                <div className="flex flex-col grow shrink-0 basis-auto self-start">
                  <div className="text-neutral-700 text-center text-xs font-light capitalize items-start w-[89px] max-w-full self-start whitespace-nowrap">
                    Passport Expiry
                  </div>
                  <div class="relative max-w-sm mt-4  ">
<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
 <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
  </svg>
</div>
<input datepicker datepicker-format="mm/dd/yyyy" type="text" class=" border w-[200px] border-gray-300 text-gray-900 text-sm rounded-lg   block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:text-white h-[50px] outline-none" placeholder="Select date"/>
</div>
                </div>
              </div>
              <div className="text-zinc-500 text-opacity-70 text-center text-xs lowercase self-center ml-20 mt-2.5 whitespace-nowrap">
                Please ensure your passport is currently valid.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch lg:w-[35%] md:[45%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col mt-1 max-md:max-w-full max-md:mt-9">
            <div className="text-slate-400 text-center text-lg font-medium lowercase items-center border w-[300px]  max-w-full pl-4 pr-5 py-7 rounded-xl border-solid border-zinc-300 self-start whitespace-nowrap">
              Price Summary
            </div>
            <div className="items-start bg-white flex w-[300px] max-w-full flex-col mt-4 pl-4 pr-5 py-6 rounded-xl border-b-zinc-300 border-b border-solid self-start">
              <div className="flex w-[378px] max-w-full items-start justify-between md:gap-2 self-start">
                <div className="items-start flex gap-1 self-start">
                  <div className="text-zinc-500 text-center text-sm lowercase self-stretch">
                    qatar airway
                  </div>
                  <div className="text-zinc-500 text-center text-sm capitalize self-stretch whitespace-nowrap">
                    (Adult x 1)
                  </div>
                </div>
                <div className="text-black text-center text-base uppercase mt-1.5 self-start whitespace-nowrap">
                  Pkr 777,00
                </div>
              </div>
            </div>
            <div className="items-start bg-white flex w-[300px] max-w-full flex-col mt-4 pl-5 pr-5 py-7 rounded-xl border-b-zinc-300 border-b border-solid self-start">
              <div className="flex w-[376px] max-w-full items-start justify-between md:gap-2 self-start">
                <div className="text-neutral-700 text-center text-lg font-medium capitalize">
                  Price you pay
                </div>
                <div className="text-black text-center text-base uppercase self-start whitespace-nowrap">
                  Pkr 777,00
                </div>
              </div>
            </div>
            <div className="items-start flex w-[162px] max-w-full justify-between md:gap-2 mt-6 self-start">
              <div className="text-slate-400 text-center text-base font-medium lowercase">
                Your bookings
              </div>
              <svg  className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch max-w-full" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" fill="#A5A5A5"/>
</svg>
                             

            </div>
          </div>
        </div>
      </div>
    </div>  
    <div className="justify-center items-center rounded bg-[#699FC9] self-center flex w-[207px] max-w-full grow flex-col md:ml-40 ml-0 mt-7 px-5 py-4">
      <div className="text-white  md:text-center text-2xl font-medium lowercase self-center whitespace-nowrap">
        <button onClick={()=>setActiveStep(+1)}>
        Continue
        </button>
      </div>
    </div> 
    </>
    :

    <Payment_Method/> 
    
    }

    
      </div>
    </div>
  );
}


export default Contact_Details