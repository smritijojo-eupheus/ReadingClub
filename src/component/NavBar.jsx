/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/img/fe-live.png";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ status }) {
  const navigation = [
    { name: "Home", href: "/", current: status === "home" ? true : false },
    {
      name: "School Registration",
      href: "/school-registration",
      current: status === "SchoolRegistration" ? true : false,
    },
    {
      name: "Student Registration",
      href: "/student-registration",
      current: status === "StudentRegistration" ? true : false,
    },
    {
      name: "Login",
      href: "/login",
      current: status === "login" ? true : false,
    },
  ];
  return (
    <Disclosure
      as="nav"
      className="bg-[#0E8388] bg-opacity-90 sm:bg-opacity-75 top-0 fixed w-[100%] p-2 z-50 "
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center p-3">
                  <img
                    className="block lg:hidden h-20 pt-2 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block pt-2 h-20 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className=" absolute inset-y-0 right-0 flex items-center pr-2">
                    {navigation.map((item) => (
                      <Link to={`${item.href}`}>
                        <a
                          key={item.name}
                          className={classNames(
                            item.current
                              ? "bg-[rgba(47,106,128,0.83)] text-white"
                              : "text-white hover:bg-[rgba(47,106,128,0.83)] hover:text-white",
                            "px-3 mx-3 py-2 rounded-md   font-bold"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[rgba(47,106,128,0.83)] text-white"
                      : "text-white hover:bg-[rgba(47,106,128,0.83)] hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
