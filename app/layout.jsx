import "./global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";



export const metadata= {
    title: "My Portfolio",
    description: 'portfolio' 
  }

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <main>
              <div>
                <Navbar />
              </div>
              {children}
              <Footer />
             
            </main>
        </body>
       
    </html>
  
  )
}

export default RootLayout
