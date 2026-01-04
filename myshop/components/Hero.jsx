import Link from "next/link"
export default function Hero(){
    return (
        <div className="w-full font-sans">
            {/** header */}
            <div className="flex flex-1 justify-between w-full bg-gray-100 border-b border-transparent gap-4 py-3 px-5 md:px-10 text-[10px] md:text-sm min-w-0 sticky top-0 z-50">
                <div className="hidden sm:flex">
                    <p>Welcome to world wide market</p>
                </div>
                <div className="flex gap-4">
                    <p>Deliver to 0989957854</p>
                    <p>|</p>
                    <p>Track your order</p>
                    <p>|</p>
                    <p>All offers</p>
                </div>
            </div>
            {/** Nav */}
            <div>
                <div className="flex justify-between mx-auto py-4 px-3 md:px-10 w-full border-b border-gray-200 sticky z-50 top-3">
                    <div className="flex gap-2 items-center">
                        <img src="/menu.png" alt="" className="w-8 flex"/>
                        <p className="sm:flex hidden text-xl font-bold text-blue-700">MegaMert</p>
                    </div>
                    <div className="flex relative mx-4 w-full max-w-2xl">
                        <input type="text" className="flex flex-1 border border-gray-200 rounded-lg min-w-0 outline-none px-3 pl-10 py-1.5 bg-gray-100 focus:bg-white focus:border-blue-500 transition-all" placeholder="Search Product..."/>
                        <img src="/blueSearch.png" alt="" className="absolute mt-2 w-5 items-center ml-2"/>
                    </div>
                    <div className="flex gap-3 items-center">
                        <div className="hidden sm:flex gap-3">
                            <Link href='/login' className="flex text-blue-500 font-semibold">Login</Link>
                            <Link href='/signUp' className="flex text-blue-500 font-semibold">signUp</Link>
                            <p>|</p>
                        </div>
                        <a href="#" className="flex relative gap-6">
                            <span>Cart</span>
                            <span className="absolute -top-2 -right-3 text-[10px] bg-blue-600 text-white rounded-full p-1">3</span>
                        </a>
                    </div>
                </div>
                {/** Select */}
                <div className="flex gap-4 justify-center py-3 flex-wrap text-sm">
                    <select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Grocery</option>
                    </select>
                    <select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Premium Fruits</option>
                    </select><select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Home & Kitchen</option>
                    </select>
                    <select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Fashion</option>
                    </select>
                    <select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Electronics</option>
                    </select>
                    <select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Beauty</option>
                    </select>
                    <select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Home Improvement</option>
                    </select>
                    <select name="" id="" className="bg-blue-100 py-2 px-4 rounded-full">
                        <option value="">Sports, Toys & luggage</option>
                    </select>
                </div>
            </div>
            {/** Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-5 bg-blue-600 rounded-3xl p-16 mx-10">
                <div className="flex flex-col gap-3">
                    <p className="text-white font-bold">Best Deal Online on Smart Watches</p>
                    <h1 className="sm:text-5xl text-2xl text-white font-bold font-sans">SMART WEARABLE.</h1>
                    <p className="text-white font-bold">UP TO 80% OFF</p>
                </div>
                <div className="w-full">
                    <div className="flex flex-1 max-w-xl min-w-0">
                        <img src="/phone1.png" alt="" className="sm:w-75 w-50"/>
                        <img src="/watch01.png" alt="" className="sm:w-37.5 sm:h-37.5 w-25 h-25"/>
                    </div>
                </div>
            </div>
            {/** view product */}
            <div className="px-10 mb-10">
                <div className="flex justify-between mt-15 border-b border-gray-100 mb-10">
                    <p className="font-semibold">Grab the best deal on Smart Phones</p>
                    <p>View All</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 hover:border-blue-700">
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone01.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone02.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone03.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone04.png" alt="" className="w-22"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone05.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** shop from top category */}
            <div className="px-10 mb-10">
                <div className="flex justify-between mt-15 border-b border-gray-100 mb-10">
                    <p className="font-semibold">Shop From Top Categories</p>
                    <p>View All</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 mb-15">
                    <div className="flex flex-col gap-2 py-4 rounded-full bg-gray-100 items-center w-30 h-30 border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone061.png" alt="" className="w-20 h-20"/>
                        <p className="flex mt-5 font-semibold">Mobile</p>
                    </div>
                    <div className="flex flex-col gap-5 py-4 rounded-full bg-gray-100 items-center w-30 h-30 border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/cosmotic01.png" alt="" className="w-35 h-35"/>
                        <p className="flex mt-5 font-semibold">Cosmotic</p>
                    </div>
                    <div className="flex flex-col gap-5 py-4 rounded-full bg-gray-100 items-center w-30 h-30 border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/washer01.png" alt="" className="w-25 h-25"/>
                        <p className="flex mt-5 font-semibold">Electronic</p>
                    </div>
                    <div className="flex flex-col gap-3 py-4 rounded-full bg-gray-100 items-center w-30 h-30 border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/0101.png" alt="" className="w-20 h-20"/>
                        <p className="flex mt-5 font-semibold">Smart Watch</p>
                    </div>
                    <div className="flex flex-col py-4 rounded-full bg-gray-100 items-center w-30 h-30 border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/furniture01.png" alt="" className="w-25 h-25"/>
                        <p className="flex mt-5 font-semibold">Furniture</p>
                    </div>
                    <div className="flex flex-col gap-7 py-4 rounded-full bg-gray-100 items-center w-30 h-30 border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/decor01.png" alt="" className="w-25 h-25"/>
                        <p className="flex mt-5 font-semibold">Decor</p>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-full bg-gray-100 items-center w-30 h-30 border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/access01.png" alt="" className="w-20 h-20"/>
                        <p className="flex mt-5 font-semibold">Accessories</p>
                    </div>
                </div>
            </div>

            {/** */}
            <div className="px-10 mb-10">
                <div className="flex justify-between mt-15 border-b offset-8 border-gray-100 mb-10">
                    <p className="font-semibold">Daily Essentials</p>
                    <p>View All</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone01.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone02.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone03.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone04.png" alt="" className="w-22"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 py-4 rounded-2xl bg-gray-100 items-center border border-transparent hover:border-blue-400 hover:bg-blue-100">
                        <img src="/phone05.png" alt="" className="w-30"/>
                        <div className="flex flex-col gap-1">
                            <p>Galaxy S22 Ultra</p>
                            <p>$120</p>
                            <p>Save - 20%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/** Footer */}
            <div className="bg-blue-500 p-10 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-3">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-2xl font-bold text-white">MegaMart</h1>
                        <p className="flex text-xl">Contact Us</p>
                        <div>
                            <p>What's Up</p>
                            <p>+251989957854</p>
                        </div>
                        <div>
                            <p>Call us</p>
                            <p>+251989957854</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold underline underline-offset-8 mb-4">Most Popular Categories</h1>
                        <ul className="flex flex-col gap-2 list-disc">
                            <li>Staple</li>
                            <li>Beverage</li>
                            <li>Personal Care</li>
                            <li>Home Care</li>
                            <li>Baby Care</li>
                            <li>Vegetables and fruits</li>
                            <li>Snacks and Foods</li>
                            <li>Dairy and Bakery</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold underline underline-offset-8 mb-4">Customer Services</h1>
                        <ul className="flex flex-col gap-2 list-disc">
                            <li>About Us</li>
                            <li>Terms and Conditions</li>
                            <li>FAQ</li>
                            <li>Privacy Policy</li>
                            <li>E-waste Policy</li>
                            <li>Cancellation and return Policy</li>
                        </ul>
                    </div>
                </div>
                <hr className="text-blue-300"/>
                <div className="flex justify-center items-center mt-7">
                    <p>@copy 2026 All rights reserved. Reliance Retail Ltd.</p>
                </div>
            </div>
        </div>
    )
}