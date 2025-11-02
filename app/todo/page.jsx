"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const TodoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="max-w-7xl mx-auto px-4 xl:px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-lg xl:text-3xl font-bold pt-4 xl:pt-10">Todo</h2>
        <h3 className="mt-4 text-lg ">Title</h3>
        <Input
          type="text"
          className="mt-4"
          placeholder="Write title"
          {...register("title", { required: "Title is required" })}
        ></Input>
        {errors.title && (
          <p className="text-sm text-red-500">{errors.title.message}</p>
        )}
        <h3 className="mt-4 text-lg ">Note</h3>
        <Textarea
          className="mt-4"
          placeholder="Write note"
          {...register("note", {
            required: "Minimum 2 letter is required",
            minLength: 2,
          })}
        />
        {errors.note && (
          <p className="text-sm text-red-500">{errors.note.message}</p>
        )}
        <Button type="submit" className="mt-4 w-16" variant="destructive">
          Add
        </Button>
      </form>
    </div>
  );
};

export default TodoPage;
