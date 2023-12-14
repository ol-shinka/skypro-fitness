/* eslint-disable prettier/prettier */
import {
  getAuth,
  createUserWithEmailAndPassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updateEmail,
  sendEmailVerification,
  updatePassword
} from "firebase/auth";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
export async function register(email, password) {
  try {
    const oUC = await createUserWithEmailAndPassword(
      // ф-ция createUserWithEmailAndPassword регистрирует в firebase нового пользователя с емейл и паролем, заданными вторыым и третьим параметрами
      //первым параметром указывают обект подсистемы разграничения доступа, полученный ранее
      getAuth(),
      email,
      password
    );
    return oUC.user;
  } catch (err) {
    return err.code;
  }
}

export async function login(email, password) {
  try {
    const oUC = await signInWithEmailAndPassword(getAuth(), email, password);
    return oUC.user;
  } catch (err) {
    return err.code;
  }
}
export async function logout() {
  await signOut(getAuth());
}

//изменение эмейла
// export async function changeLogin(email, valueOldPass) {
//   const auth = getAuth();
//   CheckCredential(auth, valueOldPass)
//   await firebaseEmailReset(getAuth().currentUser, email).then(() => {
//   console.log('done');
// }).catch((error) => {
//   console.error(error.message);
//   });
// }

// async function CheckCredential(auth, valueOldPass) {

//   const credential = EmailAuthProvider.credential(
//       auth.currentUser.email,
//       valueOldPass
//  );
//  await reauthenticateWithCredential(auth.currentUser, credential);
// }
// async function firebaseEmailReset(user, newEmail) {

//   try {
//       await verifyBeforeUpdateEmail(user, newEmail);
//       await signOut(getAuth());
//       window.location.reload();
//   } catch (error) {
//       console.error(error.message);
//   }
// }

export async function changeLogin(newEmail, valueOldPass) {
  const auth = getAuth();

  try {
    // Повторная аутентификация перед изменением адреса электронной почты
    await reauthenticateWithCredential(
      auth.currentUser,
      EmailAuthProvider.credential(auth.currentUser.email, valueOldPass)
    );

    // Отправка подтверждения по электронной почте
    await sendEmailVerification(auth.currentUser);

    // Изменение адреса электронной почты
    await updateEmail(auth.currentUser, newEmail);

    // Опционально: разлогиниваем пользователя
    // await signOut(auth);

    console.log("done");
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

//изменение пароля
async function CheckCredentialPass(valueOldPass, user) {
  const oldPassword = valueOldPass;
  const credential = EmailAuthProvider.credential(user.currentUser.email, oldPassword);
  await reauthenticateWithCredential(user.currentUser, credential);
}

export async function changePassword(valueOldPass, newPassword) {
  const user = getAuth();
  await CheckCredentialPass(valueOldPass, user);
  await updatePassword(user.currentUser, newPassword);
}
