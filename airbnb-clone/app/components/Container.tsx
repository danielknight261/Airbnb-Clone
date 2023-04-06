"use client";
// Defining an interface called ContainerProps to specify the type of props that the Container component expects
interface ContainerProps {
  // The children prop is of type React.ReactNode, which can include any React element or a string
  children: React.ReactNode;
}

// Defining a functional component called Container that takes a ContainerProps object as its argument
const Container: React.FC<ContainerProps> = ({ children }) => {
  // Returning a div element with a class that specifies the maximum width and horizontal margins for the container, and different padding values for different screen sizes
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ">
      {children}
    </div>
  );
};

// Exporting the Container component as the default export
export default Container;

