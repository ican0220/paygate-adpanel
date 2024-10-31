"use client";
import React, { useState } from "react";
import Table from "../components/Table";

const leftTableData = [
  {
  id: "1",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "2",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "3",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "4",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "5",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "6",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
];

const rightTableData = [
  {
  id: "1",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "2",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "3",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "4",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "5",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
  {
      id: "6",
    img: "/cryptos/bch.svg",
    amount: "-970",
    to: "TSW4324SG3FXXXDF32FD3S",
    datetime: "12:00",
  },
];

export default function Reseller() {
  const [selLeft, setSelLeft] = useState("1");
  const [selRight, setSelRight] = useState<string|null>(null);

  const match  = () => {
    const id = rightTableData.filter((_, index) => _.id == selLeft)[0].id;
    setSelRight(id);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px] flex justify-center">
        <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          PayGate Administrator Panel
        </h1>
      </nav>

      <div className="absolute left-0 w-[10vw] bg-white top-[70px] h-[calc(100vh-70px)] p-5">
        <button type="button" className="bg-[#D6DCD7] rounded-lg px-[10px] py-[5px] min-w-[100px] hover:bg-slate-400 border border-slate-700" onClick={() => match()}>Match</button>
      </div>

      <div className="p-4 sm:ml-64 bg-transparent text-neutral-800">
        <div className="p-4 border-2 border-gray-200 shadow-lg rounded-lg dark:border-gray-700 mt-14">

          <div className="flex flex-row gap-5">
            <div className="text-center font-semibold text-[28px]">
              <div><h3>Users</h3></div>
              <Table sel={selLeft} data={leftTableData} onSel={(x:string) => setSelLeft(x)}/>
            </div>
            <div className="text-center font-semibold text-[28px]">
              <div><h3>DB</h3></div>
              <Table sel={selRight} data={rightTableData} onSel={(x:string) => setSelLeft(x)}/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
