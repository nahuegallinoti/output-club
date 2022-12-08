import Background from "../components/Background";
import Gallery from "../components/Gallery";
import Divider from "../components/ui/Divider";

export default function Home() {
  return (
    <div id="main">
      <Background />
      <Divider
        margin="mx-96 my-8"
        colorFrom="from-white"
        colorTo="to-zinc-400"
        height="h-[1px]"
      />
      <Gallery />
    </div>
  );
}
