function DropDownItem({ item }) {
  return (
    <a
      href="#"
      className="text-teal-600 block px-4 py-2 text-sm hover:bg-teal-100 duration-200"
      role="menuitem"
      tabIndex={-1}
      id="menu-item-0"
    >
      {item}
    </a>
  );
}

export default DropDownItem;
