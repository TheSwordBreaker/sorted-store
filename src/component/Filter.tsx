import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import useQueryState from "../hooks/useQueryState";

const publication = [
  { name: "Technical", value: "Technical" },
  { name: "Nirali", value: "Nirali" },
  { name: "Techknowledge", value: "techknowledge" },
];
const semester = [
  { name: "SEM I", value: "sem-i" },
  { name: "SEM II", value: "sem-ii" },
  { name: "SEM III", value: "sem-iii" },
  { name: "SEM IV", value: "sem-vi" },
  { name: "SEM V", value: "sem-v" },
];

const Filter = () => {
  const { query, setQuery } = useQueryState();

  const [selectedPublication, setSelectedPublication] = useState(
    publication[0]
  );
  const [sem, setSem] = useState(semester[0]);

  useEffect(() => {
    setSearch(query?.sem ?? "");
  }, [query.sem]);

  const handlePublication = (e: any) => {
    console.log(e);
    setQuery({ ...query, publication: e.value });
    setSelectedPublication(e);
  };
  const handleSem = (e: any) => {
    console.log(e);
    setQuery({ ...query, semester: e.value });
    setSem(e);
  };

  return (
    <div className=" z-50 flex w-40 gap-5 ">
      <DropDownSelect
        data={selectedPublication!}
        options={publication}
        onChange={handlePublication}
      />
      <DropDownSelect data={sem!} options={semester} onChange={handleSem} />
    </div>
  );
};

export default Filter;

interface DropDownSelectProps {
  onChange: (e: any) => void;
  data: { name: string; value?: string };
  options: { name: string; value?: string }[];
}

function DropDownSelect({
  data,
  onChange: handleChange,
  options,
}: DropDownSelectProps) {
  return (
    <Listbox value={data} onChange={handleChange}>
      <div className="relative mt-1 ">
        <Listbox.Button className="relative w-full cursor-default border border-bookBg bg-accorBg py-1 pr-10 pl-3 text-left  font-Lora text-sm font-bold tracking-wide text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <div className=" block  min-w-[3.5rem] text-xs  text-pop-white200 sm:text-sm ">
            {data?.name}
          </div>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {options.map((semester, semesterIdx) => (
              <Listbox.Option
                key={semesterIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-2 pr-4 `
                }
                value={semester}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {semester.name}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
