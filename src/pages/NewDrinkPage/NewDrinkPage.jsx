import AddDrinkForm from "../../components/AddDrinkForm/AddDrinkForm";

export default function NewDrinkPage({ user }) {
  return (
    <div>
      <AddDrinkForm user={user} />
    </div>
  );
};