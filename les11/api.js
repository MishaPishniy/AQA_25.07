async function fatchData() {
  try {
    const res = await fetch(`https://swapi.dev/api/planets/1`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
