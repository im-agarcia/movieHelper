const API = 'http://localhost:3000';

export const getUser = async (userEmail, setUser) => {
  try {
    // Obtenemos el user
    const response = await fetch(`${API}/users/${userEmail}`);
    const user = await response.json();

    if (!user?.message) {
      // Si existe, seteamos el user
      setUser(user);
    }
  } catch (e) {
    console.log(e);
  }
};