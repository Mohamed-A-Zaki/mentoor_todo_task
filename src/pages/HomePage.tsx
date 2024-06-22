import CreateTaskDialog from "@/dialogs/CreateTaskDialog";
import EditTaskDialog from "@/dialogs/EditTaskDialog";
import Tasks from "@/components/home/Tasks";

export default function HomePage() {

  console.log("Home Page Rendered");

  return (
    <>
      <Tasks />
      <CreateTaskDialog />
      <EditTaskDialog />
    </>
  );
}
