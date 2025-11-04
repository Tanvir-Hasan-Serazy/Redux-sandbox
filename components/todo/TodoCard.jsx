import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { deleteTodo } from "@/lib/redux/slice/todoSlice";

const TodoCard = ({ data }) => {
  const datetime = format(data.id, "PPp");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(data.id));
  };
  return (
    <div className="max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg xl:text-xl">{data?.title} </CardTitle>
          <CardDescription>{datetime}</CardDescription>
          <CardAction>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>{data?.note}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default TodoCard;
