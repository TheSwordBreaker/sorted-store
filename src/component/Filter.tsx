import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import useQueryState from "../hooks/useQueryState";

const publications = [
  { name: "Technical", value: "Technical" },
  { name: "Nirali", value: "Nirali" },
  { name: "Techknowledge", value: "techknowledge" },
];
const semester = [
  { name: "SEM All ", value: "" },
  { name: "FIRST YEAR ", value: "first-year" },
  { name: "SEM III", value: "sem-iii" },
  { name: "SEM IV", value: "sem-vi" },
  { name: "SEM V", value: "sem-v" },
];

const Filter = () => {
  const { query, setQuery } = useQueryState();

  const [publication, setPublication] = useState(publications[0]);
  const [sem, setSem] = useState(semester[0]);

  const handlePublication = (e: any) => {
    console.log(e);
    setQuery({ ...query, publication: e.value });
    setPublication(e);
  };
  const handleSem = (e: any) => {
    console.log(e);
    setQuery({ ...query, sem: e.value });
    setSem(e);
  };

  return (
    <div className=" z-50 flex w-40 gap-5 ">
      <DropDownSelect
        data={publication!}
        options={publications}
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
        <Listbox.Button className="relative w-[8rem] cursor-default border border-bookBg bg-accorBg py-1 pr-10 pl-3 text-left  font-Lora text-sm font-bold tracking-wide text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
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
          <Listbox.Options className="absolute z-40 mt-1 max-h-60 w-full overflow-auto border border-bookBg bg-black  py-1 text-left font-Lora  text-xs text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-xs">
            {options.map((semester, semesterIdx) => (
              <Listbox.Option
                key={semesterIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-[0.3rem] pl-3 pr-4 `
                }
                value={semester}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-mediumtext-sm" : "font-normal"
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
