import { useState } from "react";
import { blog_data } from "../../Assets/assets";
import BlogItem from "./BlogItem";
import { StaticImageData } from "next/image";

export interface MyComponentProps {
    key: number;
    image: StaticImageData;
    title: string;
    description: string;
    category: string;
    id:number;
}
const BlogList = () => {
    const [menu, setMenu] = useState('All');
    const updatedItems = blog_data.filter((item) => {
        return menu === 'All' ? true : item.category === menu;
    });

    return (
        <>
            <div>
                <div className="flex justify-center gap-6 my-10">
                    <button onClick={() => setMenu('All')} className={menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>All</button>
                    <button onClick={() => setMenu('Technology')} className={menu === "Technology" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Technology</button>
                    <button onClick={() => setMenu('Startup')} className={menu === "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Startup</button>
                    <button onClick={() => setMenu('Lifestyle')} className={menu === "Lifestyle" ? "bg-black text-white py-1 px-4 rounded-sm" : ""}>Lifestyle</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
                {updatedItems.map(({image,title,description,category,id}) => {
                    return (
                        <BlogItem key={id} id={id} image={image} title={title} description={description} category={category} />
                    );
                })}
            </div>
        </>
    )
}
export default BlogList;