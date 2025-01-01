"use client"

import React, { useState, useEffect } from "react"

interface Product {
    id: number,
    title: string,
    decsription: string,
    price: number,
    image: string
}

const page: React.FC = () => {

    const [product, setProduct] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    // use effect
    useEffect(() => {
        const fetchProduct = async (): Promise<void> => {
            try {
                // api link
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error(`HTTP error! status:${response.status}`)
                }
                const data: Product[] = await response.json()
                setProduct(data)
            }
            catch (err) {
                setError("Failed to fetch product. pleas try again later")
                console.log("error fetching data:", (err as Error).message);
            } finally {
                setLoading(false)
            }
        };
        fetchProduct();
    }, [])
    if (loading) {
        return <p className="text-center text-xl ">Loading .....</p>
    }
    if (error) {
        return <p className="text-center text-xl text-red-600">{error}</p>
    }

    return (
        // start working 
        <div className="container mx-auto px-4 py-6">
            {/* heading h1 */}
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 mt-12 pb-8">Client Side Data Fetching</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    product.map((product) => (
                        <div key={product.id} className="product-card p-4 border border-gray-200 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300 ">
                            <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h2 className="text-xl font-semibold mb-2 ">{product.title}</h2>
                            <p className="text-sm text-gray-700 mb-3 ">{product.decsription}</p>
                            <p className="text-lg font-bold text-gray-900 " >Prices: ${product.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        // closed 
    )
}
export default page