import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

export async function login({ email, password }: {email: string, password: string}) {
  const response = await api.post("/login", { email, password });

  const { data, status } = response;

  if (status != 200) {
    return {
      error: true,
      message: "Not found",
    };
  }

  return {data, email};
}
