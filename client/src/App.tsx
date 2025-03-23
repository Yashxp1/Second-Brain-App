import { Button } from './components/Button';
import PlusIcon from './Icons/PlusIcon';
import ShareIcon from './Icons/ShareIcon';
import Card from './components/Card';

const App = () => {
  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon />} />
      <Button
        variant="secondary"
        text="Share Brain"
        startIcon={<ShareIcon />}
      />

      <div className="flex">
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
