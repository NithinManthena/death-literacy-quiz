function PrimaryButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: '#FCC822', color: 'white', padding: '10px', borderRadius: '5px' }}>
      {label}
    </button>
  );
}

export default PrimaryButton;
