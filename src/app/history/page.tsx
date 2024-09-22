"use client";
import { useEffect } from "react";
import Image from "next/image";
import SideBar from "../components/SideBar";

const tableHead = [
  {
    title: "Amount ",
  },
  {
    title: "To",
  },
  {
    title: "Datetime",
  },
];

const tableData = [
  {
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
];

export default function History() {

  useEffect(() => {

  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px] flex justify-center">
        <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          PayGate Administrator Panel
        </h1>
      </nav>

      <SideBar/>

      <div className="p-4 sm:ml-64 bg-transparent text-[#2e3755]">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="flex gap-4">
            <button type="button" className="border-2 border-blue-500 px-[10px] rounded-3xl bg-[#2e3755] text-white">Receive History</button>
            <div className="flex gap-3">
              <div>
                <span>From:</span>
                <input type="date" className="bg-transparent" id="from"></input>
              </div>
              <div>
                <span>To:</span>
                <input type="date" className="bg-transparent" id='to'></input>
              </div>
            </div>
          </div>
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr>
                {tableHead.map((_, index) => (
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 bg-transparent"
                    key={index}
                  >
                    {_.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((_, index) => (
                <tr
                  key={index}
                  className="hover:cursor-pointer bg-transparent hover:bg-neutral-400  text-[#2e3755] hover:text-neutral-200 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">
                    <div className="flex items-center gap-3">
                      <Image src={_.img} alt="" width={50} height={50} />
                      <span>{_.amount}</span>
                      <span className="">TRX-USDT</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {_.to}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {_.datetime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
