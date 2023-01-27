import "../styles/globals.css";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import AppLayout from "@/components/AppLayout";
import { useRouter } from "next/router";

import Page from "../components/storyblocks/posttypes/Page";
import Sidebar from "../components/storyblocks/layout_services/Sidebar";
import LargeCta from "../components/storyblocks/cta/LargeCta";
import Global from "../components/storyblocks/posttypes/Global";

const components = {
  page: Page,
  ServicSidebar: Sidebar,
  LargeCta: LargeCta,
  Global: Global,
};

storyblokInit({
  accessToken: "HNDqMoMAwQD5l06WBEGTUwtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  const asPath = useRouter();
  return (
    <div className="font-body">
      <AppLayout>
        <Component {...pageProps} key={asPath} />
      </AppLayout>
    </div>
  );
}

export default MyApp;
