import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
export default function Navigation({filterProducts}) {

  return (
    <>
      <nav className="flex justify-around items-center border-b-2 ">
        <div>
          <ul className="flex gap-5 font-bold hover:cursor-pointer">
            <li onClick={() => filterProducts("women")} >Women</li>
            <li onClick={() => filterProducts("men")}>Man</li>
            <li onClick={() => filterProducts("all")}>All</li>
          </ul>
        </div>
        <img
          className="w-20"
          src="https://img.freepik.com/free-vector/flat-design-cross-country-design-logo_23-2149481837.jpg?t=st=1714905451~exp=1714909051~hmac=b7eb296c4b772dadabb0cf76f60e37bc062d73560065976960c0967d330ca983&w=996"
          alt=""
        />

        <div className="flex gap-5 items-center cursor-pointer ">
          <SlBasket className="w-10" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
            className="w-8 h-8"
          />
        </div>
      </nav>
    </>
  );
}
