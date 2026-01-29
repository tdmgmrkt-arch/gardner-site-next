"use client";

import CookieConsent, { Cookies } from "react-cookie-consent";
import Link from "next/link";

export function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept All"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="gardner-cookie-consent"
      expires={365}
      style={{
        background: "linear-gradient(145deg, #1a1a1a 0%, #111827 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "16px 24px",
        alignItems: "center",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.3)",
      }}
      contentStyle={{
        flex: "1 0 300px",
        margin: "8px 0",
      }}
      buttonStyle={{
        background: "linear-gradient(to right, #dc2626, #b91c1c)",
        color: "#ffffff",
        fontSize: "14px",
        fontWeight: "600",
        padding: "10px 24px",
        borderRadius: "8px",
        border: "1px solid rgba(220, 38, 38, 0.3)",
        cursor: "pointer",
        marginLeft: "16px",
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#9ca3af",
        fontSize: "14px",
        fontWeight: "500",
        padding: "10px 24px",
        borderRadius: "8px",
        border: "1px solid rgba(156, 163, 175, 0.3)",
        cursor: "pointer",
        marginLeft: "8px",
      }}
    >
      <span style={{ color: "#d1d5db", fontSize: "14px", lineHeight: "1.5" }}>
        We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
        By clicking "Accept All", you consent to our use of cookies.{" "}
        <Link
          href="/privacy-policy"
          style={{ color: "#f87171", textDecoration: "underline" }}
        >
          Privacy Policy
        </Link>
      </span>
    </CookieConsent>
  );
}

// Helper function to reset cookie consent (for "Cookie Settings" link)
export function resetCookieConsent() {
  Cookies.remove("gardner-cookie-consent");
  // Reload to show banner again
  if (typeof window !== "undefined") {
    window.location.reload();
  }
}
