// src/lib/cloudinary.ts
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getLocations(tag = 'multibrawn') {
  try {
    const results = await cloudinary.search
      .expression(`tags:${tag}`) // מחפש תמונות עם הטאג הספציפי
      .sort_by('public_id', 'desc')
      .max_results(100)
      .execute();

    return results.resources.map((resource: any) => ({
      id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height,
    }));
  } catch (error) {
    console.error('Cloudinary Error:', error);
    return [];
  }
}
