import { useState } from "react";
import { categories } from "../../models/models";
import DropDownItem from "./DropDownItem";

function NavDropDown({ dispatch, items, name }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen((o) => !o)}
        className="relative inline-block text-left mt-1.5"
      >
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 uppercase rounded-md bg-gray-50 dark:bg-gray-900 px-3 py-2 text-sm font-semibold text-teal-500 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-900 duration-200"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {name == 'image_type' ? 'image type' : name}
            <svg
              className="-mr-1 h-5 w-5 text-teal-500 mt-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            !isOpen && "hidden"
          } absolute right-0 z-10 mt-2 ml-10 mid:w-40 w-full origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {items.map((c) => {
              return <DropDownItem item={c} key={c} dispatch={dispatch} name={name}/>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavDropDown;
