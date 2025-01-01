import React from "react";

interface Book {
    id: number,
    name: string,
    author: string
}

const Page = async () => {

    let books: Book[] = [];
    try {
        // api link
        const res = await fetch("https://simple-books-api.glitch.me/books")
        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }
        books =  await res.json()
    }
    catch (error) {
        console.error("error fetching books:", error)
    }

    return (
        // working
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 ">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-8 mt-12 pb-8">Server Side Data Fetching</h1>
            <div className="w-full max-w-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {
                        books.length === 0 ? (
                            <p className="text-center col-span-full text-xl text-red-500 ">Now books are availble.</p>
                        ) : (
                            books.map((book) => (
                                <div key={book.id} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300">
                                    <h2 className="text-xl font-semibold text-green-800" >{book.name}</h2>
                                    <p className="text-md text-green-600">{book.author}  </p>
                                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition ">View Detailed</button>
                                </div>
                            ))
                        )}
                </div>
            </div>
        </div>
// completed working 
    )
}
export default Page