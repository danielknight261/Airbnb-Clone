'use client'
// Importing the Image component from the next/image module
import Image from "next/image";

// Defining a functional component called Avatar
const Avatar = () => {
  // Returning an Image component with the specified properties
  return (
    <Image
      // Specifying a class for styling
      className="rounded-full"
      // Specifying the height of the image
      height="30"
      // Specifying the width of the image
      width="30" 
      // Specifying the source of the image
      src={"/images/placeholder.jpg"} 
      // Specifying alternative text for accessibility
      alt={"Avatar"}    
    />
  )
}

// Exporting the Avatar component as the default export
export default Avatar;
