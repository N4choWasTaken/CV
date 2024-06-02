import Header from '../components/Header'
import Footer from '../components/Footer'

interface MainLayoutProps {
    className?: string
    children: JSX.Element
}

export default function MainLayout(props: MainLayoutProps) {
    console.log(props.className)
  return (
    <div className={`h-screen w-screen grid grid-rows-12 ${props.className}`}>
        <div className="row-span-1">
            <Header />
        </div>
        <div className="row-span-10">
            {props.children}
        </div>
        <div className="row-span-1">
            <Footer />
        </div>
    </div>
  )
}
