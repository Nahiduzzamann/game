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
import { SiEpicgames } from "react-icons/si";
import { MdOutlineVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaQuora } from "react-icons/fa6";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Header = () => {
  const [data, setData] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
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
        <a href="/">
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
      <div className="md:flex  bg-blue-500 text-white px-6 py-4 hidden">
        {data?.map((data, i) => (
          <Options data={data} i={i} />
        ))}
      </div>
      <div className="md:hidden flex items-center px-4 py-2 justify-between">
        <CiMenuFries onClick={onOpen} size={28} />
        <a href="/">
          <img className="w-[130px]" src={logo} />
        </a>
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
              <Accordion allowToggle>
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
                      {data.subCategory?.map((doc, i) => (
                        <div className="   hover:bg-gray-400 text-black text-center px-2 py-1 overflow-hidden rounded-sm ">
                          <div>
                            <img className=" h-5" src={doc.image_colored} />
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
const Options = ({ data, i }) => {
  const [hover, setHover] = useState(false);
  const navigate=useNavigate()
  return (
    <div
      key={i}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="px-6"
    >
      <div
        className={`cursor-pointer hover:text-gray-300 font-semibold text-md `}
        key={i}
      >
        {data.title}
      </div>
      {hover && (
        <div className=" flex gap-2 absolute z-30 bg-blue-500 flex-wrap w-full px-6 py-4 overflow-hidden rounded-md left-0 top-[120px]">
          {data.subCategory?.map((doc, j) => (
            <div key={j} onClick={()=>{
              navigate(`/games/${doc.system}/${i}`)
              setHover(false)
              //console.log(doc.system);
            }} className=" bg-white hover:bg-gray-200 text-black text-center px-2 py-1 overflow-hidden rounded-md ">
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
