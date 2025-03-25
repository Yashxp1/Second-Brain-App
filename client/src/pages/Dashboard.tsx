import { Button } from '../components/Button';
import PlusIcon from '../Icons/PlusIcon';
import ShareIcon from '../Icons/ShareIcon';
import Card from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const content = useContent();
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
            // onClick={() => {
            //   axios.post(`${BACKEND_URL}/api/v1/share/link/share/:hash`)
            // }}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4 p-4">
          {content.map(({ type, title, link }) => {
            return <Card type={type} link={link} title={title} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
