import MemeGallery from "./MemeGallery";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.jpeg";
import f4 from "../../assets/f4.png";
import f5 from "../../assets/f5.jpeg";
import f6 from "../../assets/f6.png";

export default function Gallery() {
  const memeImages = [f5, f6, f3, f1, f2, f4];
  return <MemeGallery images={memeImages} />;
}
