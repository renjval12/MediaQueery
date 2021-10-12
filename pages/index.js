import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>MediaQueery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div>
          <h1 className="logo">
            <span className="media-logo">Media</span>
            <span className="red">Q</span>
            <span className="orange">u</span>
            <span className="yellow">e</span>
            <span className="green">e</span>
            <span className="blue">r</span>
            <span className="purple">y</span>
          </h1>
        </div>
        <nav>
          <Link href="/features/main"><a className="red">Feature Films</a></Link>
          <Link href="/shorts/main"><a className="orange">Short Films</a></Link>
          <Link href="/tv/main"><a className="yellow">Television</a></Link>
          <Link href="/audio/main"><a className="green">Animation</a></Link>
          <Link href="/video-games/main"><a className="blue">Video Games</a></Link>
          <Link href="/audio/main"><a className="purple">Audio</a></Link>
        </nav>
      </header>
      <main>

      </main>

      <footer>
      </footer>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        html,
        body {
          font-family: 'Poppins', Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif; 
          }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          
        }
        header {
          display: flex;
          gap: 2%;
          align-items: center;
          text-align: center;
          margin: 0;
          background: black;
        }
        @media (max-width: 700px){
          header {
            flex-direction: column;
            justify-content: center;
          }
        }
        
        .logo{
          font-weight: 600;
          font-size: 1.7rem;
          letter-spacing: 1px;
          padding: 2% 7%;
        }
        .media-logo {
          color: white;
        }
        nav {
          display: flex;
          justify-content: flex-start;
          gap: 2%;
          align-items: center;
          width: 100%;
          padding: 0 2%;
        }
        nav a {
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
        }
        @media (max-width: 700px){
          header div{
            width: 100%;
            background: rgb(255,139,139);
            background: linear-gradient(90deg, rgba(255,139,139,1) 0%, rgba(252,176,137,1) 10%, rgba(255,235,130,1) 20%, rgba(130,255,131,1) 30%, rgba(123,250,255,1) 40%, rgba(138,218,255,1) 50%, rgba(155,200,255,1) 60%, rgba(152,181,255,1) 70%, rgba(214,165,255,1) 80%, rgba(251,163,255,1) 90%, rgba(226,160,255,1) 100%);
          }
          nav {
            justify-content: space-around;
            padding: 3% 2%;
            // background-color: #ffe4ef;
          }
          .media-logo{
            color: black
          }
        }
        @media (max-width: 500px){
          nav {
            flex-direction: column;
          }
        }
        .red {
          color: #CD113B;
        }
        .orange {
          color: #FF7600;
        }
        .yellow {
          color: #f7c800;
        }
        .green {
          color: #008f27;
        }
        .blue {
          color: #2d3bfd;
        }
        .purple {
          color: purple;
        }
      `}</style>
    </div>
  )
}
