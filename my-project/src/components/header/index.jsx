import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="w-[90%] items-center flex mt-[100px] mx-auto">
        <img className="w-[450px]" src="/Logo.jpg" alt="" />
        {/* <div className="w-1 h-[250px] bg-[#0275d8] mr-10"></div> */}
        <Link to={"/"} className="text-[70px] text-[#0275d8] ">
          Электрон мурожаат <br /> портали
        </Link>
      </header>
    </>
  );
}
