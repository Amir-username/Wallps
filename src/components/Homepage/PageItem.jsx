function PageItem({number}) {
    return (
        <div className="w-10 h-10 p-1 bg-teal-600 text-white rounded-md text-center text-lg font-bold hover:bg-teal-500 cursor-pointer">
            {number}
        </div>
    );
}

export default PageItem;