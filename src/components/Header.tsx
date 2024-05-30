export default function Header() {
    return (
        <div className="w-full h-full border-b border-base flex justify-between items-center">
            <h1 className="text-5xl font-extrabold text-center ml-8">Thierry Pfister</h1>
            <div className="flex justify-around items-center gap-8 mr-8">
                <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
                <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
                <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
                <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
            </div>    
        </div>
    )
}
