import Hero from "@/components/Hero";
import Jewellery from "@/components/Jewellery";
import Newsletter from "@/components/Newsletter";
import ProductCarrosal from "@/components/ProductCarrosal";
import Promotion from "@/components/Promotion";

import { oneProductType, responseType } from "@/components/Types";




async function fetchAllProductsData() {
  let res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=*[_type == "products"]`, {

    next: {
      revalidate: 60
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch")
  }

  return res.json();
}

export default async function Home() {
  let { result }: responseType = await fetchAllProductsData();


  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Hero />
      <Promotion />
      <Jewellery />
      <ProductCarrosal ProductData={result} />
      <Newsletter />
    </main>
  )
}
