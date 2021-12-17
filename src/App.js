import Header from './components/Header';
import { FeedbackData } from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App() {
  const feedback = FeedbackData;
  return (
    <>
      <Header />
      <FeedbackList feedback={feedback} />
    </>
  );
}

export default App;
