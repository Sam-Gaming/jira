import { getCurrent } from "@/features/auth/queries";
import { TaskViewSwither } from "@/features/tasks/components/TaskViewSwitcher";
import { redirect } from "next/navigation";

const TasksPage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="h-full flex flex-col">
      <TaskViewSwither />
    </div>
  );
};

export default TasksPage;
