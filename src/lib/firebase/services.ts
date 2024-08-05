import { app } from "./init";
import {
  addDoc,
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

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

export const retrieveData = async (collectionName: string) => {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
};

export const deleteData = async (
  collectionName: string,
  id: string,
  callback: Function
) => {
  const docRef = doc(firestore, collectionName, id);
  await deleteDoc(docRef)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
};

export const updateData = async (
  collectionName: string,
  id: string,
  data: any,
  callback: Function
) => {
  const docRef = doc(firestore, collectionName, id);
  await updateDoc(docRef, data)
    .then(() => {
      callback(true);
    })
    .catch(() => {
      callback(false);
    });
};
