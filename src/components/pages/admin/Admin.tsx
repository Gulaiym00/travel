"use client";
import scss from "./admin.module.scss";
import { useForm } from "react-hook-form";
import { useCreateProduct } from "@/hooks/admin/useCreateProduct";
import { Products } from "@/hooks/type/type";
import AdminCard from "@/components/ui/adminCard/AdminCard";
import { useUpdateProduct } from "@/hooks/admin/useUpdateProduct";
import { useRef, useState } from "react";
import {
  getMutationErrorMessage,
  getSectionTitle,
  getSubmitLabel,
  mapProductToFormValues,
  resolveEditingId,
  resolveSubmitAction,
  scrollToAdminForm,
} from "@/utils/admin";

const Admin = () => {
  const [editingProduct, setEditingProduct] = useState<Products | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const editingIdRef = useRef<number | null>(null);
  const { register, reset, handleSubmit } = useForm<Products>();
  const {
    mutate: createProduct,
    isPending: isCreatePending,
  } = useCreateProduct();
  const { mutate: updateProduct, isPending: isUpdatePending } =
    useUpdateProduct();

  const isEditing = Boolean(editingProduct);
  const isPending = isCreatePending || isUpdatePending;

  const resetAfterSubmit = () => {
    editingIdRef.current = null;
    reset();
    setEditingProduct(null);
    setFormError(null);
  };

  const handleData = (data: Products) => {
    const editingId = resolveEditingId(data, editingIdRef.current);
    const action = resolveSubmitAction(data, editingId);
    const options = {
      onSuccess: resetAfterSubmit,
      onError: (error: unknown) =>
        setFormError(getMutationErrorMessage(error)),
    };

    if (action.mode === "update") {
      updateProduct(
        { id: action.id, newProduct: action.payload },
        options,
      );
      return;
    }

    createProduct(action.payload, options);
  };

  const handleEdit = (item: Products) => {
    editingIdRef.current = item._id;
    setEditingProduct(item);
    setFormError(null);
    reset(mapProductToFormValues(item));
    scrollToAdminForm();
  };

  return (
    <div className={scss.admin}>
      <div className="container">
        <section id="admin-tour-form" className={scss.addSection}>
          <h1 className={scss.sectionTitle}>{getSectionTitle(isEditing)}</h1>
          {formError && <p className={scss.error}>{formError}</p>}
          <form onSubmit={handleSubmit(handleData)} className={scss.form}>
            <input type="hidden" {...register("_id", { valueAsNumber: true })} />
            <div className={scss.field}>
              <label>Название тура</label>
              <input {...register("title")} name="title" type="text" />
            </div>
            <div className={scss.field}>
              <label htmlFor="description">Описание</label>
              <textarea
                {...register("description")}
                name="description"
                rows={3}
              />
            </div>
            <div className={scss.field}>
              <label>Виды туров</label>
              <input {...register("types")} name="types" type="text" />
            </div>
            <div className={scss.row}>
              <div className={scss.field}>
                <label>Картинка</label>
                <input {...register("image")} name="image" type="text" />
              </div>
              <div className={scss.field}>
                <label>Подробнее о туре (название)</label>
                <input {...register("link")} name="link" type="text" />
              </div>
            </div>
            <div className={scss.row}>
              <div className={scss.field}>
                <label>Цена тура</label>
                <input {...register("price")} name="price" type="text" />
              </div>
              <div className={scss.field}>
                <label>Подробнее о туре (описание)</label>
                <textarea {...register("details")} name="details" rows={3} />
              </div>
            </div>

            <div className={scss.row}>
              <div className={scss.field}>
                <label>Продолжительность тура</label>
                <input {...register("duration")} name="duration" type="text" />
              </div>
              <div className={scss.field}>
                <label>Количество человек</label>
                <input {...register("people")} name="people" type="text" />
              </div>
            </div>
            <button
              type="submit"
              className={scss.submitBtn}
              disabled={isPending}
            >
              {getSubmitLabel(isEditing, isPending)}
            </button>
          </form>
        </section>

        <section className={scss.toursSection}>
          <h2 className={scss.sectionTitle}>Добавленные туры</h2>
          <AdminCard onEdit={handleEdit} />
        </section>
      </div>
    </div>
  );
};

export default Admin;
