import Image from "next/image";
import SideBar from "../components/SideBar";

const tableHead = [
  {
    title: "Reseller Id ",
  },
  {
    title: "Email",
  },
  {
    title: "Reseller Domain",
  },
  {
    title: "Balance",
  },
  {
    title: "Action",
  },
];

const tableData = [
  {
    seller_id: '2342343',
    email: "icandev0220@gmail.com",
    domain: "gmail.com",
    balance: "$450",
  },
  {
    seller_id: '2342343',
    email: "icandev0220@gmail.com",
    domain: "gmail.com",
    balance: "$450",
  },
  {
    seller_id: '2342343',
    email: "icandev0220@gmail.com",
    domain: "gmail.com",
    balance: "$450",
  },
  {
    seller_id: '2342343',
    email: "icandev0220@gmail.com",
    domain: "gmail.com",
    balance: "$450",
  },
  {
    seller_id: '2342343',
    email: "icandev0220@gmail.com",
    domain: "gmail.com",
    balance: "$450",
  },
  {
    seller_id: '2342343',
    email: "icandev0220@gmail.com",
    domain: "gmail.com",
    balance: "$450",
  },
];

export default function Reseller() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px] flex justify-center">
        <h1 className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          PayGate Administrator Panel
        </h1>
      </nav>

      <SideBar/>

      <div className="p-4 sm:ml-64 bg-[#1f2843] text-white">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div>
          <button type="button" className="border-2 border-blue-500 px-[10px] rounded-3xl">Reseller</button>
          </div>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr>
                {tableHead.map((_, index) => (
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 bg-[#1f2843]"
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
                  className="hover:cursor-pointer odd:bg-[#1f2843] even:bg-[#262e48] hover:bg-[#2e3755] dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-200">
                    {_.seller_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-200">
                    {_.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-200">
                    {_.domain}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-200">
                    {_.balance}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  text-neutral-200">
                    <button type="button" className=" border border-blue-500 rounded-xl px-[20px]">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
            192.168.149.206
          </table>
        </div>
      </div>
    </main>
  );
}
