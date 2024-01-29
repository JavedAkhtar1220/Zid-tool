import Bookmarks from "./features/Home/components/Bookmarks";
import MySlider from "./features/Home/components/Slider";
import ToPDF from "./features/Home/components/ToPDF";

export default function Home() {
  return (
    <main>
      <Bookmarks />
      <MySlider />
      <ToPDF />
    </main>
  );
}
