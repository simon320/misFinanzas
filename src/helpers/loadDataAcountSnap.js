import { db } from "../firebase/config-firebase";


export const loadDataAcountSnap = (uid) => {
  const acountRef = db.collection(`users/${uid}/acount`)
  let data = []

  acountRef.onSnapshot((snap) => {
    snap.forEach((acount) => {
      const acountData = acount.data();
      data.push(
        {
          id: acount.id,
          ...acountData,
        }
      )

    });
  });

  return data;
};
