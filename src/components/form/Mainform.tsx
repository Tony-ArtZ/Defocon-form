"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Name from "@/components/questions/Name";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Mail from "../questions/Mail";
import Phone from "../questions/Phone";
import Roll from "../questions/Roll";
import TryHackId from "../questions/TryHackId";
import Year from "../questions/Year";
import Rate from "../questions/Rate";

function Mainform() {
  const [page, setPage] = useState(0);

  const components = [
    { Component: Name, name: "Name" },
    { Component: Mail, name: "Mail" },
    { Component: Phone, name: "Phone" },
    { Component: Roll, name: "Roll" },
    { Component: TryHackId, name: "TryHackId" },
    { Component: Year, name: "Year" },
    { Component: Rate, name: "Rate" },
  ];

  const progress = (page / (components.length - 1)) * 100;

  const PageDisplay = () => {
    const Component = components[page].Component;
    return <Component key={page} />;
  };

  return (
    <div className="flex w-full h-full">
      <div className="w-full absolute overflow-hidden z-20 bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500 transition-all ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="w-full p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        <AnimatePresence>
          <motion.div
            key={page}
            layoutId="card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              when: "beforeChildren", // Animate the parent div first
            }}
          >
            <Card className="px-5 sm:px-28 md:px-40 bg-black overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { delay: 0.3 }, // Delay after exit animation
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5, // Delay before the next animation starts
                }}
              >
                <div className="">
                  <CardHeader>
                    <CardTitle className="flex text-white items-center">
                      <span className="text-xs">{page + 1}</span>
                      <span>
                        <Image
                          src={"/asstes/icons/arrow-white2.png"}
                          alt="arrow"
                          height={10}
                          width={15}
                        />
                      </span>
                      <span className="text-lg mx-2 font-normal">
                        {components[page].name}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{PageDisplay()}</CardContent>
                  <CardFooter className="flex gap-10">
                    <Button
                      size="sm"
                      disabled={page === 0}
                      className="bg-transparent text-white"
                      onClick={() => setPage((currPage) => currPage - 1)}
                    >
                      Go Back
                    </Button>
                    <Button
                      size="sm"
                      className="bg-transparent text-white"
                      onClick={() => {
                        if (page === components.length - 1) {
                          alert("form submitted");
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                      }}
                    >
                      {page === components.length - 1 ? "Submit" : "Next"}
                    </Button>
                  </CardFooter>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Mainform;
