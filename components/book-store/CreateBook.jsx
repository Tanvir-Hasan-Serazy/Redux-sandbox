"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useForm, Controller } from "react-hook-form";
import { addBook } from "@/lib/redux/slice/bookSlice";
import { useDispatch } from "react-redux";

const CreateBook = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    dispatch(addBook(data));
    reset();
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-gray-700">Create Book</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 md:w-sm">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="leading-none font-medium">Add Book</h4>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="Title">Title</Label>
                <Input
                  id="title"
                  className="col-span-2 h-8"
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 5,
                      message: "title must be 5 character",
                    },
                  })}
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  className="col-span-2 h-8"
                  {...register("author", { required: "Author is required" })}
                />
                {errors.author && (
                  <p className="text-red-500 text-sm text-nowrap">
                    {errors.author.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="Description">Description</Label>
                <Input
                  id="description"
                  className="col-span-2 h-8"
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm text-nowrap">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="Category">Category</Label>
                <Input
                  id="Category"
                  className="col-span-2 h-8"
                  {...register("category", {
                    required: "Category is required",
                  })}
                />
                {errors.category && (
                  <p className="text-red-500 text-sm text-nowrap">
                    {errors.category.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="cover-Image">Image URL</Label>
                <Input
                  id="cover-Image"
                  className="col-span-2 h-8"
                  {...register("imageURL", {
                    required: "Image URL is required",
                  })}
                />
                {errors.ImageURL && (
                  <p className="text-red-500 text-sm text-nowrap">
                    {errors.ImageURL.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  className="col-span-2 h-8 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                  {...register("stock", {
                    required: "Number of stock required",
                  })}
                />
                {errors.stock && (
                  <p className="text-red-500 text-sm text-nowrap">
                    {errors.stock.message}
                  </p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="Price">Price</Label>
              <Input
                id="cover-Image"
                className="col-span-2 h-8 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                {...register("price", { required: "Price is required" })}
              />
              {errors.price && (
                <p className="text-red-500 text-sm text-nowrap">
                  {errors.price.message}
                </p>
              )}
            </div>
            <Controller
              name="isBestSeller"
              control={control}
              rules={{ required: "Is it best-seller? " }}
              render={({ field, fieldState }) => (
                <div>
                  <Select
                    onValueChange={(value) => {
                      if (value === "yes") field.onChange(true);
                      else if (value === "no") field.onChange(false);
                      else field.onChange(null);
                    }}
                    value={
                      field.value === true
                        ? "yes"
                        : field.value === false
                        ? "no"
                        : ""
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Best Seller?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Best Seller?</SelectLabel>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.error && (
                    <p className="text-sm text-red-500">
                      {fieldState.error.message}
                    </p>
                  )}
                </div>
              )}
            />
            <Button className="w-full bg-gray-700" type="submit">
              Submit
            </Button>

            {/* <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="cover-Image">Image URL</Label>
              <Input id="cover-Image" className="col-span-2 h-8" />
            </div>{" "} */}
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateBook;
