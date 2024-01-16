import React, { useContext, useEffect, useState } from "react";
import getCategory from "../../../module/getCategory";
import url from "../../../module";
import logo from "../../../assets/logo.png";
import { GrLanguage } from "react-icons/gr";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { FaArrowPointer, FaQuora } from "react-icons/fa6";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { GoCrossReference } from "react-icons/go";
import { AiFillNotification } from "react-icons/ai";
import LanguageCard from "./LanguageCard";
import { AuthContext } from "./../../../providers/AuthProvider";

const Header = () => {
  const { loading, user, setUpdateUserState } = useContext(AuthContext);
  const [data, setData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const cats = async () => {
      try {
        const cat = await getCategory(url);
        setData(cat.data);
        console.log(cat.data);
        localStorage.setItem("category", JSON.stringify(cat?.data));
      } catch (error) {
        console.error(error.message);
      }
    };
    cats();
    const category=localStorage.getItem("category");
    if(category){
      setData(JSON.parse(category))
    }
    //setData(cat);
    //console.log(cat);
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUpdateUserState(Math.random());
  };

  return (
    <div className="bg-white">
      <div className="md:flex items-center justify-between hidden px-6 py-3">
        <a onClick={() => navigate("/")}>
          <img className="w-[150px] cursor-pointer" src={logo} />
        </a>
        <div className="flex gap-4  items-center">
          {loading ? (
            <Spinner></Spinner>
          ) : user ? (
            <Link to='/user/deposit' className="bg-blue-100 rounded hover:bg-blue-200 border flex justify-center items-center border-blue-500 p-2 font-semibold">Hi, {user?.name}<FaArrowPointer className="text-blue-500 ml-2" /></Link>
          ) : (
            <div className="flex gap-4  items-center">
              <button
                onClick={() => navigate("/login")}
                className="bg-black hover:bg-gray-800 text-white rounded-md w-[150px] py-2"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-500 hover:bg-blue-400 text-white rounded-md w-[150px] py-2"
              >
                Sign Up
              </button>
            </div>
          )}
          <LanguageCard />
          {user && (
            <button
              onClick={handleLogOut}
              className="bg-blue-500 hover:bg-blue-400 text-white rounded-md w-[150px] py-2"
            >
              Log Out
            </button>
          )}
        </div>
      </div>
      <div className="md:flex md:flex-wrap md:gap-6 bg-blue-500 text-white px-6 py-4 hidden">
        <div onClick={() => navigate("/")}>
          <div
            className={`${
              pathname === "/" && "text-green-300"
            } cursor-pointer hover:text-gray-300 font-semibold text-md `}
          >
            Home
          </div>
        </div>
        {data ? (
          data?.map((data, i) => (
            <Options active={pathname === `/${i}`} key={i} data={data} i={i} />
          ))
        ) : (
          <Spinner></Spinner>
        )}
        <div onClick={() => navigate("/promotions")}>
          <div
            className={`${
              pathname === "/promotions" && "text-green-300"
            } cursor-pointer hover:text-gray-300 font-semibold text-md `}
          >
            Promotions
          </div>
        </div>
        <div onClick={() => navigate("/referral")}>
          <div
            className={`${
              pathname === "/referral" && "text-green-300"
            } cursor-pointer hover:text-gray-300 font-semibold text-md `}
          >
            Referral
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center px-4 py-2 justify-between">
        <CiMenuFries onClick={onOpen} size={28} />
        <div onClick={() => navigate("/")}>
          <img className="w-[130px]" src={logo} />
        </div>
        <LanguageCard />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <img className="w-[130px] " src={logo} />
          </DrawerHeader>
          <hr />
          <DrawerBody>
            <p className="font-medium text-md">Games</p>
            {data?.map((data, i) => (
              <Accordion key={i} allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton className="flex justify-between w-full">
                      <div
                        className=" w-full  hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md"
                        key={i}
                      >
                        <img
                          className="w-5 h-5"
                          src={data.subCategory[0]?.icon}
                        />
                        {data.title}
                      </div>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel className="bg-gray-50" pb={4}>
                    <div className="grid gap-2  ">
                      {data.subCategory?.map((doc, j) => (
                        <div
                          onClick={() => {
                            navigate(`/games/${doc.slag}/${i}`);
                            onClose();
                          }}
                          key={j}
                          className="   hover:bg-gray-400 text-black flex px-2 py-1 overflow-hidden rounded-sm "
                        >
                          <div className="flex gap-2 items-center">
                            <img className=" h-5" src={`${url}${doc.icon}`} />
                            <div className="w-full">{doc.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
            <hr className="my-2" />
            <p className="font-medium text-md">Others</p>
            <div className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md">
              <GoCrossReference />
              Referral
            </div>
            <div className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md">
              <AiFillNotification />
              Promotions
            </div>
            <div className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md">
              <GrLanguage />
              Languages
            </div>
            <div
              onClick={() => {
                onClose();
                navigate("/info/faq");
              }}
              className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md"
            >
              <FaQuora />
              FAQ
            </div>
          </DrawerBody>

          <DrawerFooter placeContent={"start"}>
            <p> @All Right Reserved by 40Xbet</p>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default Header;
const Options = ({ data, i, active }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="h-full"
      //onClick={() => navigate(`/games/${data.slag}/${i}`)}
      key={i}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={` ${
          active && "text-green-300"
        } cursor-pointer hover:text-gray-300 font-semibold text-md `}
        key={i}
      >
        {data.title}
      </div>
      {hover && (
        <div className=" flex gap-6 absolute z-30 bg-blue-500 flex-wrap w-full px-6 py-4 overflow-hidden rounded-md left-0 top-[120px]">
          {data.subCategory?.map((doc, j) => (
            <div
              key={j}
              onClick={() => {
                navigate(`/games/${doc.slag}/${i}`);
                setHover(false);
                //console.log(doc.system);
              }}
              className=" cursor-pointer bg-gray-700 flex justify-center items-center  hover:bg-gray-600 text-black text-center p-2 rounded-full w-[120px] h-[120px] overflow-hidden "
            >
              <div className="flex  text-white flex-wrap justify-center items-center  ">
                <img className="" src={`${url}${doc.icon}`} />
                <div className="w-full line-clamp-1 ">{doc.title}</div>
              </div>
              {doc.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
