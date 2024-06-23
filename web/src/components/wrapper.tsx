import { PropsDiv } from "@/interfaces";

export function Wrapper({ children, ...props }: PropsDiv) {

    const mobile = 'size-full p-4 flex flex-col';
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