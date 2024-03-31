"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function ThreeDCardDemo({
  images,
  item,
}: {
  images: StaticImport | string;
  item: string;
}) {
  return (
    <CardContainer className="inter-var flex flex-col justify-between">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black w-auto max-w-sm rounded-xl m-6">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={images}
            height="1000"
            width="1000"
            className="h-20 lg:h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt={item}
          />
          <h2 className="font-semibold text-md lg:text-xl text-center">
            {item}
          </h2>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
