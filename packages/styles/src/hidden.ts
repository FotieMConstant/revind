export interface HiddenStyleObj {
    states: {
        all: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
        hover: string;
        active: string;
        focus: string;
    };
}
export const hiddenStyleObj: HiddenStyleObj = {
    states: {
        all: "hidden invisible opacity-0",
        sm: "sm:hidden sm:invisible sm:opacity-0",
        md: "md:hidden md:invisible md:opacity-0",
        lg: "lg:hidden lg:invisible lg:opacity-0",
        xl: "xl:hidden xl:invisible xl:opacity-0",
        xxl: "2xl:hidden 2xl:invisible 2xl:opacity-0",
        hover: "hover:hidden hover:invisible hover:opacity-0",
        active: "active:hidden active:invisible active:opacity-0",
        focus: "focus:hidden focus:invisible focus:opacity-0",
    },
};
