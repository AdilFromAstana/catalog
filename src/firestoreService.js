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
  where,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebaseConfig";

export const uploadFile = async (file, folder = "uploads") => {
  const storageRef = ref(storage, `images/${file.name}`);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

export const addData = async ({
  collectionName,
  data,
  storeCode = "cool-store",
}) => {
  const docRef = await addDoc(collection(db, collectionName), {
    ...data,
    storeCode,
  });
  return docRef.id;
};

export const updateData = async (collectionName, docId, data) => {
  await setDoc(doc(db, collectionName, docId), data, { merge: true });
};

export const itemToArchive = async ({ collectionName, id, status }) => {
  try {
    await setDoc(
      doc(db, collectionName, id),
      { status: status },
      { merge: true }
    );
  } catch (error) {
    console.error(`Ошибка при обновлении статуса документа ${id}:`, error);
    throw error;
  }
};

export const getData = async ({
  collectionName = "items",
  storeCode = "cool-store",
}) => {
  try {
    const queryRef = query(
      collection(db, collectionName),
      where("storeCode", "==", storeCode)
    );

    const querySnapshot = await getDocs(queryRef);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    throw error;
  }
};

export const getPaginatedData = async ({
  collectionName,
  pageSize,
  currentPage = 1,
  lastVisible = null,
  sort = {
    by: "price",
    order: "asc",
  },
  storeCode = "cool-store",
  minPriceFilter = null,
  maxPriceFilter = null,
  categoryIdsFilter = [],
  status = "active",
}) => {
  try {
    const collectionRef = collection(db, collectionName);

    let countQueryRef = query(collectionRef);

    if (storeCode !== null) {
      countQueryRef = query(countQueryRef, where("storeCode", "==", storeCode));
    }
    if (categoryIdsFilter.length > 0) {
      countQueryRef = query(
        countQueryRef,
        where("categoryId", "in", categoryIdsFilter)
      );
    }
    if (status !== null) {
      countQueryRef = query(countQueryRef, where("status", "==", status));
    }
    const minQueryRef = query(countQueryRef, orderBy("price", "asc"), limit(1));
    const minSnapshot = await getDocs(minQueryRef);
    const minPrice = minSnapshot.docs.length
      ? minSnapshot.docs[0].data().price
      : null;

    const maxQueryRef = query(
      countQueryRef,
      orderBy("price", "desc"),
      limit(1)
    );
    const maxSnapshot = await getDocs(maxQueryRef);
    const maxPrice = maxSnapshot.docs.length
      ? maxSnapshot.docs[0].data().price
      : null;

    if (minPriceFilter !== null) {
      countQueryRef = query(
        countQueryRef,
        where("price", ">=", minPriceFilter)
      );
    }
    if (maxPriceFilter !== null) {
      countQueryRef = query(
        countQueryRef,
        where("price", "<=", maxPriceFilter)
      );
    }

    const countSnapshot = await getDocs(countQueryRef);
    const totalSize = countSnapshot.size;

    let queryRef = query(collectionRef, orderBy(sort.by, sort.order));

    if (minPriceFilter !== null) {
      queryRef = query(queryRef, where("price", ">=", minPriceFilter));
    }
    if (maxPriceFilter !== null) {
      queryRef = query(queryRef, where("price", "<=", maxPriceFilter));
    }
    if (categoryIdsFilter.length > 0) {
      queryRef = query(queryRef, where("categoryId", "in", categoryIdsFilter));
    }
    if (storeCode !== null) {
      queryRef = query(queryRef, where("storeCode", "==", storeCode));
    }
    if (status !== null) {
      queryRef = query(queryRef, where("status", "==", status));
    }

    queryRef = query(queryRef, limit(pageSize));
    if (currentPage > 1 && lastVisible) {
      queryRef = query(queryRef, startAfter(lastVisible));
    }

    const querySnapshot = await getDocs(queryRef);

    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];

    return {
      data,
      lastVisible: newLastVisible,
      totalSize,
      minPrice,
      maxPrice,
    };
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

export const getDataByIds = async ({
  collectionName,
  ids,
  storeCode = "cool-store",
}) => {
  try {
    if (!Array.isArray(ids)) {
      throw new Error("Аргумент ids должен быть массивом");
    }

    const data = await Promise.all(
      ids.map(async (id) => {
        const docRef = doc(db, collectionName, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const docData = docSnap.data();
          if (docData.storeCode === storeCode) {
            return { id: docSnap.id, ...docData };
          } else {
            console.warn(`Документ с id ${id} не соответствует storeCode`);
            return null;
          }
        } else {
          console.warn(`Документ с id ${id} не найден`);
          return null;
        }
      })
    );

    return data.filter((doc) => doc !== null);
  } catch (error) {
    console.error("Ошибка при получении документов:", error);
    throw error;
  }
};
