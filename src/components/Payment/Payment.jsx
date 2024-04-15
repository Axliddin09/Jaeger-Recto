import { useState } from "react";
function Payment({ setActivePayment }) {
    const [activeRadio, setActiveRadio] = useState("credit card")
    return ( 
        <div className="absolute top-0 bottom-0 right-0 left-0 z-50 flex justify-end bg-black bg-opacity-70">
            <div className="w-[409px] h-full min-h-screen bg-base-dark pt-6 px-6">
                <div className="pb-6 border-b border-b-base-dark-line">
                    <h3 className="text-[28px] font-semibold leading-[39.20px] mb-2">Payment</h3>
                    <p className="text-base font-medium text-light">3 payment method available</p>
                </div>
                <div className="w-[355px]">
                    <h3 className="mt-6 mb-4 text-xl leading-7 font-semibold">Payment Method</h3>
                    <ul className="flex gap-2 mb-6">
                        <li className="w-[120px] h-20 border border-base-dark-line rounded-md" onClick={() => setActiveRadio("credit card")}>
                            <div className="flex items-center me-4">
                                <input id="red-radio" type="radio" defaultValue name="colored-radio" className="w-4 h-4 hidden"/>
                                <label htmlFor="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"></label>
                            </div>
                            <span className="flex justify-center mt-4">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.75 9C1.75 6.37665 3.87665 4.25 6.5 4.25H18.5C21.1234 4.25 23.25 6.37665 23.25 9V15C23.25 17.6234 21.1234 19.75 18.5 19.75H6.5C3.87665 19.75 1.75 17.6234 1.75 15V9ZM3.33697 8.25H21.663C21.3245 6.81665 20.0368 5.75 18.5 5.75H6.5C4.96321 5.75 3.67555 6.81665 3.33697 8.25ZM21.75 9.75H3.25V15C3.25 16.7949 4.70507 18.25 6.5 18.25H18.5C20.2949 18.25 21.75 16.7949 21.75 15V9.75ZM13.75 15C13.75 14.5858 14.0858 14.25 14.5 14.25H18.5C18.9142 14.25 19.25 14.5858 19.25 15C19.25 15.4142 18.9142 15.75 18.5 15.75H14.5C14.0858 15.75 13.75 15.4142 13.75 15Z" fill={`${activeRadio === "credit card" ? "#fff" : "#ABBBC2"}`}/>
                                </svg>
                            </span>
                            <h3 className={`text-center ${activeRadio === "credit card" ? "text-white" : "text-light"}`}>Credit Card</h3>
                        </li>
                        <li className="w-[120px] h-20 border border-base-dark-line rounded-md" onClick={() => setActiveRadio("paypal")}>
                            <input 
                                className="relative hidden top-0 left-[93px] w-3 h-3"
                                defaultChecked 
                                type="radio"  
                                name="payment"
                                id="credit"                          
                            />
                            <span className="flex justify-center mt-4">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 7.2C19.7 8.2 20.5 10 20.5 12C20.5 14.5 18 16.5 15.5 16.5H12.9L12.3 20.1C12.2532 20.3293 12.1276 20.5349 11.9449 20.6811C11.7621 20.8272 11.5339 20.9047 11.3 20.9H8.6C8.52501 20.9015 8.45064 20.8861 8.38239 20.855C8.31415 20.8239 8.25378 20.7778 8.20577 20.7202C8.15775 20.6626 8.12331 20.5949 8.105 20.5222C8.08669 20.4494 8.08498 20.3735 8.1 20.3L8.3 18.9M10.5 13H13C15.5 13 18 10.5 18 8C18 5 16.1 3 13 3H7.5C7 3 6.5 3.5 6.5 4L4.5 18C4.5 18.5 5 19 5.5 19H8.3L9.5 14C9.6 13.4 9.9 13 10.5 13Z" stroke={`${activeRadio === "paypal" ? "#fff" : "#ABBBC2"}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    </path>
                                </svg>
                            </span>
                            <h3 className={`text-center ${activeRadio === "paypal" ? "text-white" : "text-light"}`}>Paypal</h3>
                        </li>
                        <li className="w-[120px] h-20 border border-base-dark-line rounded-md" onClick={() => setActiveRadio("cash")}>
                            <input 
                                className="relative hidden top-0 left-[93px] w-3 h-3"
                                defaultChecked 
                                type="radio"  
                                name="payment"
                                id="cash"
                            />
                            <span className="flex justify-center mt-4">
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.688 2.5C19.8978 2.5 22.5 5.16116 22.5 8.44374V15.5563C22.5 18.8388 19.8978 21.5 16.688 21.5H8.31204C5.10219 21.5 2.5 18.8388 2.5 15.5563V8.44374C2.5 5.16116 5.10219 2.5 8.31204 2.5H16.688ZM16.688 3.98651H8.31204C5.90498 3.98651 3.95358 5.98213 3.95358 8.44374V15.5563C3.95358 18.0179 5.90498 20.0135 8.31204 20.0135H16.688C19.095 20.0135 21.0464 18.0179 21.0464 15.5563L21.046 15.279L17.8499 15.2798C16.0084 15.2787 14.5159 13.7531 14.5147 11.8695C14.5147 10.0491 15.9101 8.56244 17.6673 8.46431L17.8504 8.45916L21.046 8.459L21.0464 8.44374C21.0464 6.05454 19.2081 4.10431 16.8991 3.99165L16.688 3.98651ZM21.046 9.945L17.8508 9.94567C16.8109 9.94632 15.9683 10.8074 15.9683 11.869C15.9689 12.8811 16.7329 13.7102 17.7033 13.7874L17.8504 13.7933L21.046 13.793V9.945ZM18.2942 11.0652C18.6956 11.0652 19.021 11.3979 19.021 11.8084C19.021 12.1847 18.7475 12.4957 18.3928 12.5449L18.2942 12.5517H17.9921C17.5907 12.5517 17.2653 12.2189 17.2653 11.8084C17.2653 11.4322 17.5388 11.1212 17.8935 11.072L17.9921 11.0652H18.2942ZM12.8539 6.99736C13.2553 6.99736 13.5807 7.33013 13.5807 7.74062C13.5807 8.1169 13.3073 8.42788 12.9525 8.47709L12.8539 8.48388H7.62203C7.22063 8.48388 6.89524 8.15111 6.89524 7.74062C6.89524 7.36434 7.16866 7.05337 7.5234 7.00415L7.62203 6.99736H12.8539Z" fill={`${activeRadio === "cash" ? "#fff" : "#ABBBC2"}`}/>
                                </svg>
                            </span>
                            <h3 className={`text-center ${activeRadio === "cash" ? "text-white" : "text-light"}`}>Cash</h3>
                        </li>
                    </ul>
                    <div className="">
                        <label className="" htmlFor="">Cardholder Name</label>
                        <input className="w-full p-[14px] mt-2 mb-4 rounded-md border border-base-dark-line text-sm text-lighter bg-base-form-bg" type="text" placeholder="Axliyor Jamoldinov" />
                    </div>
                    <div className="">
                        <label htmlFor="">Card Number</label>
                        <input className="w-full p-[14px] mt-2 mb-6 rounded-md border border-base-dark-line text-sm text-lighter bg-base-form-bg" type="text" placeholder="9860 0301 6590 3458" />
                    </div>
                    <div className="flex justify-between border-b border-b-base-dark-line pb-4">
                        <div className="">
                            <label htmlFor="">Expiration Date</label>
                            <input className="block w-[172px] p-[14px] mt-2 rounded-md border border-base-dark-line text-sm text-lighter bg-base-form-bg" type="text" placeholder="04/25" /> 
                        </div>
                        <div className="">
                            <label htmlFor="">CVV</label>
                            <input className="block w-[172px] p-[14px] mt-2 rounded-md border border-base-dark-line text-sm text-lighter bg-base-form-bg" type="password" placeholder="x x x x" /> 
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mt-4">
                            <label htmlFor="">Order Type</label>
                            <select className="mt-2 bg-base-form-bg w-[172px] p-[14px] rounded-md">
                                <option value="Dine In">Dine In</option>
                                <option value="Dine Out">To Go</option>
                                <option value="Delivery">Delivery</option>
                            </select>
                        </div>
                        <div className="ml-[13px] mt-4">
                            <label htmlFor="">Table no.</label>
                            <input className="block w-[172px] p-[14px] mt-2 rounded-md border border-base-dark-line text-sm text-lighter bg-base-form-bg" type="text" placeholder="140" /> 
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-7">
                            <button className="p-[14px] w-[170px] border border-primary rounded-md text-primary text-sm font-semibold" onClick={() => setActivePayment(false)} >Cancel</button>
                        </div>
                        <div className="mt-7">
                            <button className="p-[14px] w-[170px] bg-primary rounded-md text-sm font-semibold shadow-primary-shadow">Confirm Payment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Payment;