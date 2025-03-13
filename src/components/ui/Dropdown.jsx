import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function Example() {
    return (
        <Menu as="div" className="relative inline-block text-left">
        <div>
            <MenuButton className="inline-flex items-center w-full justify-center gap-x-1 text-sm font-semibold">
            Categories
            <ChevronDownIcon aria-hidden="true" className="size-5" />
            </MenuButton>
        </div>

        <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
            <div className="py-1">
            <MenuItem>
                <Link
                    to={"/"}
                    className="Linkk block text-black px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                Account settings
                </Link>
            </MenuItem>
            <MenuItem>
                <Link
                    to={"/"}
                    className="Linkk block text-black px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                Support
                </Link>
            </MenuItem>
            <MenuItem>
                <Link
                    to={"/"}
                    className="Linkk block text-black px-4 py-2 text-sm  data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                License
                </Link>
            </MenuItem>
            <form action="#" method="POST">
                <MenuItem>
                <button
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                    Sign out
                </button>
                </MenuItem>
            </form>
            </div>
        </MenuItems>
        </Menu>
    )
}
