import type { Metadata } from 'next';
import PayrollClient from './PayrollClient';

export const metadata: Metadata = {
  title: 'Payroll',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PayrollPage() {
  return <PayrollClient />;
}
