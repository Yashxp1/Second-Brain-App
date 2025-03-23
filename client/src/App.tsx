import { Button } from './components/Button';
import PlusIcon from './Icons/PlusIcon';
import ShareIcon from './Icons/ShareIcon';

const App = () => {
  return (
    <div>
      <Button variant="primary" text="Add content" startIcon={<PlusIcon />} />
      <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />} />
    </div>
  );
};

export default App;
