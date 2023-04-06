'use client'

// Define the interface for the MenuItem component's props
interface MenuItemProps {
    onClick: () => void; // onClick event handler for the MenuItem
    label: string; // label text for the MenuItem
}

// Define the MenuItem component as a functional component that accepts the MenuItemProps interface
const MenuItem: React.FC<MenuItemProps> = ({
    onClick, 
    label
}) => {
  // Return a div element that has an onClick handler, some classes, and displays the label text
  return (
    <div onClick={onClick} className="px-2 py-3 hover:bg-neutral-100 transition font-semibold">
        {label}
    </div>
  )
}

// Export the MenuItem component as the default export of the module
export default MenuItem;
