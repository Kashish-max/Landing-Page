import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  UserCircleIcon,
  CubeTransparentIcon,
  Bars3Icon,
  XMarkIcon,
  FlagIcon,
  ChatBubbleOvalLeftIcon,
  UsersIcon,
  FolderIcon,
  Square3Stack3DIcon,
  CheckCircleIcon,
  CreditCardIcon,
  RocketLaunchIcon,
  FaceSmileIcon,
  PuzzlePieceIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
 
const colors = {
  blue: "bg-blue-50 text-blue-500",
  orange: "bg-orange-50 text-orange-500",
  green: "bg-green-50 text-green-500",
  "blue-gray": "bg-blue-gray-50 text-blue-gray-500",
  purple: "bg-purple-50 text-purple-500",
  teal: "bg-teal-50 text-teal-500",
  cyan: "bg-cyan-50 text-cyan-500",
  pink: "bg-pink-50 text-pink-500",
};
 
const navListMenuItems = [
  {
    color: "blue",
    icon: FlagIcon,
    title: "About us",
    description: "Learn about our story and our mission statement.",
  },
  {
    color: "orange",
    icon: ChatBubbleOvalLeftIcon,
    title: "Press",
    description: "News and writings, press releases, and resources",
  },
  {
    color: "green",
    icon: UsersIcon,
    title: (
      <div className="flex items-center gap-1">
        Careers{" "}
        <Chip
          size="sm"
          color="green"
          variant="ghost"
          value="We&apos;re hiring!"
          className="capitalize"
        />
      </div>
    ),
    description: "We are always looking for talented people. Join us!",
  },
  {
    color: "blue-gray",
    icon: FolderIcon,
    title: "Legal",
    description: "All the stuff that we dan from legal made us add.",
  },
  {
    color: "purple",
    icon: RocketLaunchIcon,
    title: "Products",
    description: "Checkout our products that helps a startup running.",
  },
  {
    color: "teal",
    icon: FaceSmileIcon,
    title: "Icons",
    description: "Set of beautiful icons that you can use in your project.",
  },
  {
    color: "cyan",
    icon: PuzzlePieceIcon,
    title: "UI Kits",
    description: "High quality UI Kits helps you to 2x faster.",
  },
  {
    color: "pink",
    icon: GiftIcon,
    title: "Open Source",
    description: "List of all our open-source projects, it&apos;s all free.",
  },
];
 
function NavListMenu({MenuItemTitle, MenuItemIcon}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
 
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, color }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 ">
          <div className={`p-5 ${colors[color]}`}>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm"
            >
              {title}
            </Typography>
            <Typography variant="small" className="font-normal">
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-normal">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {MenuItemIcon}
              {MenuItemTitle}
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform xl:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform xl:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl xl:block">
          <ul className="grid grid-cols-4 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block xl:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 xl:mt-0 xl:mb-0 xl:flex-row xl:p-1">
      <NavListMenu MenuItemTitle={"Products"} MenuItemIcon={<Square3Stack3DIcon className="h-[18px] w-[18px]" />}/>
      <NavListMenu MenuItemTitle={"Solutions"} MenuItemIcon={<CheckCircleIcon className="h-[18px] w-[18px]" />}/>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CreditCardIcon className="h-[18px] w-[18px]" />
          Pricing
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          <CubeTransparentIcon className="h-[18px] w-[18px]" />
          Learn
        </ListItem>
      </Typography>
    </List>
  );
}
 
export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  return (
    <Navbar className="px-4 py-2 rounded-none max-w-full fixed z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-icon-dark.svg?v=1"
          className="mr-4 cursor-pointer py-1.5 xl:ml-2 w-32"
        />          
        <div className="hidden xl:flex">
          <NavList />

          {/* Search */}
          <div className="flex flex-grow justify-center mx-4">
            <div className="max-w-2xl w-full flex items-center px-3 py-1.5 bg-gray-100 text-gray-600 transition-all focus-within:text-gray-600 focus-within:shadow-md">
              <svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 172 172">
                <g className="fill-gray-800">
                  <path d="M64.5,14.33333c-27.6214,0 -50.16667,22.54527 -50.16667,50.16667c0,27.6214 22.54527,50.16667 50.16667,50.16667c12.52732,0 23.97256,-4.67249 32.7819,-12.31771l3.05143,3.05143v9.26628l40.03256,40.03256c3.95599,3.95599 10.37733,3.956 14.33333,0c3.956,-3.956 3.956,-10.37733 0,-14.33333l-40.03256,-40.03256h-9.26628l-3.05143,-3.05143c7.64521,-8.80934 12.31771,-20.25458 12.31771,-32.7819c0,-27.6214 -22.54527,-50.16667 -50.16667,-50.16667zM64.5,28.66667c19.87509,0 35.83333,15.95824 35.83333,35.83333c0,19.87509 -15.95825,35.83333 -35.83333,35.83333c-19.87509,0 -35.83333,-15.95825 -35.83333,-35.83333c0,-19.87509 15.95824,-35.83333 35.83333,-35.83333z"></path>
                </g>
              </svg>
              <input 
                type="text"
                placeholder="Search"
                className="flex-grow px-2 py-1 text-base text-gray-700 bg-transparent outline-none"
              />
            </div>
          </div>
        </div>

        <div className="hidden gap-2 xl:flex">
          <Button className="font-normal" variant="text" size="sm" color="blue-gray">
            Sign In
          </Button>
          <Button className="font-normal rounded-none bg-[#050708]" size="sm">
            Sign Up
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="xl:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 xl:hidden">
          <Button className="rounded-none font-normal border-black text-gray-800" variant="outlined" size="sm" fullWidth>
            Sign In
          </Button>
          <Button className="rounded-none font-normal bg-[#050708]" size="sm" fullWidth>
            Sign Up
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}