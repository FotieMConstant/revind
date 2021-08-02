export interface HiddenOptions {
    /**
     * hides from sm & above
     */
    sm?: boolean;
    /**
     * hides from md & above
     */
    md?: boolean;
    /**
     * hides from lg & above
     */
    lg?: boolean;
    /**
     * hides from xl & above
     */
    xl?: boolean;
    /**
     * hides from 2xl & above
     */
    "2xl"?: boolean;
    /**
     * hides while hovering over the component or its children
     */
    hover?: boolean;
    /**
     * hides while clicking over the component or its children
     */
    active?: boolean;
    /**
     * hides while focusing over the component or its children
     */
    focus?: boolean;
    all?: boolean;

    styleObj?: HiddenStyleObj;
}

export interface HiddenStyleObj {
    states: {
        all: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        "2xl": string;
        hover: string;
        active: string;
        focus: string;
    };
}
