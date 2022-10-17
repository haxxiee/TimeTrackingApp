export const getProjects = async () => {
  let res = await fetch("http://localhost:3000/projects");
  let data = await res.json();

  return console.log;
};
