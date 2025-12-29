import Image from "next/image"
import crown from "@/app/assets/crown.svg"

function Logo() {
  return (
<Image 
src={crown}
 alt="Crown logo" 
width={50}
height={50}
 priority
 />
  )
}

export default Logo