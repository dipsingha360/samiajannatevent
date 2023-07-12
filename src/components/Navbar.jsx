function Navbar() {
  return (
    <div className="  py-4 px-40 flex items-center justify-between border-b border-yellow-50/10 ">
      <div className="logo text-5xl font-bold cursor-pointer text-yellow-600 hover:text-yellow-500 duration-300 ">
        SJE
      </div>
      <ul className="flex items-center gap-8">
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          Home
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          About
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          Services
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          Team
        </li>
        <li className="cursor-pointer text-yellow-50 hover:text-yellow-500 duration-300">
          Contact
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
