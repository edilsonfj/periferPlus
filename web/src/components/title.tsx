import { PropsH1 } from '@/interfaces';

export function Title({ children, ...props }: PropsH1) {

    const mobile = 'w-full h-full flex items-center justify-center font-sans font-black text-2xl text-white';
    const tablet = 'tablet:';
    const laptop = 'laptop:';
    const desktop = 'desktop:';
    const scale = 'scale:';

    return (
        <h1 {...props} className={`${mobile} ${tablet} ${laptop} ${desktop} ${scale}`}>
            {children}
        </h1>
    )
};