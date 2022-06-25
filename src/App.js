import './App.css'

const Navbar = () => {
  return <div className='navbar flex flex-row justify-between shadow-md mb-20'>
    <img src={require("./images/logo.webp")} className="logo ml-5" />
    <ul className='links flex items-center'>
      <li className='flex flex-col items-center text-sm'>
        <img className='w-7 h-7' src={require('./images/camera.png')} />
        LIVE
        </li>
      <li className='flex flex-col items-center text-sm'>
      <img className='w-7 h-7' src={require('./images/newspaper.png')} />
        MEMBERSHIPS
        </li>
      <li className='flex flex-col items-center text-sm'>
      <img className='w-7 h-7' src={require('./images/fitness.png')} />
        PLANS</li>
      <li className='flex flex-col items-center text-sm'>
      <img className='w-7 h-7' src={require('./images/list.png')} />
        MORE</li>
    </ul>

    <div className='mr-5 flex items-center'>
    <img className='w-7 h-7 mr-1' src={require('./images/person.png')} />
      Login</div>
  </div>
}

const Content = () => {
  return <div className="container mx-auto">
    <h1 className='text-4xl my-5'>Runner's Workout</h1>
    <div className="flex flex-row rounded-2xl overflow-hidden">
      <div className="first relative h-96 w-80 basis-1/3 transition-all hover:basis-1/2">
        <h2 className="text-white bg-black/50 pb-96 text-lg hover:bg-transparent transition-colors pt-5 pl-5 drop-shadow-lg">STRENGTH
          <img className="arrow absolute right-5 top-5 z-20 h-7 w-7 bg-white rounded-full transition-opacity" src={require("./images/arrow.png")} /></h2>
      </div>
      <div className="second relative slide h-96 w-80 basis-1/3 transition-all hover:basis-1/2 overflow-hidden">
        <h2 className="text-white bg-black/50 pb-96 text-lg hover:bg-transparent transition-colors pt-5 pl-5">MOBILITY
        <img className="arrow absolute right-5 top-5 z-20 h-7 w-7 bg-white rounded-full transition-opacity" src={require("./images/arrow.png")} /></h2>
      </div>
      <div className="third relative slide h-96 w-80 basis-1/3 transition-all hover:basis-1/2 overflow-hidden">
        <h2 className="text-white bg-black/50 pb-96 text-lg hover:bg-transparent transition-colors pt-5 pl-5">DRILLS
        <img className="arrow absolute right-5 top-5 z-20 h-7 w-7 bg-white rounded-full transition-opacity" src={require("./images/arrow.png")} /></h2>
      </div>
    </div>
  </div>
}

const App = () => {
  return <div>
    <Navbar />
    <Content />
  </div>
}

export default App