import { db } from "../firebase/config-firebase";


export const loadDataAcountSnap = (uid) => {
  const acountRef = db.collection(`users/${uid}/acount`)
  let data = {}

  acountRef.onSnapshot((snap) => {

    snap.forEach((acount) => {
      const acountData = acount.data();
      data = 
        {
          id: acount.id,
          ...acountData,
        }
      });
      console.log(data)
  });
  
  console.log(data)
  return data;
};
