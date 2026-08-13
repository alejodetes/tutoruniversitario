/* Login con Google y aislamiento de datos por usuario. protegerPagina()
   muestra una pantalla de acceso mientras no haya sesión, y arranca el
   resto de la página (onUsuario) una sola vez que sí la hay. */
import { app } from './firebase.js';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function iniciarSesion() {
  return signInWithPopup(auth, provider);
}

export function cerrarSesion() {
  return signOut(auth);
}

function montarOverlay() {
  const overlay = document.createElement('div');
  overlay.className = 'auth-gate';
  overlay.innerHTML =
    '<div class="auth-card">' +
      '<span data-icon="graduation-cap" data-icon-size="30"></span>' +
      '<h2>Tutor</h2>' +
      '<p>Iniciá sesión con tu cuenta de Google para guardar tus datos de forma privada.</p>' +
      '<button class="google-btn" type="button" id="btnLogin">Iniciar sesión con Google</button>' +
      '<p class="auth-error" id="authError" hidden></p>' +
    '</div>';
  document.body.appendChild(overlay);
  if (window.hydrateIcons) hydrateIcons(overlay);

  const btnLogin = overlay.querySelector('#btnLogin');
  const authError = overlay.querySelector('#authError');
  btnLogin.addEventListener('click', () => {
    authError.hidden = true;
    btnLogin.disabled = true;
    iniciarSesion()
      .catch(err => {
        authError.textContent = 'No se pudo iniciar sesión: ' + err.message;
        authError.hidden = false;
      })
      .finally(() => { btnLogin.disabled = false; });
  });
  return overlay;
}

function montarChipUsuario(user) {
  if (document.getElementById('userChip')) return;
  const headerRight = document.querySelector('.header-right');
  if (!headerRight) return;

  const chip = document.createElement('div');
  chip.id = 'userChip';
  chip.className = 'user-chip';
  chip.title = user.email || '';

  if (user.photoURL) {
    const img = document.createElement('img');
    img.src = user.photoURL;
    img.alt = '';
    img.referrerPolicy = 'no-referrer';
    chip.appendChild(img);
  }

  const btnLogout = document.createElement('button');
  btnLogout.type = 'button';
  btnLogout.className = 'btn-logout';
  btnLogout.title = 'Cerrar sesión';
  btnLogout.setAttribute('aria-label', 'Cerrar sesión');
  btnLogout.setAttribute('data-icon', 'log-out');
  btnLogout.setAttribute('data-icon-size', '15');
  btnLogout.addEventListener('click', () => cerrarSesion());
  chip.appendChild(btnLogout);

  headerRight.prepend(chip);
  if (window.hydrateIcons) hydrateIcons(chip);
}

/* onUsuario(user) se llama una única vez, la primera vez que hay sesión
   activa. Si el usuario cierra sesión más adelante, se vuelve a mostrar
   la pantalla de acceso sin recargar la página. */
export function protegerPagina(onUsuario) {
  const overlay = montarOverlay();
  let avisado = false;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      overlay.remove();
      montarChipUsuario(user);
      if (!avisado) {
        avisado = true;
        onUsuario(user);
      }
    } else {
      document.getElementById('userChip')?.remove();
      if (!document.body.contains(overlay)) document.body.appendChild(overlay);
    }
  });
}
