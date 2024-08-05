import TodoView from "@/components/view/todo";
import todoServices from "@/services/todo";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [todoDatas, setTodoDatas] = useState([]);

  const getAllData = async () => {
    const { data } = await todoServices.getAll();
    setTodoDatas(data.data);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div>
        <TodoView todoDatas={todoDatas} />
      </div>
    </>
  );
}
