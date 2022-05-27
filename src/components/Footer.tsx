import React from "react";
import { useInfo } from "./info-context"

const Footer = () => {
    const { state } = useInfo()
    return (
        <div className="py-8 w-10/12">
            <div className="mx-auto">
                <div className="mb-2 border-t-2 border-gray-300"></div>
                <div className="flex flex-col justify-between lg:flex-row items-center">
                    <p>
                        {state.lang == "en" ? "Built with Gatsby and Tailwind" : "Laget med Gatsby og Tailwind"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;