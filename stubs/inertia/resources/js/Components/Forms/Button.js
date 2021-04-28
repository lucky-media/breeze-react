import React from "react";

export default function Button({ processing, children }) {
    return (
        <button
            disabled={processing}
            type="submit"
            className={`inline-flex items-center px-4 py-2 bg-indigo-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${processing && 'cursor-wait'}`}
            >
            {children}
        </button>
    );
}
