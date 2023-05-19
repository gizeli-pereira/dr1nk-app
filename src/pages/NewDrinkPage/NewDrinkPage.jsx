export default function NewDrinkPage() {
  return (
    <div className="add-drink">
      <h2>Add a Drink</h2>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>
        <label htmlFor="ingredients">Ingredients</label>
        <input type="text" id="ingredients"/>
        <button>Add Ingredient</button>
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" ></textarea>
        <label htmlFor="imageUrl">Image URL</label>
        <input type="text" id="imageUrl"/>
        <label htmlFor="location">Location</label>
        <input type="text" id="location"/>
      </form>
    </div>
  );
};