'use client'

import { useEffect, useState } from "react";

interface ClientOnlyProps { 
    children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {

//     // alt way for type script const ClientOnly = ({
//     children
// }: {
//     children: ReactNode;
// }) => {

    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true)
    }, [])

    if(!hasMounted) {
        return null;
    }

    
  return (
    <>{children}</>
  )
}

export default ClientOnly