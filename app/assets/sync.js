/* Sincronizacion en vivo entre dispositivos via Firestore, para las
   herramientas de datos manuales (Notas de corte, Recordatorios).
   Un solo documento por herramienta y usuario, con el arreglo completo
   en un campo. */
import { app } from './firebase.js';
import { getFirestore, doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

const db = getFirestore(app);

/* uid: usuario dueño de los datos (aisla a cada persona de las demas).
   toolId: nombre del documento dentro de 'usuarios/{uid}/datos'.
   campo: nombre del campo (arreglo) dentro de ese documento.
   onChange: se llama con el arreglo actualizado cada vez que cambia
   (local o desde otro dispositivo). Devuelve { guardar(valor) }. */
export function syncDoc(uid, toolId, campo, onChange) {
  const ref = doc(db, 'usuarios', uid, 'datos', toolId);

  onSnapshot(ref, (snap) => {
    onChange(snap.exists() ? (snap.data()[campo] || []) : []);
  }, (err) => {
    console.error('Error de sincronizacion (' + toolId + '):', err);
  });

  return {
    guardar(valor) {
      setDoc(ref, { [campo]: valor }).catch(err => {
        console.error('Error al guardar (' + toolId + '):', err);
      });
    }
  };
}
