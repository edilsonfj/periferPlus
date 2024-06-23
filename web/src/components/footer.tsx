
export function Footer() {

    const mobile = 'w-full h-20 p-4 flex items-center justify-center bg-white/10';
    const tablet = 'tablet:';
    const laptop = 'laptop:';
    const desktop = 'desktop:';
    const scale = 'scale:';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${desktop} ${scale}`}>
            Footer
        </div>
    )
};