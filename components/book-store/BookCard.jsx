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

const BookCard = ({ book }) => {
  // console.log(book);
  return (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <Image
            className="h-full w-full rounded-xl"
            src={book?.CoverImage}
            height={500}
            width={500}
            alt={book?.Title}
            loading="lazy"
          />
          <CardTitle className="text-center text-lg">{book?.Title} </CardTitle>
          <CardDescription
            className={cn(
              "flex flex-row-reverse justify-between relative items-center"
            )}
          >
            <p className="text-sm md:text-lg font-semibold">{book?.Author}</p>
            <div
              className={cn(
                " px-2 rounded-2xl",
                book.IsBestSeller ? "bg-amber-400" : "bg-emerald-500"
              )}
            >
              <p className="text-white">
                {book?.IsBestSeller ? "Best Seller" : "Uprising"}
              </p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="pb-2 font-semibold">Category: {book?.Category}</p>
          <p className="min-h-24 text-justify">{book?.Description}</p>
        </CardContent>
        <CardFooter className="grid grid-cols-1 md:grid-cols-2  text-center">
          <p className="font-bold">Price: {book?.Price} $ </p>
          <p>Available: {book?.Stock} </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BookCard;
