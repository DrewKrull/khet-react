"use client";

import Image from "next/image";
import { IMAGE_PATH, IMAGE_KHET_HEADER } from "@/constants/KhetConstants";
import MainMenu from "@/components/MainMenu/mainMenu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { KhetGameProvider } from "@/context/khetGameContext";
export default function Home() {
  const queryClient = new QueryClient();
  const headerImage = IMAGE_PATH + IMAGE_KHET_HEADER;

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <div className="page-container">
        <div className="khet-container">
          <div className="khet-header">
            <Image src={headerImage} alt="KHET Branding" fill />
          </div>
          <div className="khet-application">
            <KhetGameProvider>
              <MainMenu />
              <div>Khet Game</div>
            </KhetGameProvider>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
