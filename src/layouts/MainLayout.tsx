import Header from '../components/Header'
import Footer from '../components/Footer'

interface MainLayoutProps {
    children: JSX.Element
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className="h-screen w-screen grid grid-rows-12">
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
