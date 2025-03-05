import TodoForm from "@/components/todo-form";
import TodoList from "@/components/todo-list";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Todo App
        </h1>
        <TodoForm />
        <TodoList />
      </div>
    </main>
  );
}
