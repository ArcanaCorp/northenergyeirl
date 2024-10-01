import { createContext, useContext, useEffect, useState } from "react";

const DBContext = createContext();

export const DBProvider = ({ children }) => {

    const [ blogs, setBlogs ] = useState([]);

    const handleListBlogs = async () => {
        try {
            
            const response = await fetch(`https://api.northenergyeirl.com/dashboard/?blogs`);
            const data = await response.json();
            if (data.ok) {
                setBlogs(data.articles);
            }

        } catch (error) {
            
            console.log(error);

        }
    }

    useEffect(() => {
        if (blogs.length === 0) {
            handleListBlogs();
        }
    }, [blogs.length]);

    const contextValue = {
        blogs,
        handleListBlogs
    }

    return (
        <DBContext.Provider value={contextValue}>{children}</DBContext.Provider>
    )

}

export const useDB = () => useContext(DBContext);