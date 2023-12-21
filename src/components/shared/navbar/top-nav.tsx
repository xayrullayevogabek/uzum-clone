"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const TopNavbar = () => {
  const t = useTranslations("TopNavbar");
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currenstLocale = useLocale();

  return (
    <div className="hidden lg:flex justify-between items-center bg-gray-100 px-36 py-1 max-[1300px]:px-5">
      <ul className="flex items-center space-x-4">
        <li className="flex items-center">
          <SlLocationPin className="mr-1" />
          {t("city")}:{" "}
          <span className="underline text-sm font-semibold">Samarkand</span>
        </li>
        <li className="cursor-pointer hover:text-black">
          <Link href="https://uzum.uz/uz/about/delivery-points" target="_blank">
            {t("delivery")}
          </Link>{" "}
        </li>
      </ul>
      <span className=" text-gray-400 block max-[1200px]:hidden">
        {t("deliveryDay")}
      </span>
      <ul className="flex items-center space-x-4">
        <li className="cursor-pointer hover:text-black text-gray-600">
          {t("question")}
        </li>
        <li className="cursor-pointer hover:text-black text-gray-600">
          {t("order")}
        </li>
        {currenstLocale === "uz" ? (
          <Link
            href={redirectedPathName("ru")}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="https://asaxiy.uz/custom-assets/images/icons/header/language-ru.svg"
              className="mr-1"
              width={20}
              height={20}
              alt=""
            />{" "}
            Русский
          </Link>
        ) : (
          <Link
            href={redirectedPathName("uz")}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="https://asaxiy.uz/custom-assets/images/icons/header/language-uz.svg"
              className="mr-1"
              width={20}
              height={20}
              alt=""
            />{" "}
            O'zbekcha
          </Link>
        )}
      </ul>
    </div>
  );
};

export default TopNavbar;
