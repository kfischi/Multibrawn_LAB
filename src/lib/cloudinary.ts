import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getLocations() {
  // אנחנו שולפים את כל התמונות מתיקייה ספציפית (למשל 'multibrawn')
  const results = await cloudinary.search
    .expression('folder:multibrawn/*')
    .sort_by('created_at', 'desc')
    .max_results(30)
    .execute();

  return results.resources.map((resource: any) => ({
    id: resource.public_id,
    url: resource.secure_url,
    title: resource.context?.custom?.caption || 'New Location',
    width: resource.width,
    height: resource.height,
  }));
}
