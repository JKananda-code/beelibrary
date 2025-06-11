
import { NextResponse } from "next/server";

// Mock book data (replace this with a database later)
interface Book {
    id: number;
    title:string;
    author:string;
    genre: string;
}
let books: Book [] = [
  { id: 1, title: "The Literary Bee", author: "Jane Doe", genre: "Fiction" },
  { id: 2, title: "Imagination Unleashed", author: "John Smith", genre: "Fantasy" },
];
// GET: Fetch all books
export async function GET() {
  return NextResponse.json(books);
}
// POST: Add a new book
export async function POST(req: Request) {
  const newBook = await req.json();
  newBook.id = books.length + 1;
  books.push(newBook);
  return NextResponse.json(newBook);
}

// DELETE: Remove a book (example implementation)
export async function DELETE(req: Request) {
  const { id } = await req.json();
  books = books.filter(book => book.id !== id);
  return NextResponse.json({ message: "Book deleted", books });
}
