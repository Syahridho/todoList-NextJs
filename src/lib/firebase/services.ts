import { app } from "./init";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const firestore = getFirestore(app);

export async function add(
  collectionName: string,
  data: any,
  callback: Function
) {
  await addDoc(collection(firestore, collectionName), data)
    .then((res) => {
      callback(true, res);
    })
    .catch((error) => {
      callback(false, error);
    });
}
