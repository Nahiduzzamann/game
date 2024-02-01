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
import { FaBangladeshiTakaSign, FaPlus, FaQuora } from "react-icons/fa6";
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
import { GrMoney } from "react-icons/gr";
import { FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const { selectedLanguage } = useContext(AuthContext);
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
        //console.log(cat.data);
        localStorage.setItem("category", JSON.stringify(cat?.data));
      } catch (error) {
        console.error(error.message);
      }
    };
    cats();
    const category = localStorage.getItem("category");
    if (category) {
      setData(JSON.parse(category));
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
            <Spinner className="text-blue-500"></Spinner>
          ) : user ? (
            <div className="bg-blue-100 rounded border flex justify-center items-center border-blue-500 p-2 font-semibold">
              <Link to={`/user/myprofile`} className="">
               
                {
          selectedLanguage ==='en' ? " Hi,":"ওহে,"
        } <span className="hover:underline">{user?.username}</span> |{" "}
              </Link>
              <Link to={`/user/deposit`} className="ml-2 hover:underline font-bold text-blue-500 flex justify-center items-center">
              <FaBangladeshiTakaSign />
                {user.balance?.toString()} 
                {
          selectedLanguage ==='en' ? "BDT":"টাকা"
        }
        
                <FaPlus className="text-blue-500 hover:border-blue-500 ml-2 border-2 border-blue-300 " />
              </Link>
            </div>
          ) : (
            <div className="flex gap-4  items-center">
              <button
                onClick={() => navigate("/login")}
                className="bg-black hover:bg-gray-800 text-white rounded-md w-[150px] py-2"
              >
               {
          selectedLanguage ==='en' ? "Login":"লগইন"
        }
        
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-500 hover:bg-blue-400 text-white rounded-md w-[150px] py-2"
              >
                {
          selectedLanguage ==='en' ? " SignUp":"সাইন আপ"
        }
              </button>
            </div>
          )}
          <LanguageCard />
          {user && (
            <button
              onClick={handleLogOut}
              className="bg-blue-500 hover:bg-blue-400 text-white rounded-md w-[150px] py-2"
            >
              
              {
          selectedLanguage ==='en' ? "Log Out":"লগ আউট"
        }
            </button>
          )}
        </div>
      </div>
      <div className="md:flex md:flex-wrap  bg-blue-500 text-white px-6  hidden">
        <div onClick={() => navigate("/")}>
          <div
            className={`${
              pathname === "/" && "text-green-300"
            } cursor-pointer px-4 py-4 hover:text-gray-300 font-semibold text-md `}
          >
            
            {
          selectedLanguage ==='en' ? "Home":"হোম"
        }
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
            } cursor-pointer px-4 py-4 hover:text-gray-300 font-semibold text-md `}
          >
            
            {
          selectedLanguage ==='en' ? "Promotions":"প্রচার"
        }
          </div>
        </div>
        <div onClick={() => navigate("/referral")}>
          <div
            className={`${
              pathname === "/referral" && "text-green-300"
            } cursor-pointer px-4 py-4 hover:text-gray-300 font-semibold text-md `}
          >
            
            {
          selectedLanguage ==='en' ? "Rewards":"পুরস্কার"
        }
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center px-4 py-2 justify-between">
        <CiMenuFries onClick={onOpen} size={28} />
        <div onClick={() => navigate("/")}>
          <img className="w-[130px]" src={logo} />
        </div>
        {user ? (
          <Link to={`/user/deposit`} className="flex gap-2 items-center text-blue-500 font-bold text-xl">
            <GrMoney />
            {user.balance} 
            {
          selectedLanguage ==='en' ? "BDT":"টাকা"
        }
          </Link>
        ) : (
          <LanguageCard />
        )}
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
            <p className="font-medium text-md">
            {
          selectedLanguage ==='en' ? "Games":"গেমস"
        }
        </p>
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
                          className="w-5 h-5 bg-slate-500 rounded"
                          src={`${url}${data.subCategory[0]?.icon}`}
                        />
                        {data?.title}
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
                            <img className=" h-5 bg-slate-500 rounded" src={`${url}${doc?.icon}`} />
                            <div className="w-full">{doc?.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
            <hr className="my-2" />
            <p className="font-medium text-md"> 
            {
          selectedLanguage ==='en' ? "Others":"অন্যান্য"
        }
        </p>
            <div className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md">
              <GoCrossReference />
             
              {
          selectedLanguage ==='en' ? " Rewards":"পুরস্কার"
        }
            </div>
            <div className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md">
              <AiFillNotification />
              
              {
          selectedLanguage ==='en' ? "Promotions":"প্রচার"
        }
            </div>
            <div className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md">
              <GrLanguage />
              
              {
          selectedLanguage ==='en' ? "Languages":"ভাষা"
        }
            </div>
            <div
              onClick={() => {
                onClose();
                navigate("/info/faq");
              }}
              className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md"
            >
              <FaQuora />
             
              {
          selectedLanguage ==='en' ? " FAQ":"এফএকিউ"
        }
            </div>
            <div
              onClick={handleLogOut}
              className=" hover:bg-gray-50 flex gap-2 items-center py-2 px-2 cursor-pointer text-gray-400  text-md"
            >
              <FaSignOutAlt />
              
              {
          selectedLanguage ==='en' ? "Log Out":"লগ আউট"
        }
            </div>
          </DrawerBody>

          <DrawerFooter placeContent={"start"}>
            <p> 
            {
          selectedLanguage ==='en' ? "@All Right Reserved by 40Xbet":"@সব অধিকার 40Xbet দ্বারা সংরক্ষিত"
        }
            </p>
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
      className="h-full  px-4 py-4  "
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
        {data?.title}
      </div>
      {hover && (
        <div className=" flex gap-6 absolute z-30 bg-blue-500 flex-wrap w-full px-6 py-4 overflow-hidden rounded-md left-0 top-[120px]">
          {data?.subCategory?.map((doc, j) => (
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
                <img className="" src={`${url}${doc?.icon}`} />
                <div className="w-full line-clamp-1 ">{doc?.title}</div>
              </div>
              {doc?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
