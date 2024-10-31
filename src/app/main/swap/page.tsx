"use client";
import { useState } from "react";
import Image from "next/image";
import SideBar from "../../components/SideBar";

const cryptoItems = [
  {
    value: "usdt",
    title: "USDT",
    description: "556.4211 USDT",
    imageUrl: "/images/cryptos/usdt.svg",
  },
  {
    value: "bitcoin",
    title: "Bitcoin",
    description: "0.00924402 BTC",
    imageUrl: "/images/cryptos/btc.svg",
  },
  {
    value: "ethereum",
    title: "Ethereum",
    description: "0.241081 ETH",
    imageUrl: "/images/cryptos/eth.svg",
  },
  {
    value: "litecoin",
    title: "Litecoin",
    description: "8.742787 LTC",
    imageUrl: "/images/cryptos/ltc.svg",
  },
  {
    value: "tron",
    title: "TRON",
    description: "3714.7103 TRX",
    imageUrl: "/images/cryptos/trx.svg",
  },
  {
    value: "binance-coin",
    title: "Binance Coin",
    description: "1.026062 BNB",
    imageUrl: "/images/cryptos/bnb.svg",
  },
  {
    value: "xrp",
    title: "XRP",
    description: "968.9922 XRP",
    imageUrl: "/images/cryptos/xrp.svg",
  },
  {
    value: "dogecoin",
    title: "Dogecoin",
    description: "5530.97 DOGE",
    imageUrl: "/images/cryptos/doge.svg",
  },
  {
    value: "usdc",
    title: "USDC",
    description: "556.3592 USDC",
    imageUrl: "/images/cryptos/usdc.svg",
  },
  {
    value: "dai",
    title: "Dai",
    description: "555.4321 DAI",
    imageUrl: "/images/cryptos/dai.svg",
  },
  {
    value: "shiba",
    title: "SHIBA INU",
    description: "42229730.0 SHIB",
    imageUrl: "/images/cryptos/shib.svg",
  },
  {
    value: "bitcoin-cash",
    title: "Bitcoin Cash",
    description: "1.782785 BCH",
    imageUrl: "/images/cryptos/bch.svg",
  },
];

export default function Swap() {
  const [isMenuVisible1, setIsMenuVisible1] = useState(false);
  const [isMenuVisible2, setIsMenuVisible2] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px] flex justify-center">
        <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          PayGate Administrator Panel
        </h1>
      </nav>

      <SideBar />

      <div className="p-4 sm:ml-64 bg-transparent">
        <h1 className="text-cente">SWAP</h1>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-1">
          <div className="flex justify-around items-center w-[400px] mx-auto">
            <Image src={"/cryptos/eth.svg"} alt="" width={50} height={50} />
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>

            <Image src={"/cryptos/btc.svg"} alt="" width={50} height={50} />
          </div>
          <div className="flex justify-between items-center gap-8 mt-[50px]">
            <div className="flex gap-4">
              <div className="border-b-2 border-black flex justify-between items-center">
                <input
                  type="text"
                  className=" border-none outline-none bg-transparent"
                  placeholder="0.0"
                />
                <button type="button">Send All</button>
              </div>
              <div className="border-b-2 border-dashed border-black relative ">
                <button
                  type="button"
                  className="hover:text-blue-500"
                  onClick={() => {
                    setIsMenuVisible1((_) => !_);
                  }}
                >
                  BTC
                </button>
                {isMenuVisible1 && (
                  <div className="absolute right-0 z-10 w-[300px] bg-neutral-300 rounded-3xl px-[10px] py-[10px]">
                    <div className="border-b-2 border-stone-300">
                      <input
                        type="text"
                        className="bg-transparent outline-none border-none"
                      />
                    </div>
                    <div className="grid grid-flow-col grid-cols-4 gap-2 mt-[10px] border-b-2 border-stone-300 pb-[10px]">
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        New
                      </button>
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        Gainers
                      </button>
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        Losers
                      </button>
                    </div>
                    <div className=" h-[200px] overflow-y-scroll scroll-smooth">
                      {cryptoItems.map((_, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div className="flex justify-center items-center">
                            <Image
                              src={_.imageUrl}
                              alt=""
                              width={30}
                              height={30}
                            />
                            <div>
                              <h1>{_.title}</h1>
                              <p>{_.title}</p>
                            </div>
                          </div>
                          <div>
                            <h1>{0}</h1>
                            <p>0.59%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <div className="border-b-2 border-black flex justify-between items-center">
                <input
                  type="text"
                  className=" border-none outline-none bg-transparent"
                  placeholder="0.0"
                />
              </div>
              <div className="border-b-2 border-dashed border-black relative ">
                <button
                  type="button"
                  className="hover:text-blue-500"
                  onClick={() => {
                    setIsMenuVisible2((_) => !_);
                  }}
                >
                  BTC
                </button>
                {isMenuVisible2 && (
                  <div className="absolute right-0 z-10 w-[300px] bg-neutral-300  rounded-3xl px-[10px] py-[10px]">
                    <div className="border-b-2 border-stone-300">
                      <input
                        type="text"
                        className="bg-transparent outline-none border-none"
                      />
                    </div>
                    <div className="grid grid-flow-col grid-cols-4 gap-2 mt-[10px] border-b-2 border-stone-300 pb-[10px]">
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        New
                      </button>
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        Gainers
                      </button>
                      <button
                        type="button"
                        className="rounded-3xl border-2 border-blue-500 text-[14px] px-[5px]"
                      >
                        Losers
                      </button>
                    </div>
                    <div className=" h-[200px] overflow-y-scroll scroll-smooth">
                      {cryptoItems.map((_, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <div className="flex justify-center items-center">
                            <Image
                              src={_.imageUrl}
                              alt=""
                              width={30}
                              height={30}
                            />
                            <div>
                              <h1>{_.title}</h1>
                              <p>{_.title}</p>
                            </div>
                          </div>
                          <div>
                            <h1>{0}</h1>
                            <p>0.59%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-[100px]">
            <div>
              <input type="checkbox" className="" />
              <span> I accept the Terms of Service</span>
            </div>
            <button
              type="button"
              className="px-[20px] py-[5px] mt-[20px] border-4 rounded-2xl min-w-[200px] border-[#262e48]"
            >
              SWAP
            </button>
            <div className="mt-[50px]">
              <h1 className="text-center ">Network fee</h1>
              <p className="text-center">0.00000792 BTC</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
