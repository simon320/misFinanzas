import { db } from "../firebase/config-firebase";

export const loadDataAcount = async (uid) => {
  const response = await db.collection(`${uid}/acount-finances/acount`).get();
  let data = {};

  response.forEach((acount) => {
    const acountData = acount.data();
    data = ({
      id: acount.id,
      ...acountData,
    });
  });
  
  return data;
};
