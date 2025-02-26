import Script from "next/script";

function GoogleAnalytics({ gaId, gtmId }: { gaId: string; gtmId: string }) {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`} />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${gaId}');
                  `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
