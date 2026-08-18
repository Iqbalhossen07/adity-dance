"use client";

import Swal from "sweetalert2";

export default function DeleteConfirmButton({ 
  id, 
  action 
}: { 
  id: string; 
  action: (formData: FormData) => Promise<void> 
}) {
  const handleDelete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      background: "#140b0e",
      color: "#fff",
      confirmButtonColor: "#cb5660",
      cancelButtonColor: "#3a0c16",
      confirmButtonText: "Yes, delete it!",
      customClass: {
        title: 'text-2xl font-display',
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        const formData = new FormData(form);
        await action(formData);
        
        Swal.fire({
          title: "Deleted!",
          text: "The item has been deleted successfully.",
          icon: "success",
          background: "#140b0e",
          color: "#fff",
          confirmButtonColor: "#cb5660",
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  };

  return (
    <form onSubmit={handleDelete}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="flex items-center gap-1.5 rounded-lg border border-[#cb5660]/30 bg-[#cb5660]/10 px-3 py-1.5 text-xs font-semibold text-[#cb5660] hover:bg-[#cb5660]/20 hover:text-white transition-colors">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        Delete
      </button>
    </form>
  );
}
