import { useEffect, useState } from "react";
import TodoView from "@/components/view/todo";
import todoServices from "@/services/todo";
import Head from "next/head";

export default function Home() {
  const [todoDatas, setTodoDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllData = async () => {
    setIsLoading(true);
    const { data } = await todoServices.getAll();
    setTodoDatas(data.data);
    setIsLoading(false);
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
        <TodoView todoDatas={todoDatas} isLoading={isLoading} />
      </div>
    </>
  );
}
