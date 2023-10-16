import { useState } from "react";
import ResidentialServices from "./ResidentialServices";
import CommercialServices from "./CommercialServices";

const SectionOne = () => {
  const [isResidential, setIsResidential] = useState(true)
  const [isCommercial, setIsCommercial] = useState(false)

  const handleResidential = () => {
    setIsResidential(true)
    setIsCommercial(false)
  }

  const handleCommercial = () => {
    setIsCommercial(true)
    setIsResidential(false)
  }

  return <>
    <button onClick={handleResidential}>Residential</button>
    <button onClick={handleCommercial}>Commercial</button>

    {isResidential && (
      <ResidentialServices />
    )}

    {isCommercial && (
      <CommercialServices />
    )}
  </>
}

export default SectionOne;