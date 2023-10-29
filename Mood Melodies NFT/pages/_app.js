import { useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import "../styles/globals.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { mainnet, polygon, polygonMumbai } from "wagmi/chains";
import DataContextProvider from "../utils/context";
const projectId = "290fe969658b17415aa3fc92fd257e30";
const alchemyKey = "iSoLFoQDND_y0a4IOLotRoJ-ZPy2r5it";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, polygon, polygonMumbai],
  [alchemyProvider({ apiKey: alchemyKey }), publicProvider()]
);
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Mood Melodies NFT",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: projectId,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

// import DataContextProvider from "../utils/context.js";

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Head>
        <title>Mood Melodies NFT's</title>
        <meta
          name="description"
          content="Our project MOODIFY is based on the idea of automating the interaction between the music player and its user by using openCV and other python libraries as humans have a tendency to listen to music in accordance to their mood. So our project would be helpful as it is “smart enough” to sort-out the music based on the current state of emotion the person is having.

At last we are giving Music Market place for minting NFT's ."
        />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/800px-Spotify_logo_without_text.svg.png"
        />
      </Head>

      <WagmiConfig config={config}>
        <DataContextProvider>
          <div className="bg-main-gray min-h-screen text-gray-300">
            <Header setShowSidebar={setShowSidebar} />
            <Sidebar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
            <main>
              <Component {...pageProps} />
            </main>
            <ToastContainer />
          </div>
        </DataContextProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp;
