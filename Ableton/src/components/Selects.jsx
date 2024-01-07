import { useEffect, useState } from "react";
import { getData } from "../services/apiService";

const Selects = () => {
    const [countries, setCountries] = useState()
    useEffect(() => {
        getData("https://restcountries.com/v3.1/all")
            .then((res) => setCountries(res))
            .catch((error) => console.log(error));
    }, []);
    
    return (
		<>
			<h4 className="footer__h4">Languaje and location</h4>
			<div className="flex gap-[3px] ">
				<select
					name="languaje"
					id="languaje"
					className="bg-[#EEEEEE] color-black hover:cursor-pointer px-[15px] py-[6px]"
				>
					<option value="english">English</option>
					<option value="spanish">spanish</option>
					<option value="deutch">Deutch</option>
					<option value="francais">Francais</option>
				</select>
				<select
					name="countries"
					id="countries"
					className="bg-[#EEEEEE] color-black hover:cursor-pointer px-[15px] py-[6px] w-[80%] "
				>
					{countries &&
						countries.map((item, index) => (
							<option key={index} value={item.name.common}>
								{item.name.common}
							</option>
						))}
				</select>
			</div>
		</>
	);
}

export default Selects
