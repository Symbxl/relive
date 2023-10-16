import Card from "./Card";
import { services } from "./data/commercial";

const CommercialServices = () => {
  return ( <>
    {services.map(service => {
      return (
        <Card id={service.id} image={service.image} title={service.title} />
      )
    }) }
  </> );
}

export default CommercialServices;