export async function fetchProducts() {
  const response = await fetch("https://6940631c993d68afba6bf1de.mockapi.io/api/nc/v1/productos");
  const data = await response.json();
  return data;
}


export async function fetchUniqueProduct(id) {
  const response = await fetch (`https://6940631c993d68afba6bf1de.mockapi.io/api/nc/v1/productos/${id}`);
  const data = await response.json();
  return data;
}
