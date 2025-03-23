import { Button } from './components/Button';
import PlusIcon from './Icons/PlusIcon';
import ShareIcon from './Icons/ShareIcon';
import Card from './components/Card';
import {CreateContentModal }from './components/CreateContentModal';

const App = () => {
  return (
    <div className="p-4">
      <CreateContentModal open={true}/>
      <div className="flex justify-end gap-4">
        <Button variant="primary" text="Add content" startIcon={<PlusIcon />} />
        <Button
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
    </div>
  );
};

export default App;
