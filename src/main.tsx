// // import React, { useState } from 'react';
// import { createRoot } from 'react-dom/client'
// import TopSection from './components/sections/TopSection';
// import UpperMiddleSection from './components/sections/UpperMiddleSection';
// import LowerMiddleSection from './components/sections/LowerMiddleSection';
// import BottomSection from './components/sections/BottomSection';

// // const [currentView, setCurrentView] = useState<'view1' | 'view2'>('view1');

// createRoot(document.getElementById('root')!).render(
//   <div style={{ display: 'flex', flexDirection: 'column', height: '98vh' }}>
//        <TopSection />
//        <UpperMiddleSection />
//        {/* <LowerMiddleSection currentView={currentView} /> */}
//        {/* <BottomSection setCurrentView={setCurrentView} /> */}
//   </div>,
// );

import { createRoot } from 'react-dom/client';
import TopSection from './components/sections/TopSection';
import UpperMiddleSection from './components/sections/UpperMiddleSection';
import BottomSection from './components/sections/BottomSection';
import React, { useState } from 'react';
import LowerMiddleSection from './components/sections/LowerMiddleSection';
import SearchDialog from './components/subsection/SearchDialog';
import SakigaiDialog from './components/subsection/SakigaiDialog';
import Menu from './components/sections/Menu';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'view1' | 'view2'>('view2');
  const [openF1PopUP, setOpenF1PopUP] = React.useState(false);
  const [openF7PopUP, setOpenF7PopUP] = React.useState(false);
  const [showView, setShowView] = React.useState(false);

  const handleF1Open = () => {
    setOpenF1PopUP(true);
  };

  const handleF1Close = () => {
    setOpenF1PopUP(false);
    setShowView(true);
  };

  const handleF7Open = () => {
    setOpenF7PopUP(true);
  };

  const handleF7Close = () => {
    setOpenF7PopUP(false);
  };

  const handleF2Clecked = () => {
    setShowView(false);
    setCurrentView('view2');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '98vh', paddingTop: '65px' }}>
      <Menu />
      <TopSection showView={showView} />
      <UpperMiddleSection showView={showView} />
      <LowerMiddleSection currentView={currentView} showView={showView} />
      <BottomSection setCurrentView={setCurrentView} onF1Click={handleF1Open} onF2Click={handleF2Clecked} onF7Click={handleF7Open} />
      <SearchDialog open={openF1PopUP} onClose={handleF1Close} />
      <SakigaiDialog open={openF7PopUP} onClose={handleF7Close} />
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<App />);