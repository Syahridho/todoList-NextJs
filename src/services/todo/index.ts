import instance from "@/lib/axios/instance";

const todoServices = {
  add: (data: any) =>
    instance.post("/api/todo", data, {
      headers: {
        Authorization: `Bearer Done`,
      },
    }),
};

export default todoServices;
