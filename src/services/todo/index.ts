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

  update: (id: string, data: any) =>
    instance.put(
      `/api/todo/${id}`,
      { data },
      {
        headers: {
          Authorization: `Bearer Update`,
        },
      }
    ),
};

export default todoServices;
