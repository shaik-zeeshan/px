"use client";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center ">
            <div className="space-y-5 text-center">
                <div className="text-2xl">{error.message}</div>
                <button
                    onClick={reset}
                    className="rounded-lg bg-black px-4 py-2 text-gray-100"
                >
                    Reset
                </button>
            </div>
        </div>
    );
}
