import Header from '../components/Header'
import Footer from '../components/Footer'

interface MainLayoutProps {
    children: JSX.Element
    }

export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className="main-layout">
      <Header />
      <div className="main-layout__content">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
