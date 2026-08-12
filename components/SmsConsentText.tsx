import Link from "next/link";

type Props = {
  linkClassName?: string;
};

export function SmsConsentText({ linkClassName = "underline hover:opacity-80" }: Props) {
  return (
    <span className="block space-y-1">
      <span className="block">
        I would like to receive automated text messages from Gardner Plumbing Co. for
        appointment notifications, reminders, and review requests. Message frequency may vary.
        Message and data rates may apply. Reply HELP for help or STOP to opt out at any time.
      </span>
      <span className="block">
        View our{" "}
        <Link href="/privacy-policy" className={linkClassName}>
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms-and-services" className={linkClassName}>
          Terms of Service
        </Link>
        .
      </span>
    </span>
  );
}
