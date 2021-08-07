export const loggedInCheck = async () => {
  if (!localStorage.getItem("token")) {
    return false;
  }
  const result = await fetch("http://localhost:8080/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (result.status === 200) {
    const loginData = await result.json();
    if (!loginData.loggedIn) return false;
    else return true;
  } else return false;
};
