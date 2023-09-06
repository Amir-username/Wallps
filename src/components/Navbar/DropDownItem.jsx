function DropDownItem({ dispatch, item, name }) {
  const dispatchFun = () => {
    dispatch({ type: name, payload: item });
  };
  return (
    <div
      onClick={dispatchFun}
      className="sm:w-screen text-teal-600 block px-4 py-2 text-sm hover:bg-teal-100 duration-200 cursor-pointer"
    >
      {item}
    </div>
  );
}

export default DropDownItem;
