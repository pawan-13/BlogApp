'use client';
import { useEffect, useState } from "react";
import { assets, blog_data } from "../../../../Assets/assets";
import Image, { StaticImageData } from "next/image";
import Footer from "@/Components/Footer";
import Link from "next/link";

type PageProps = {
  params: {
    id: string;
  }
};

type Blog = {
  id: number,
  title: string,
  author: string,
  author_img: StaticImageData,
  image: StaticImageData,
  description: string,
}

const Page = ({ params }: PageProps) => {
  const [data, setData] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchData = () => {
      const blog = blog_data.find(blog => blog.id === Number(params.id));
      setData(blog || null);
    }
    fetchData();
  }, [params.id]);


  return (
    data ? (
      <>
        <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image src={assets.logo} width={180} alt="" className="w-[130px] sm:w-auto" />
            </Link>
            <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
              Get Started <Image src={assets.arrow} alt="" />
            </button>
          </div>
          <div className="text-center my-24">
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">{data.title}</h1>
            <Image className="mx-auto mt-6 border border-white rounded-full" src={data.author_img} alt="data.author_img" />
            <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">{data.author}</p>
          </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
          <Image className="border-4 border-white" src={data.image} alt="data.Image" width={1280} height={720} />
          <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
          <p>{data.description}</p>
          <h3 className="my-5 text-[18px] font-semibold">Step:1 Self-Reflection and Goal Setting</h3>
          <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your value, aspirations, and long-term goals.</p>
          <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your value, aspirations, and long-term goals.</p>

          <h3 className="my-5 text-[18px] font-semibold">Step:2 Self-Reflection and Goal Setting</h3>
          <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your value, aspirations, and long-term goals.</p>
          <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your value, aspirations, and long-term goals.</p>

          <h3 className="my-5 text-[18px] font-semibold">Step:3 Self-Reflection and Goal Setting</h3>
          <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your value, aspirations, and long-term goals.</p>
          <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achive. Start by reflecting on your value, aspirations, and long-term goals.</p>

          <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
          <p className="my-3">To effectively manage your lifestyle, it is essential to first gain a clear understanding of what you want to accomplish. Begin by reflecting on your values, aspirations, and long-term objectives.</p>

          <div className="my-24">
            <p className="text-black font font-semibold my-4">Share this article on social media</p>
            <div className="flex">
              <Image src={assets.facebook_icon} width={50} alt="" />
              <Image src={assets.twitter_icon} width={50} alt="" />
              <Image src={assets.googleplus_icon} width={50} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </>
    ) : (<><div>No blog found</div></>)
  );
};

export default Page;
