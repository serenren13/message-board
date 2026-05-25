import { 
    collection, 
    addDoc, 
    getDocs, 
    updateDoc, 
    deleteDoc, 
    doc, 
    serverTimestamp } from 'firebase/firestore';
import db from '../firebase.js';

export const messagesCollection = collection(db, "messages");

export async function addMessage(username, message) {
  return await addDoc(messagesCollection, {
    username,
    message,
    createdAt: serverTimestamp(),
  });
}

export async function fetchAllMessages() {
    const snapshot = await getDocs(messagesCollection);
    return snapshot.docs.map((messageDoc) => ({
        id: messageDoc.id,
        ...messageDoc.data(),
    }))
};

export async function updateMessage(messageId, updatedData) {
    const messageRef = doc(db, "messages", messageId)
    return await updateDoc(messageRef, {
        ...updatedData,
    })

}

export async function deleteMessage(messageId) {
    const messageRef = doc(db, "messages", messageId);
    return await deleteDoc(messageRef);
}