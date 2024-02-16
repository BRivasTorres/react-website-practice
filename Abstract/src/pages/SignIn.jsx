import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import {auth} from "../../firebase/firebaseConfig"
import SingInFormComponent from "../components/extra/SingInFormComponent";

const handleLogin = async(e) => {
  const provider = await new GoogleAuthProvider();  
  return signInWithPopup(auth, provider)
}

const SignIn = () => {
	return (
		<div className="w-[50%] m-[_5rem_auto] max-w-[1000px] border-[5px] border-[#E5E5E5] rounded-[10px] p-[3rem] ">
			<h2 className="text-[2rem] font-medium mb-[3rem] text-center">
				Sign In to abstract
			</h2>
			<section className="grid grid-cols-[_40%_auto_50%] gap-[3rem] ">
				<div>
					<button onClick={handleLogin} className="button-login w-[100%]">
						Sign In with Google
					</button>
				</div>
				<div className="h-[80%] w-[2px] bg-[#E5E5E5] self-center "></div>
				<SingInFormComponent />
			</section>
		</div>
	);
};

export default SignIn;
