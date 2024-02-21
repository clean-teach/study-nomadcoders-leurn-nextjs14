"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    console.log(path);

    if (path === "/about-us/company/jobs/sales") {
        return null
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link>
                    {path === "/about-us" ? "🔥" : ""}
                </li>
            </ul>
        </nav>
    );
}