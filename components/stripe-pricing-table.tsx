"use client"

import { useTheme } from "next-themes"
import Head from "next/head"
import Script from "next/script"

type TStripePricingTable = {
    clientReferenceId: string
}
export const StripePricingTable = ({
    clientReferenceId,
}: TStripePricingTable) => {
    const { theme } = useTheme()

    return (
        <>
            <Script
                async
                src="https://js.stripe.com/v3/pricing-table.js"
            ></Script>

            {theme === "light" ? (
                <>
                    {/* @ts-ignore */}
                    <stripe-pricing-table
                        pricing-table-id="prctbl_1N2NKHK3wHFLqQwQhxJTKYqY"
                        publishable-key="pk_live_51N214gK3wHFLqQwQq4AebH3hayjA9bJT3gzxhhRvBrU2hEmKpyAj9fx4PgRhtw1VgCdSN7CP6Dp0OU5KAamvN19Z00CiZzKgxU"
                        client-reference-id={clientReferenceId}
                    />
                </>
            ) : (
                <>
                    {/* @ts-ignore */}
                    <stripe-pricing-table
                        pricing-table-id="prctbl_1N2NLVK3wHFLqQwQPyabxItV"
                        publishable-key="pk_live_51N214gK3wHFLqQwQq4AebH3hayjA9bJT3gzxhhRvBrU2hEmKpyAj9fx4PgRhtw1VgCdSN7CP6Dp0OU5KAamvN19Z00CiZzKgxU"
                        client-reference-id={clientReferenceId}
                    />
                </>
            )}
        </>
    )
}
