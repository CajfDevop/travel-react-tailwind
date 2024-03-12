import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="grid lg:grid-cols-3 mx-auto max-w-[1240px] gap-4 px-4 py-16">
      <div className=" lg:col-span-2 flex flex-col justify-evenly">
        <h2 className="">LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
        <p className="py-4">
          Come experience the very pinnacle of luxury Caribbean all-inclusive
          vacations for couples at BEACHES Resorts. Our luxury beach resorts,
          set along the most gorgeous tropical settings and exquisite beaches in
          Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
          Curaçao, feature unlimited gourmet dining, unique bars serving premium
          liquors and wines, and every land and water sport, including
          complimentary green fees at our golf resorts and certified scuba
          diving at most resorts. If you are planning a wedding, BEACHES is the
          leader in Caribbean destination weddings and honeymoon packages.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 py-4 ">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div className="">
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div className=" text-center">
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center border py-4">
          <p>GET AN ADITIONAL 10% OFF</p>
          <p className="py-3">12 HOURS LEFT</p>
          <p className="bg-black text-white mx-4 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full py-1">
          <div className="flex flex-col py-2">
            <label>Destination</label>
            <select className="border rounded-lg py-1">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div  className=" flex flex-col py-2" >
            <label>Check-In</label>
            <input type="date"  className="border rounded-lg py-1" />
          </div>
          <div className=" flex flex-col py-2">
            <label>Check-Out</label>
            <input type="date"  className="border rounded-lg py-1" />
          </div>
          <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
}

export default Search;
