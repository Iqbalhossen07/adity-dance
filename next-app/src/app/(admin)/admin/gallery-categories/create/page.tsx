import CategoryForm from "../CategoryForm";

export default function CreateCategoryPage() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display text-4xl font-semibold tracking-wide text-white">Add Category</h1>
      <CategoryForm />
    </div>
  );
}
