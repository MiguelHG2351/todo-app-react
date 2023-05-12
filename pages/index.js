import { useRef } from "react";
import CardItem from "../components/CardItem";
import { useSelector } from "react-redux";
import { selectCount } from "../components/todoReducer";

export default function Home() {
  const formRef = useRef(null);
  const todoList = useSelector(selectCount)
  console.log(todoList)

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    console.log(formData.get("task-name"));
  };

  return (
    <main className="flex items-stretch justify-center flex-col gap-y-4">
      <div>
        <h1 className="text-2xl font-bold">Bienvenido a tu lista de tareas!</h1>
        <p>Crea, completa, edita y elimina tus tareas del día a día</p>
      </div>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        className="flex-1 flex flex-col gap-y-4 items-start">
        <input
          name="task-name"
          className="border border-blue-500 p-2 rounded-md w-full"
          type="text"
          placeholder="Escribe el nombre de la tarea"
        />
        <button className="inline-block align-middle py-3 px-6 rounded-md bg-custom-dark-blue text-white">
          <span className="inline-block align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none">
              <path
                d="M11.3333 4.66668C11.3333 4.20644 10.9602 3.83334 10.5 3.83334C10.0397 3.83334 9.66665 4.20644 9.66665 4.66668V9.66668H4.66665C4.20641 9.66668 3.83331 10.0398 3.83331 10.5C3.83331 10.9602 4.20641 11.3333 4.66665 11.3333H9.66665V16.3333C9.66665 16.7936 10.0397 17.1667 10.5 17.1667C10.9602 17.1667 11.3333 16.7936 11.3333 16.3333V11.3333H16.3333C16.7936 11.3333 17.1666 10.9602 17.1666 10.5C17.1666 10.0398 16.7936 9.66668 16.3333 9.66668H11.3333V4.66668Z"
                fill="white"
              />
            </svg>
          </span>
          Agregar tarea
        </button>
      </form>
      <ul className="list">
        { todoList.map((data, index) => (
          <CardItem key={index} titleCard={data.title} />
        )) }
      </ul>
    </main>
  );
}
