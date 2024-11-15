import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import "./style.css";
export function FormPagesUZ({ lng }) {
  const [isDisabled, setIsDisabled] = useState(false);
  let [phone, SetPhone] = useState(4);
  const navigate = useNavigate();
  let [errorData, SetErrorData] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
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
    phone: "+998 ",
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
      String(user.phone).length == 14 &&
      String(user.jshshir).length == 7 &&
      String(user.seria).length == 2 &&
      String(user.category).length > 0
    ) {
      fetch("https://husidev007.pythonanywhere.com/app/application/add/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(
          (res) =>
            res.status >= 200 && res.status <= 300
              ? toast.success(
                  lng === "uz"
                    ? "Muvaffaqiyatli bajarildi!"
                    : lng === "ru"
                    ? "Сделано успешно!"
                    : "Done successfully!"
                )
              : toast.error(
                  lng === "uz"
                    ? "Saytda vaqtinchalik xatolik yuz berdi!"
                    : lng === "ru"
                    ? "На сайте произошла временная ошибка!"
                    : "There was a temporary error on the site!"
                ),
          setTimeout(() => navigate("/"), 4000)
        )
        .catch(
          toast.error(
            lng === "uz"
              ? "Serverda xatolik yuz berdi!"
              : lng === "ru"
              ? "На сервере произошла ошибка!"
              : "An error occurred on the server!"
          )
        );
      SetUser({
        name: "",
        surname: "",
        seria: "",
        jshshir: "",
        phone: "",
        category: 1,
      });
    } else {
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 4000);
      toast.error(
        lng === "uz"
          ? "Forma to'liq emas!"
          : lng === "ru"
          ? "Форма неполная!"
          : "The form is incomplete!"
      );

      if (String(user.name).length <= 0) {
        setNameBorder(true);
      }
      if (String(user.surname).length <= 0) {
        setSurNameBorder(true);
      }
      if (String(user.phone).length !== 14) {
        setPhoneBorder(true);
      }
      if (String(user.jshshir).length !== 7) {
        setJshshirBorder(true);
      }
      if (String(user.seria).length !== 2) {
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
              SetUser({ ...user, seria: e.target.value.toUpperCase() });
            }}
            name="seria"
            value={user.seria}
            maxLength={2}
            minLength={2}
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
              if (
                e.target.value.slice(-1) == 1 ||
                e.target.value.slice(-1) == 2 ||
                e.target.value.slice(-1) == 3 ||
                e.target.value.slice(-1) == 4 ||
                e.target.value.slice(-1) == 5 ||
                e.target.value.slice(-1) == 6 ||
                e.target.value.slice(-1) == 7 ||
                e.target.value.slice(-1) == 8 ||
                e.target.value.slice(-1) == 9 ||
                e.target.value.slice(-1) == 0
              ) {
                NowUser(e);
              }
              // SetUser({
              //   ...user,
              //   jshshir: e.target.value,
              // });
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
              if (
                e.target.value.slice(-1) == 1 ||
                e.target.value.slice(-1) == 2 ||
                e.target.value.slice(-1) == 3 ||
                e.target.value.slice(-1) == 4 ||
                e.target.value.slice(-1) == 5 ||
                e.target.value.slice(-1) == 6 ||
                e.target.value.slice(-1) == 7 ||
                e.target.value.slice(-1) == 8 ||
                e.target.value.slice(-1) == 9 ||
                e.target.value.slice(-1) == 0
              ) {
                if (phone < e.target.value.length) {
                  if (
                    user.phone.length === 3 ||
                    user.phone.length === 7 ||
                    user.phone.length === 10
                  ) {
                    SetUser({ ...user, phone: e.target.value + " " });
                  }
                  // else if (
                  //   user.phone.length === 4 ||
                  //   user.phone.length === 8 ||
                  //   user.phone.length === 11
                  // ) {
                  // }
                  else {
                    SetUser({
                      ...user,
                      phone: e.target.value,
                    });
                  }
                } else {
                  SetUser({
                    ...user,
                    phone: e.target.value,
                  });
                }
                // alert(user.phone.length - phone);
                SetPhone(e.target.value.length);
              }
            }}
            name="phone"
            value={user.phone}
            // minLength="14"
            maxLength="14"
            required
          />
          <Link onClick={Add} className="w-[100%]" to={"/"}>
            <button
              disabled={isDisabled}
              className="w-[100%] text-[40px] bg-[#0275d8] h-[100px] rounded-[10px] text-white font-bold "
            >
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
