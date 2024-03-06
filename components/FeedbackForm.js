import { useForm } from "react-hook-form";

export default function FeedbackForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset(); // Reset form fields after successful submission
        alert("Feedback submitted successfully");
      } else {
        alert("Failed to submit feedback");
      }
    } catch (error) {
      console.error("Failed to submit feedback", error);
      alert("Failed to submit feedback");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="who"
          className="block text-sm font-medium text-gray-700"
        >
          Who is this feedback for?
        </label>
        <input
          type="text"
          {...register("who")}
          id="who"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="notes"
          className="block text-sm font-medium text-gray-700"
        >
          My private notes
        </label>
        <textarea
          {...register("notes")}
          id="notes"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label
          htmlFor="context"
          className="block text-sm font-medium text-gray-700"
        >
          Any context I might need for later (links, screenshots, etc)
        </label>
        <input
          type="text"
          {...register("context")}
          id="context"
          placeholder="Use commas to separate values"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
}
