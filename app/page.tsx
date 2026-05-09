import NewGameForm from "@/components/NewGame/newGameForm";
import Image from "next/image";
import { IMAGE_PATH, IMAGE_KHET_HEADER } from "@/constants/KhetConstants";
export default function Home() {
  const headerImage = IMAGE_PATH + IMAGE_KHET_HEADER;
  console.log(headerImage);

  return (
    <div className="khet-container">
      <div className="khet-header">
        <Image src={headerImage} width="749" height="50" alt="KHET Branding" />
      </div>
      <div>
        <NewGameForm />
      </div>
    </div>
  );
}
