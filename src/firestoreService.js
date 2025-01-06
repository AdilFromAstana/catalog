import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  deleteDoc,
  getDoc,
  query,
  orderBy,
  limit,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebaseConfig";

/**
 * Uploads a file to Firebase Storage and returns the file's download URL.
 */
export const uploadFile = async (file, folder = "uploads") => {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

/**
 * Adds a document to a Firestore collection.
 */
export const addData = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data);
  return docRef.id;
};

/**
 * Updates a document in a Firestore collection.
 */
export const updateData = async (collectionName, docId, data) => {
  await setDoc(doc(db, collectionName, docId), data, { merge: true });
};

/**
 * Retrieves all documents from a Firestore collection.
 */
export const getData = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getPaginatedData = async (
  collectionName,
  pageSize,
  currentPage = 1,
  lastVisible = null,
  sort
) => {
  try {
    const collectionRef = collection(db, collectionName);
    const countSnapshot = await getCountFromServer(collectionRef);
    const totalSize = countSnapshot.data().count;

    let queryRef = query(
      collectionRef,
      orderBy(sort.by, sort.order),
      limit(pageSize)
    );

    if (currentPage > 1 && lastVisible) {
      queryRef = query(queryRef, startAfter(lastVisible));
    }

    const querySnapshot = await getDocs(queryRef);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    return { data, lastVisible: newLastVisible, totalSize };
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    throw error;
  }
};

export const deleteData = async (collectionName, docId) => {
  await deleteDoc(doc(db, collectionName, docId));
};

export const getDataById = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("Документ не найден");
      return null;
    }
  } catch (error) {
    console.error("Ошибка при получении документа:", error);
    throw error;
  }
};
