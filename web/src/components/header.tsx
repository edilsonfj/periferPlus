import { PropsDiv } from "@/interfaces";

export function Header({ children, ...props }: PropsDiv) {

    const mobile = 'w-full h-20 p-4 flex flex-row items-center justify-start';
    const tablet = 'tablet:';
    const laptop = 'laptop:';
    const desktop = 'desktop:';
    const scale = 'scale:';

    return (
        <div {...props} className={`${mobile} ${tablet} ${laptop} ${desktop} ${scale}`}>
            {children}
        </div>
    )
};