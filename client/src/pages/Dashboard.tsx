import { Button } from '../components/Button';
import PlusIcon from '../Icons/PlusIcon';
import ShareIcon from '../Icons/ShareIcon';
import Card from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';


const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="">
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
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
          {/* <Card
            type="twitter"
            link="https://x.com/yashxp1/status/1903506015301288312"
            title="yashxp1"
          />

          <Card
            type="youtube"
            link="https://youtu.be/3fFF_yQ0nx8?si=d1munf3wGj7Vqz0s"
            title="Youtube video"
          /> */}
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
