import { db } from "../firebase/config-firebase";

export const loadDataRegister = async (uid) => {
  const response = await db.collection(`${uid}/date-finances/finance`).get();
  const data = [];

  response.forEach((register) => {
    const registerData = register.data();
    console.log(data);
    data.push({
      id: register.id,
      ...registerData,
    });
  });
  
  return data;
};
