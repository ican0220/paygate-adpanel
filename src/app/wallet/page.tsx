import Image from "next/image";
import SideBar from "../components/SideBar";

const tableHead = [
  {
    title: "Search",
  },
  {
    title: "Balance",
  },
  {
    title: "Value",
  },
  {
    title: "Price",
  },
  {
    title: "24h",
  },
];

const tableData = [
  {
    img: "/cryptos/bch.svg",
    search: "BTC",
    balance: "0BTC",
    value: "$0",
    price: "$0.51",
    hour: "-0.20%",
  },
  {
    img: "/cryptos/bch.svg",
    search: "BTC",
    balance: "0BTC",
    value: "$0",
    price: "$0.51",
    hour: "-0.20%",
  },
  {
    img: "/cryptos/bch.svg",
    search: "BTC",
    balance: "0BTC",
    value: "$0",
    price: "$0.51",
    hour: "-0.20%",
  },
  {
    img: "/cryptos/bch.svg",
    search: "BTC",
    balance: "0BTC",
    value: "$0",
    price: "$0.51",
    hour: "-0.20%",
  },
  {
    img: "/cryptos/bch.svg",
    search: "BTC",
    balance: "0BTC",
    value: "$0",
    price: "$0.51",
    hour: "-0.20%",
  },
  {
    img: "/cryptos/bch.svg",
    search: "BTC",
    balance: "0BTC",
    value: "$0",
    price: "$0.51",
    hour: "-0.20%",
  },
];
export default function Wallet() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px] flex justify-center">
        <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          PayGate Administrator Panel
        </h1>
      </nav>

      <SideBar />

      <div className="p-4 sm:ml-64 bg-transparent">
      <h1 className="text-center text-[#1f2843]">Wallet</h1>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead>
                      <tr>
                        {tableHead.map((_, index) => (
                          <th
                            scope="col"
                            className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
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
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-800">
                            <div className="flex items-center gap-3">
                              <Image
                                src={_.img}
                                alt=""
                                width={50}
                                height={50}
                              />
                              <span>{_.search}</span>
                              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300 uppercase">
                                new
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-800">
                            {_.balance}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-800">
                            {_.value}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-800">
                            {_.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-800">
                            {_.hour}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
