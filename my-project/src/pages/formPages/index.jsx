import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import "./style.css"
// import createBrowserHistoty from 'react-router-dom'

export function FormPagesUZ({ lng }) {
  const notify = () => toast("Here is your toast.");
  const navigate = useNavigate();
  let [errorData, SetErrorData] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  // navigate("/")
  // const history = createBrowserHistoty();
  let [phoneBorder, setPhoneBorder] = useState(false);
  let [nameBorder, setNameBorder] = useState(false);
  let [surNameBorder, setSurNameBorder] = useState(false);
  let [jshshirBorder, setJshshirBorder] = useState(false);
  let [seriaBorder, setSeriaBorder] = useState(false);
  let [user, SetUser] = useState({
    name: "",
    surname: "",
    seria: "",
    jshshir: "",
    phone: "",
    category: 1,
  });
  function NowUser({ target: { value, name } }) {
    SetUser({ ...user, [name]: value });
  }
  function Add(e) {
    e.preventDefault();
    if (
      String(user.name).length > 0 &&
      String(user.surname).length > 0 &&
      String(user.phone).length >= 0 &&
      String(user.jshshir).length > 0 &&
      String(user.seria).length > 0 &&
      String(user.category).length > 0
    ) {
      fetch("https://husidev007.pythonanywhere.com/app/application/add/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }).then((res) =>
        res.status >= 200 && res.status <= 300
          ? toast.success("Successfully toasted!")
          : toast.error("This didn't work.")
      );
      SetUser({
        name: "",
        surname: "",
        seria: "",
        jshshir: "",
        phone: "",
        category: 1,
      });
      setTimeout(() => navigate("/"), 3000);
    } else {
      // toast.error("This didn't work.");

      if (String(user.name).length <= 0) {
        setNameBorder(true);
      }
      if (String(user.surname).length <= 0) {
        setSurNameBorder(true);
      }
      if (String(user.phone).length <= 0) {
        setPhoneBorder(true);
      }
      if (String(user.jshshir).length <= 0) {
        setJshshirBorder(true);
      }
      if (String(user.seria).length <= 0) {
        setSeriaBorder(true);
      }
    }
  }
  return (
    <>
      {/* {errorData ? <h1>salom</h1> : ""}
      {isLoading ? <h1>salom</h1> : ""} */}
      <div className="w-[40%]  mt-[400px] mx-auto flex items-center justify-center">
        <form className="flex flex-wrap justify-between">
          <input
            className={`px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(50%-20px)] mb-[20px] `}
            style={{
              border: `1.5px solid ${nameBorder ? "red" : "#eee7e7"}`,
            }}
            type="text"
            placeholder={lng === "uz" ? "Исм" : lng === "ru" ? "имя" : "name"}
            onChange={(e) => {
              setNameBorder(false);
              NowUser(e);
            }}
            name="name"
            value={user.name}
          />
          <input
            className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(50%-20px)] mb-[20px]"
            style={{
              border: `1.5px solid ${surNameBorder ? "red" : "#eee7e7"}`,
            }}
            type="text"
            placeholder={
              lng === "uz" ? "Фамилия" : lng === "ru" ? "Фамилия" : "last name"
            }
            onChange={(e) => {
              setSurNameBorder(false);
              NowUser(e);
            }}
            name="surname"
            value={user.surname}
          />
          <input
            className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(10%-20px)] mb-[20px]"
            style={{
              border: `1.5px solid ${seriaBorder ? "red" : "#eee7e7"}`,
            }}
            type="text"
            placeholder="AB"
            onChange={(e) => {
              setSeriaBorder(false);
              NowUser(e);
            }}
            name="seria"
            value={user.seria}
          />
          <input
            className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(45%-20px)] mb-[20px]"
            style={{
              border: `1.5px solid ${jshshirBorder ? "red" : "#eee7e7"}`,
            }}
            type="text"
            placeholder="1012655"
            name="jshshir"
            onChange={(e) => {
              setJshshirBorder(false);
              NowUser(e);
            }}
            value={user.jshshir}
            minLength="7"
            maxLength="7"
            required
          />
          <input
            className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(45%-20px)] mb-[20px]"
            style={{
              border: `1.5px solid ${phoneBorder ? "red" : "#eee7e7"}`,
            }}
            type="text"
            placeholder={
              lng === "uz"
                ? "Тел рақам"
                : lng === "ru"
                ? "Номер телефона"
                : "Phone number"
            }
            onChange={(e) => {
              setPhoneBorder(false);
              NowUser(e);
            }}
            name="phone"
            value={user.phone}
            minLength="9"
            maxLength="13"
            required
          />
          <Link onClick={Add} className="w-[100%]" to={"/"}>
            <button className="w-[100%] text-[40px] bg-[#0275d8] h-[100px] rounded-[10px] text-white font-bold ">
              {lng === "uz"
                ? "Тел рақамни тасдиқлаш"
                : lng === "ru"
                ? "Подтвердить номер телефона"
                : " Confirm phone number"}
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

// export function FormPagesRU() {
//   return (
//     <>
//       <div className="w-[40%]  mt-[500px] mx-auto flex items-center justify-center">
//         <div className="flex flex-wrap justify-between">
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(50%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="имя"
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(50%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder=""
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(10%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="AB"
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(45%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="1012655"
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(45%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="Номер телефона"
//           />
//           <button className="w-[100%] text-[40px] bg-[#0275d8] h-[100px] rounded-[10px] text-white font-bold ">
//             Подтвердить номер телефона
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export function FormPagesENG() {
//   return (
//     <>
//       <div className="w-[40%]  mt-[500px] mx-auto flex items-center justify-center">
//         <div className="flex flex-wrap justify-between">
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(50%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="name"
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(50%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="last name"
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(10%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="AB"
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(45%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="1012655"
//           />
//           <input
//             className="px-4 box-border h-[100px] rounded-[10px] text-[30px] font-bold w-[calc(45%-20px)] mb-[20px]"
//             style={{ border: "1px solid #eee7e7" }}
//             type="text"
//             placeholder="Phone number"
//           />
//           <button className="w-[100%] text-[40px] bg-[#0275d8] h-[100px] rounded-[10px] text-white font-bold ">
//             Confirm phone number
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
