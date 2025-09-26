"use client"

import { useEffect } from "react"
import Script from "next/script"

export function TrackingScripts() {
  useEffect(() => {
    console.log("[v0] Tracking scripts initialized")
  }, [])

  return (
    <>
      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
          fbq('track', 'ViewContent', {
            content_name: 'Sistema de Blindaje Total - Upsell',
            content_category: 'Upsell',
            value: 27,
            currency: 'USD'
          });
        `}
      </Script>

      {/* Google Analytics 4 */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
          gtag('event', 'page_view', {
            page_title: 'Sistema de Blindaje Total - Upsell',
            page_location: window.location.href,
            content_group1: 'Upsell'
          });
        `}
      </Script>

      {/* UTMify Tracking */}
      <Script id="utmify-tracking" strategy="afterInteractive">
        {`
          (function() {
            const urlParams = new URLSearchParams(window.location.search);
            const utmData = {
              utm_source: urlParams.get('utm_source'),
              utm_medium: urlParams.get('utm_medium'),
              utm_campaign: urlParams.get('utm_campaign'),
              utm_term: urlParams.get('utm_term'),
              utm_content: urlParams.get('utm_content')
            };
            
            // Store UTM data in localStorage
            localStorage.setItem('utmData', JSON.stringify(utmData));
            
            // Track page view with UTM data
            if (typeof gtag !== 'undefined') {
              gtag('event', 'upsell_view', {
                event_category: 'Upsell',
                event_label: 'Sistema de Blindaje Total',
                custom_map: utmData
              });
            }
            
            console.log('[v0] UTM tracking initialized:', utmData);
          })();
        `}
      </Script>

      <Script
        src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("[v0] Hotmart script loaded, initializing widget...")
          // Initialize Hotmart widget after script loads
          if (typeof window !== "undefined" && (window as any).checkoutElements) {
            try {
              ;(window as any).checkoutElements.init("salesFunnel").mount("#hotmart-sales-funnel")
              console.log("[v0] Hotmart widget initialized successfully")
            } catch (error) {
              console.error("[v0] Error initializing Hotmart widget:", error)
            }
          }
        }}
      />
    </>
  )
}
