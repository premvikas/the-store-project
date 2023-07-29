import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Users from './components/Users';
import CreateUser from './components/CreateUser';

const Home = () => {

    return(
        <BrowserRouter>
            <div>
            <h2 className="mt-10" style={{textAlign:"center", marginTop:"3%"}}>The Store Project</h2>
                <Routes>
                    <Route path="/" element={<Users/>}  />
                    <Route path="/create" element={<CreateUser/>} />
                </Routes>
      </div>
    </BrowserRouter>
    )
}

export default Home;