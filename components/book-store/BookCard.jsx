import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MdDelete, MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteBook } from "@/lib/redux/slice/bookSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleBookDelete = () => {
    dispatch(deleteBook(book.id));
  };

  return (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <Image
            className="h-full w-full rounded-xl"
            src={book?.imageURL}
            height={500}
            width={500}
            alt={book?.title}
            loading="lazy"
          />
          <CardTitle className="text-center text-lg">{book?.title} </CardTitle>
          <CardDescription
            className={cn(
              "flex flex-row-reverse justify-between relative items-center"
            )}
          >
            <p className="text-sm md:text-lg font-semibold">{book?.author}</p>
            <div
              className={cn(
                " px-2 rounded-2xl",
                book.isBestSeller ? "bg-amber-400" : "bg-emerald-500"
              )}
            >
              <p className="text-white">
                {book?.isBestSeller ? "Best Seller" : "Uprising"}
              </p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="pb-2 font-semibold">Category: {book?.category}</p>
          <p className="min-h-24 text-justify">{book?.description}</p>
        </CardContent>
        <CardFooter className="grid grid-cols-1 md:grid-cols-2  text-center">
          <p className="font-bold">Price: {book?.price} $ </p>
          <p>Available: {book?.stock} </p>
        </CardFooter>
        <MdDelete
          color="red"
          className="w-10 ml-2 cursor-pointer"
          onClick={handleBookDelete}
          size={25}
        />
      </Card>
    </div>
  );
};

export default BookCard;
