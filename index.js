import script from './scripts.js';
import perhitungan from './main.js';


const data1 = perhitungan(10 , 20);
console.log(data1.tambah())

async function api(){
   const Api = await script("https://reqres.in/api/users")
  console.log(Api)
}

api();