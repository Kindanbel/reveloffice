import { PiShoppingCart } from "react-icons/pi";
import { PiChairThin } from "react-icons/pi";

const ShopHero = () => {
  return (
    <div className="px-[30px] py-[50px] bg-white mx-[3%] my-[30px] rounded-lg">
      <div className=" flex flex-col md:flex-row gap-5 justify-between pb-[50px] border-b-2 border-solid border-[rgba(0,0,0,0.25)]">
        <div className="header text-[30px] font-[600]">Our Seating Outlet</div>
        <div className="text w-[300px] md:w-[500px]">
          Elevate your deating experience with our curated collection of premium
          chair designed for ultimate comfort and style.
        </div>
      </div>



      <div className="pt-[50px] flex flex-col lg:flex-row items-start lg:items-center gap-20">
        <div className=" cart btn w-[fit] py-3 px-3 bg-black rounded-md flex items-center gap-5 cursor-pointer text-white">
          <div className="btn-icon p-3 bg-[rgba(239,232,232,0.35)] rounded-lg text-[20px]">
            <PiShoppingCart />
          </div>
          <div className="btn-name text-[18px]">Filters</div>
        </div>

        <div className="filters flex flex-wrap items-center gap-10">
          <div className="first_filter flex items-center gap-5 border-solid border-2 p-1 rounded-lg">
            <div className=" cart btn w-[fit] py-3 px-3 bg-[rgba(239,232,232,0.95)] rounded-md flex items-center gap-2 cursor-pointer">
              <div className="btn-icon p-3 bg-[rgba(239,232,232,0.95)] rounded-lg text-[20px]">
                <PiChairThin />
              </div>
              <div className="btn-name text-[18px] hidden md:block">Chair Type</div>
            </div>
            <div className="dropdown">
              <select name="chairtype" id="chair" className="outline-none">
                <option value="Engonomic Chair">Engonomic Chair</option>
                <option value="Mesh Office Chair">Mesh Office Chair</option>
                <option value="Leather Office Chair">
                  Leather Office Chair
                </option>
                <option value="Computer Chair">Computer Chair</option>
                <option value="Drafting Chair">Drafting Chair</option>
              </select>
            </div>
          </div>

          <div className="first_filter flex items-center gap-5 border-solid border-2 p-1 rounded-lg">
            <div className=" cart btn w-[fit] py-5 px-5 bg-[rgba(239,232,232,0.95)] rounded-md flex items-center gap-3 cursor-pointer">
              <div className="btn-name text-[18px] hidden md:block">Price</div>
            </div>
            <div className="dropdown">
              <select name="price" id="chair" className="outline-none">
                <option value="Under $570">Under $570</option>
                <option value="Over $570">Over $570</option>
              </select>
            </div>
            <div className="range w-[80px] lg:w-[150px] xl:w-[250px] h-[3px] bg-black"></div>
          </div>

          <div className="first_filter flex items-center gap-5 border-solid border-2 p-1 rounded-lg">
            <div className=" cart btn w-[fit] py-3 px-5 bg-[rgba(239,232,232,0.95)] rounded-md flex items-center gap-3 cursor-pointer">
              <div className="btn-icon p-3 bg-[rgba(239,232,232,0.95)] rounded-lg text-[20px]">
                <PiChairThin />
              </div>
              <div className="btn-name text-[18px] hidden md:block">Features</div>
            </div>
            <div className="dropdown">
              <select name="features" id="chair" className="outline-none">
                <option value="Adjustible Height">Adjustible Height</option>
                <option value="Swivel">Swivel capability</option>
                <option value="Armrest">Armrest comfort</option>
                <option value="Backrest">Backresting ease</option>
                <option value="Seat tilt">Seat tilting</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopHero;
