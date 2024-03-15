import dataPricing from "../../mocks/dataPricing"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck} from "@fortawesome/free-solid-svg-icons"

const PricingCard = () => {
  return (
    <div className="w-[85%] mx-auto flex gap-[2rem]  ">
      {dataPricing.map(card => {
        return (
              <section
                key={card.id}
                className="border border-[#D3D4E1] px-[3rem] py-[4rem] text-[#4C525A] "
              >
                <h3 className="text-[1.4rem] capitalize font-semibold ">
                  {card.type}{" "}
                </h3>
                <p className="text-[#636A6F] text-[.9rem] ">
                  {card.description}{" "}
                </p>
                <div className="flex  border border-red-600 ">
                  <span className="text-[1rem] ">$</span>
                  <span className="text-[3rem] font-semibold top-0 ">{card.price} </span>
                  <span className="uppercase text-[1.4rem] ">/month</span>
                </div>
                <hr />
                <section>
                  {card.benefits.map((benefit, id) => {
                    return (
                      <ul key={id}>
                        <FontAwesomeIcon icon={faCheck} />
                        <li>{benefit}</li>
                      </ul>
                    );
                  })}
                </section>
            </section>
          );
      })}
    </div>
  )
}

export default PricingCard
