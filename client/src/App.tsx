import { Button } from './components/Button';
import PlusIcon from './Icons/PlusIcon';
import ShareIcon from './Icons/ShareIcon';
import Card from './components/Card';
import { CreateContentModal } from './components/CreateContentModal';
import { useState } from 'react';
// import {Route, Routes} from 'react-router-dom'
// import { Home } from './pages/Home';

const App = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div className="p-4">
      <CreateContentModal
        open={modalOpen}
        onClose={() => {
          setModalOpen();
        }}
      />
      <div className="flex justify-end gap-4">
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          variant="primary"
          text="Add content"
          startIcon={<PlusIcon />}
        />
        <Button
          onClick={() => {
            setModalOpen(true);
          }}
          variant="secondary"
          text="Share Brain"
          startIcon={<ShareIcon />}
        />
      </div>

      <div className="flex gap-4 p-4">
        <Card
          type="twitter"
          link="https://x.com/yashxp1/status/1903506015301288312"
          title="yashxp1"
        />

        <Card
          type="youtube"
          link="https://youtu.be/3fFF_yQ0nx8?si=d1munf3wGj7Vqz0s"
          title="Youtube video"
        />
      </div>
      {/* <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes> */}
    </div>
  );
};

export default App;
