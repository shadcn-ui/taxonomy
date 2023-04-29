"use client"

import { useTheme } from "next-themes"

type TStripePricingTable = {
    clientReferenceId: string
}
export const StripePricingTable = ({
    clientReferenceId,
}: TStripePricingTable) => {
    const { theme } = useTheme()

    return (
        <>
            {theme === "light" ? (
                <>
                    {/* @ts-ignore */}
                    <stripe-pricing-table
                        pricing-table-id="prctbl_1N21FiK3wHFLqQwQXQXGDrYi"
                        publishable-key="pk_test_51N214gK3wHFLqQwQMJL9zicI2nOeSiKs3IdD1LOZhOqgRc7PaeGykfkR8asDAQVMxI4Dyno13kK3bl8oJDymLejP0099fOEQ5X"
                        client-reference-id={clientReferenceId}
                    />
                </>
            ) : (
                <>
                    {/* @ts-ignore */}
                    <stripe-pricing-table
                        pricing-table-id="prctbl_1N245hK3wHFLqQwQkevsKkLz"
                        publishable-key="pk_test_51N214gK3wHFLqQwQMJL9zicI2nOeSiKs3IdD1LOZhOqgRc7PaeGykfkR8asDAQVMxI4Dyno13kK3bl8oJDymLejP0099fOEQ5X"
                        client-reference-id={clientReferenceId}
                    />
                </>
            )}
        </>
    )
}
