// components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ current, total }: { current: number, total: number }) => {
  const percentage = ((current) / total) * 100;

  return (
    <div className='flex justify-center'>
      <div style={styles.container} >
        <div style={{
          height: '100%',
          borderRadius: 'inherit',
          // backgroundColor: '#76c7c0',
          backgroundColor: 'pink',
          textAlign: 'right',
          transition: 'width 0.5s ease-in-out', width: `${percentage}%`
        }}>
          <span style={styles.label}>{`${Math.round(percentage)}%`}</span>
        </div>
      </div>
    </div>

  );
};

const styles = {
  container: {
    height: '20px',
    width: '70%',
    backgroundColor: '#e0e0de',
    borderRadius: '50px',
    margin: '20px 0',
  },
  label: {
    padding: '5px',
    color: 'white',
    fontWeight: 'bold',
  },
};

export default ProgressBar;
