"use client";

export default function ArchitectureToolbar() {

    return (

        <div className="flex flex-wrap items-center justify-between gap-4">

            <input

                placeholder="Search architecture..."

                className="rounded-xl border border-slate-300 px-4 py-3 w-72"

            />

            <div className="flex gap-3">

                <button className="rounded-lg border px-4 py-2">
                    All
                </button>

                <button className="rounded-lg border px-4 py-2">
                    Data
                </button>

                <button className="rounded-lg border px-4 py-2">
                    ML
                </button>

                <button className="rounded-lg border px-4 py-2">
                    AI
                </button>

            </div>

        </div>

    );

}