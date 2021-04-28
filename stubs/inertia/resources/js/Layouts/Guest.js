import React, { useEffect } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Logo from "../Components/UI/Logo";

export default function Guest({ title, children }) {

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <InertiaLink href="/">
                    <Logo className="w-20 h-20 fill-current text-gray-500" />
                </InertiaLink>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
