// src/app/(marketing)/locations/[city]/page.tsx

export default async function CityPage(props: any) {
  const params = await props.params;
  const { city } = params;

  return (
    <div className="container py-20 min-h-screen">
      <h1 className="gradient-text text-4xl font-black uppercase italic">
        לוקיישנים ב{city === 'tel-aviv' ? 'תל אביב' : city}
      </h1>
      <p className="mt-4 text-gray-400">הלוקיישנים הכי חמים לצילומים ב{city} בקרוב כאן...</p>
    </div>
  );
}
