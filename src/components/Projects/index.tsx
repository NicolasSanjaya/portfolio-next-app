"use client";
import React from "react";
import { HeroParallax } from "../ui/hero-parallax";

export function Projects() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    key: 1,
    title: "Movie List",
    link: "https://movie-app-next-5ea3vmcxw-nicolassanjaya.vercel.app/",
    thumbnail: "/projects/1.png",
  },
  {
    key: 2,
    title: "E-Commerce",
    link: "https://e-commerce-next-js-ten-hazel.vercel.app/",
    thumbnail: "/projects/2.png",
  },
  {
    key: 3,
    title: "Anime List",
    link: "https://anime-list-lovat.vercel.app/",
    thumbnail: "/projects/3.png",
  },
  {
    key: 4,
    title: "Movie List",
    link: "https://movie-app-next-5ea3vmcxw-nicolassanjaya.vercel.app/",
    thumbnail: "/projects/1.png",
  },
  {
    key: 5,
    title: "E-Commerce",
    link: "https://e-commerce-next-js-ten-hazel.vercel.app/",
    thumbnail: "/projects/2.png",
  },
  {
    key: 6,
    title: "Anime List",
    link: "https://anime-list-lovat.vercel.app/",
    thumbnail: "/projects/3.png",
  },
  {
    key: 7,
    title: "Movie List",
    link: "https://movie-app-next-5ea3vmcxw-nicolassanjaya.vercel.app/",
    thumbnail: "/projects/1.png",
  },
  {
    key: 8,
    title: "E-Commerce",
    link: "https://e-commerce-next-js-ten-hazel.vercel.app/",
    thumbnail: "/projects/2.png",
  },
  {
    key: 9,
    title: "Anime List",
    link: "https://anime-list-lovat.vercel.app/",
    thumbnail: "/projects/3.png",
  },
];
