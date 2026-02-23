// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const counterRef = db.collection("global").doc("actions");

counterRef.get().then(doc => {
  if (!doc.exists) {
    counterRef.set({ count: 0 });
  }
});

function incrementGlobal() {
  db.runTransaction(async (transaction) => {
    const doc = await transaction.get(counterRef);
    let newCount = (doc.data().count || 0) + 1;
    transaction.update(counterRef, { count: newCount });
  });
}

counterRef.onSnapshot(doc => {
  updateCounter(doc.data().count);
});
