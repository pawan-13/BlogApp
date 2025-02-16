import { NextResponse, NextRequest } from "next/server";
import ConnectDB from "../../../../lib/config/db";
import { writeFile } from "fs/promises";
import BlogModel from "../../../../lib/models/BlogModel";

const LoadDB = async () => {
    await ConnectDB();
};

LoadDB();

export const GET = async () => {
    try {
        return NextResponse.json({ msg: "Api working properly" })
    } catch (error) {
        console.log((error as Error).message, 'error')
    }
}


export const POST = async (request: NextRequest) => {
    const formData = await request.formData();
    const timestamp = Date.now();
    const image = formData.get('image');
    if (!image) {
        throw new Error('Image is missing');
    }
    const imageByteData = await (image as File).arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `public/${timestamp}-${(image as File).name}`;
    await writeFile(path, buffer);
    const imgURL = `${timestamp}-${(image as File).name}`;

    const blogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        category: `${formData.get('category')}`,
        author: `${formData.get('author')}`,
        image: `${imgURL}`,
        authorImg: `${formData.get('authorImg')}`,
    }

    await BlogModel.create(blogData);
    console.log('Blog data saved successfully');
    return NextResponse.json({ sucess: 'true', msg: 'Data uploaded successfully' });
}