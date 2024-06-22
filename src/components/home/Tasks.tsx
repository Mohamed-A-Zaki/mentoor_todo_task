import TasksList from "./TasksList";

export default function Tasks() {
  return (
    <div>
      <div className="container">
        <div>
          <h2 className="font-bold text-3xl mt-10">Tasks</h2>
          <TasksList />
        </div>
      </div>
    </div>
  );
}
