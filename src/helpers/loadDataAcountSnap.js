import { db } from "../firebase/config-firebase";

export const loadDataAcountSnap = async (uid) => {
  const acountRef = await db.collection(`users/${uid}/acount`).doc('amount');
  let data = {};

  acountRef.onSnapshot((snap) => {
    console.log(snap.data())
    snap.forEach((acount) => {
      const acountData = acount.data();
      data = {
        id: acount.id,
        ...acountData,
      };
    });
  });

  return data;
};
