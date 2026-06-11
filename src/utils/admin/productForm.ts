import { Product, Products } from "@/hooks/type/type";

export type ProductSubmitAction =
  | { mode: "create"; payload: Product }
  | { mode: "update"; id: number; payload: Product };

export const mapProductToFormValues = (product: Products): Products => ({
  title: product.title,
  description: product.description,
  image: product.image,
  price: product.price,
  duration: product.duration,
  people: product.people,
  details: product.details,
  types: product.types,
  link: product.link,
  _id: product._id,
  createdAt: product.createdAt,
  updatedAt: product.updatedAt,
});

export const mapFormToProductPayload = (data: Products): Product => ({
  title: data.title,
  description: data.description,
  types: data.types,
  image: data.image,
  link: data.link,
  price: data.price,
  details: data.details,
  duration: data.duration,
  people: data.people,
});

export const resolveEditingId = (
  data: Products,
  fallbackId: number | null,
): number | null => {
  if (typeof data._id === "number" && !Number.isNaN(data._id)) {
    return data._id;
  }

  return fallbackId;
};

export const resolveSubmitAction = (
  data: Products,
  editingId: number | null,
): ProductSubmitAction => {
  const payload = mapFormToProductPayload(data);

  if (editingId != null) {
    return { mode: "update", id: editingId, payload };
  }

  return { mode: "create", payload };
};

export const getSectionTitle = (isEditing: boolean) =>
  isEditing ? "Редактировать тур" : "Добавить тур";

export const getSubmitLabel = (isEditing: boolean, isPending: boolean) => {
  if (isPending) return ".....";

  return isEditing ? "Сохранить" : "Добавить";
};

export const scrollToAdminForm = () => {
  document.getElementById("admin-tour-form")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

export const getMutationErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;

  return "Не удалось сохранить тур";
};
