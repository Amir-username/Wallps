function PageItem({ number, setPageNum, currPage }) {
  const setPage = () => {
    number !== currPage && setPageNum(number);
  };
  return (
    <button
      disabled={number !== currPage ? false : true}
      onClick={setPage}
      className="w-10 h-10 p-1 bg-teal-600 text-white rounded-md text-center
       text-lg font-bold hover:bg-teal-500 disabled:bg-teal-400"
    >
      {number}
    </button>
  );
}

export default PageItem;
