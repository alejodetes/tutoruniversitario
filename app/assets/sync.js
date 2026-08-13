/* Sincronizacion en vivo entre dispositivos via Firestore, para las
   herramientas de datos manuales (Notas de corte, Recordatorios).
   Un solo documento por herramienta, con el arreglo completo en un campo. */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getFirestore, doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCVTdF-ksrbczO3lTcWf11gBRYK-jfdDKg",
  authDomain: "tutor-uan.firebaseapp.com",
  projectId: "tutor-uan",
  storageBucket: "tutor-uan.firebasestorage.app",
  messagingSenderId: "721233903332",
  appId: "1:721233903332:web:e976ed067cf8930465f6f1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* docId: nombre del documento dentro de la coleccion 'tutor_uan'.
   campo: nombre del campo (arreglo) dentro de ese documento.
   onChange: se llama con el arreglo actualizado cada vez que cambia
   (local o desde otro dispositivo). Devuelve { guardar(valor) }. */
export function syncDoc(docId, campo, onChange) {
  const ref = doc(db, 'tutor_uan', docId);

  onSnapshot(ref, (snap) => {
    onChange(snap.exists() ? (snap.data()[campo] || []) : []);
  }, (err) => {
    console.error('Error de sincronizacion (' + docId + '):', err);
  });

  return {
    guardar(valor) {
      setDoc(ref, { [campo]: valor }).catch(err => {
        console.error('Error al guardar (' + docId + '):', err);
      });
    }
  };
}
