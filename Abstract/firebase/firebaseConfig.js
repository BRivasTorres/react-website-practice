import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCv4G_EUpq1Rlxcpoya9kzDFe_iD3OKMSc",
	authDomain: "abstract-website-practice.firebaseapp.com",
	projectId: "abstract-website-practice",
	storageBucket: "abstract-website-practice.appspot.com",
	messagingSenderId: "526538813051",
	appId: "1:526538813051:web:47ccb33fbfe51046f3fcde",
	measurementId: "G-CR6Z99DZYE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app