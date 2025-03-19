import qs from "qs";

const mode = process.env.NEXT_PUBLIC_MODE;
let pluginURL = "";
if (mode === "development") {
  pluginURL = "https://sa-dev.portx.im";
} else {
  pluginURL = "https://sa.portx.im";
}

const pluginPath = "/plugin/?";

interface ScrapResponse {
  type: "scrap-result";
  code: number;
  reason?: string;
}

interface ScrapParams {
  uid: string;
  lang?: "ko" | "en";
  site?: string;
  request?: string;
  signature?: string;
  return?: string;
  theme?: string;
}

export default function openScrap(uid: string, callback?: (e: ScrapResponse) => void) {
  const sampleScrapParams: ScrapParams = {
    uid,
    lang: "ko",
  };

  const scrapUrl = pluginURL + pluginPath + qs.stringify(sampleScrapParams);

  const opened = window.open(scrapUrl, "_blank");

  window.addEventListener("message", event => {
    const res = event.data as ScrapResponse;

    if (event.source !== opened) {
      return;
    }
    if (pluginURL !== event.origin) {
      return;
    }
    if (typeof res !== "object" || res.type !== "scrap-result") {
      console.warn("Unexpected message", event);
      return;
    }
    callback && callback(event.data);
    console.log(event.data.code, event.data.reason);
  });
}
