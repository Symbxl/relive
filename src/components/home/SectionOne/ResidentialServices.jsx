import Card from "./Card";
import { services } from "./data/residential";

const ResidentialServices = () => {
  return ( <>
    {services.map(service => {
      return (
        <Card id={service.id} image={service.image} title={service.title} />
      )
    }) }
  </> );
}

export default ResidentialServices;