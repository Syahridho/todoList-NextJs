import TodoView from "@/components/view/todo";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List</title>
      </Head>
      <div>
        <TodoView />
      </div>
    </>
  );
}
