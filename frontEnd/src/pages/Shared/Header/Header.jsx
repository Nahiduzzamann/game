import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";
import { CiMenuFries } from "react-icons/ci";
import { useNavigate, useSearchParams, useLocation } from "react-router-dom";
import { FaQuora } from "react-icons/fa6";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { GoCrossReference } from "react-icons/go";
import { AiFillNotification } from "react-icons/ai";

const Header = () => {
  const [data, setData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(pathname);
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
    //setData(cat);
    //console.log(cat);
  }, []);
  return (
    <div className="bg-white">
      <div className="md:flex items-center justify-between hidden px-6 py-3">
        <a onClick={() => navigate("/")}>
          <img className="w-[150px]" src={logo} />
        </a>
        <div className="flex gap-4  items-center">
          <button
            onClick={() => navigate("/user/deposit")}
            className="bg-black hover:bg-gray-800 text-white rounded-md w-[150px] py-2"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/user/deposit")}
            className="bg-blue-500 hover:bg-blue-400 text-white rounded-md w-[150px] py-2"
          >
            Sign Up
          </button>
          <div className=" flex gap-2 items-center">
            <GrLanguage color="#0082D6" size={28} /> ENG
          </div>
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
        {data?.map((data, i) => (
          <Options active={pathname === `/${i}`} key={i} data={data} i={i} />
        ))}
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
        <div className=" flex gap-2 items-center">
          <GrLanguage color="#0082D6" size={28} /> ENG
        </div>
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
                          src={data.subCategory[1]?.image_small_color}
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
                            navigate(`/games/${doc.system}/${i}`);
                            onClose();
                            //console.log(doc.system);
                          }}
                          key={j}
                          className="   hover:bg-gray-400 text-black text-center px-2 py-1 overflow-hidden rounded-sm "
                        >
                          <div>
                            <img className=" h-5" src={doc.image_black} />
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
      onClick={() => navigate(`/${i}`)}
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
        <div className=" md:grid md:grid-cols-4 xl:grid-cols-8 gap-2 absolute z-30 bg-blue-500 flex-wrap w-full px-6 py-4 overflow-hidden rounded-md left-0 top-[120px]">
          {data.subCategory?.map((doc, j) => (
            <div
              key={j}
              onClick={() => {
                navigate(`/games/${doc.system}/${i}`);
                setHover(false);
                //console.log(doc.system);
              }}
              className=" cursor-pointer bg-blue-200  hover:bg-gray-200 text-black text-center px-2 py-1 overflow-hidden rounded-md "
            >
              <div>
                <img className=" h-[50px]" src={doc.image_colored} />
              </div>
              {doc.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
