import axios from "axios";

export async function handleCEP(value){
  return await axios.get(`https://viacep.com.br/ws/${value}/json/`)
}

