'use client';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Med - CME</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333', 
    color: '#fff', 
    padding: '10px 0',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    color: 'white',
  },
};

export { Header };
