export default async function fetchEmployer() {
  try {
    const res = await fetch("https://api.github.com/users/andreo141");
    if (!res.ok) {
      throw new Error("Error while fetching employer");
    }
    const data = await res.json();
    const employer = data.company;
    return employer;
  } catch (error) {
    console.error(error);
  }
}
