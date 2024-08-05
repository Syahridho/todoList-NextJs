import instance from "@/lib/axios/instance";

const todoServices = {
  add: (data: any) =>
    instance.post("/api/todo", data, {
      headers: {
        Authorization: `Bearer Done`,
      },
    }),
  getAll: () => instance.get("/api/todo"),
  delete: (id: string) =>
    instance.delete(`/api/todo/${id}`, {
      headers: {
        Authorization: `Bearer Delete`,
      },
    }),
};

export default todoServices;
