"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const books = [
  { title: "Book One", image: "/CrossRoadsMan.jpg" },
  { title: "Book Two", image: "/GCR-Book.jpg" },
  { title: "Book Three", image: "/DL-Book.jpg" },
];

const BookSlider = () => {
  return (
    <Swiper spaceBetween={20} slidesPerView={3}>
      {books.map((book, index) => (
        <SwiperSlide key={index}>
          <img src={book.image} alt={book.title} className="rounded-md" />
          <h2 className="text-center mt-2">{book.title}</h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookSlider;
