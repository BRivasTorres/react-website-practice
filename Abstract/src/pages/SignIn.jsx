import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import {auth} from "../../firebase/firebaseConfig"

const handleLogin = async(e) => {
  const provider = await new GoogleAuthProvider();  
  return signInWithPopup(auth, provider)
}

const SignIn = () => {
	return (
		<div>
			<h2>Login</h2>
			<button onClick={handleLogin}>
				Iniciar sesión con Google
			</button>
		</div>
	);
};

export default SignIn;
