// src/app/(marketing)/gallery/page.tsx

export default async function GalleryPage(props: {
  params: Promise<{ id?: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // במידה ותרצה להשתמש בפרמטרים בעתיד:
  const params = await props.params;
  const searchParams = await props.searchParams;

  return (
    <div className="container py-20">
      <h1 className="gradient-text mb-12 text-center">הלוקיישנים שלנו</h1>
      {/* כאן מגיעה הקומפוננטה של הגלריה שמושכת מקלודינרי */}
    </div>
  );
}
