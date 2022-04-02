import { db } from "../firebase/config-firebase";


export const loadDataAcountSnap =  (uid) => {
  
  let data = {};
  
  const acountRef = db.collection(`users/${uid}/acount`)
  acountRef.onSnapshot((snap) => {
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
