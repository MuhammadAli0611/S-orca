import { Link } from "react-router-dom";
export default function Language() {
  return (
    <>
      <div className=" w-[50%]  mt-[400px] mx-auto flex items-center justify-center">
        <div>
          <p className="text-[70px] mb-10 text-[#0275d8] font-bold w-[600px] h-[150px] flex items-center">
            Тилни танланг
          </p>
          <p className="text-[70px] mb-10 text-[#0275d8] font-bold w-[600px] h-[150px] flex items-center">
            Выберите язык
          </p>
          <p className="text-[70px] mb-10 text-[#0275d8] font-bold w-[600px] h-[150px] flex items-center">
            Choose language
          </p>
        </div>
        <div className="w-[3px] h-[540px] bg-[#0275d8]"></div>
        <div className="flex flex-col ml-[100px]">
          <Link
            className=" flex items-center justify-center mb-10 rounded-[40px] w-[600px] h-[150px] bg-[#0275d8] text-[70px] text-white"
            to={"/formPagesUZ"}
          >
            Ўзбек
          </Link>
          <Link
            className=" flex items-center justify-center mb-10 rounded-[40px] w-[600px] h-[150px] bg-[#0275d8] text-[70px] text-white"
            to={"/formPagesRU"}
          >
            Русский
          </Link>
          <Link
            className=" flex items-center justify-center mb-10 rounded-[40px] w-[600px] h-[150px] bg-[#0275d8] text-[70px] text-white"
            to={"/formPagesENG"}
          >
            English
          </Link>
        </div>
      </div>
    </>
  );
}
