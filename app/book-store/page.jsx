"use client";
import BookCard from "@/components/book-store/BookCard";
import CreateBook from "@/components/book-store/CreateBook";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

// const featureBooks = [
//   {
//     id: 1,
//     Title: "The Quantum Serpent",
//     Author: "Dr. Evelyn Reed",
//     Price: 29.99,
//     Category: "Science Fiction",
//     Description:
//       "A thrilling adventure through parallel universes as a physicist discovers a shocking truth about reality.",
//     Stock: 150,
//     CoverImage:
//       "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
//     IsBestSeller: true,
//   },
//   {
//     id: 2,
//     Title: "The Baker's Apprentice",
//     Author: "Marcus Cole",
//     Price: 18.5,
//     Category: "Cozy Mystery",
//     Description:
//       "In a small town, a young baker stumbles upon a mystery that only he can solve, one recipe at a time.",
//     Stock: 85,
//     CoverImage:
//       "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
//     IsBestSeller: false,
//   },
//   {
//     id: 3,
//     Title: "A History of Echoes",
//     Author: "Professor Kenji Tanaka",
//     Price: 45.0,
//     Category: "History",
//     Description:
//       "A comprehensive look at how past civilizations' technological advancements were lost and rediscovered centuries later.",
//     Stock: 40,
//     CoverImage:
//       "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
//     IsBestSeller: false,
//   },
//   {
//     id: 4,
//     Title: "The Midnight Garden",
//     Author: "Elara Vance",
//     Price: 24.95,
//     Category: "Fantasy",
//     Description:
//       "A magical garden that only blooms under the moonlight holds the key to saving a dying kingdom.",
//     Stock: 210,
//     CoverImage:
//       "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
//     IsBestSeller: true,
//   },
//   {
//     id: 5,
//     Title: "Data-Driven Decisions",
//     Author: "Susan Chen",
//     Price: 59.99,
//     Category: "Business",
//     Description:
//       "A practical guide for managers on leveraging data analytics to make smarter, more effective business decisions.",
//     Stock: 60,
//     CoverImage:
//       "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
//     IsBestSeller: false,
//   },
//   {
//     id: 6,
//     Title: "The Last Voyage of the Starseeker",
//     Author: "Leo Jax",
//     Price: 27.99,
//     Category: "Science Fiction",
//     Description:
//       "The crew of the Starseeker embarks on one final, desperate mission to find a new home for humanity.",
//     Stock: 0,
//     CoverImage:
//       "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
//     IsBestSeller: false,
//   },
//   {
//     id: 7,
//     Title: "Mindful Marketing",
//     Author: "David Lee",
//     Price: 34.5,
//     Category: "Business",
//     Description:
//       "How to build authentic customer relationships in a noisy digital world.",
//     Stock: 112,
//     CoverImage:
//       "https://images.unsplash.com/photo-1526243741027-444d633d7365?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2071",
//     IsBestSeller: true,
//   },
// ];

const BookStoreMain = () => {
  const featureBooks = useSelector((state) => state.book);
  return (
    <>
      <nav className="bg-gray-300 min-h-12 xl:min-h-24 flex justify-between items-center px-4">
        <div className="text-center text-lg xl:text-3xl font-semibold">
          Nilkhet Market
        </div>
        <div className="flex items-center ">
          <Input
            placeholder="Search Books"
            className=" max-w-sm w-full bg-white/30 pr-6"
          ></Input>
          <CiSearch size={25} className="-ml-6" />
        </div>
      </nav>

      {/* Main Body */}
      <div className="max-w-7xl mx-auto px-4 lg:px-0 pt-4">
        <div className="flex gap-6 justify-between">
          <Button className="bg-gray-700">Browse All books</Button>
          <CreateBook />
        </div>
        <div className="my-4 md:my-10">
          <h2 className="text-center font-semibold text-xl xl:text-2xl">
            Featured Books
          </h2>
        </div>

        {featureBooks?.length < 1 && (
          <p className="text-center">No Books available yet!</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
          {featureBooks?.length > 0 &&
            featureBooks?.map((data) => <BookCard book={data} key={data.id} />)}
        </div>
      </div>
    </>
  );
};

export default BookStoreMain;
