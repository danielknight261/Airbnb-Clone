'use client'

// Import the Image component from the Next.js library and the useRouter hook from the next/navigation module
import Image from "next/image"
import { useRouter } from "next/navigation"

// Define the Logo component as a functional component
const Logo = () => {
    // Get the router object from the useRouter hook
    const router = useRouter()

  // Return an Image element that displays the logo image and has a cursor pointer
  return (
    <Image className="hidden md:block cursor-pointer" src={"/images/logo.png"} alt={"Logo"} height="100" width="100"/>
  )
}

// Export the Logo component as the default export of the module
export default Logo;
