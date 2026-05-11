"use client";

import Image from "next/image";
import { IMAGE_PATH, IMAGE_KHET_HEADER } from "@/constants/KhetConstants";
import MainMenu from "@/components/MainMenu/mainMenu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
            <MainMenu />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
