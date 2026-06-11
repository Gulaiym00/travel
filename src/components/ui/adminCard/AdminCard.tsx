"use client";
import scss from "./adminCard.module.scss";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useGetProduct } from "@/hooks/admin/useGetProduct";
import { useDeleteProduct } from "@/hooks/admin/useDeleteProduct";
import { Products } from "@/hooks/type/type";

interface AdminCardProps {
  onEdit: (item: Products) => void;
}

const AdminCard = ({ onEdit }: AdminCardProps) => {
  const { data } = useGetProduct();
  const { mutate: deleteProduct, isPending } = useDeleteProduct();

  return (
    <div className={scss.toursList}>
      {data?.map((item) => (
        <div key={item._id} className={scss.tourCard}>
          <img src={item.image} alt={item.title} className={scss.tourImage} />

          <div className={scss.tourBody}>
            <h3 className={scss.tourTitle}>{item.title}</h3>

            <p className={scss.tourDescription}>{item.description}</p>

            <div className={scss.tourFooter}>
              <span className={scss.tourPrice}>{item.price} сом</span>

              <div className={scss.tourActions}>
                <button
                  onClick={() => onEdit(item)}
                  className={scss.actionBtn}
                  type="button"
                >
                  <FiEdit2 />
                </button>

                <button
                  className={scss.actionBtn}
                  onClick={() => deleteProduct(item._id)}
                  type="button"
                  disabled={isPending}
                >
                  {isPending ? ".." : <FiTrash2 />}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminCard;
