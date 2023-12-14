import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">
            <div className="container p-6">
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {Array.from({ length: 6 }, (_, index) => (
                        <div key={index} className="mb-6 lg:mb-0">
                            <img
                                src={`https://tecdn.b-cdn.net/img/new/fluid/city/${111 + index}.webp`}
                                className="w-full rounded-md shadow-lg"
                                alt={`City ${111 + index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Why This? */}
            <div className="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                © 2023 Copyright:
                <a className="dark:text-neutral-400" href="https://tailwind-elements.com/">
                    Group X moringa
                </a>
            </div>
        </footer>
    );
}
