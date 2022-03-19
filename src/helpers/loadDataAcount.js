import { db } from "../firebase/config-firebase";

export const loadDataAcount = async (uid) => {
  const response = await db.collection(`${uid}/acount-finances/acount`).get();
  const data = [];

  response.forEach((acount) => {
    const acountData = acount.data();
    console.log(data);
    data.push({
      id: acount.id,
      ...acountData,
    });
  });
  
  return data;
};
