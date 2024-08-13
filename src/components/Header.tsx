import { images } from "@/data/images";

export const Header = () => {
    return (
        <header className="">
            <div className="max-w-4xl px-5 my-10 mx-auto
                md:px-5
                lg:px-0">
                <img src={images.powered} className="w-36" />
            </div>
        </header>
    );
}