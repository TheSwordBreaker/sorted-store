import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const publication = [
  { name: "Technical" },
  { name: "Nirali" },
  { name: "Techknowledge" },
];
const semester = [
  { name: "SEM I" },
  { name: "SEM II" },
  { name: "SEM III" },
  { name: "SEM IV" },
  { name: "SEM V" },
];

const Filter = () => {
  const [selectedPublication, setSelectedPublication] = useState(
    publication[0]
  );
  const [selectedSemester, setSelectedSemester] = useState(semester[0]);
  return (
    <div className=" z-50 flex w-40 gap-5 ">
      <Listbox value={selectedPublication} onChange={setSelectedPublication}>
        <div className="relative mt-1">
          <Listbox.Button className=" relative w-36 cursor-default border border-bookBg bg-accorBg py-1 pl-3 pr-10 text-left  font-Lora text-sm font-bold tracking-wide text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedPublication?.name}</span>
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {publication.map((publication, publicationIdx) => (
                <Listbox.Option
                  key={publicationIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-2 pr-4 `
                  }
                  value={publication}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {publication.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <Listbox value={selectedSemester} onChange={setSelectedSemester}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default border border-bookBg bg-accorBg py-1 pl-3 pr-10 text-left  font-Lora text-sm font-bold tracking-wide text-white shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedSemester?.name}</span>
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
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto  bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {semester.map((semester, semesterIdx) => (
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
    </div>
  );
};

export default Filter;
