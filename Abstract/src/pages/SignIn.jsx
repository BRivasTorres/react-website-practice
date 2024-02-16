import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import {auth} from "../../firebase/firebaseConfig"

const handleLogin = async(e) => {
  const provider = await new GoogleAuthProvider();  
  return signInWithPopup(auth, provider)
}

const SignIn = () => {
	return (
		<div className="w-[50%] m-[_5rem_auto] max-w-[1000px] border-[5px] border-[#E5E5E5] flex flex-col justify-center items-center p-[4rem] rounded-[10px] ">
			<h2 className="text-[2rem] font-medium mb-[3rem] ">Sign In to abstract</h2>
      <section>
        <div className="">
			    <button onClick={handleLogin} className="button-login">Sign In with Google</button>
        </div>
      </section>
		</div>
	);
};

export default SignIn;
