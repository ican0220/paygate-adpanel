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
export default function Withdraw() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px] flex justify-center">
        <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          PayGate Administrator Panel
        </h1>
      </nav>

      <SideBar />

      <div className="p-4 sm:ml-64 bg-transparent text-neutral-800">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="flex justify-center items-center gap-3">
            <Image src={tableData[0].img} alt="" width={50} height={50} />
            <h1 className=" border-b-2 border-neutral-700  border-dashed">Tether USD</h1>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 uppercase">
              TRX
            </span>
          </div>

          <div className="flex justify-center items-center gap-3 mt-[30px]">
            <h1>49.8967656</h1>
            <h2>TRX-USDT</h2>
          </div>
          <h1 className="text-center">49.80 USD</h1>
          <div className="flex justify-center items-center gap-3">
            <button type="button" className=" border-2 border-blue-500 w-[200px] rounded-3xl uppercase py-[5px]">receive</button>
            <button type="button" className=" border-2 border-blue-500 w-[200px] rounded-3xl uppercase py-[5px]">send</button>
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
                  className="hover:cursor-pointer odd:bg-neutral-200 even:bg-neutral-300 hover:bg-neutral-400 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center gap-3">
                      <Image src={_.img} alt="" width={50} height={50} />
                      <span>{_.amount}</span>
                      <span className="">TRX-USDT</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-s">
                    {_.to}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-s">
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
