import React from "react";

const Footer = () => {
    return (
        <div>
            <p className="text-white text-center p-3 xs:text-xs">
                Made by{" "}
                <a
                    href="https://tejasnashikkar.com"
                    target="_blank"
                    rel="noreferrer"
                    className="underline hover:no-underline"
                >
                    Tejas Nashikkar
                </a>{" "}
                for Blazesoft Frontend Developer Test.
            </p>
        </div>
    );
};

export default Footer;
