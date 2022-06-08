import { db } from "../firebase/config-firebase";

export const loadDataRegister = async (uid) => {
  const response = await db.collection(`users/${uid}/register-finances`).get();
  const data = [];

  response.forEach((register) => {
    const registerData = register.data();
    data.push({
      ...registerData,
      id: register.id,
    });
  });
  
  return data;
};
