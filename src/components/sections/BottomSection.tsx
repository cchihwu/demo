import React from 'react';

interface BottomSectionProps {
  setCurrentView: React.Dispatch<React.SetStateAction<'view1' | 'view2'>>;
  onF1Click: () => void;
  onF2Click: () => void;
  onF7Click: () => void;
}

const BottomSection: React.FC<BottomSectionProps> = ({ setCurrentView, onF1Click, onF2Click, onF7Click }) => {
  const buttons = [
    { label: 'F1\n檢索', onClick: onF1Click },
    { label: 'F2\n全クリア', onClick: onF2Click },
    { label: 'F3\nマスタ検索', onClick: () => alert('Button 3 clicked') },
    { label: 'F4\n明細詳細', onClick: () => alert('Button 4 clicked') },
    { label: 'F5\n明細入力', onClick: () => alert('Button 5 clicked') },
    { label: 'F6\n特記情報表示', onClick: () => setCurrentView('view1') },
    { label: 'F7\n前買表示', onClick: onF7Click },
    { label: 'F8\n別納品先入力', onClick: () => alert('Button 8 clicked') },
    { label: 'F9\n別伝入力', onClick: () => alert('Button 9 clicked') },
    { label: 'F10\n明細削除', onClick: () => alert('Button 10 clicked') },
    { label: 'F11\n全削除', onClick: () => alert('Button 11 clicked') },
    { label: 'F12\n登録', onClick: () => alert('Button 12 clicked') },
  ];

  return (
    <div style={{ backgroundColor: '#e0e0e0', flex: 1, display: 'flex', justifyContent: 'space-around', padding: '10px' }}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          style={{
            padding: '3px',
            fontSize: '16px',
            height: '60px',
            width: '130px',
            margin: '0 3px',
            whiteSpace: 'pre-wrap',
            textAlign: 'center',
            lineHeight: '1.2',
          }}
        >
          {`${button.label}`}
        </button>
      ))}
    </div>
  );
};

export default BottomSection;