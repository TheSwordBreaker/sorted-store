import Link from "next/link";
const CategoryNav = () => {
  return (
    <>
      <div className="catergoryNavContainer py-1 pb-3 text-xs text-fontColor ">
        <ul className="flex justify-between">
          <li>
            <Link href="">Books</Link>
          </li>
          <li className="  bg-fontColor px-2  text-mainBgColor">
            <Link href="">All</Link>
          </li>
          <li>
            <Link href="">Engineer Kit</Link>
          </li>
          <li>
            <Link href="">Stationary</Link>
          </li>
          <li>
            <Link href="">Tools</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryNav;
