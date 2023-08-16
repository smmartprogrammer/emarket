import Hero from "@/components/Hero";
import Jewellery from "@/components/Jewellery";
import Newsletter from "@/components/Newsletter";
import ProductCarrosal from "@/components/ProductCarrosal";
import Promotion from "@/components/Promotion";


async function fetchAllProductData() {
  let res = await fetch(`http://localhost:3000/api/products`)

  if (!res.ok) {
    throw new Error("failed to fetch")
  }
  return res.json()


}

export default async function Home() {
  let {response} =  await fetchAllProductData()
  
  
  
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Hero />
      <Promotion />
      <Jewellery />
      <ProductCarrosal ProductData={response} />
      <Newsletter />

    </main>
  )
}
