import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z.string().min(3).max(50),
  ammount: z
    .number({ invalid_type_error: "Ammount is required!" })
    .min(0.01)
    .max(100000),
  category: z.enum(categories),
});

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

type ExpenseFormData = z.infer<typeof schema>;

export const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        ></input>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="ammount" className="form-label">
          Ammount
        </label>
        <input
          {...register("ammount", { valueAsNumber: true })}
          id="ammount"
          type="number"
          className="form-control"
        ></input>
        {errors.ammount && (
          <p className="text-danger">{errors.ammount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button disabled={!isValid} className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
