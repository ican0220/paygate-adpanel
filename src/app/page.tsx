import Image from "next/image";
import SideBar from "./components/SideBar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 h-[70px] flex justify-center">
        <ul className="flex gap-5 items-center">
          <li><Link href="/reseller">Reseller</Link></li>
          <li><Link href="/main">Dashboard</Link></li>
        </ul>
      </nav>
    </main>
  );
}
