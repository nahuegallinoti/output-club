import Background from "../components/Background";
import Gallery from "../components/Gallery";
import Arrow from "../components/ui/Arrow";
import Divider from "../components/ui/Divider";

export default function Home() {
  return (
    <div id="main">
      <Background />
      <Divider
        margin="m-7"
        colorFrom="from-white"
        colorTo="to-zinc-400"
        height="h-2"
      />
      <Gallery />
    </div>
  );
}
