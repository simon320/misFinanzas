import { db } from "../firebase/config-firebase";

export const loadDataAcount = async (uid) => {
  let response

  try {
    response = await db.collection(`users/${uid}/acount`).get();
  } catch (error){new Error("Error al cargar")}

  let data = {};

  response.forEach((acount) => {
    const acountData = acount.data();
    data = {
      ...acountData,
      id: acount.id,
    };
  });

  return data;
};