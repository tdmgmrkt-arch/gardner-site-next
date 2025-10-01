"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-6">
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-white transition">
                {item.label}
              </Link>
            ) : (
              <span className="text-red-400">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ArrowRight className="h-4 w-4" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
