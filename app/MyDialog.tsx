export default function MyDialog({ onClose }: { onClose?: () => void }) {
  const handleCloseClick = () => {
    onClose?.();
  };

  return (
    <div>
      My Dialog! -{" "}
      <button type="button" onClick={handleCloseClick}>
        Close
      </button>
    </div>
  );
}
