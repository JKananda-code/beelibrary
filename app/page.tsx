
import BookSlider from "./components/BookSlider";

export default function Home() {
  return (
    <div>
      
      <main className="container mx-auto py-10">
        <h1 className="underline text-4xl font-bold text-center mb-10">Welcome to BeeLibrary</h1>
        <BookSlider />
      </main>
      
    </div>
  );
}
