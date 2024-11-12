import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="w-[50%] items-center justify-center flex mt-[400px] mx-auto">
        <div className="h-[500px] flex flex-col justify-between py-16 box-border">
          <p className="text-[70px] w-[800px] text-[#0275d8]">
            Ariza qoldirish
          </p>
          <p className="text-[70px] w-[800px] text-[#0275d8]">
            Oставить заявку
          </p>
          <p className="text-[70px] w-[800px] text-[#0275d8]">
            Submit an application
          </p>
        </div>
        <Link
          to={"/language"}
          className="w-[500px] h-[500px] rounded-full flex  justify-center items-center  text-[400px] text-white  bg-[#0275d8]"
        >
          <svg
            width="322px"
            height="322px"
            viewBox="-8.96 -8.96 49.92 49.92"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <title></title>{" "}
              <g
                data-name="06-Arrow-direction-pointer"
                id="_06-Arrow-direction-pointer"
              >
                {" "}
                <polyline
                  points="6 31 26 16 6 1"
                  style={{
                    fill: "none",
                    stroke: "#ffffff",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "4px",
                  }}
                ></polyline>{" "}
              </g>{" "}
            </g>
          </svg>
        </Link>
      </div>
    </>
  );
}
