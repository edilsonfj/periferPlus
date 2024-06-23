import { Header, Wrapper, Footer, Title } from "@/components";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from 'lucide-react';

export function Product() {

    const mobile = 'w-screen h-screen flex flex-col items-center';
    const tablet = 'tablet:';
    const laptop = 'laptop:';
    const desktop = 'desktop:';
    const scale = 'scale:';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${desktop} ${scale}`}>
            <Header>
                <Button>
                    <ChevronLeft color="#1F2937" size={24} />
                </Button>
                <Title>
                    Razer Orochi
                </Title>
            </Header>
            <Wrapper>
                Contetent
            </Wrapper>
            <Footer />
        </div>
    )
};