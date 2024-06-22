import Logo from "./Logo";
import { Button } from "../ui/button";
import { open_create_task_atom } from "@/atoms/open_create_task_atom";

export default function Navbar() {
  const handleOpenCreateTask = () => {
    /**
     * open create task dialog
     */
    open_create_task_atom.open();
  };

  return (
    <nav className="shadow-md py-5">
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <Button onClick={handleOpenCreateTask}>Create Task</Button>
        </div>
      </div>
    </nav>
  );
}
