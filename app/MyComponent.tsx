import modalManager from "./modalManager";
import MyDialog from "./MyDialog";

export default function MyComponent() {
  const handleResolveClick = async () => {
    const result = await modalManager.open((resolve, reject) => (
      <MyDialog onClose={() => resolve(123)} />
    ));
    console.log(result);
  };

  const handleRejectClick = async () => {
    const result = await modalManager.open((resolve, reject) => (
      <MyDialog onClose={() => reject(123)} />
    ));
    console.log(result);
  };

  return (
    <div>
      <button type="button" onClick={handleResolveClick}>
        Resolve
      </button>
      <button type="button" onClick={handleRejectClick}>
        Reject
      </button>
    </div>
  );
}
