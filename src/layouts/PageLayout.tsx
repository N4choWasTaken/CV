import Header from '../components/Header'
import Footer from '../components/Footer'

interface PageLayoutProps {
    className?: string
    children: JSX.Element
}

export default function PageLayout(props: PageLayoutProps) {
  return (
      <div className={`h-screen w-screen grid grid-cols-12 grid-rows-12 ${props.className}`}>
        <div className="row-span-11 col-span-1">
            <Header />
        </div>
        <div className="row-span-11 col-span-11">
            {props.children}
        </div>
        <div className="row-span-1 col-span-12">
            <Footer />
        </div>
    </div>
  )
}
