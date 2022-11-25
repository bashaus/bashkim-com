import Script from "next/script";

export const GoogleAnalytics = () => {
  const enabled = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ENABLED;
  const measurementId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script
        async
        id="GoogleAnalytics.src"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script id="GoogleAnalytics.config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `}
      </Script>
    </>
  );
};
