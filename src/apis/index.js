import axios from "axios";

// Criando uma instancia "pré-configurada" do Axios, com a raiz do endereço do nosso servidor
const api = axios.create({
  baseURL: "https://ironhack-project-3-petfriendly.herokuapp.com/api",
  // Acesso Local
  // baseURL: "http://localhost:4000/api",
});

const storedUser = localStorage.getItem("loggedInUser");

// Parse converte de linha única para objeto, mais legível (contrário do stringify usado no Home.js)
const loggedInUser = JSON.parse(storedUser || '""');

// Intercepta a comunicação entre front e back e acrescenta no cabeçalho da requisição HTTP o token (o que funciona como o Cookie) do tipo bearer
api.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${loggedInUser.token}`,
  };

  return config;
});

export default api;
