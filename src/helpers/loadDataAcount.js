import { db } from "../firebase/config-firebase";

export const loadDataAcount = async (uid) => {
  const response = await db.collection(`users/${uid}/acount`).get();
  let data = {};

  response.forEach((acount) => {
    const acountData = acount.data();
    data = {
      id: acount.id,
      ...acountData,
    };
  });

  return data;
};



// export const loadDataAcount = async (uid) => {
//   const acountRef = await db.collection(`users/${uid}/acount`);
//   let data = {};

//   acountRef
//     .onSnapshot( snap => {
//       snap.forEach((acount) => {
//         const acountData = acount.data();
//         data = ({
//           id: acount.id,
//           ...acountData,
//         });
//       })
//     })
  
//   return data;
// };




