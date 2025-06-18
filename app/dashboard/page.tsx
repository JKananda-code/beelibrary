
"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
   interface Book{
    id:number;
    title:string;
    author:string;
    genre:string;
  }  
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", genre: "" });


  // Fetch books
  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch("/api/books");
      const data = await res.json();
      setBooks(data);
    }
    fetchBooks();
  }, []);

  // Handle adding books
  async function handleAddBook(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    });

    const addedBook = await res.json();
    setBooks([...books, addedBook]); 
    setNewBook({ title: "", author: "", genre: "" });
  }

  // Handle deleting books
  async function handleDeleteBook(id: number) {
    await fetch("/api/books", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <div>
      <main className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center">Dashboard</h1>

        {/* Add Book Form */}
        <div className="mt-6 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Add a New Book</h2>
          <form onSubmit={handleAddBook} className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Book Title"
              className="w-full p-2 border rounded-md"
              value={newBook.title}
              onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Author"
              className="w-full p-2 border rounded-md"
              value={newBook.author}
              onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Genre"
              className="w-full p-2 border rounded-md"
              value={newBook.genre}
              onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
              required
            />
            <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-md">
              Add Book
            </button>
          </form>
        </div>

        {/* Book List */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Book List</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {books.map((book) => (
              <div key={book.id} className="p-4 bg-white shadow-md rounded-md">
                <h3 className="font-bold">{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Genre: {book.genre}</p>
                <button
                  className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={() => handleDeleteBook(book.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
