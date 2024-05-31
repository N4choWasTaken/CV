import linkedIn from '../assets/LinkedIn_icon.svg';
import github from '../assets/Github_icon.svg';
import x from '../assets/X_icon.svg';
import stackOverflow from '../assets/StackOverflow_icon.png';

export default function Footer() {
    return (
        <div className="w-full h-full bg-none">
            <div className="flex justify-between items-center">
                <div className="text-lg font-light ml-8">
                    © Thierry 2024
                </div>
                <div className="flex flex-row justify-around w-1/4">
                    <a href="https:www.linkedin.com/in/thierry-ndungu-5b7b3b1b3/" target="_blank" rel="noreferrer">
                        <img src={linkedIn} alt="LinkedIn" className="w-[55px] h-[55px]" />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={github} alt="Github" className="w-[55px] h-[55px]" />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={x} alt="X / Twitter" className="w-[55px] h-[55px]" />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={stackOverflow} alt="Stack Overflow" className="w-[55px] h-[55px]" />
                    </a>
                </div>
            </div>
        </div>
    )
}
