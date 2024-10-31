import React from 'react';
import classNames from 'classnames';
const tableHead = [
    {
        title: "Id ",
      },
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
  
interface DataType{
    id: string,
    img: string,
    amount: string,
    to: string,
    datetime: string
}
interface TableProps{
    sel: string | null,
    onSel: (x: string) => void,
    data: Array<DataType>
}
const Table:React.FC<TableProps> =  ({sel, onSel, data}) =>{
    return(
        <table className=" divide-y divide-gray-200 dark:divide-neutral-700">
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
              {data.map((_, index) => (
                <tr
                  key={index}
                  className={classNames("hover:cursor-pointer  hover:bg-neutral-400 dark:odd:bg-neutral-800 dark:even:bg-neutral-700 dark:hover:bg-neutral-700 "
                  , {" border border-green-500 odd:bg-green-500 even:bg-green-500": sel == _.id}, {" odd:bg-neutral-200 even:bg-neutral-300": sel != _.id})}
                  onClick={() => onSel(_.id)}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {_.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                    {_.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                    {_.to}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                    {_.datetime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                    <button type="button" className=" border border-blue-500 rounded-xl px-[20px]">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    )
}

export default Table;