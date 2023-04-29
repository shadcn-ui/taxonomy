"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import * as React from "react"
import { ComponentProps } from "react"

export type TModelSelectButton = ComponentProps<typeof Select> & {}
export function ModelSelectButton({ ...props }: TModelSelectButton) {
    return (
        <Select {...props} defaultValue={"apple"}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a generator" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Style</SelectLabel>
                    <SelectItem value="apple">Fantasy RPG</SelectItem>
                    <SelectItem value="banana">Landscape Portrait</SelectItem>
                    <SelectItem value="blueberry">Anime Style</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
